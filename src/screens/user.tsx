import React, {memo, useState,useCallback} from 'react';
import {DeviceEventEmitter, Image, StyleSheet, TouchableOpacity, View, Switch} from 'react-native';
import {ICONS} from '../assets/image-paths';
import CustomHeader from '../components/custom-header';
import CustomText from '../components/custom-text';
import FixedContainer from '../components/fixed-container';
import {EMIT_EVENT, FONT_FAMILY, TABLE, TYPE_USER} from '../constants/enum';
import {RootStackScreenProps} from '../navigator/stacks';
import {useAppDispatch, useAppSelector} from '../stores/store/storeHooks';
import {colors} from '../styles/colors';
import {heightScale, widthScale} from '../styles/scaling-utils';
import {ROUTE_KEY} from '../navigator/routers';
import {ScrollView} from 'react-native-gesture-handler';
import {clearUserData, updateUserInfo} from '../stores/reducers/userReducer';
import API from '../services/api';
import CustomSwich from '../components/custom-swich';
import {useLanguage} from '../hooks/useLanguage';
import {AlertYesNo} from '../utils';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';

const User = (props: RootStackScreenProps<'User'>) => {
	const { navigation } = props;
	const dispatch = useAppDispatch();
	const texts = useLanguage()?.User;
	useIsFocused();

	const userInfo = useAppSelector(state => state.userInfoReducer.userInfo);
	const [receiveBooking, setReceiveBooking] = useState(userInfo?.receiveBooking!);

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
	useFocusEffect(
		useCallback(() => {
			if (userInfo?.type === TYPE_USER.SERVICER) {
				getStatusPayment();
			}
		}, [texts]),
	);
	const getStatusPayment = () => {
		
	};
	const onPressLogout = () => DeviceEventEmitter.emit(EMIT_EVENT.LOGOUT);

	const ProfileButton = ({ buttonName, onClick }: { buttonName: string; onClick: () => void }) => {
		return (
			<View>
				<TouchableOpacity onPress={onClick} style={styles.button}>
					<CustomText text={buttonName} size={15} />
				</TouchableOpacity>
			</View>
		);
	};
	const onPressChangeStatus = () => {
		const status = !receiveBooking;
		API.put(`${TABLE.USERS}/${userInfo?.id}`, { ...userInfo, receiveBooking: status });
		setReceiveBooking(status);
	};
	return (
		<FixedContainer>
			<CustomHeader title={texts.title} hideBack />
			{/* Avatar  */}
			<Image style={styles.avatar} source={userInfo?.avatar ? { uri: userInfo?.avatar } : ICONS.user} />

			<CustomText text={userInfo?.name} font={FONT_FAMILY.BOLD} style={{ textAlign: 'center' }} />
			<ScrollView>
				{userInfo?.type === TYPE_USER.SERVICER && (
					<View
						style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: widthScale(20), marginVertical: heightScale(10) }}>
						<CustomText text={texts.activityStatusText} font={FONT_FAMILY.BOLD} size={15} />
						<CustomSwich isOn={receiveBooking!} onPress={onPressChangeStatus} />
					</View>
				)}
				<View style={styles.viewContent}>
					<CustomText text={texts.ACCOUNT_MANAGEMENT} font={FONT_FAMILY.BOLD} size={15} />
					<ProfileButton buttonName={texts.updateInfoButtonText} onClick={onPressUpdateInformation} />
					{userInfo?.type === TYPE_USER.USER && <ProfileButton buttonName={texts.addressButtonText} onClick={onPressListAddress} />}

					<ProfileButton buttonName={texts.changePasswordButtonText} onClick={onPressChangePassword} />
				</View>
				{userInfo?.type === TYPE_USER.SERVICER && (
					<View style={styles.viewContent}>
						<CustomText text={texts.SERVICE} font={FONT_FAMILY.BOLD} size={15} />
						<ProfileButton buttonName={texts.feeServiceText} onClick={onPressServiceFree} />
						<ProfileButton buttonName={texts.blockedUsersButtonText} onClick={onPressserListBlock} />
					</View>
				)}

				<View style={styles.viewContent}>
					<CustomText text={texts.otherInfoText} font={FONT_FAMILY.BOLD} size={14} />
					<ProfileButton buttonName={texts.termsButtonText} onClick={onPressTermsAndConditions} />
					<ProfileButton buttonName={texts.privacyPolicyButtonText} onClick={onPressDataPrivacy} />
					<ProfileButton buttonName={texts.faqsButtonText} onClick={onPressFAQs} />
					<ProfileButton buttonName={texts.settingsButtonText} onClick={onPressSetting} />
				</View>
				<View style={styles.viewContent}>
				<TouchableOpacity onPress={() => AlertYesNo(undefined, texts.logoutConfirmationMessage, onPressLogout)} style={styles.button}>
					<ProfileButton buttonName={texts.logoutButtonText} onClick={onPressLogout} />
					</TouchableOpacity>
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
