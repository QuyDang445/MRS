import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import CustomButton from '../components/custom-button';
import CustomHeader from '../components/custom-header';
import CustomText from '../components/custom-text';
import FixedContainer from '../components/fixed-container';
import Spinner from '../components/spinner';
import {FONT_FAMILY, TABLE} from '../constants/enum';
import {RootStackScreenProps} from '../navigator/stacks';
import API from '../services/api';
import {cacheUserInfo} from '../stores/reducers/userReducer';
import {useAppDispatch, useAppSelector} from '../stores/store/storeHooks';
import {heightScale, widthScale} from '../styles/scaling-utils';
import {AlertYesNo, showMessage} from '../utils';
import { colors } from '../styles/colors';
import { ICONS } from '../assets/image-paths';
import { UserProps } from '../constants/types';
import { string } from 'yup';

const ChangePassword = (props: RootStackScreenProps<'ChangePassword'>) => {
	const dispatch = useAppDispatch();

	const userInfo = useAppSelector(state => state.userInfoReducer.userInfo);

	const [currentPass, setCurrentPass] = useState('');
	const [newPass, setNewPass] = useState('');
	const [renewPass, setRenewPass] = useState('');
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [newPasswordVisible, setNewPasswordVisible] = useState(false);
	const [confirmNewPasswordVisible, setConfirmNewPasswordVisible] = useState(false);
	const text = {
		title: 'ĐỔI MẬT KHẨU',
		enterpass: 'NHẬP MẬT KHẨU HIỆN TẠI',
		enterpassnew: 'NHẬP MẬT KHẨU MỚI',
		enterpassnew1: 'NHẬP LẠI MẬT KHẨU MỚI',
	};

	const handleChangePass = () => {
		// const phoneCheck = (string)userInfo?.phone;
		// Spinner.show();
		// let userPhone: UserProps;

		// const userList = (await API.get(`${TABLE.USERS}`, true)) as UserProps[];
		// for (let i = 0; i < userList.length; i++) {
		// 	if (phoneCheck.includes(userList[i].phone)) {
		// 		userPhone = userList[i];
		// 	}
		// }

		// if (!userPhone!) {
		// 	Spinner.hide();
		// 	return showMessage('Không có thông tin số điện thoại!');
		// }

		// auth()
		// 	.signInWithPhoneNumber(phoneCheck)
		// 	.then(confirm => {
		// 		navigation.replace(ROUTE_KEY.Otp, {confirm, userPhone});
		// 	})
		// 	.catch(error => {
		// 		if (error?.code == 'auth/invalid-phone-number') {
		// 			showMessage('Số điện thoại không tồn tại!');
		// 		} else if (error?.code == 'auth/too-many-requests') {
		// 			showMessage('Bạn đã yêu cầu quá số lần quy định, vui lòng thử lại vào ngày mai!');
		// 		} else {
		// 			console.error(error);
		// 			showMessage('Đã có lỗi!');
		// 		}
		// 	})
		// 	.finally(() => Spinner.hide());

		if (userInfo?.password !== currentPass) {
			showMessage('Sai mật khẩu hiện tại!');
		} else {
			if (newPass !== renewPass) {
				showMessage('Sai mật khẩu xác nhận!');
			} else {
				AlertYesNo(undefined, 'Bạn chắc chắn muốn đổi mật khẩu?', changePass);
			}
		}
	};

	const changePass = () => {
		Spinner.show();
		const newData = {...userInfo, password: newPass};
		API.put(`${TABLE.USERS}/${userInfo?.id}`, newData)
			.then(() => {
				dispatch(cacheUserInfo(newData));
				setCurrentPass('');
				setNewPass('');
				setRenewPass('');
				showMessage('Đổi mật khẩu thành công!');
			})
			.finally(() => Spinner.hide());
	};

	return (
		<FixedContainer>
			<CustomHeader title={text.title} />

			<ScrollView style={styles.view}>
				<CustomText text={text.enterpass} font={FONT_FAMILY.BOLD} size={14} />
				<View>
				<TextInput secureTextEntry={!passwordVisible} value={currentPass} onChangeText={setCurrentPass} style={styles.input} />
				<TouchableOpacity style={styles.eyeIcon} onPress={() => setPasswordVisible(!passwordVisible)}>
						<Image source={ICONS.eye} style={styles.eyeIcon} />
					</TouchableOpacity>
				</View>
				<CustomText text={text.enterpassnew} font={FONT_FAMILY.BOLD} size={14} />
				<View>
				<TextInput secureTextEntry={!newPasswordVisible} value={newPass} onChangeText={setNewPass} style={styles.input} />
				<TouchableOpacity style={styles.eyeIcon} onPress={() => setNewPasswordVisible(!newPasswordVisible)}>
						<Image source={ICONS.eye} style={styles.eyeIcon} />
					</TouchableOpacity>
				</View>
				<CustomText text={text.enterpassnew1} font={FONT_FAMILY.BOLD} size={14} />
				<View>
					<TextInput secureTextEntry={!confirmNewPasswordVisible} value={renewPass} onChangeText={setRenewPass} style={styles.input} />
					<TouchableOpacity style={styles.eyeIcon} onPress={() => setConfirmNewPasswordVisible(!confirmNewPasswordVisible)}>
						<Image source={ICONS.eye} style={styles.eyeIcon} />
					</TouchableOpacity>
				</View>
			</ScrollView>
			<View style={{margin: widthScale(20)}}>
				<CustomButton disabled={!currentPass.trim() || !newPass.trim() || !renewPass.trim()} onPress={handleChangePass} text="THAY ĐỔI" />
			</View>
		</FixedContainer>
	);
};

export default ChangePassword;
const styles = StyleSheet.create({
	view: {
		paddingHorizontal: widthScale(20),
		marginTop: heightScale(20),
	},
	
	input: {
        color: colors.black,
		borderRadius: 8,
		borderWidth: 1,
		paddingLeft: widthScale(10),
		marginTop: heightScale(5),
		marginBottom: heightScale(20),
	},
	eyeIcon: {
		position: 'absolute',
		top: heightScale(7),
		right: widthScale(10),
		width: 20,
		height: 30,
	},
});