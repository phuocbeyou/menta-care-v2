import { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Card,
  Button,
  Avatar,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  IconButton,
  Divider,
} from '@mui/material';
import { ExpertTypeRes } from '@src/modules/home/components/expert/ListExpert'
import { callingAPI } from '@src/configs/axios/api'
import { REQUEST_TYPE } from '@src/modules/home/apis/const'

interface ExperienceItem {
  id: string
  startYear: string
  endYear: string
  position: string
  description: string
}

interface EducationItem {
  id: string
  startYear: string
  endYear: string
  degree: string
  description: string
  institution: string
}

interface ReferenceItem {
  id: string
  name: string
  position: string
  company: string
  phone: string
  email: string
}

interface AvailableSlot {
  id: string
  date: string
  timeStart: string
  timeEnd: string
}

interface CertificationItem {
  id: string
  name: string
}

interface SkillItem {
  id: string
  name: string
}

interface LanguageItem {
  id: string
  name: string
}

interface ExpertInfo {
  avatar: string
  name: string
  title: string
  experience: string
  rating: string
  expertTypes: string[]
  description: string
  phoneOrEmail: string
  availableSlots: AvailableSlot[]
  experiences: ExperienceItem[]
  education: EducationItem[]
  certifications: CertificationItem[]
  skills: SkillItem[]
  languages: LanguageItem[]
  contactInfo: {
    email: string
    phone: string
    instagram: string
    twitter: string
    facebook: string
    linkedin: string
    website: string
    address: string
  }
  references: ReferenceItem[]
}

export default function ExpertProfile() {
  const [expertInfo, setExpertInfo] = useState<ExpertInfo>({
    avatar: '',
    name: '',
    title: '',
    experience: '1',
    rating: '5',
    expertTypes: [],
    description: 'Specialized in cognitive behavioral therapy',
    phoneOrEmail: 'jane.smith@example.com',
    availableSlots: [
      {
        id: '1',
        date: '',
        timeStart: '',
        timeEnd: ''
      }
    ],
    experiences: [
      {
        id: '1',
        startYear: '',
        endYear: '',
        position: '',
        description: ''
      }
    ],
    education: [
      {
        id: '1',
        startYear: '',
        endYear: '',
        degree: '',
        description: '',
        institution: ''
      }
    ],
    certifications: [
      {
        id: '1',
        name: 'Licensed Clinical Psychologist'
      }
    ],
    skills: [
      {
        id: '1',
        name: 'CBT'
      },
      {
        id: '2',
        name: 'Trauma Therapy'
      },
      {
        id: '3',
        name: 'Anxiety Treatment'
      }
    ],
    languages: [
      {
        id: '1',
        name: 'English'
      },
      {
        id: '2',
        name: 'Vietnamese'
      }
    ],
    contactInfo: {
      email: 'jane.smith@example.com',
      phone: '+1234567890',
      instagram: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      website: '',
      address: ''
    },
    references: [
      {
        id: '1',
        name: '',
        position: '',
        company: '',
        phone: '',
        email: ''
      }
    ]
  })

  const [isEditing, setIsEditing] = useState(false)


  const [expertType, setExpertType] = useState<ExpertTypeRes['expert_types']>([])

  useEffect(() => {
    const fetchExpertType = async () => {
      try {

        const response = await callingAPI<ExpertTypeRes, object>(REQUEST_TYPE.get_expert_types, {})
        setExpertType(response.expert_types)  
      } catch (error) {
        console.error('Error fetching expert types:', error)
      }
    }
    fetchExpertType()
  }, [])

  const handleInputChange = (field: string, value: any) => {
    setExpertInfo(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleExpertTypeChange = (type: string, checked: boolean) => {
    setExpertInfo(prev => ({
      ...prev,
      expertTypes: checked 
        ? [...prev.expertTypes, type]
        : prev.expertTypes.filter(t => t !== type)
    }))
  }

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setExpertInfo(prev => ({
          ...prev,
          avatar: reader.result as string
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  // Experience handlers
  const addExperience = () => {
    const newId = Date.now().toString()
    setExpertInfo(prev => ({
      ...prev,
      experiences: [...prev.experiences, {
        id: newId,
        startYear: '',
        endYear: '',
        position: '',
        description: ''
      }]
    }))
  }

  const removeExperience = (id: string) => {
    setExpertInfo(prev => ({
      ...prev,
      experiences: prev.experiences.filter(exp => exp.id !== id)
    }))
  }

  const updateExperience = (id: string, field: string, value: string) => {
    setExpertInfo(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }))
  }

  // Education handlers  
  const addEducation = () => {
    const newId = Date.now().toString()
    setExpertInfo(prev => ({
      ...prev,
      education: [...prev.education, {
        id: newId,
        startYear: '',
        endYear: '',
        degree: '',
        description: '',
        institution: ''
      }]
    }))
  }

  const removeEducation = (id: string) => {
    setExpertInfo(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }))
  }

  const updateEducation = (id: string, field: string, value: string) => {
    setExpertInfo(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }))
  }

  // Reference handlers
  const addReference = () => {
    const newId = Date.now().toString()
    setExpertInfo(prev => ({
      ...prev,
      references: [...prev.references, {
        id: newId,
        name: '',
        position: '',
        company: '',
        phone: '',
        email: ''
      }]
    }))
  }

  const removeReference = (id: string) => {
    setExpertInfo(prev => ({
      ...prev,
      references: prev.references.filter(ref => ref.id !== id)
    }))
  }

  const updateReference = (id: string, field: string, value: string) => {
    setExpertInfo(prev => ({
      ...prev,
      references: prev.references.map(ref => 
        ref.id === id ? { ...ref, [field]: value } : ref
      )
    }))
  }

  // Certification handlers
  const addCertification = () => {
    const newId = Date.now().toString()
    setExpertInfo(prev => ({
      ...prev,
      certifications: [...prev.certifications, {
        id: newId,
        name: ''
      }]
    }))
  }

  const removeCertification = (id: string) => {
    setExpertInfo(prev => ({
      ...prev,
      certifications: prev.certifications.filter(cert => cert.id !== id)
    }))
  }

  const updateCertification = (id: string, value: string) => {
    setExpertInfo(prev => ({
      ...prev,
      certifications: prev.certifications.map(cert => 
        cert.id === id ? { ...cert, name: value } : cert
      )
    }))
  }

  // Skill handlers
  const addSkill = () => {
    const newId = Date.now().toString()
    setExpertInfo(prev => ({
      ...prev,
      skills: [...prev.skills, {
        id: newId,
        name: ''
      }]
    }))
  }

  const removeSkill = (id: string) => {
    setExpertInfo(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }))
  }

  const updateSkill = (id: string, value: string) => {
    setExpertInfo(prev => ({
      ...prev,
      skills: prev.skills.map(skill => 
        skill.id === id ? { ...skill, name: value } : skill
      )
    }))
  }

  // Language handlers
  const addLanguage = () => {
    const newId = Date.now().toString()
    setExpertInfo(prev => ({
      ...prev,
      languages: [...prev.languages, {
        id: newId,
        name: ''
      }]
    }))
  }

  const removeLanguage = (id: string) => {
    setExpertInfo(prev => ({
      ...prev,
      languages: prev.languages.filter(lang => lang.id !== id)
    }))
  }

  const updateLanguage = (id: string, value: string) => {
    setExpertInfo(prev => ({
      ...prev,
      languages: prev.languages.map(lang => 
        lang.id === id ? { ...lang, name: value } : lang
      )
    }))
  }

  const handleSave = () => {
    console.log('Saving expert info:', expertInfo)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <div className='p-4 space-y-6'>
      <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'black' }}>
        Hồ sơ chuyên gia
      </Typography>

      <Card sx={{ p: 4, borderRadius: 2 }}>
        {/* Avatar Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 3 }}>
          <Avatar
            src={expertInfo.avatar || undefined}
            sx={{
              width: 120,
              height: 120,
              fontSize: '3rem',
              bgcolor: 'secondary.main'
            }}
          >
            {expertInfo.name
              .split(' ')
              .map((name) => name.charAt(0))
              .join('')}
          </Avatar>

          <Box>
            <Typography variant='h6' sx={{ mb: 1 }}>
              Ảnh đại diện
            </Typography>

            {isEditing && (
              <Button variant='outlined' sx={{
                backgroundColor: 'secondary.main',
              }} component='label' size='small'>
                Chọn ảnh
                <input type='file' hidden accept='image/*' onChange={handleAvatarChange} />
              </Button>
            )}
          </Box>
        </Box>

        {/* Basic Info */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Tên'
              value={expertInfo.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              disabled={!isEditing}
              variant={isEditing ? 'outlined' : 'filled'}
              sx={{ 
                '& .MuiOutlinedInput-root': { 
                  borderColor: isEditing ? 'success.main' : 'default' 
                }
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Chức danh'
              value={expertInfo.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              disabled={!isEditing}
              variant={isEditing ? 'outlined' : 'filled'}
              placeholder='Nhập chức danh'
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Kinh nghiệm (năm)'
              value={expertInfo.experience}
              onChange={(e) => handleInputChange('experience', e.target.value)}
              disabled={!isEditing}
              variant={isEditing ? 'outlined' : 'filled'}
              type='number'
            />
          </Grid>

          {/* <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label='Đánh giá (1-5)'
              value={expertInfo.rating}
              onChange={(e) => handleInputChange('rating', e.target.value)}
              disabled={!isEditing}
              variant={isEditing ? 'outlined' : 'filled'}
              type='number'
              inputProps={{ min: 1, max: 5 }}
            />
          </Grid> */}
        </Grid>

        {/* Expert Types */}
        <Box sx={{ mb: 4 }}>
          <Typography variant='h6' sx={{ mb: 2 }}>
            Loại chuyên gia
          </Typography>
          <Grid container spacing={2}>
            {expertType.map((type) => (
              <Grid item xs={12} sm={6} md={4} key={type.expert_type_id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={expertInfo.expertTypes.includes(type.expert_type_id)}
                      onChange={(e) => handleExpertTypeChange(type.expert_type_id, e.target.checked)}
                      disabled={!isEditing}
                    />
                  }
                  label={type.name}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Description and Contact */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Mô tả'
              value={expertInfo.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              disabled={!isEditing}
              variant={isEditing ? 'outlined' : 'filled'}
              multiline
              rows={4}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Số điện thoại hoặc Email'
              value={expertInfo.phoneOrEmail}
              onChange={(e) => handleInputChange('phoneOrEmail', e.target.value)}
              disabled={!isEditing}
              variant={isEditing ? 'outlined' : 'filled'}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Experience */}
        <Box sx={{ mb: 4 }}>
          <Typography variant='h6' sx={{ mb: 3, fontWeight: 'bold' }}>
            Kinh nghiệm
          </Typography>
          {expertInfo.experiences.map((exp) => (
            <Card key={exp.id} sx={{ p: 3, mb: 2, bgcolor: 'grey.50', border: '1px solid #e0e0e0' }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    label='Năm bắt đầu'
                    value={exp.startYear}
                    onChange={(e) => updateExperience(exp.id, 'startYear', e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                    placeholder='0'
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    label='Năm kết thúc'
                    value={exp.endYear}
                    onChange={(e) => updateExperience(exp.id, 'endYear', e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                    placeholder='0'
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <TextField
                    fullWidth
                    label='Chức danh'
                    value={exp.position}
                    onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                  />
                </Grid>
                <Grid item xs={12} md={1}>
                  {isEditing && (
                    <IconButton
                      onClick={() => removeExperience(exp.id)}
                      sx={{ 
                        bgcolor: 'error.main', 
                        color: 'white',
                        '&:hover': { bgcolor: 'error.dark' },
                        width: 40,
                        height: 40,
                      }}
                      
                    >
                      X
                    </IconButton>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Mô tả'
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                    multiline
                    rows={3}
                  />
                </Grid>
              </Grid>
            </Card>
          ))}
          {isEditing && (
            <Button
              startIcon={<span>+</span>}
              onClick={addExperience}
              sx={{ color: 'text.secondary' }}
            >
              Thêm kinh nghiệm
            </Button>
          )}
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Education */}
        <Box sx={{ mb: 4 }}>
          <Typography variant='h6' sx={{ mb: 3, fontWeight: 'bold' }}>
            Học vấn
          </Typography>
          {expertInfo.education.map((edu) => (
            <Card key={edu.id} sx={{ p: 3, mb: 2, bgcolor: 'grey.50', border: '1px solid #e0e0e0' }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    label='Năm bắt đầu'
                    value={edu.startYear}
                    onChange={(e) => updateEducation(edu.id, 'startYear', e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                    placeholder='0'
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    label='Năm kết thúc'
                    value={edu.endYear}
                    onChange={(e) => updateEducation(edu.id, 'endYear', e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                    placeholder='0'
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <TextField
                    fullWidth
                    label='Bằng cấp/Chuyên ngành'
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                  />
                </Grid>
                <Grid item xs={12} md={1}>
                  {isEditing && (
                    <IconButton
                      onClick={() => removeEducation(edu.id)}
                      sx={{ 
                        bgcolor: 'error.main', 
                        color: 'white',
                        '&:hover': { bgcolor: 'error.dark' },
                        width: 40,
                        height: 40,
                      }}
                    >
                      X
                    </IconButton>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Mô tả'
                    value={edu.description}
                    onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                    multiline
                    rows={3}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Địa chỉ'
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                  />
                </Grid>
              </Grid>
            </Card>
          ))}
          {isEditing && (
            <Button
              startIcon={<span>+</span>}
              onClick={addEducation}
              sx={{ color: 'text.secondary' }}
            >
              Thêm học vấn
            </Button>
          )}
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Certifications */}
        <Box sx={{ mb: 4 }}>
          <Typography variant='h6' sx={{ mb: 3, fontWeight: 'bold' }}>
            Chứng chỉ
          </Typography>
          {expertInfo.certifications.map((cert) => (
            <Card key={cert.id} sx={{ p: 3, mb: 2, bgcolor: 'grey.50', border: '1px solid #e0e0e0' }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={10}>
                  <TextField
                    fullWidth
                    label='Tên chứng chỉ'
                    value={cert.name}
                    onChange={(e) => updateCertification(cert.id, e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  {isEditing && (
                    <IconButton
                      onClick={() => removeCertification(cert.id)}
                      sx={{ 
                        bgcolor: 'error.main', 
                        color: 'white',
                        '&:hover': { bgcolor: 'error.dark' },
                        width: 40,
                        height: 40,
                      }}
                    >
                      X
                    </IconButton>
                  )}
                </Grid>
              </Grid>
            </Card> 
          ))}
          {isEditing && (
            <Button
              startIcon={<span>+</span>}
              onClick={addCertification}
              sx={{ color: 'text.secondary' }}
            >
              Thêm chứng chỉ
            </Button>
          )}
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Skills */}
        <Box sx={{ mb: 4 }}>
          <Typography variant='h6' sx={{ mb: 3, fontWeight: 'bold' }}>
            Kỹ năng
          </Typography>
          {expertInfo.skills.map((skill) => (
            <Card key={skill.id} sx={{ p: 3, mb: 2, bgcolor: 'grey.50', border: '1px solid #e0e0e0' }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={10}>
                  <TextField
                    fullWidth
                    label='Tên kỹ năng'
                    value={skill.name}
                    onChange={(e) => updateSkill(skill.id, e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  {isEditing && (
                    <IconButton
                      onClick={() => removeSkill(skill.id)}
                      sx={{ 
                        bgcolor: 'error.main', 
                        color: 'white',
                        '&:hover': { bgcolor: 'error.dark' },
                        width: 40,
                        height: 40,
                      }}
                    >
                      X
                    </IconButton>
                  )}
                </Grid>
              </Grid>
            </Card>
          ))}
          {isEditing && (
            <Button
              startIcon={<span>+</span>}
              onClick={addSkill}
              sx={{ color: 'text.secondary' }}
            >
              Thêm kỹ năng
            </Button>
          )}
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Languages */}
        <Box sx={{ mb: 4 }}>
          <Typography variant='h6' sx={{ mb: 3, fontWeight: 'bold' }}>
            Ngôn ngữ
          </Typography>
          {expertInfo.languages.map((lang) => (
            <Card key={lang.id} sx={{ p: 3, mb: 2, bgcolor: 'grey.50', border: '1px solid #e0e0e0' }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={10}>
                  <TextField
                    fullWidth
                    label='Tên ngôn ngữ'
                    value={lang.name}
                    onChange={(e) => updateLanguage(lang.id, e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  {isEditing && (
                    <IconButton
                      onClick={() => removeLanguage(lang.id)}
                      sx={{ 
                        bgcolor: 'error.main', 
                        color: 'white',
                        '&:hover': { bgcolor: 'error.dark' },
                        width: 40,
                        height: 40,
                      }}
                    >
                      X
                    </IconButton>
                  )}
                </Grid>
              </Grid>
            </Card>
          ))}
          {isEditing && (
            <Button
              startIcon={<span>+</span>}
              onClick={addLanguage}
              sx={{ color: 'text.secondary' }}
            >
              Thêm ngôn ngữ
            </Button>
          )}
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Contact Information */}
        <Box sx={{ mb: 4 }}>
          <Typography variant='h6' sx={{ mb: 3, fontWeight: 'bold' }}>
            Thông tin liên hệ
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Email'
                value={expertInfo.contactInfo.email}
                onChange={(e) => handleInputChange('contactInfo', { ...expertInfo.contactInfo, email: e.target.value })}
                disabled={!isEditing}
                variant={isEditing ? 'outlined' : 'filled'}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Điện thoại'
                value={expertInfo.contactInfo.phone}
                onChange={(e) => handleInputChange('contactInfo', { ...expertInfo.contactInfo, phone: e.target.value })}
                disabled={!isEditing}
                variant={isEditing ? 'outlined' : 'filled'}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Instagram URL'
                value={expertInfo.contactInfo.instagram}
                onChange={(e) => handleInputChange('contactInfo', { ...expertInfo.contactInfo, instagram: e.target.value })}
                disabled={!isEditing}
                variant={isEditing ? 'outlined' : 'filled'}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='X (Twitter) URL'
                value={expertInfo.contactInfo.twitter}
                onChange={(e) => handleInputChange('contactInfo', { ...expertInfo.contactInfo, twitter: e.target.value })}
                disabled={!isEditing}
                variant={isEditing ? 'outlined' : 'filled'}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='Facebook URL'
                value={expertInfo.contactInfo.facebook}
                onChange={(e) => handleInputChange('contactInfo', { ...expertInfo.contactInfo, facebook: e.target.value })}
                disabled={!isEditing}
                variant={isEditing ? 'outlined' : 'filled'}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label='LinkedIn URL'
                value={expertInfo.contactInfo.linkedin}
                onChange={(e) => handleInputChange('contactInfo', { ...expertInfo.contactInfo, linkedin: e.target.value })}
                disabled={!isEditing}
                variant={isEditing ? 'outlined' : 'filled'}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Website'
                value={expertInfo.contactInfo.website}
                onChange={(e) => handleInputChange('contactInfo', { ...expertInfo.contactInfo, website: e.target.value })}
                disabled={!isEditing}
                variant={isEditing ? 'outlined' : 'filled'}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Địa chỉ'
                value={expertInfo.contactInfo.address}
                onChange={(e) => handleInputChange('contactInfo', { ...expertInfo.contactInfo, address: e.target.value })}
                disabled={!isEditing}
                variant={isEditing ? 'outlined' : 'filled'}
                multiline
                rows={3}
              />
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* References */}
        <Box sx={{ mb: 4 }}>
          <Typography variant='h6' sx={{ mb: 3, fontWeight: 'bold' }}>
            Tham chiếu
          </Typography>
          {expertInfo.references.map((ref) => (
            <Card key={ref.id} sx={{ p: 3, mb: 2, bgcolor: 'grey.50', border: '1px solid #e0e0e0' }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={5}>
                  <TextField
                    fullWidth
                    label='Tên'
                    value={ref.name}
                    onChange={(e) => updateReference(ref.id, 'name', e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <TextField
                    fullWidth
                    label='Chức vụ'
                    value={ref.position}
                    onChange={(e) => updateReference(ref.id, 'position', e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  {isEditing && (
                    <IconButton
                      onClick={() => removeReference(ref.id)}
                      sx={{ 
                        bgcolor: 'error.main', 
                        color: 'white',
                        '&:hover': { bgcolor: 'error.dark' },
                        width: 40,
                        height: 40,
                      }}
                    >
                      X
                    </IconButton>
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label='Công ty'
                    value={ref.company}
                    onChange={(e) => updateReference(ref.id, 'company', e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label='Điện thoại'
                    value={ref.phone}
                    onChange={(e) => updateReference(ref.id, 'phone', e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Email'
                    value={ref.email}
                    onChange={(e) => updateReference(ref.id, 'email', e.target.value)}
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'filled'}
                  />
                </Grid>
              </Grid>
            </Card>
          ))}
          {isEditing && (
            <Button
              startIcon={<span>+</span>}
              onClick={addReference}
              sx={{ color: 'text.secondary' }}
            >
              Thêm tham chiếu
            </Button>
          )}
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
          {!isEditing ? (
            <Button
              variant='contained'
              onClick={() => setIsEditing(true)}
              sx={{ 
                minWidth: 120, 
                backgroundColor: 'secondary.main', 
                color: 'white',
                borderRadius: 999
              }}
            >
              Chỉnh sửa
            </Button>
          ) : (
            <>
              <Button
                variant='outlined'
                onClick={handleCancel}
                sx={{ 
                  minWidth: 120, 
                  color: 'black', 
                  borderColor: 'black',
                  borderRadius: 999
                }}
              >
                Hủy
              </Button>
              <Button
                variant='contained'
                onClick={handleSave}
                sx={{ 
                  minWidth: 120, 
                  backgroundColor: 'secondary.main', 
                  color: 'white',
                  borderRadius: 999
                }}
              >
                Lưu thông tin
              </Button>
            </>
          )}
        </Box>
      </Card>
    </div>
  )
} 