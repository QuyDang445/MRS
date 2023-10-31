import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import FixedContainer from '../components/fixed-container';
import CustomHeader from '../components/custom-header';

const FAQs = () => {
  return (
    <FixedContainer>
      <CustomHeader title="FAQs" />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.paragraph}>
          Dưới đây là một ví dụ về một số câu hỏi thường gặp (FAQs) cho ứng dụng di động Maintenance and Repair Services:
        </Text>

        <Text style={styles.heading}>1. Câu hỏi: Làm thế nào để tạo tài khoản trong ứng dụng Maintenance and Repair Services?</Text>
        <Text style={styles.paragraph}>
          Trả lời: Để tạo tài khoản trong ứng dụng Maintenance and Repair Services, bạn chỉ cần mở ứng dụng, chọn "Đăng ký" hoặc "Tạo tài khoản" và điền thông tin cần thiết như tên, địa chỉ email và mật khẩu. Sau đó, bạn sẽ nhận được một email xác nhận để kích hoạt tài khoản.
        </Text>

        <Text style={styles.heading}>2. Câu hỏi: Làm thế nào để đặt hàng sản phẩm trong ứng dụng Maintenance and Repair Services?</Text>
        <Text style={styles.paragraph}>
          Trả lời: Để đặt hàng sản phẩm trong ứng dụng Maintenance and Repair Services, bạn có thể chọn sản phẩm bạn muốn mua, thêm vào giỏ hàng và tiến hành thanh toán. Bạn sẽ cần cung cấp thông tin về địa chỉ giao hàng và phương thức thanh toán.
        </Text>

        <Text style={styles.heading}>3. Câu hỏi: Làm thế nào để liên hệ với bộ phận hỗ trợ của ứng dụng Maintenance and Repair Services?</Text>
        <Text style={styles.paragraph}>
          Trả lời: Để liên hệ với bộ phận hỗ trợ của chúng tôi, bạn có thể gửi email đến địa chỉ support@rmsapp.com hoặc gọi số điện thoại 123-456-789. Chúng tôi sẽ cố gắng giải quyết mọi câu hỏi hoặc vấn đề bạn gặp phải.
        </Text>

        <Text style={styles.heading}>4. Câu hỏi: Làm thế nào để cập nhật thông tin cá nhân trong tài khoản của tôi?</Text>
        <Text style={styles.paragraph}>
          Trả lời: Để cập nhật thông tin cá nhân trong tài khoản của bạn, bạn có thể đăng nhập vào ứng dụng Maintenance and Repair Services, vào phần "Tài khoản" hoặc "Cài đặt" để chỉnh sửa thông tin như địa chỉ, số điện thoại, hoặc mật khẩu.
        </Text>

        <Text style={styles.heading}>5. Câu hỏi: Làm thế nào để chấm dứt tài khoản của tôi trong ứng dụng Maintenance and Repair Services?</Text>
        <Text style={styles.paragraph}>
          Trả lời: Để chấm dứt tài khoản của bạn, bạn có thể liên hệ với bộ phận hỗ trợ hoặc tìm phần "Chấm dứt tài khoản" trong cài đặt tài khoản của bạn. Chúng tôi sẽ hướng dẫn bạn về quy trình chấm dứt tài khoản.
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

export default FAQs;
