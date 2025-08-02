import { Expert } from '../components/ListExpert'

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
