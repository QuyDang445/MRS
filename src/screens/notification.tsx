import React, {memo, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import CustomHeader from '../components/custom-header';
import FixedContainer from '../components/fixed-container';
import {RootStackScreenProps} from '../navigator/stacks';
import {heightScale, widthScale} from '../styles/scaling-utils';
import {generateRandomId} from '../utils';
import {NotificationItem} from '../components';
import {NotificationItemProps, UserProps} from '../constants/types';
import {useAppDispatch, useAppSelector} from '../stores/store/storeHooks';
import {TABLE} from '../constants/enum';
import {updateNotificationList, updateUserInfo} from '../stores/reducers/userReducer';
import API from '../services/api';

const Notification = (props: RootStackScreenProps<'Notification'>) => {
	const dispatch = useAppDispatch();
	const notificationList = useAppSelector(state => state.userInfoReducer.notificationList);
	const [data, setData] = useState([]);
	const userInfo = useAppSelector(state => state.userInfoReducer.userInfo);

	const getNotificationList = async (user: UserProps) => {
		console.log('Log notification for user: ' + user?.id);
		await API.get(`${TABLE.NOTIFICATION}`)
			.then(result => {
				if (result) {
					console.log('Notilist' + JSON.stringify(result));

					const filterNotification = result.filter(item => item != null && item.userId == user.id);
					console.log('Notilist after filter' + JSON.stringify(filterNotification));
					dispatch(updateNotificationList(filterNotification));
					setData(filterNotification);
				}
			})
			.catch(error => {
				console.log(error.message);
			});

		dispatch(updateUserInfo(user));
	};
	const onNotificationItemClick = async (notificationData: NotificationItemProps) => {
		data?.forEach(async item => {
			if (item.id == notificationData.id && item.isRead == false) {
				item.isRead = true;
				console.log('notificationItem', JSON.stringify(item));
				await API.put(`${TABLE.NOTIFICATION}/${notificationData.id}`, item);
			}
		});
		const updateData = [...data];
		setData(updateData);
		dispatch(updateNotificationList(updateData));
	};

	const onNotificationItemDelete = async (notificationItem: NotificationItemProps) => {
		const filterData = data.filter(item => item.id != notificationItem.id);
		await API.delete(`${TABLE.NOTIFICATION}/${notificationItem.id}`);
		setData(filterData);
		dispatch(updateNotificationList(filterData));
	};

	useEffect(() => {
		getNotificationList(userInfo);
	}, []);

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

export default memo(Notification);
