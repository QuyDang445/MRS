import React, {memo, useState} from 'react';
import {DeviceEventEmitter, Image, StyleSheet, TouchableOpacity, View, Switch} from 'react-native';
import {ICONS} from '../assets/image-paths';
import CustomHeader from '../components/custom-header';
import CustomText from '../components/custom-text';
import FixedContainer from '../components/fixed-container';
import {EMIT_EVENT, FONT_FAMILY, TYPE_USER} from '../constants/enum';
import {RootStackScreenProps} from '../navigator/stacks';
import {useAppDispatch, useAppSelector} from '../stores/store/storeHooks';
import {colors} from '../styles/colors';
import {heightScale, widthScale} from '../styles/scaling-utils';
import {ROUTE_KEY} from '../navigator/routers';
import {ScrollView} from 'react-native-gesture-handler';
import {clearUserData, updateUserInfo} from '../stores/reducers/userReducer';

const User = (props: RootStackScreenProps<'User'>) => {
	const {navigation} = props;
	const dispatch = useAppDispatch();

	const userInfo = useAppSelector(state => state.userInfoReducer.userInfo);

	const onPressChangePassword = () => navigation.navigate(ROUTE_KEY.ChangePassword);
	const onPressSetting = () => navigation.navigate(ROUTE_KEY.Setting);
	const onPressTermsAndConditions = () => navigation.navigate(ROUTE_KEY.Termsandconditions);
	const onPressUpdateInformation = () => navigation.navigate(ROUTE_KEY.UpdateInformation);
	const onPressListAddress = () => navigation.navigate(ROUTE_KEY.ListAddress);
	const onPressDataPrivacy = () => navigation.navigate(ROUTE_KEY.Privacypolicy);
	const onPressServiceFree = () => navigation.navigate(ROUTE_KEY.Payment);
	const onPressserListBlock = () => navigation.navigate(ROUTE_KEY.Listblock);
	const onPressFAQs = () => navigation.navigate(ROUTE_KEY.FAQs);

	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
			<Image style={styles.avatar} source={userInfo?.avatar ? {uri: userInfo?.avatar} : ICONS.user} />

			<CustomText text={userInfo?.name} font={FONT_FAMILY.BOLD} style={{textAlign: 'center'}} />
			<ScrollView>
				{userInfo?.type === TYPE_USER.SERVICER && (
					<View style={styles.viewContent}>
						<CustomText text={'TRẠNG THÁI HOẠT ĐỘNG'} font={FONT_FAMILY.BOLD} size={15} />
						<Switch
							trackColor={{false: '#767577', true: '#81b0ff'}}
							thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch}
							value={isEnabled}
						/>
					</View>
				)}
				<View style={styles.viewContent}>
					<CustomText text={'QUẢN LÝ TÀI KHOẢN'} font={FONT_FAMILY.BOLD} size={15} />
					<ProfileButton buttonName="Cập nhật thông tin" onClick={onPressUpdateInformation} />
					{userInfo?.type === TYPE_USER.USER && <ProfileButton buttonName="Địa chỉ" onClick={onPressListAddress} />}

					<ProfileButton buttonName="Đổi mật khẩu" onClick={onPressChangePassword} />
				</View>
				{userInfo?.type === TYPE_USER.SERVICER && (
					<View style={styles.viewContent}>
						<CustomText text={'Dịch Vụ'} font={FONT_FAMILY.BOLD} size={15} />
						<ProfileButton buttonName="Phí Dịch Vụ" onClick={onPressServiceFree} />
						<ProfileButton buttonName="Danh sách chặn" onClick={onPressserListBlock} />
					</View>
				)}

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
			</ScrollView>
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
