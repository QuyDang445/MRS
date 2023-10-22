import React, {memo, useState} from 'react';
import {FlatList} from 'react-native';
import CustomHeader from '../components/custom-header';
import FixedContainer from '../components/fixed-container';
import {RootStackScreenProps} from '../navigator/stacks';
import {heightScale, widthScale} from '../styles/scaling-utils';
import {generateRandomId} from '../utils';
import {NotificationItem} from '../components';
import {NotificationItemProps} from '../constants/types';

const Notification = (props: RootStackScreenProps<'Notification'>) => {
	const [data, setData] = useState(notificationDataList);

	const onNotificationItemClick = (notificationData: NotificationItemProps) => {
		const filterData = data.map(item => {
			if (item.id == notificationData.id && item.read == false) {
				item.read = true;
			}
			return item;
		});
		setData(filterData);
	};

	const onNotificationItemDelete = (notificationItem: NotificationItemProps) => {
		const filterData = data.filter(item => item.id != notificationItem.id);
		setData(filterData);
	};
	return (
		<FixedContainer>
			<CustomHeader title="Thông báo" hideBack />
			<FlatList
				onRefresh={() => {}}
				refreshing={false}
				style={{paddingHorizontal: widthScale(20)}}
				renderItem={item => NotificationItem(props, (notificationData = item.item), onNotificationItemClick, onNotificationItemDelete)}
				keyExtractor={generateRandomId}
				data={data}
			/>
		</FixedContainer>
	);
};

const notificationDataList: NotificationItemProps[] = [
	{
		id: generateRandomId(),
		title: 'Gui yeu cau thanh cong',
		message: 'Ban da gui yeu cau thanh cong, Ban da gui yeu cau thanh cong',
		sendTime: new Date(),
		read: true,
	},
	{
		id: generateRandomId(),
		title: 'Gui yeu cau thanh cong',
		message: 'Ban da gui yeu cau thanh cong',
		sendTime: new Date(),
		read: false,
	},
];

export default memo(Notification);
