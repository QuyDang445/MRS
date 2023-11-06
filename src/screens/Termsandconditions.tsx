import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import FixedContainer from '../components/fixed-container';
import CustomHeader from '../components/custom-header';

const TermsAndConditions = () => {
  return (
    <FixedContainer>
       {/* giới hạn chiều rộng nội dung để hiển thị trên màn hình */}
          {/* chinh tiêu đề ở đầu trang */}
      <CustomHeader title="Quy Định và Điều Khoản " />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.paragraph}>
          Chào mừng bạn đến với ứng dụng di động RMS. Trước khi bạn bắt đầu sử dụng ứng dụng của chúng tôi, vui lòng đọc và hiểu rõ các điều khoản và quy định sau đây.
        </Text>

        <Text style={styles.heading}>1. Điều khoản sử dụng:</Text>
        <Text style={styles.paragraph}>
          a. Bằng cách sử dụng ứng dụng RMS, bạn đồng ý tuân theo các quy định và điều khoản của chúng tôi.
        </Text>
        <Text style={styles.paragraph}>
          b. Bạn không được sử dụng ứng dụng nếu bạn dưới 13 tuổi.
        </Text>

        <Text style={styles.heading}>2. Chính sách Bảo Mật:</Text>
        <Text style={styles.paragraph}>
          a. Chúng tôi thu thập thông tin cá nhân của bạn theo chính sách bảo mật của chúng tôi.
        </Text>
        <Text style={styles.paragraph}>
          b. Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn.
        </Text>

        <Text style={styles.heading}>3. Điều Khoản về Sử Dụng Dịch Vụ:</Text>
        <Text style={styles.paragraph}>
          a. Chúng tôi cung cấp dịch vụ và sản phẩm trong ứng dụng RMS. Bạn có trách nhiệm tuân thủ các điều khoản về sử dụng dịch vụ này.
        </Text>
        <Text style={styles.paragraph}>
          b. Các giao dịch mua sắm trong ứng dụng phải tuân thủ các điều khoản và chính sách thanh toán của chúng tôi.
        </Text>

        <Text style={styles.heading}>4. Bản Quyền và Sở Hữu Trí Tuệ:</Text>
        <Text style={styles.paragraph}>
          a. Tất cả các nội dung và tài sản trí tuệ trong ứng dụng RMS thuộc sở hữu của chúng tôi.
        </Text>
        <Text style={styles.paragraph}>
          b. Bạn không được sao chép, phân phối hoặc sử dụng nội dung và tài sản trí tuệ này mà không có sự cho phép của chúng tôi.
        </Text>

        <Text style={styles.heading}>5. Chấm Dứt và Hủy Bỏ:</Text>
        <Text style={styles.paragraph}>
          a. Bạn có thể chấm dứt tài khoản của mình bất cứ lúc nào.
        </Text>
        <Text style={styles.paragraph}>
          b. Chúng tôi có quyền chấm dứt tài khoản của bạn nếu bạn vi phạm các quy định và điều khoản này.
        </Text>

        <Text style={styles.heading}>6. Liên Hệ và Hỗ Trợ:</Text>
        <Text style={styles.paragraph}>
          Nếu bạn gặp sự cố hoặc cần hỗ trợ, vui lòng liên hệ chúng tôi tại địa chỉ email support@rmsapp.com hoặc số điện thoại 123-456-789.
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

export default TermsAndConditions;
