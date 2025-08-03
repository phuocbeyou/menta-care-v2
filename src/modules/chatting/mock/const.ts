import { Expert } from '../components/ListExpert'

interface AudioItem {
  title: string
  time: string
  image: string
  isPlaying: boolean
  divRef: null
  uri: string
}

export interface Document {
  id: string
  title: string
  description: string
  downloadUrl: string
}

export const MOCK_MUSIC_DATA: AudioItem[] = [
  {
    title: 'Nhạc thiền thư giãn',
    time: '12 phút',
    image: '/assets/images/well-being/music.png',
    isPlaying: false,
    divRef: null,
    uri: 'https://www.youtube.com/watch?v=x-hZGvMCe1g'
  },
  {
    title: 'Âm thanh thiên nhiên',
    time: '25 phút',
    image: '/assets/images/well-being/music-moon.png',
    isPlaying: false,
    divRef: null,
    uri: 'https://www.youtube.com/watch?v=lFcSrYw-ARY'
  },
  {
    title: 'Nhạc piano êm dịu',
    time: '18 phút',
    image: '/assets/images/components/ai.png',
    isPlaying: false,
    divRef: null,
    uri: 'https://www.youtube.com/watch?v=jfKfPfyJRdk'
  },
  {
    title: 'Nhạc piano êm dịu',
    time: '18 phút',
    image: '/assets/images/components/ai.png',
    isPlaying: false,
    divRef: null,
    uri: 'https://www.youtube.com/watch?v=jfKfPfyJRdk'
  }
]

export const MOCK_PODCAST_DATA: AudioItem[] = [
  {
    title: 'Tâm lý học tích cực',
    time: '35 phút',
    image: '/assets/images/avatar/avatar-1.webp',
    isPlaying: false,
    divRef: null,
    uri: 'https://www.youtube.com/watch?v=fLJBzhcSWTk'
  },
  {
    title: 'Quản lý stress hiệu quả',
    time: '28 phút',
    image: '/assets/images/avatar/avatar-2.webp',
    isPlaying: false,
    divRef: null,
    uri: 'https://www.youtube.com/watch?v=3nwwKbM_vJc'
  },
  {
    title: 'Phát triển bản thân',
    time: '42 phút',
    image: '/assets/images/avatar/avatar-3.webp',
    isPlaying: false,
    divRef: null,
    uri: 'https://www.youtube.com/watch?v=0hcczAtHDV4'
  }
]

export const MOCK_YOGA_DATA: AudioItem[] = [
  {
    title: 'Yoga buổi sáng',
    time: '15 phút',
    image: '/assets/images/components/leaf-tree.svg',
    isPlaying: false,
    divRef: null,
    uri: 'https://www.youtube.com/watch?v=v7AYKMP6rOE'
  },
  {
    title: 'Yoga thư giãn tối',
    time: '20 phút',
    image: '/assets/images/well-being/music.png',
    isPlaying: false,
    divRef: null,
    uri: 'https://www.youtube.com/watch?v=sTANio_2E0Q'
  },
  {
    title: 'Yoga giãn cơ',
    time: '30 phút',
    image: '/assets/images/well-being/music-moon.png',
    isPlaying: false,
    divRef: null,
    uri: 'https://www.youtube.com/watch?v=g_tea8ZNk5A'
  }
]

export const MOCK_STORY_DATA: AudioItem[] = [
  {
    title: 'Chuyện cổ tích Việt Nam',
    time: '22 phút',
    image: '/assets/images/avatar/avatar-4.webp',
    isPlaying: false,
    divRef: null,
    uri: 'https://www.youtube.com/watch?v=mPZkdNFkNps'
  },
  {
    title: 'Truyện ngủ ngon cho người lớn',
    time: '45 phút',
    image: '/assets/images/avatar/avatar-5.webp',
    isPlaying: false,
    divRef: null,
    uri: 'https://www.youtube.com/watch?v=1ZYbU82GVz4'
  },
  {
    title: 'Câu chuyện thư giãn',
    time: '33 phút',
    image: '/assets/images/components/ai-box.png',
    isPlaying: false,
    divRef: null,
    uri: 'https://www.youtube.com/watch?v=aEInLk7wLFg'
  }
]

export const MOCK_DOCUMENTS: Document[] = [
  {
    id: '1',
    title: 'Ebook Tổng Quan Phát Triển Bộ Não',
    description:
      'Cẩm nang toàn diện về phát triển nhận thức và kỹ năng tư duy cho mọi lứa tuổi. Khám phá những bí mật của bộ não và cách tối ưu hóa khả năng học tập.',
    downloadUrl: '/documents/ebook-phat-trien-bo-nao.pdf'
  },
  {
    id: '2',
    title: 'Hướng Dẫn Quản Lý Cảm Xúc',
    description:
      'Học cách nhận biết, hiểu và điều chỉnh cảm xúc một cách hiệu quả. Bao gồm các kỹ thuật thực hành và bài tập cụ thể.',
    downloadUrl: '/documents/quan-ly-cam-xuc.pdf'
  },
  {
    id: '3',
    title: 'Kỹ Thuật Thư Giãn và Thiền',
    description:
      'Tập hợp các phương pháp thư giãn, thiền định và giảm stress được chứng minh khoa học. Phù hợp cho người mới bắt đầu.',
    downloadUrl: '/documents/ky-thuat-thu-gian.pdf'
  },
  {
    id: '4',
    title: 'Tự Tin Giao Tiếp Trong Công Việc',
    description:
      'Nâng cao kỹ năng giao tiếp, thuyết trình và tương tác hiệu quả trong môi trường làm việc. Bao gồm các tình huống thực tế.',
    downloadUrl: '/documents/tu-tin-giao-tiep.pdf'
  },
  {
    id: '5',
    title: 'Phương Pháp Học Tập Hiệu Quả',
    description:
      'Khám phá các chiến lược học tập được khoa học chứng minh. Tối ưu hóa trí nhớ và khả năng tiếp thu kiến thức mới.',
    downloadUrl: '/documents/phuong-phap-hoc-tap.pdf'
  },
  {
    id: '6',
    title: 'Quản Lý Thời Gian và Năng Suất',
    description: 'Hướng dẫn chi tiết về cách sắp xếp thời gian, đặt ưu tiên và tăng năng suất làm việc hàng ngày.',
    downloadUrl: '/documents/quan-ly-thoi-gian.pdf'
  },
  {
    id: '7',
    title: 'Xây Dựng Thói Quen Tích Cực',
    description: 'Cách tạo lập và duy trì những thói quen tốt, loại bỏ thói quen xấu một cách bền vững và hiệu quả.',
    downloadUrl: '/documents/xay-dung-thoi-quen.pdf'
  },
  {
    id: '8',
    title: 'Kỹ Năng Lãnh Đạo Cơ Bản',
    description: 'Phát triển khả năng lãnh đạo và quản lý nhóm. Học cách truyền cảm hứng và dẫn dắt team hiệu quả.',
    downloadUrl: '/documents/ky-nang-lanh-dao.pdf'
  },
  {
    id: '9',
    title: 'Chăm Sóc Sức Khỏe Tinh Thần',
    description: 'Hướng dẫn toàn diện về cách duy trì và cải thiện sức khỏe tinh thần trong cuộc sống hiện đại.',
    downloadUrl: '/documents/cham-soc-suc-khoe-tinh-than.pdf'
  },
  {
    id: '10',
    title: 'Tư Duy Sáng Tạo và Giải Quyết Vấn Đề',
    description:
      'Phát triển khả năng tư duy sáng tạo và tìm ra giải pháp cho các vấn đề phức tạp trong công việc và cuộc sống.',
    downloadUrl: '/documents/tu-duy-sang-tao.pdf'
  }
]

export const MOCK_EXPERTS: Expert[] = [
  {
    expert_id: '1',
    name: 'Dr. Nguyễn Văn A',
    title: 'Chuyên gia tâm lý',
    description: 'Chuyên gia tâm lý với hơn 10 năm kinh nghiệm trong lĩnh vực tư vấn tâm lý và trị liệu.',
    avatar_url: '/assets/images/avatar/avatar-1.webp',
    rating: '4.8',
    yoe: '10',
    phone_or_email: 'nguyenvana@example.com',
    created_at: '1640995200',
    slots: [],
    certifications: ['Chứng chỉ tâm lý lâm sàng', 'Chứng chỉ trị liệu CBT'],
    language: ['Tiếng Việt', 'English'],
    expert_types: ['psychology', 'counseling'],
    skills: ['Tư vấn tâm lý', 'Trị liệu CBT', 'Quản lý stress'],
    user_id: 'user1',
    contacts: {
      facebook_url: '',
      website: '',
      address: 'Hà Nội',
      instagram_url: '',
      phone: '0123456789',
      linkedin_url: '',
      email: 'nguyenvana@example.com',
      x_url: ''
    },
    experience: [
      {
        description: 'Tư vấn tâm lý tại bệnh viện',
        title: 'Chuyên gia tâm lý',
        year_start: '2014',
        year_end: '2024',
        duration: '10 năm',
        position: 'Senior Psychologist',
        organization: 'Bệnh viện Tâm thần Hà Nội'
      }
    ],
    reference: [],
    education: [
      {
        description: 'Cử nhân tâm lý học',
        address: 'Hà Nội',
        title: 'Cử nhân tâm lý học',
        year_start: '2010',
        year_end: '2014',
        degree: 'Cử nhân',
        institution: 'Đại học Quốc gia Hà Nội',
        year: '2014'
      }
    ]
  },
  {
    expert_id: '2',
    name: 'TS. Trần Thị B',
    title: 'Chuyên gia dinh dưỡng',
    description: 'Tiến sĩ dinh dưỡng với chuyên môn về tư vấn chế độ ăn uống và phát triển sức khỏe.',
    avatar_url: '/assets/images/avatar/avatar-2.webp',
    rating: '4.9',
    yoe: '12',
    phone_or_email: 'tranthib@example.com',
    created_at: '1640995200',
    slots: [],
    certifications: ['Tiến sĩ dinh dưỡng', 'Chứng chỉ tư vấn dinh dưỡng'],
    language: ['Tiếng Việt'],
    expert_types: ['nutrition', 'health'],
    skills: ['Tư vấn dinh dưỡng', 'Lập kế hoạch ăn uống', 'Giảm cân'],
    user_id: 'user2',
    contacts: {
      facebook_url: '',
      website: '',
      address: 'TP.HCM',
      instagram_url: '',
      phone: '0123456790',
      linkedin_url: '',
      email: 'tranthib@example.com',
      x_url: ''
    },
    experience: [
      {
        description: 'Tư vấn dinh dưỡng tại phòng khám',
        title: 'Chuyên gia dinh dưỡng',
        year_start: '2012',
        year_end: '2024',
        duration: '12 năm',
        position: 'Lead Nutritionist',
        organization: 'Phòng khám Dinh dưỡng ABC'
      }
    ],
    reference: [],
    education: [
      {
        description: 'Tiến sĩ dinh dưỡng học',
        address: 'TP.HCM',
        title: 'Tiến sĩ dinh dưỡng học',
        year_start: '2008',
        year_end: '2012',
        degree: 'Tiến sĩ',
        institution: 'Đại học Y Dược TP.HCM',
        year: '2012'
      }
    ]
  },
  {
    expert_id: '3',
    name: 'ThS. Lê Văn C',
    title: 'Life Coach',
    description: 'Chuyên gia coaching với kinh nghiệm giúp khách hàng phát triển bản thân và đạt được mục tiêu.',
    avatar_url: '/assets/images/avatar/avatar-3.webp',
    rating: '4.7',
    yoe: '8',
    phone_or_email: 'levanc@example.com',
    created_at: '1640995200',
    slots: [],
    certifications: ['ICF Certified Coach', 'NLP Practitioner'],
    language: ['Tiếng Việt', 'English'],
    expert_types: ['coaching', 'personal_development'],
    skills: ['Life Coaching', 'Career Coaching', 'Goal Setting'],
    user_id: 'user3',
    contacts: {
      facebook_url: '',
      website: '',
      address: 'Đà Nẵng',
      instagram_url: '',
      phone: '0123456791',
      linkedin_url: '',
      email: 'levanc@example.com',
      x_url: ''
    },
    experience: [
      {
        description: 'Coaching cá nhân và doanh nghiệp',
        title: 'Life Coach',
        year_start: '2016',
        year_end: '2024',
        duration: '8 năm',
        position: 'Senior Coach',
        organization: 'Coaching Center Vietnam'
      }
    ],
    reference: [],
    education: [
      {
        description: 'Thạc sĩ tâm lý học',
        address: 'Đà Nẵng',
        title: 'Thạc sĩ tâm lý học',
        year_start: '2014',
        year_end: '2016',
        degree: 'Thạc sĩ',
        institution: 'Đại học Đà Nẵng',
        year: '2016'
      }
    ]
  },
  {
    expert_id: '4',
    name: 'Bs. Phạm Thị D',
    title: 'Chuyên gia sức khỏe tâm thần',
    description: 'Bác sĩ chuyên khoa tâm thần với nhiều năm kinh nghiệm điều trị các vấn đề sức khỏe tâm thần.',
    avatar_url: '/assets/images/avatar/avatar-4.webp',
    rating: '4.9',
    yoe: '15',
    phone_or_email: 'phamthid@example.com',
    created_at: '1640995200',
    slots: [],
    certifications: ['Bác sĩ chuyên khoa I', 'Chứng chỉ điều trị tâm thần'],
    language: ['Tiếng Việt', 'English', 'Français'],
    expert_types: ['psychiatry', 'mental_health'],
    skills: ['Điều trị tâm thần', 'Tư vấn thuốc', 'Trị liệu tâm lý'],
    user_id: 'user4',
    contacts: {
      facebook_url: '',
      website: '',
      address: 'Hà Nội',
      instagram_url: '',
      phone: '0123456792',
      linkedin_url: '',
      email: 'phamthid@example.com',
      x_url: ''
    },
    experience: [
      {
        description: 'Điều trị tâm thần tại bệnh viện',
        title: 'Bác sĩ tâm thần',
        year_start: '2009',
        year_end: '2024',
        duration: '15 năm',
        position: 'Head of Psychiatry',
        organization: 'Bệnh viện Tâm thần Trung ương'
      }
    ],
    reference: [],
    education: [
      {
        description: 'Bác sĩ đa khoa',
        address: 'Hà Nội',
        title: 'Bác sĩ đa khoa',
        year_start: '2003',
        year_end: '2009',
        degree: 'Bác sĩ',
        institution: 'Đại học Y Hà Nội',
        year: '2009'
      }
    ]
  },
  {
    expert_id: '5',
    name: 'Ths. Hoàng Văn E',
    title: 'Chuyên gia phát triển kỹ năng',
    description: 'Chuyên gia đào tạo và phát triển kỹ năng mềm cho cá nhân và doanh nghiệp.',
    avatar_url: '/assets/images/avatar/avatar-5.webp',
    rating: '4.6',
    yoe: '7',
    phone_or_email: 'hoangvane@example.com',
    created_at: '1640995200',
    slots: [],
    certifications: ['Certified Trainer', 'Leadership Development Certificate'],
    language: ['Tiếng Việt', 'English'],
    expert_types: ['training', 'skill_development'],
    skills: ['Đào tạo kỹ năng', 'Leadership', 'Communication'],
    user_id: 'user5',
    contacts: {
      facebook_url: '',
      website: '',
      address: 'TP.HCM',
      instagram_url: '',
      phone: '0123456793',
      linkedin_url: '',
      email: 'hoangvane@example.com',
      x_url: ''
    },
    experience: [
      {
        description: 'Đào tạo kỹ năng cho doanh nghiệp',
        title: 'Skills Trainer',
        year_start: '2017',
        year_end: '2024',
        duration: '7 năm',
        position: 'Senior Trainer',
        organization: 'Training Solutions Ltd'
      }
    ],
    reference: [],
    education: [
      {
        description: 'Thạc sĩ quản trị kinh doanh',
        address: 'TP.HCM',
        title: 'Thạc sĩ quản trị kinh doanh',
        year_start: '2015',
        year_end: '2017',
        degree: 'Thạc sĩ',
        institution: 'Đại học Kinh tế TP.HCM',
        year: '2017'
      }
    ]
  }
]
