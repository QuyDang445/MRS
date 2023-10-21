import React, {memo} from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ICONS} from '../assets/image-paths';
import CustomText from './custom-text';
import {FONT_FAMILY} from '../constants/enum';
import {ROUTE_KEY} from '../navigator/routers';
import {RootStackScreenProps} from '../navigator/stacks';
import {colors} from '../styles/colors';
import {heightScale, widthScale} from '../styles/scaling-utils';
import {NotificationItemProps} from '../constants/types';

export const NotificationItem = (props: RootStackScreenProps<'NotificationDetail'>, notificationData: NotificationItemProps) => {
	const {navigation} = props;

	const onPressDetail = () => {
		navigation.navigate(ROUTE_KEY.NotificationDetail);
	};
	return (
		<TouchableOpacity
			onPress={onPressDetail}
			style={{
				flexDirection: 'row',
				// backgroundColor: `${colors.appColor}50`,
				marginVertical: heightScale(12),
				gap: 10,
				width: '100%',
				height: heightScale(100),
				alignItems: 'center',
				borderRadius: 8,
			}}>
			<View style={{width: widthScale(70), height: '100%', justifyContent: 'center', alignItems: 'center'}}>
				{notificationData.read ? (
					<Image style={styles.icon} source={ICONS.notification_read} />
				) : (
					<Image style={styles.icon} source={ICONS.notification_unread} />
				)}
				{/* <Image style={styles.icon} source={ICONS.notification_read} /> */}
			</View>

			<View style={{flex: 1, height: '100%', justifyContent: 'space-between'}}>
				<CustomText font={FONT_FAMILY.BOLD} text={notificationData.title} />
				<CustomText text={notificationData.message} />
				<CustomText text={'16:16:23 - 18/09/2023'} />
				{/* <CustomText text={'16:16:23 - 18/09/2023'} /> */}
			</View>

			<TouchableOpacity style={{width: widthScale(30), height: '100%', justifyContent: 'center'}}>
				<Image style={styles.icon} source={ICONS.delete} />
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	icon: {
		width: widthScale(30),
		height: widthScale(30),
	},
});
