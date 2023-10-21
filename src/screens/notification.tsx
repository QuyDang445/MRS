import React, {memo} from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import CustomHeader from '../components/custom-header';
import {ICONS} from '../assets/image-paths';
import CustomText from '../components/custom-text';
import FixedContainer from '../components/fixed-container';
import {FONT_FAMILY} from '../constants/enum';
import {ROUTE_KEY} from '../navigator/routers';
import {RootStackScreenProps} from '../navigator/stacks';
import {colors} from '../styles/colors';
import {heightScale, widthScale} from '../styles/scaling-utils';
import {generateRandomId} from '../utils';
import {NotificationItem} from '../components';
import {NotificationItemProps} from '../constants/types';

const Notification = (props: RootStackScreenProps<'Notification'>) => {
	return (
		<FixedContainer>
			<CustomHeader title="THÔNG BÁO" hideBack />
			<FlatList
				onRefresh={() => {}}
				refreshing={false}
				style={{paddingHorizontal: widthScale(20)}}
				renderItem={item => NotificationItem(props, (notificationData = item.item))}
				keyExtractor={generateRandomId}
				data={notificationDataList}
			/>
		</FixedContainer>
	);
};

const notificationDataList: NotificationItemProps[] = [
	{
		title: 'Gui yeu cau thanh cong',
		message: 'Ban da gui yeu cau thanh cong',
		sendTime: new Date(),
		read: true,
	},
	{
		title: 'Gui yeu cau thanh cong',
		message: 'Ban da gui yeu cau thanh cong',
		sendTime: new Date(),
		read: false,
	},
];

export default memo(Notification);
