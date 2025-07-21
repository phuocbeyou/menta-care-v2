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
            src='https://storage.googleapis.com/a1aa/image/d1a72184-c58e-4ac2-7bdb-3de4275f03f0.jpg'
            width='120'
          />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-4xl sm:text-5xl font-extrabold leading-tight text-[#2E3843] uppercase tracking-wide'>
            HỒ SƠ CHUYÊN SÂU
            <br />
            PALMERSTON
          </h1>
          <p className='mt-1 text-lg sm:text-xl text-[#2E3843] tracking-widest uppercase'>CHUYÊN VIÊN TƯ VẤN</p>
        </div>
      </div>
      {/* <!-- Contact bar --> */}
      <div className='bg-secondary rounded-2 lg:rounded-full mt-6 flex flex-wrap justify-between text-white text-base sm:text-lg px-6 py-2 gap-2 sm:gap-0'>
        <div className='flex items-center space-x-2 min-w-[120px]'>
          <i className='fas fa-phone-alt text-base'></i>
          <span>+123-456-7890</span>
        </div>
        <div className='flex items-center space-x-2 min-w-[180px]'>
          <i className='fas fa-envelope text-base'></i>
          <span>hello@reallygreatsite.com</span>
        </div>
        <div className='flex items-center space-x-2 min-w-[180px]'>
          <i className='fas fa-globe text-base'></i>
          <span>www.reallygreatsite.com</span>
        </div>
        <div className='flex items-center space-x-2 min-w-[180px]'>
          <i className='fas fa-home text-base'></i>
          <span>123 Anywhere St., Any City</span>
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
              <p className='font-bold text-xl mb-1'>Bachelor of Design</p>
              <p className='text-lg font-light leading-tight'>Really Great University</p>
              <p className='text-lg font-light leading-tight'>2012-2016</p>
              <p className='text-lg font-light leading-tight'>123 Anywhere St., Any City</p>
            </div>
            <div>
              <p className='font-bold text-xl mb-1'>Master of Design</p>
              <p className='text-lg font-light leading-tight'>Really Great University</p>
              <p className='text-lg font-light leading-tight'>2016-2020</p>
              <p className='text-lg font-light leading-tight'>123 Anywhere St., Any City</p>
            </div>
          </div>
          {/* <!-- Certifications --> */}
          <div className='mb-8'>
            <h2 className='font-extrabold text-3xl tracking-widest mb-3 border-b border-white pb-1'>Certifications</h2>
            <ul className='list-disc list-inside text-lg font-light space-y-1'>
              <li>Certified Graphic Designer.</li>
              <li>User Experience (UX) Design Certificate.</li>
            </ul>
          </div>
          {/* <!-- Skills --> */}
          <div className='mb-8'>
            <h2 className='font-extrabold text-3xl tracking-widest mb-3 border-b border-white pb-1'>Skills</h2>
            <p className='text-lg font-light mb-1'>Organized</p>
            <p className='text-lg font-light mb-1'>Creativity</p>
            <p className='text-lg font-light mb-1'>Teamwork</p>
            <p className='text-lg font-light mb-1'>Meeting deadlines</p>
            <p className='text-lg font-light'>Critical thinking</p>
          </div>
          {/* <!-- Language --> */}
          <div>
            <h2 className='font-extrabold text-3xl tracking-widest mb-3 border-b border-white pb-1'>Language</h2>
            <p className='text-lg font-light mb-1'>French</p>
            <p className='text-lg font-light mb-1'>Spanish</p>
            <p className='text-lg font-light'>English</p>
          </div>
        </div>
        {/* <!-- Right content --> */}
        <div className='flex-1 sm:w-7/10 text-[#2E3843] text-lg sm:text-xl'>
          {/* <!-- About me --> */}
          <section className='mb-8'>
            <h2 className='font-extrabold text-3xl tracking-widest mb-2 border-b border-gray-400 pb-1'>About me</h2>
            <p className='leading-tight'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
          </section>
          {/* <!-- Experience --> */}
          <section className='mb-8'>
            <h2 className='font-extrabold text-3xl tracking-widest mb-2 border-b border-gray-400 pb-1'>Experience</h2>
            <article className='mb-6'>
              <div className='flex justify-between text-lg sm:text-xl font-bold mb-0.5'>
                <span>Graphic Designer</span>
                <span>Jan 2021 - Jan 2022</span>
              </div>
              <p className='text-base sm:text-lg font-light mb-1.5'>Aldenaire &amp; Partners</p>
              <p className='leading-tight text-base sm:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
            </article>
            <article className='mb-6'>
              <div className='flex justify-between text-lg sm:text-xl font-bold mb-0.5'>
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
              <div className='flex justify-between text-lg sm:text-xl font-bold mb-0.5'>
                <span>Graphic Designer</span>
                <span>Jan 2017 - Dec 2029</span>
              </div>
              <p className='text-base sm:text-lg font-light mb-1.5'>Ingoude Company</p>
              <p className='leading-tight text-base sm:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
            </article>
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
