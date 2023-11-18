import React, {memo, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import CustomHeader from '../components/custom-header';
import FixedContainer from '../components/fixed-container';
import {RootStackScreenProps} from '../navigator/stacks';
import {heightScale, widthScale} from '../styles/scaling-utils';
import {generateRandomId, parseObjectToArray, showMessage} from '../utils';
import {NotificationItem} from '../components';
import {NotificationProps} from '../constants/types';
import {useAppDispatch, useAppSelector} from '../stores/store/storeHooks';
import {TABLE} from '../constants/enum';
import API from '../services/api';
import Spinner from '../components/spinner';
import {ROUTE_KEY} from '../navigator/routers';
import CustomText from '../components/custom-text';
import {colors} from '../styles/colors';
import database from '@react-native-firebase/database';

const Notification = (props: RootStackScreenProps<'Notification'>) => {
	const dispatch = useAppDispatch();
	const {navigation} = props;

	const [data, setData] = useState<any[]>([]);
	const userInfo = useAppSelector(state => state.userInfoReducer.userInfo);
	const [refreshing, setRefreshing] = useState(false);
	const text = {
		title: 'THÔNG BÁO',
		notifiavailable: 'Không có thông báo nào',
	};
	const onRefresh = async () => {
		setRefreshing(true);
		API.get(`${TABLE.NOTIFICATION}/${userInfo?.id}`, true)
			.then((res: NotificationProps[]) => {
				console.log('data res: ' + JSON.stringify(res));
				setData(res.sort((a, b) => b.time - a.time));
			})
			.finally(() => setRefreshing(false));
	};

	const onNotificationItemClick = async (notificationData: NotificationProps) => {
		data.map(async item => {
			if (item.id == notificationData.id) {
				item.isRead = true;
				await API.put(`${TABLE.NOTIFICATION}/${userInfo?.id}/${notificationData.id}`, item);
			}
		});
		// data?.forEach(async item => {
		// 	if (item.id == notificationData.id && item.isRead == false) {
		// 		item.isRead = true;
		// 		console.log('notificationItem', JSON.stringify(item));
		// 	}
		// });
		// const updateData = [...data];
		setData([...data]);
		navigation.navigate(ROUTE_KEY.NotificationDetail, {data: notificationData} as any);
	};

	const onNotificationItemDelete = async (notificationItem: NotificationProps) => {
		Spinner.show();
		API.put(`${TABLE.NOTIFICATION}/${userInfo?.id}/${notificationItem.id}`, {})
			.then(() => {
				showMessage('Xoá thành công!');
				onRefresh();
			})
			.finally(() => Spinner.hide());
	};

	useEffect(() => {
		onRefresh();
		database()
			.ref(`${TABLE.NOTIFICATION}/${userInfo?.id}/`)
			.on('value', snapshot => {
				setData(parseObjectToArray(snapshot.val()).sort((a, b) => b.time - a.time));
			});
	}, [userInfo?.id]);

	return (
		<FixedContainer>
			<CustomHeader title={text.title} hideBack />
			<FlatList
				onRefresh={onRefresh}
				refreshing={refreshing}
				style={{paddingHorizontal: widthScale(20)}}
				renderItem={NotificationItem(props, onNotificationItemClick, onNotificationItemDelete)}
				keyExtractor={generateRandomId}
				data={data}
				ListEmptyComponent={
					<View style={{marginTop: heightScale(40), alignItems: 'center'}}>
						<CustomText color={colors.grayText} text={text.notifiavailable} />
					</View>
				}
			/>
		</FixedContainer>
	);
};

export default memo(Notification);
