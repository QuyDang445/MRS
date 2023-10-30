import React, {memo, useState} from 'react';
import {DeviceEventEmitter, ScrollView, StyleSheet, TextInput, View, TouchableOpacity, Image} from 'react-native';
import {ICONS, IMAGES} from '../assets/image-paths';
import CustomButton from '../components/custom-button';
import CustomHeader from '../components/custom-header';
import CustomText from '../components/custom-text';
import FixedContainer from '../components/fixed-container';
import Spinner from '../components/spinner';
import {EMIT_EVENT, FONT_FAMILY, TABLE} from '../constants/enum';
import {RootStackScreenProps} from '../navigator/stacks';
import API from '../services/api';
import {heightScale, widthScale} from '../styles/scaling-utils';
import {showMessage} from '../utils';
import { colors } from '../styles/colors';

const ChangePasswordForgot = (props: RootStackScreenProps<'ChangePasswordForgot'>) => {
	const {navigation, route} = props;
	const userPhone = route.params.userPhone;

	const [newPass, setNewPass] = useState('');
	const [renewPass, setRenewPass] = useState('');
	const [newPasswordVisible, setNewPasswordVisible] = useState(false);
	const [confirmNewPasswordVisible, setConfirmNewPasswordVisible] = useState(false);

	const handleChangePass = async () => {
		if (newPass !== renewPass) {
			return showMessage('Xác nhận mật khẩu sai!');
		}

		Spinner.show();
		const res = await API.put(`${TABLE.USERS}/${userPhone.id}`, {...userPhone, password: newPass});
		if (res) {
			showMessage('Đổi mật khẩu thành công!');
			DeviceEventEmitter.emit(EMIT_EVENT.DATA_LOGIN, {phone: userPhone.phone, password: newPass});
			navigation.goBack();
		} else {
			showMessage('Đổi mật khẩu thất bại');
		}
		Spinner.hide();
	};

	return (
		<FixedContainer>
			<CustomHeader title="ĐỔI MẬT KHẨU" />
			<ScrollView style={styles.view}>
				<CustomText text={'NHẬP MẬT KHẨU MỚI'} font={FONT_FAMILY.BOLD} size={14} />
				<View>
					<TextInput secureTextEntry={!newPasswordVisible} value={newPass} onChangeText={setNewPass} style={styles.input} />
					<TouchableOpacity style={styles.eyeIcon} onPress={() => setNewPasswordVisible(!newPasswordVisible)}>
						<Image source={ICONS.eye} style={styles.eyeIcon} />
					</TouchableOpacity>
				</View>
				<CustomText text={'NHẬP LẠI MẬT KHẨU MỚI'} font={FONT_FAMILY.BOLD} size={14} />
				<View>
					<TextInput secureTextEntry={!confirmNewPasswordVisible} value={renewPass} onChangeText={setRenewPass} style={styles.input} />
					<TouchableOpacity style={styles.eyeIcon} onPress={() => setConfirmNewPasswordVisible(!confirmNewPasswordVisible)}>
						<Image source={ICONS.eye} style={styles.eyeIcon} />
					</TouchableOpacity>
				</View>
			</ScrollView>
			<View style={{margin: widthScale(20)}}>
				<CustomButton disabled={!newPass.trim() || !renewPass.trim()} onPress={handleChangePass} text="ĐẶT LẠI MẬT KHẨU" />
			</View>
		</FixedContainer>
	);
};

export default memo(ChangePasswordForgot);
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