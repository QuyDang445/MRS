import React, {memo} from 'react';
import {DeviceEventEmitter, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ICONS} from '../assets/image-paths';
import CustomHeader from '../components/custom-header';
import CustomText from '../components/custom-text';
import FixedContainer from '../components/fixed-container';
import {EMIT_EVENT, FONT_FAMILY} from '../constants/enum';
import {RootStackScreenProps} from '../navigator/stacks';
import {useAppDispatch, useAppSelector} from '../stores/store/storeHooks';
import {colors} from '../styles/colors';
import {heightScale, widthScale} from '../styles/scaling-utils';
import {ROUTE_KEY} from '../navigator/routers';

const User = (props: RootStackScreenProps<'User'>) => {
	const {navigation} = props;
	const dispatch = useAppDispatch();

	const userInfo = useAppSelector(state => state.userInfoReducer.userInfo);

	const onPressChangePassword = () => console.log('On press change password');
	const onPressSetting = () => navigation.navigate(ROUTE_KEY.Setting);
	const onPressTermsAndConditions = () => console.log('On press T&C');
	const onPressUpdateInformation = () => console.log('On press update information');
	const onPressListAddress = () => console.log('On press list address');
	const onPressDataPrivacy = () => console.log('On press data privacy');
	const onPressFAQs = () => navigation.navigate(ROUTE_KEY.FAQs);

	const onPressLogout = () => DeviceEventEmitter.emit(EMIT_EVENT.LOGOUT);

	const ProfileButton = ({buttonName, onClick}: {buttonName: string; onClick: () => void}) => {
		return (
			<View>
				<TouchableOpacity onPress={onClick} style={styles.button}>
					<CustomText text={buttonName} size={15} />
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<FixedContainer>
			<CustomHeader title="Hồ Sơ" hideBack />
			{/* Avatar  */}
			<Image style={styles.avatar} source={userInfo?.avatar ? {uri: userInfo?.avatar} : ICONS.user_default_avatar} />

			<CustomText text={userInfo?.name} font={FONT_FAMILY.BOLD} style={{textAlign: 'center'}} />
			<View style={styles.viewContent}>
				<CustomText text={'QUẢN LÝ TÀI KHOẢN:'} font={FONT_FAMILY.BOLD} size={15} />
				<ProfileButton buttonName="Cập nhật thông tin" onClick={onPressUpdateInformation} />
				<ProfileButton buttonName="Địa chỉ" onClick={onPressListAddress} />
				<ProfileButton buttonName="Đổi mật khẩu" onClick={onPressChangePassword} />
			</View>
			<View style={styles.viewContent}>
				<CustomText text={'THÔNG TIN KHÁC'} font={FONT_FAMILY.BOLD} size={14} />
				<ProfileButton buttonName="Quy định điều khoản" onClick={onPressTermsAndConditions} />
				<ProfileButton buttonName="Chính sách quyền riêng tư" onClick={onPressDataPrivacy} />
				<ProfileButton buttonName="FAQs" onClick={onPressFAQs} />
				<ProfileButton buttonName="Cài đặt" onClick={onPressSetting} />
			</View>
			<View style={styles.viewContent}>
				<ProfileButton buttonName="Đăng xuất" onClick={onPressLogout} />
			</View>
		</FixedContainer>
	);
};

export default memo(User);
const styles = StyleSheet.create({
	avatar: {
		width: widthScale(90),
		height: widthScale(90),
		borderRadius: 90,
		alignSelf: 'center',
		marginTop: heightScale(20),
		backgroundColor: `${colors.grayLine}50`,
	},
	viewContent: {
		paddingHorizontal: widthScale(20),
		marginTop: heightScale(20),
	},
	button: {
		height: heightScale(40),
		justifyContent: 'center',
		paddingLeft: widthScale(10),
		borderBottomWidth: 1,
		borderBottomColor: colors.grayLine,
	},
});
