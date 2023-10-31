import React, {memo, useState} from 'react';
import {DeviceEventEmitter, Image, ScrollView, StyleSheet, TextInput, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {ICONS, IMAGES} from '../assets/image-paths';
import CustomButton from '../components/custom-button';
import CustomCheckbox from '../components/custom-checkbox';
import CustomHeader from '../components/custom-header';
import CustomText from '../components/custom-text';
import FixedContainer from '../components/fixed-container';
import {EMIT_EVENT, FONT_FAMILY, TABLE} from '../constants/enum';
import {ROUTE_KEY} from '../navigator/routers';
import {RootStackScreenProps} from '../navigator/stacks';
import API from '../services/api';
import {colors} from '../styles/colors';
import {heightScale, widthScale} from '../styles/scaling-utils';
import {showMessage} from '../utils';

const SignUp = (props: RootStackScreenProps<'SignUp'>) => {
	const {navigation} = props;

	const [isCheck, setIsCheck] = useState(false);
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [pass, setPass] = useState('');
	const [rePass, setRePass] = useState('');
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
	const [errorName, setErrorName] = useState('');
	const [errorPhone, setErrorPhone] = useState('');
	const [errorPass, setErrorPass] = useState('');
	const [errorConfirmPass, setErrorConfirmPass,] = useState('');
	const phoneRegex = /(0)+([0-9]{9})\b/;
	

	//const onPressSignUp = () => navigation.replace(ROUTE_KEY.SignUpServices);

	const handleSignUp = async () => {
		if (!name.trim()) {
			setErrorName('Thiếu tên!');
			return showMessage('Thiếu tên.');
		} else {
			setErrorName('');
		}

		if (!phone.trim()) {
			setErrorPhone('Thiếu số điện thoại!');
			return showMessage('Thiếu số điện thoại.');
		} else if (phoneRegex.test(phone) == false) {
			setErrorPhone('Số điện thoại không hợp lệ!');
			return showMessage('Số điện thoại không hợp lệ.');
		} else {
			setErrorPhone('');
		}

		if (!pass.trim()) {
			setErrorPass('Thiếu mật khẩu!');
			return showMessage('Thiếu mật khẩu.');
		} else {
			setErrorPass('');
		}

		if (pass !== rePass) {
			setErrorConfirmPass('Mật khẩu nhập lại không đúng!');
			return showMessage('Mật khẩu nhập lại không đúng.');
		} else {
			setErrorConfirmPass('');
		}

		if (!isCheck) {
			ToastAndroid.show('Bạn chưa đồng ý điều khoản sử dụng!', ToastAndroid.SHORT);
			return showMessage('Bạn chưa đồng ý điều khoản sử dụng.');
		}

		const body = {avatar: '', name: name, password: pass, phone: phone, type: 'USER'};
		const res = await API.post(TABLE.USERS, body);
		if (res) {
			showMessage('Đăng ký tài khoản thành công.');
			ToastAndroid.show('Đăng ký tài khoản thành công!', ToastAndroid.SHORT);
			DeviceEventEmitter.emit(EMIT_EVENT.DATA_LOGIN, {phone: phone, password: pass});
			navigation.goBack();
		} else {
			showMessage('Đăng ký tài khoản thất bại.');
			ToastAndroid.show('Đăng ký tài khoản không thành công!', ToastAndroid.SHORT);
		}
	};

	return (
		<FixedContainer>
			<CustomHeader title="ĐĂNG KÝ TÀI KHOẢN" />
			<ScrollView>
				<Image source={IMAGES.LOGO} style={styles.logo} />

				<View style={styles.input}>
					<TextInput
						value={name}
						onChangeText={setName}
						placeholder="Họ và tên"
						placeholderTextColor={colors.grayText}
						style={styles.inputText}
					/>
				</View>
				<CustomText text={errorName} style={{color: colors.red, marginLeft: 25}} size={10} />

				<View style={styles.input}>
					<TextInput
						keyboardType="numeric"
						maxLength={10}
						value={phone}
						onChangeText={setPhone}
						placeholder="Số điện thoại"
						placeholderTextColor={colors.grayText}
						style={styles.inputText}
					/>
				</View>
				<CustomText text={errorPhone} style={{color: colors.red, marginLeft: 25}} size={10} />

				<View style={styles.input}>
					<TextInput
						secureTextEntry={!passwordVisible}
						value={pass}
						onChangeText={setPass}
						placeholder="Mật khẩu"
						placeholderTextColor={colors.grayText}
						style={styles.inputText}
					/>
					<TouchableOpacity style={styles.eyeIcon} onPress={() => setPasswordVisible(!passwordVisible)}>
						<Image source={ICONS.eye} style={styles.eyeIcon} />
					</TouchableOpacity>
				</View>
				<CustomText text={errorPass} style={{color: colors.red, marginLeft: 25}} size={10} />

				<View style={styles.input}>
					<TextInput
						secureTextEntry={!confirmPasswordVisible}
						value={rePass}
						onChangeText={setRePass}
						placeholder="Nhập lại mật khẩu"
						placeholderTextColor={colors.grayText}
						style={styles.inputText}
					/>
					<TouchableOpacity style={styles.eyeIcon} onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
						<Image source={ICONS.eye} style={styles.eyeIcon} />
					</TouchableOpacity>
				</View>
				<CustomText text={errorConfirmPass} style={{color: colors.red, marginLeft: 25}} size={10} />

				<CustomCheckbox
					onPress={() => setIsCheck(!isCheck)}
					isCheck={isCheck}
					style={styles.viewCheck}
					text={'Tôi đồng ý với Điều Khoản Sử Dụng'}				/>

				{/* <TouchableOpacity style={styles.signUp} onPress={onPressSignUp}> */}
					<CustomText text={'Đăng ký tài dành cho nhà cung cấp dịch vụ?'} size={13} font={FONT_FAMILY.BOLD} style={{ textAlign: 'center', marginTop: 10 }}/>
				{/* </TouchableOpacity> */}

				<View style={{alignSelf: 'center', marginBottom: heightScale(20)}}>
					<CustomButton onPress={handleSignUp} text="ĐĂNG KÝ" style={styles.button}/>
				</View>
			</ScrollView>
		</FixedContainer>
	);
};

export default memo(SignUp);
const styles = StyleSheet.create({
	logo: {
		width: widthScale(100),
		height: widthScale(100),
		marginTop: heightScale(10),
		alignSelf: 'center',
	},
	input: {
		marginHorizontal: widthScale(20),
		borderRadius: 10,
		borderWidth: 1,
		borderColor: colors.blackGray,
		marginTop: heightScale(40),
	},
	inputText: {
		color: colors.black,
		paddingLeft: widthScale(5),
	},
	button: {
		width: widthScale(150),
		marginTop: heightScale(100),
	},
	signUp: {
		margin: widthScale(20),
		marginTop: heightScale(40),
	},
	viewCheck: {
		marginHorizontal: widthScale(20),
		marginTop: heightScale(10),
		justifyContent: 'center',
	},
	eyeIcon: {
		position: 'absolute',
		top: heightScale(5),
		right: widthScale(10),
		width: 20,
		height: 30,
	},
});