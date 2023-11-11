import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import FixedContainer from '../components/fixed-container';
import CustomHeader from '../components/custom-header';

const PrivacyPolicy = () => {
  return (
    <FixedContainer> 
      {/* giới hạn chiều rộng nội dung để hiển thị trên màn hình */}
          {/* chinh tiêu đề ở đầu trang */}
      <CustomHeader title="Chính Sách Quyền Riêng Tư của Ứng Dụng RMS" />
   
      <ScrollView style={styles.scrollView}>
        <Text style={styles.paragraph}>
          Ngày có hiệu lực: 01/01/2023
        </Text>

        <Text style={styles.paragraph}>
          Chào mừng bạn đến với ứng dụng di động RMS. Tài liệu này giải thích cách thông tin cá nhân của bạn được thu thập, sử dụng và bảo vệ bởi ứng dụng RMS. Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn và tuân thủ các quy định quyền riêng tư liên quan đến nó.
        </Text>

        <Text style={styles.heading}>1. Thông Tin Thu Thập:</Text>
        <Text style={styles.paragraph}>
          a. Chúng tôi có thể thu thập thông tin cá nhân từ bạn khi bạn tạo tài khoản hoặc sử dụng ứng dụng RMS. Điều này có thể bao gồm tên, địa chỉ email, số điện thoại, địa chỉ giao hàng và các thông tin khác.
        </Text>
        <Text style={styles.paragraph}>
          b. Chúng tôi có thể tự động thu thập thông tin về thiết bị của bạn, bao gồm địa chỉ IP, loại trình duyệt, hệ điều hành và các dữ liệu khác liên quan đến việc sử dụng ứng dụng.
        </Text>

        <Text style={styles.heading}>2. Sử Dụng Thông Tin:</Text>
        <Text style={styles.paragraph}>
          a. Thông tin cá nhân của bạn có thể được sử dụng để cung cấp dịch vụ và sản phẩm trong ứng dụng RMS.
        </Text>
        <Text style={styles.paragraph}>
          b. Chúng tôi có thể sử dụng thông tin để liên hệ với bạn, cung cấp thông báo về ứng dụng hoặc thông tin quảng cáo, hoặc để phản hồi các yêu cầu hoặc câu hỏi từ bạn.
        </Text>

        <Text style={styles.heading}>3. Bảo Mật Thông Tin:</Text>
        <Text style={styles.paragraph}>
          a. Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn và thực hiện biện pháp an ninh thích hợp để bảo vệ nó.
        </Text>
        <Text style={styles.paragraph}>
          b. Chúng tôi không bán, chia sẻ hoặc tiết lộ thông tin cá nhân của bạn cho bên thứ ba mà không có sự đồng ý của bạn, trừ khi cần thiết theo quy định pháp luật hoặc để cung cấp dịch vụ cho bạn.
        </Text>

        <Text style={styles.heading}>4. Quyền Kiểm soát:</Text>
        <Text style={styles.paragraph}>
          a. Bạn có quyền truy cập, chỉnh sửa hoặc xóa thông tin cá nhân của bạn trong ứng dụng RMS.
        </Text>
        <Text style={styles.paragraph}>
          b. Bạn có quyền từ chối nhận các thông báo quảng cáo từ chúng tôi.
        </Text>

        <Text style={styles.heading}>5. Thay Đổi Chính Sách:</Text>
        <Text style={styles.paragraph}>
          Chúng tôi có thể điều chỉnh và cập nhật Chính Sách Quyền Riêng Tư này. Mọi thay đổi sẽ được thông báo trong ứng dụng hoặc trên trang web của chúng tôi.
        </Text>
      </ScrollView>
    </FixedContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default PrivacyPolicy;
