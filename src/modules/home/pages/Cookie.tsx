import { Box } from '@mui/material'

export function Cookie() {
  return (
    <Box className='mx-auto px-3 py-6 flex flex-col bg-white text-lg'>
      <div className='prose prose-base max-w-none'>
        <h2 className='font-bold text-2xl mb-1'>1. Chính sách Cookie</h2>
        <p>
          Chúng tôi sử dụng cookie và các công nghệ tương tự để cải thiện trải nghiệm người dùng, phân tích lưu lượng
          truy cập và cá nhân hóa nội dung. Khi bạn truy cập vào website, cookie sẽ được lưu trên thiết bị của bạn. Bạn
          có thể từ chối hoặc xóa cookie bằng cách thay đổi cài đặt trình duyệt, tuy nhiên một số tính năng của trang có
          thể không hoạt động đầy đủ.
        </p>
        <p className='mt-2'>Phân loại cookie:</p>
        <ul className='ml-8 mt-1'>
          <li>Cookie cần thiết: Đảm bảo chức năng cơ bản của website (ví dụ: đăng nhập, giỏ hàng).</li>
          <li>Cookie hiệu suất: Thống kê lượt truy cập, trang xem, thời gian truy cập để tối ưu vận hành.</li>
          <li>Cookie chức năng: Duy trì tùy chọn ngôn ngữ, giao diện và lưu cài đặt người dùng.</li>
          <li>Cookie tiếp thị: Theo dõi hành vi, sở thích để hiển thị quảng cáo phù hợp.</li>
        </ul>
        <p className='mt-2'>
          Quản lý cookie:
          <br />
          Bạn có thể kiểm soát cookie qua cài đặt trình duyệt hoặc công cụ quản lý cookie trên trang. Xem hướng dẫn cụ
          thể tại mục "Giúp đỡ" trên trình duyệt của bạn.
        </p>

        <h2 className='font-bold text-2xl mb-1 mt-6'>2. Thông báo bảo mật</h2>
        <p>
          Chúng tôi cam kết bảo vệ toàn vẹn hệ thống và dữ liệu người dùng. Mọi hành vi truy cập trái phép, phá hoại,
          xâm nhập hoặc tấn công mạng đều bị nghiêm cấm và sẽ bị xử lý theo pháp luật.
        </p>
        <p className='mt-2'>Biện pháp bảo mật:</p>
        <ul className='ml-8 mt-1'>
          <li>Mã hóa dữ liệu (TLS/SSL) khi truyền tải.</li>
          <li>Sao lưu định kỳ, hệ thống phát hiện và ngăn chặn xâm nhập (IDS/IPS).</li>
          <li>Quản lý quyền truy cập chặt chẽ, xác thực hai yếu tố (2FA) cho tài khoản quan trọng.</li>
        </ul>
        <p className='mt-2'>
          Thông báo sự cố:
          <br />
          Trong trường hợp phát hiện rủi ro, vi phạm an ninh hoặc rò rỉ dữ liệu, chúng tôi sẽ thông báo cho cơ quan chức
          năng và người dùng liên quan trong thời gian sớm nhất, tuân theo quy định về bảo mật thông tin cá nhân.
        </p>

        <h2 className='font-bold text-2xl mb-1 mt-6'>3. Điều khoản &amp; Điều kiện</h2>
        <p>
          Khi sử dụng website và dịch vụ của chúng tôi, bạn đồng ý tuân thủ các điều khoản sau:
          <br />
          Quyền sở hữu nội dung: Tất cả nội dung, thương hiệu, logo, mã nguồn đều thuộc sở hữu của [Tên Công ty]. Nghiêm
          cấm sao chép, phân phối hoặc tái sử dụng khi chưa được phép.
        </p>
        <p className='mt-2'>
          <strong>Quyền &amp; nghĩa vụ người dùng:</strong>
        </p>
        <ul className='ml-8 mt-1 pl-2'>
          <li>Cung cấp thông tin chính xác, không giả mạo.</li>
          <li>Không sử dụng dịch vụ vào mục đích phi pháp, gây hại cho bên thứ ba.</li>
          <li>Chịu trách nhiệm bảo mật tài khoản cá nhân.</li>
        </ul>
        <p className='mt-2'>
          <strong>Giới hạn trách nhiệm: Chúng tôi không chịu trách nhiệm đối với:</strong>
        </p>
        <ul className='ml-8 mt-1'>
          <li>Thiệt hại gián tiếp, mất lợi nhuận do ngắt kết nối hoặc lỗi hệ thống.</li>
          <li>Nội dung do người dùng đăng tải.</li>
        </ul>
        <p className='mt-2'>
          <strong>Chấm dứt và thay đổi dịch vụ:</strong>
        </p>
        <ul className='ml-8 mt-1'>
          <li>Chúng tôi có quyền tạm ngừng hoặc chấm dứt dịch vụ khi bạn vi phạm điều khoản.</li>
          <li>Mọi sửa đổi điều khoản sẽ được thông báo trước ít nhất 7 ngày và có hiệu lực kể từ ngày công bố.</li>
        </ul>
      </div>
      <div className='mt-6'>
        <h2 className='font-bold text-2xl mb-1'>4. Chính sách Bảo mật &amp; An toàn thông tin</h2>
        <p className='mb-2'>
          Chúng tôi cam kết thu thập, xử lý và lưu trữ thông tin cá nhân của bạn một cách an toàn, minh bạch, chỉ sử
          dụng cho mục đích đã công bố.
        </p>
        <ul className='ml-8 space-y-2 mb-4'>
          <li>
            <strong>Phạm vi thu thập:</strong>
            <ul className='ml-8 mt-1'>
              <li>Thông tin cá nhân cơ bản (họ tên, email, số điện thoại).</li>
              <li>Dữ liệu tương tác trên website (lịch sử giao dịch, hành vi sử dụng).</li>
            </ul>
          </li>
          <li>
            <strong>Mục đích sử dụng:</strong>
            <ul className='ml-8 mt-1'>
              <li>Cung cấp và cải thiện dịch vụ.</li>
              <li>Gửi thông báo, khuyến mại liên quan.</li>
              <li>Phân tích, nghiên cứu phát triển sản phẩm.</li>
            </ul>
          </li>
          <li>
            <strong>Chia sẻ dữ liệu:</strong>
            <ul className='ml-8 mt-1'>
              <li>
                Không chia sẻ với bên thứ ba ngoài phạm vi hợp tác (ví dụ: đối tác thanh toán, vận chuyển) khi có sự
                đồng ý của bạn.
              </li>
              <li>Trong trường hợp pháp luật yêu cầu, chúng tôi sẽ hợp tác cung cấp thông tin theo đúng quy định.</li>
            </ul>
          </li>
          <li>
            <strong>Bảo vệ dữ liệu:</strong>
            <ul className='ml-8 mt-1'>
              <li>Áp dụng biện pháp kỹ thuật (mã hóa, tường lửa) và quản lý (quy định truy cập, đào tạo nhân sự).</li>
              <li>Thực hiện đánh giá an ninh định kỳ, khắc phục lỗ hổng kịp thời.</li>
            </ul>
          </li>
          <li>
            <strong>Quyền của bạn:</strong>
            <ul className='ml-8 mt-1'>
              <li>Yêu cầu truy cập, chỉnh sửa, xóa hoặc hạn chế xử lý dữ liệu cá nhân.</li>
              <li>
                Rút lại sự đồng ý bất cứ lúc nào bằng cách liên hệ với chúng tôi qua email: contact@mentacare.vn .
              </li>
            </ul>
          </li>
        </ul>
        <p className='font-bold text-[1.2rem] mt-6'>© 2025 Công ty TNHH Mentacare. Mọi quyền bảo lưu.</p>
      </div>
    </Box>
  )
}
