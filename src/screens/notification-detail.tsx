import React, {memo} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {RootStackScreenProps} from '../navigator/stacks';
import FixedContainer from '../components/fixed-container';
import CustomHeader from '../components/custom-header';
import {ICONS} from '../assets/image-paths';
import {heightScale, widthScale} from '../styles/scaling-utils';
import CustomText from '../components/custom-text';
import {FONT_FAMILY} from '../constants/enum';
import {colors} from '../styles/colors';
import {convertDateTime} from '../utils/time';

const NotificationDetail = ({navigation, route}: RootStackScreenProps<'NotificationDetail'>) => {
	const {notificationData} = route.params;
	console.log(JSON.stringify(notificationData));
	return (
		<FixedContainer>
			<CustomHeader title="Chi tiết thông báo" hideBack={false} />
			<View style={{paddingHorizontal: widthScale(20), flexDirection: 'column', gap: heightScale(10)}}>
				<View style={{width: '100%', flexDirection: 'row', gap: widthScale(10)}}>
					<Image style={styles.notificationIcon} source={ICONS.notification_read} />
					<View style={{flexDirection: 'column', gap: heightScale(10)}}>
						<CustomText font={FONT_FAMILY.BOLD} text={notificationData.title} />
						<CustomText size={12} color={colors.grayText} text={notificationData.sendTime} />
					</View>
				</View>
				<View style={{width: '100%'}}>
					<CustomText text={notificationData.message} />
				</View>
			</View>
		</FixedContainer>
	);
};

const styles = StyleSheet.create({
	notificationIcon: {
		width: widthScale(40),
		height: widthScale(40),
	},
});
export default NotificationDetail;
