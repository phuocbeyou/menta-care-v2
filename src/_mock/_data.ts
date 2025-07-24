import {
  _id,
  _price,
  _times,
  _company,
  _boolean,
  _fullName,
  _taskNames,
  _postTitles,
  _description,
  _productNames
} from './_mock'

// ----------------------------------------------------------------------

export const _myAccount = {
  displayName: 'Jaydon Frankie',
  email: 'demo@minimals.cc',
  photoURL: '/assets/images/avatar/avatar-25.webp'
}

// ----------------------------------------------------------------------

export const _users = [...Array(24)].map((_, index) => ({
  id: _id(index),
  name: _fullName(index),
  company: _company(index),
  isVerified: _boolean(index),
  avatarUrl: `/assets/images/avatar/avatar-${index + 1}.webp`,
  status: index % 4 ? 'active' : 'banned',
  role:
    [
      'Leader',
      'Hr Manager',
      'UI Designer',
      'UX Designer',
      'UI/UX Designer',
      'Project Manager',
      'Backend Developer',
      'Full Stack Designer',
      'Front End Developer',
      'Full Stack Developer'
    ][index] || 'UI Designer'
}))

// ----------------------------------------------------------------------

export const _posts = [...Array(23)].map((_, index) => ({
  id: _id(index),
  title: _postTitles(index),
  description: _description(index),
  coverUrl: `/assets/images/cover/cover-${index + 1}.webp`,
  totalViews: 8829,
  totalComments: 7977,
  totalShares: 8556,
  totalFavorites: 8870,
  postedAt: _times(index),
  author: {
    name: _fullName(index),
    avatarUrl: `/assets/images/avatar/avatar-${index + 1}.webp`
  }
}))

// ----------------------------------------------------------------------

const COLORS = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107']

export const _products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1

  return {
    id: _id(index),
    price: _price(index),
    name: _productNames(index),
    priceSale: setIndex % 3 ? null : _price(index),
    coverUrl: `/assets/images/product/product-${setIndex}.webp`,
    colors:
      (setIndex === 1 && COLORS.slice(0, 2)) ||
      (setIndex === 2 && COLORS.slice(1, 3)) ||
      (setIndex === 3 && COLORS.slice(2, 4)) ||
      (setIndex === 4 && COLORS.slice(3, 6)) ||
      (setIndex === 23 && COLORS.slice(4, 6)) ||
      (setIndex === 24 && COLORS.slice(5, 6)) ||
      COLORS,
    status: ([1, 3, 5].includes(setIndex) && 'sale') || ([4, 8, 12].includes(setIndex) && 'new') || ''
  }
})

// ----------------------------------------------------------------------

export const _langs = [
  {
    value: 'en',
    label: 'English',
    icon: '/assets/icons/flags/ic-flag-en.svg'
  },
  {
    value: 'de',
    label: 'German',
    icon: '/assets/icons/flags/ic-flag-de.svg'
  },
  {
    value: 'fr',
    label: 'French',
    icon: '/assets/icons/flags/ic-flag-fr.svg'
  }
]

// ----------------------------------------------------------------------

export const _timeline = [...Array(5)].map((_, index) => ({
  id: _id(index),
  title: [
    '1983, orders, $4220',
    '12 Invoices have been paid',
    'Order #37745 from September',
    'New order placed #XF-2356',
    'New order placed #XF-2346'
  ][index],
  type: `order${index + 1}`,
  time: _times(index)
}))

// ----------------------------------------------------------------------

export const _tasks = [...Array(5)].map((_, index) => ({
  id: _id(index),
  name: _taskNames(index)
}))

// ----------------------------------------------------------------------

export const _notifications = [
  {
    id: _id(1),
    title: 'Your order is placed',
    description: 'waiting for shipping',
    avatarUrl: null,
    type: 'order-placed',
    postedAt: _times(1),
    isUnRead: true
  },
  {
    id: _id(2),
    title: _fullName(2),
    description: 'answered to your comment on the Minimal',
    avatarUrl: '/assets/images/avatar/avatar-2.webp',
    type: 'friend-interactive',
    postedAt: _times(2),
    isUnRead: true
  },
  {
    id: _id(3),
    title: 'You have new message',
    description: '5 unread messages',
    avatarUrl: null,
    type: 'chat-message',
    postedAt: _times(3),
    isUnRead: false
  },
  {
    id: _id(4),
    title: 'You have new mail',
    description: 'sent from Guido Padberg',
    avatarUrl: null,
    type: 'mail',
    postedAt: _times(4),
    isUnRead: false
  },
  {
    id: _id(5),
    title: 'Delivery processing',
    description: 'Your order is being shipped',
    avatarUrl: null,
    type: 'order-shipped',
    postedAt: _times(5),
    isUnRead: false
  }
]

// Blog Articles Mock Data
export const blogArticlesData = [
  {
    id: 1,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Thuật ngữ',
    title: 'Geographic Pay Differential',
    subtitle: 'Điều chỉnh lương theo chi phí sinh hoạt và thị trường lao động địa phương',
    fullTitle:
      'Geographic Pay Differentials: Điều Chỉnh Lương Theo Chi Phí Sinh Hoạt Và Thị Trường Lao Động Địa Phương',
    excerpt:
      'Trong bối cảnh toàn cầu hóa và sự phân bố đa dạng của lực lượng lao động, các doanh nghiệp đang phải đối mặt với thách thức lớn trong việc thiết lập chính sách lương thưởng phù hợp với từng khu vực địa lý khác nhau.',
    author: 'Học Viện HR',
    date: '15/07/2025'
  },
  {
    id: 2,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Thuật ngữ',
    title: 'GREY COLLAR JOBS LÀ GÌ?',
    subtitle: 'PHÂN BIỆT VỚI BLUE COLLAR - WHITE COLLAR',
    fullTitle: 'Grey Collar Jobs là gì? Phân biệt với Blue Collar - White Collar',
    excerpt:
      'Grey Collar Jobs là gì? "Grey collar jobs" (nhân viên cổ cồn xám) là thuật ngữ chỉ những người làm các công việc kết hợp giữa lao động chân tay và trí óc, thường trong lĩnh vực công nghệ, dịch vụ và sản xuất.',
    author: 'luongngocanh',
    date: '05/07/2025'
  },
  {
    id: 3,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Chiến lược',
    title: 'COMPENSATION STRATEGY',
    subtitle: 'CHIẾN LƯỢC LƯƠNG THƯỞNG HIỆU QUẢ',
    fullTitle: 'Compensation Strategy: Chiến Lược Lương Thưởng Hiệu Quả',
    excerpt:
      'Xây dựng chiến lược lương thưởng phù hợp là chìa khóa để thu hút và giữ chân nhân tài trong tổ chức. Chiến lược này cần được thiết kế dựa trên nhiều yếu tố.',
    author: 'Học Viện HR',
    date: '10/07/2025'
  },
  {
    id: 4,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Phân tích',
    title: 'MARKET PAY ANALYSIS',
    subtitle: 'PHÂN TÍCH LƯƠNG THỊ TRƯỜNG',
    fullTitle: 'Market Pay Analysis: Phân Tích Lương Thị Trường',
    excerpt:
      'Hiểu rõ xu hướng lương thưởng trên thị trường giúp doanh nghiệp cạnh tranh hiệu quả trong việc tuyển dụng và giữ chân nhân tài.',
    author: 'Học Viện HR',
    date: '08/07/2025'
  },
  {
    id: 5,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Thuật ngữ',
    title: 'TALENT ACQUISITION',
    subtitle: 'THU HÚT VÀ TUYỂN DỤNG NHÂN TÀI',
    fullTitle: 'Talent Acquisition: Thu Hút Và Tuyển Dụng Nhân Tài',
    excerpt:
      'Talent Acquisition là quá trình tìm kiếm, thu hút và tuyển dụng những ứng viên có năng lực cao để đáp ứng nhu cầu của tổ chức.',
    author: 'Học Viện HR',
    date: '03/07/2025'
  },
  {
    id: 6,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Quản lý',
    title: 'PERFORMANCE MANAGEMENT',
    subtitle: 'QUẢN LÝ HIỆU SUẤT LÀM VIỆC',
    fullTitle: 'Performance Management: Quản Lý Hiệu Suất Làm Việc',
    excerpt:
      'Performance Management là hệ thống quản lý hiệu suất làm việc của nhân viên thông qua việc thiết lập mục tiêu, đánh giá và phát triển.',
    author: 'Học Viện HR',
    date: '01/07/2025'
  },
  {
    id: 7,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Phát triển',
    title: 'LEARNING & DEVELOPMENT',
    subtitle: 'ĐÀO TẠO VÀ PHÁT TRIỂN NHÂN SỰ',
    fullTitle: 'Learning & Development: Đào Tạo Và Phát Triển Nhân Sự',
    excerpt:
      'Learning & Development là chiến lược phát triển năng lực nhân viên thông qua các chương trình đào tạo và cơ hội học tập.',
    author: 'Học Viện HR',
    date: '28/06/2025'
  },
  {
    id: 8,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Thuật ngữ',
    title: 'EMPLOYEE ENGAGEMENT',
    subtitle: 'SỰ GẮN KẾT CỦA NHÂN VIÊN',
    fullTitle: 'Employee Engagement: Sự Gắn Kết Của Nhân Viên',
    excerpt:
      'Employee Engagement là mức độ cam kết và gắn kết của nhân viên đối với tổ chức, ảnh hưởng trực tiếp đến hiệu suất và sự thành công.',
    author: 'Học Viện HR',
    date: '25/06/2025'
  },
  {
    id: 9,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Chiến lược',
    title: 'SUCCESSION PLANNING',
    subtitle: 'KẾ HOẠCH KẾ THỪA LÃNH ĐẠO',
    fullTitle: 'Succession Planning: Kế Hoạch Kế Thừa Lãnh Đạo',
    excerpt:
      'Succession Planning là quá trình xác định và phát triển những nhân viên tiềm năng để kế thừa các vị trí lãnh đạo quan trọng.',
    author: 'Học Viện HR',
    date: '22/06/2025'
  },
  {
    id: 10,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Phân tích',
    title: 'HR ANALYTICS',
    subtitle: 'PHÂN TÍCH DỮ LIỆU NHÂN SỰ',
    fullTitle: 'HR Analytics: Phân Tích Dữ Liệu Nhân Sự',
    excerpt: 'HR Analytics là việc sử dụng dữ liệu và phân tích để đưa ra quyết định chiến lược trong quản lý nhân sự.',
    author: 'Học Viện HR',
    date: '20/06/2025'
  },
  {
    id: 11,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Thuật ngữ',
    title: 'DIVERSITY & INCLUSION',
    subtitle: 'ĐA DẠNG VÀ BAO GỒM',
    fullTitle: 'Diversity & Inclusion: Đa Dạng Và Bao Gồm',
    excerpt: 'Diversity & Inclusion là chiến lược tạo ra môi trường làm việc đa dạng và bao gồm tất cả mọi người.',
    author: 'Học Viện HR',
    date: '18/06/2025'
  },
  {
    id: 12,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Quản lý',
    title: 'CHANGE MANAGEMENT',
    subtitle: 'QUẢN LÝ THAY ĐỔI',
    fullTitle: 'Change Management: Quản Lý Thay Đổi',
    excerpt: 'Change Management là quá trình quản lý và thực hiện các thay đổi trong tổ chức một cách hiệu quả.',
    author: 'Học Viện HR',
    date: '15/06/2025'
  },
  {
    id: 13,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Phát triển',
    title: 'CAREER DEVELOPMENT',
    subtitle: 'PHÁT TRIỂN NGHỀ NGHIỆP',
    fullTitle: 'Career Development: Phát Triển Nghề Nghiệp',
    excerpt: 'Career Development là quá trình hỗ trợ nhân viên phát triển kỹ năng và thăng tiến trong sự nghiệp.',
    author: 'Học Viện HR',
    date: '12/06/2025'
  },
  {
    id: 14,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Chiến lược',
    title: 'EMPLOYEE RETENTION',
    subtitle: 'GIỮ CHÂN NHÂN VIÊN',
    fullTitle: 'Employee Retention: Giữ Chân Nhân Viên',
    excerpt: 'Employee Retention là chiến lược giữ chân những nhân viên có năng lực và đóng góp tích cực cho tổ chức.',
    author: 'Học Viện HR',
    date: '10/06/2025'
  },
  {
    id: 15,
    image: 'https://storage.googleapis.com/a1aa/image/workforce-planning-infographic.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Phân tích',
    title: '4 CRITERIA OF STRATEGIC WORKFORCE PLANNING',
    subtitle: '4 TIÊU CHÍ HOẠCH ĐỊNH NGUỒN NHÂN LỰC CHIẾN LƯỢC',
    fullTitle: '4 Criteria of Strategic Workforce Planning: 4 Tiêu Chí Hoạch Định Nguồn Nhân Lực Chiến Lược',
    excerpt:
      'Khám phá 4 tiêu chí quan trọng trong hoạch định nguồn nhân lực chiến lược: Right Size, Right Shape, Right Cost, và Right Agility.',
    author: 'Học Viện HR',
    date: '08/06/2025'
  },
  {
    id: 16,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Thuật ngữ',
    title: 'EMPLOYEE BENEFITS',
    subtitle: 'PHÚC LỢI NHÂN VIÊN',
    fullTitle: 'Employee Benefits: Phúc Lợi Nhân Viên',
    excerpt: 'Employee Benefits là các chế độ phúc lợi ngoài lương cơ bản mà doanh nghiệp cung cấp cho nhân viên.',
    author: 'Học Viện HR',
    date: '05/06/2025'
  },
  {
    id: 17,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Quản lý',
    title: 'LEADERSHIP DEVELOPMENT',
    subtitle: 'PHÁT TRIỂN KHẢ NĂNG LÃNH ĐẠO',
    fullTitle: 'Leadership Development: Phát Triển Khả Năng Lãnh Đạo',
    excerpt:
      'Leadership Development là quá trình phát triển kỹ năng lãnh đạo cho các nhà quản lý hiện tại và tương lai.',
    author: 'Học Viện HR',
    date: '03/06/2025'
  },
  {
    id: 18,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Phát triển',
    title: 'SKILLS DEVELOPMENT',
    subtitle: 'PHÁT TRIỂN KỸ NĂNG',
    fullTitle: 'Skills Development: Phát Triển Kỹ Năng',
    excerpt: 'Skills Development là quá trình nâng cao và phát triển các kỹ năng cần thiết cho công việc.',
    author: 'Học Viện HR',
    date: '01/06/2025'
  },
  {
    id: 19,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Chiến lược',
    title: 'EMPLOYEE EXPERIENCE',
    subtitle: 'TRẢI NGHIỆM NHÂN VIÊN',
    fullTitle: 'Employee Experience: Trải Nghiệm Nhân Viên',
    excerpt: 'Employee Experience là tổng thể trải nghiệm của nhân viên trong suốt quá trình làm việc tại tổ chức.',
    author: 'Học Viện HR',
    date: '30/05/2025'
  },
  {
    id: 20,
    image: 'https://storage.googleapis.com/a1aa/image/ded4ce8c-d1de-421d-47d9-3d3ed20ef3dc.jpg',
    logo: 'https://storage.googleapis.com/a1aa/image/143f33a4-41b2-477d-dd70-12c01f73c619.jpg',
    logoBottom: 'https://storage.googleapis.com/a1aa/image/b3cac136-3391-4bf0-7bea-c1c2e212785c.jpg',
    category: 'Phân tích',
    title: 'HR METRICS',
    subtitle: 'CHỈ SỐ ĐO LƯỜNG NHÂN SỰ',
    fullTitle: 'HR Metrics: Chỉ Số Đo Lường Nhân Sự',
    excerpt: 'HR Metrics là các chỉ số quan trọng để đo lường hiệu quả của các hoạt động quản lý nhân sự.',
    author: 'Học Viện HR',
    date: '28/05/2025'
  }
]
