export function CvExpert() {
  return (
    <div className='mt-20'>
      {/* <!-- Top section with image and title --> */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-8'>
        <div className='bg-secondary rounded-br-[40px] rounded-bl-none rounded-tl-none rounded-tr-none w-40 h-40 flex items-center justify-center mb-6 sm:mb-0'>
          <img
            alt='Portrait photo of a smiling young woman with shoulder-length brown hair wearing a white top on beige background'
            className='rounded-full border border-gray-500 w-28 h-28 object-cover'
            height='120'
            src='/assets/images/cv/cv-avt-tmp.jpg'
            width='120'
          />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-4xl sm:text-4xl font-extrabold leading-tight text-[#2E3843] uppercase tracking-wide'>
            HỒ SƠ CHUYÊN SÂU
            <br />
            DƯƠNG MINH HIẾU
          </h1>
          <p className='mt-1 text-lg sm:text-xl text-[#2E3843] tracking-widest uppercase'>
            Chiến lược gia | Mindfulness Coach | Corporate Advisor
          </p>
        </div>
      </div>
      {/* <!-- Contact bar --> */}
      <div className='bg-secondary rounded-2 lg:rounded-full mt-6 flex flex-wrap justify-between text-white text-base sm:text-lg px-6 py-2 gap-2 sm:gap-0'>
        <div className='flex items-center space-x-2 min-w-[120px]'>
          <i className='fas fa-phone-alt text-base'></i>
          <span>+84-912-345-678890</span>
        </div>
        <div className='flex items-center space-x-2 min-w-[180px]'>
          <i className='fas fa-envelope text-base'></i>
          <span>hieu.duong@example.com</span>
        </div>
        <div className='flex items-center space-x-2 min-w-[180px]'>
          <i className='fas fa-globe text-base'></i>
          <span>www.hieumindfulness.com</span>
        </div>
        <div className='flex items-center space-x-2 min-w-[180px]'>
          <i className='fas fa-home text-base'></i>
          <span> 123 Đường An Tĩnh, Hà Nội, Việt Nam</span>
        </div>
      </div>
      {/* <!-- Main content area --> */}
      <div className='flex flex-col sm:flex-row mt-10 gap-10 sm:gap-16'>
        {/* <!-- Left sidebar --> */}
        <div className='bg-secondary rounded-tr-[40px] rounded-br-[40px] rounded-bl-none rounded-tl-none p-6 w-full sm:w-3/10 text-white'>
          {/* <!-- Education --> */}
          <div className='mb-8'>
            <h2 className='font-extrabold text-3xl tracking-widest mb-3 border-b border-white pb-1'>Education</h2>
            <div className='mb-5'>
              <p className='font-semibold text-xl mb-1'>Bachelor of Business Administration</p>
              <p className='text-lg font-light leading-tight'> Đại học Kinh tế Quốc dân </p>
              <p className='text-lg font-light leading-tight'>2000-2004</p>
              {/* <p className='text-lg font-light leading-tight'>123 Anywhere St., Any City</p> */}
            </div>
            <div>
              <p className='font-semibold text-xl mb-1'>Executive MBA</p>
              <p className='text-lg font-light leading-tight'>Đại học Ngoại thương</p>
              <p className='text-lg font-light leading-tight'>2010-2012</p>
              {/* <p className='text-lg font-light leading-tight'>123 Anywhere St., Any City</p> */}
            </div>
          </div>
          {/* <!-- Certifications --> */}
          <div className='mb-8'>
            <h2 className='font-extrabold text-3xl tracking-widest mb-3 border-b border-white pb-1'>Certifications</h2>
            <ul className='list-disc list-inside text-lg font-light space-y-1'>
              <li>Chứng nhận Huấn luyện Thiền & EQ – Viện Tâm lý Việt Nam.</li>
              <li>Chứng chỉ Health Coaching Mastery – Học viện Health Coach Việt Nam.</li>
              <li>Chứng chỉ Corporate Strategy – Đại học Fulbright Việt Nam.</li>
            </ul>
          </div>
          {/* <!-- Skills --> */}
          <div className='mb-8'>
            <h2 className='font-extrabold text-3xl tracking-widest mb-3 border-b border-white pb-1'>Skills</h2>
            <p className='text-lg font-light mb-1'>Thiền tỉnh thức (Mindfulness Meditation)</p>
            <p className='text-lg font-light mb-1'>Trí tuệ cảm xúc (Emotional Intelligence)</p>
            <p className='text-lg font-light mb-1'>Lãnh đạo chuyển hoá (Transformational Leadership)</p>
            <p className='text-lg font-light mb-1'>Chiến lược doanh nghiệp (Corporate Strategy)</p>
            <p className='text-lg font-light'>Tư vấn & đào tạo nội bộ (Corporate Training & Coaching)</p>
          </div>
          {/* <!-- Language --> */}
          <div>
            <h2 className='font-extrabold text-3xl tracking-widest mb-3 border-b border-white pb-1'>Language</h2>
            <p className='text-lg font-light mb-1'>Vietnamese (Native)</p>
            <p className='text-lg font-light mb-1'>English (Fluent)</p>
          </div>
        </div>
        {/* <!-- Right content --> */}
        <div className='flex-1 sm:w-7/10 text-[#2E3843] text-lg sm:text-xl'>
          {/* <!-- About me --> */}
          <section className='mb-8'>
            <h2 className='font-extrabold text-3xl tracking-widest mb-2 border-b border-gray-400 pb-1'>About me</h2>
            <p className='leading-tight'>
              Với hơn 16 năm nghiên cứu và thực hành sâu về thiền truyền thống và trí tuệ cảm xúc trong phát triển lãnh
              đạo và bản thân, tôi lựa chọn con đường lan tỏa Thiền & Trí tuệ cảm xúc đến cộng đồng. Sứ mệnh của tôi là
              giúp mọi người đạt được sự hạnh phúc, cân bằng và lãnh đạo bản thân hiệu quả, từ đó xây dựng cuộc sống
              vững bên trong – sáng bên ngoài.
            </p>
          </section>
          {/* <!-- Experience --> */}
          <section className='mb-8'>
            <h2 className='font-extrabold text-3xl tracking-widest mb-2 border-b border-gray-400 pb-1'>Experience</h2>
            <article className='mb-6'>
              <div className='flex justify-between text-lg sm:text-xl font-semibold mb-0.5'>
                <span>Cố vấn chiến lược – Công ty Cổ phần SMILE MIND</span>
                <span>2020 - Hiện tại</span>
              </div>
              <p className='text-base sm:text-lg font-light mb-1.5'>Cố vấn chiến lược – Công ty Cổ phần SMILE MIND</p>
              <div className='leading-tight text-base sm:text-lg space-y-2'>
                <p>
                  - Huấn luyện chương trình Thiền & Trí tuệ cảm xúc tại Học viện Health Coach Việt Nam, đào tạo hơn
                  2.000 học viên.
                </p>
                <p>- Cố vấn chiến lược phát triển sản phẩm, đào tạo lãnh đạo, xây dựng văn hóa doanh nghiệp.</p>
                <p>- Phát triển và triển khai các chương trình Thiền & Sống Tỉnh Thức, chia sẻ cho cộng đồng.</p>

                <p className='font-semibold mt-4'>
                  Phó Tổng Giám đốc Kinh doanh & Marketing – Công ty Cổ phần Sữa ELOVI Việt Nam (2015 – 2019)
                </p>
                <p>- Chỉ đạo chiến lược kinh doanh, marketing và phát triển thương hiệu toàn quốc.</p>
                <p>- Tăng trưởng doanh số trung bình 20% mỗi năm thông qua chiến lược phân phối hiệu quả.</p>

                <p className='font-semibold mt-4'>Giám đốc Marketing – Interfood (Wonderfarm) (2012 – 2015)</p>
                <p>- Quản lý chiến dịch marketing toàn quốc, tái định vị thương hiệu Wonderfarm.</p>
                <p>- Đạt mức tăng trưởng nhận diện thương hiệu 35% qua các kênh truyền thông.</p>
              </div>
            </article>
            {/* <article className='mb-6'>
              <div className='flex justify-between text-lg sm:text-xl font-semibold mb-0.5'>
                <span>Graphic Designer</span>
                <span>Jan 2020 - Dec 2020</span>
              </div>
              <p className='text-base sm:text-lg font-light mb-1.5'>Warner &amp; Spencer</p>
              <p className='leading-tight text-base sm:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
            </article>
            <article>
              <div className='flex justify-between text-lg sm:text-xl font-semibold mb-0.5'>
                <span>Graphic Designer</span>
                <span>Jan 2017 - Dec 2029</span>
              </div>
              <p className='text-base sm:text-lg font-light mb-1.5'>Ingoude Company</p>
              <p className='leading-tight text-base sm:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
            </article> */}
          </section>
          {/* <!-- Reference --> */}
          <section>
            <h2 className='font-extrabold text-3xl tracking-widest mb-2 border-b border-gray-400 pb-1'>Reference</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg sm:text-xl'>
              <div>
                <p>Alfredo Torres | Director</p>
                <p>Aldenaire &amp; Partners</p>
                <p>+123-456-7890</p>
              </div>
              <div>
                <p>Harumi Kobayashi | CEO</p>
                <p>Ingoude Company</p>
                <p>+123-456-7890</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
