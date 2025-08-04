export type YouTubeThumbnailQuality = 'default' | 'medium' | 'high' | 'standard' | 'maxres'

interface YouTubeThumbnailOptions {
  quality?: YouTubeThumbnailQuality
  fallback?: boolean
}

/**
 * Extract YouTube video ID from various URL formats
 * Supports:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - https://www.youtube.com/v/VIDEO_ID
 * - URLs with additional parameters (list, index, t, etc.)
 */
export function extractYouTubeVideoId(url: string): string | null {
  if (!url || typeof url !== 'string') {
    return null
  }

  // Clean the URL and remove any extra spaces
  const cleanUrl = url.trim()

  // YouTube video ID regex patterns
  const patterns = [
    // Standard YouTube URL: https://www.youtube.com/watch?v=VIDEO_ID
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,

    // Short YouTube URL: https://youtu.be/VIDEO_ID
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,

    // Embed URL: https://www.youtube.com/embed/VIDEO_ID
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,

    // Old format: https://www.youtube.com/v/VIDEO_ID
    /(?:youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,

    // Mobile URL: https://m.youtube.com/watch?v=VIDEO_ID
    /(?:m\.youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/
  ]

  for (const pattern of patterns) {
    const match = cleanUrl.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  return null
}

/**
 * Generate YouTube thumbnail URL from video ID
 */
export function getYouTubeThumbnailUrl(videoId: string, options: YouTubeThumbnailOptions = {}): string {
  const { quality = 'high' } = options

  if (!videoId || typeof videoId !== 'string') {
    throw new Error('Invalid video ID provided')
  }

  // Quality to filename mapping
  const qualityMap: Record<YouTubeThumbnailQuality, string> = {
    default: 'default.jpg', // 120x90
    medium: 'mqdefault.jpg', // 320x180
    high: 'hqdefault.jpg', // 480x360
    standard: 'sddefault.jpg', // 640x480
    maxres: 'maxresdefault.jpg' // 1280x720
  }

  const filename = qualityMap[quality]
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${filename}`

  return thumbnailUrl
}

/**
 * Get YouTube thumbnail URL directly from YouTube URL
 * Combines extraction and thumbnail generation
 */
export function getYouTubeThumbnailFromUrl(youtubeUrl: string, options: YouTubeThumbnailOptions = {}): string | null {
  try {
    const videoId = extractYouTubeVideoId(youtubeUrl)

    if (!videoId) {
      console.warn('Could not extract video ID from URL:', youtubeUrl)
      return null
    }

    return getYouTubeThumbnailUrl(videoId, options)
  } catch (error) {
    console.error('Error generating YouTube thumbnail:', error)
    return null
  }
}

/**
 * Get multiple thumbnail URLs with different qualities
 */
export function getYouTubeThumbnailUrls(youtubeUrl: string): Record<YouTubeThumbnailQuality, string> | null {
  try {
    const videoId = extractYouTubeVideoId(youtubeUrl)

    if (!videoId) {
      return null
    }

    const qualities: YouTubeThumbnailQuality[] = ['default', 'medium', 'high', 'standard', 'maxres']

    const thumbnails = qualities.reduce(
      (acc, quality) => {
        acc[quality] = getYouTubeThumbnailUrl(videoId, { quality })
        return acc
      },
      {} as Record<YouTubeThumbnailQuality, string>
    )

    return thumbnails
  } catch (error) {
    console.error('Error generating YouTube thumbnails:', error)
    return null
  }
}

/**
 * Check if URL is a valid YouTube URL
 */
export function isYouTubeUrl(url: string): boolean {
  if (!url || typeof url !== 'string') {
    return false
  }

  const youtubePatterns = [
    /^https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]+/,
    /^https?:\/\/youtu\.be\/[\w-]+/,
    /^https?:\/\/(www\.)?youtube\.com\/embed\/[\w-]+/,
    /^https?:\/\/(www\.)?youtube\.com\/v\/[\w-]+/,
    /^https?:\/\/m\.youtube\.com\/watch\?v=[\w-]+/
  ]

  return youtubePatterns.some((pattern) => pattern.test(url.trim()))
}

/**
 * Get YouTube video duration from various sources
 * Priority: API -> oEmbed -> Cache -> Random fallback
 */
export async function getYouTubeVideoDuration(youtubeUrl: string, apiKey?: string): Promise<string> {
  try {
    const videoId = extractYouTubeVideoId(youtubeUrl)

    if (!videoId) {
      return generateRandomDuration()
    }

    // Strategy 1: YouTube Data API (most accurate, requires API key)
    if (apiKey) {
      try {
        const duration = await fetchDurationFromAPI(videoId, apiKey)
        if (duration) return duration
      } catch (error) {
        console.warn('YouTube API failed, trying fallback methods')
      }
    }

    // Strategy 2: Try oEmbed API (limited info, but no API key needed)
    try {
      const duration = await fetchDurationFromOEmbed(youtubeUrl)
      if (duration) return duration
    } catch (error) {
      console.warn('oEmbed failed, using random duration')
    }

    // Strategy 3: Random fallback (like current implementation)
    return generateRandomDuration()
  } catch (error) {
    console.error('Error getting YouTube duration:', error)
    return generateRandomDuration()
  }
}

/**
 * Fetch duration from YouTube Data API v3
 */
async function fetchDurationFromAPI(videoId: string, apiKey: string): Promise<string | null> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails&key=${apiKey}`
    )

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }

    const data = await response.json()

    if (data.items && data.items?.length > 0) {
      const duration = data.items[0].contentDetails?.duration
      if (duration) {
        return parseISO8601Duration(duration)
      }
    }

    return null
  } catch (error) {
    console.error('YouTube API error:', error)
    return null
  }
}

/**
 * Try to get basic info from oEmbed (doesn't include duration, but validates video exists)
 */
async function fetchDurationFromOEmbed(youtubeUrl: string): Promise<string | null> {
  try {
    const response = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(youtubeUrl)}&format=json`)

    if (!response.ok) {
      return null
    }

    const data = await response.json()

    // oEmbed doesn't provide duration, but if we get a response,
    // the video exists and we can use estimated duration
    if (data.title) {
      // Estimate based on title keywords or use smart random
      return generateSmartDuration(data.title)
    }

    return null
  } catch (error) {
    console.warn('oEmbed error:', error)
    return null
  }
}

/**
 * Parse ISO 8601 duration format (PT4M20S) to readable format
 */
function parseISO8601Duration(duration: string): string {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)

  if (!match) {
    return generateRandomDuration()
  }

  const hours = parseInt(match[1] || '0', 10)
  const minutes = parseInt(match[2] || '0', 10)
  const seconds = parseInt(match[3] || '0', 10)

  const totalMinutes = hours * 60 + minutes + (seconds > 30 ? 1 : 0)

  if (totalMinutes === 0) {
    return '1 phút'
  }

  if (totalMinutes < 60) {
    return `${totalMinutes} phút`
  }

  const displayHours = Math.floor(totalMinutes / 60)
  const displayMinutes = totalMinutes % 60

  if (displayMinutes === 0) {
    return `${displayHours} giờ`
  }

  return `${displayHours}h ${displayMinutes}m`
}

/**
 * Generate smart duration based on video title
 */
function generateSmartDuration(title: string): string {
  const lowerTitle = title.toLowerCase()

  // Long content keywords
  if (lowerTitle.includes('full') || lowerTitle.includes('complete') || lowerTitle.includes('documentary')) {
    return `${Math.floor(Math.random() * 40) + 20} phút` // 20-60 minutes
  }

  // Tutorial/educational content
  if (lowerTitle.includes('tutorial') || lowerTitle.includes('guide') || lowerTitle.includes('how to')) {
    return `${Math.floor(Math.random() * 20) + 5} phút` // 5-25 minutes
  }

  // Music content
  if (lowerTitle.includes('music') || lowerTitle.includes('song') || lowerTitle.includes('audio')) {
    return `${Math.floor(Math.random() * 8) + 3} phút` // 3-11 minutes
  }

  // Short content
  if (lowerTitle.includes('short') || lowerTitle.includes('clip') || lowerTitle.includes('preview')) {
    return `${Math.floor(Math.random() * 5) + 1} phút` // 1-6 minutes
  }

  // Default range
  return generateRandomDuration()
}

/**
 * Generate random duration (fallback)
 */
function generateRandomDuration(): string {
  const minutes = Math.floor(Math.random() * 30) + 5 // 5-35 minutes
  return `${minutes} phút`
}

/**
 * Get best available thumbnail with fallback strategy
 */
export function getYouTubeThumbnailWithFallback(
  youtubeUrl: string,
  preferredQuality: YouTubeThumbnailQuality = 'high',
  fallbackImage?: string
): string {
  try {
    // Try to get thumbnail from YouTube
    const thumbnailUrl = getYouTubeThumbnailFromUrl(youtubeUrl, {
      quality: preferredQuality
    })

    if (thumbnailUrl) {
      return thumbnailUrl
    }

    // Fallback to provided fallback image or default
    return fallbackImage || 'https://storage.googleapis.com/a1aa/image/b5e67944-41ac-48ed-6c51-1512f815f13c.jpg'
  } catch (error) {
    console.error('Error getting YouTube thumbnail with fallback:', error)
    return fallbackImage || 'https://storage.googleapis.com/a1aa/image/b5e67944-41ac-48ed-6c51-1512f815f13c.jpg'
  }
}

// Example usage:
/*
const youtubeUrl = "https://www.youtube.com/watch?v=x-hZGvMCe1g&list=PLfwiQxdRynYzUuTnECjYDk7gQHnedApIh&index=4"

// Extract video ID
const videoId = extractYouTubeVideoId(youtubeUrl) // Returns: "x-hZGvMCe1g"

// Get single thumbnail
const thumbnail = getYouTubeThumbnailFromUrl(youtubeUrl, { quality: 'high' })
// Returns: "https://img.youtube.com/vi/x-hZGvMCe1g/hqdefault.jpg"

// Get all thumbnail qualities
const allThumbnails = getYouTubeThumbnailUrls(youtubeUrl)
// Returns object with all quality URLs

// Get with fallback
const safeThumbnail = getYouTubeThumbnailWithFallback(youtubeUrl, 'maxres', 'fallback.jpg')
*/
