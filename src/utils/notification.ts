import axios from 'axios';
import {YOUR_SERVER_KEY} from '../constants/constants';
import {Notification} from '@notifee/react-native';
import {NotificationProps, ServiceProps, UserProps} from '../constants/types';
import API from '../services/api';
import {TABLE} from '../constants/enum';
import moment from 'moment';

export const sendNotificationToDevices = async (token: string, title: string, body: any, data: NotificationProps) => {
	try {
		const response = await axios.post(
			'https://fcm.googleapis.com/fcm/send',
			{
				to: token,
				notification: {
					title: title,
					body: body,
				},
				data,
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `key=${YOUR_SERVER_KEY}`,
				},
			},
		);

		console.log('Notification sent:', response.data);
	} catch (error) {
		console.error('Error sending notification:', error);
	}
};

// Bắn thông báo cho servicer khi người dùng đặt hàng thành công.
export const pushNotificationToServiceNewOrder = async (serviceId: string, userId: string, orderId: string) => {
	console.log('PN cho đơn hàng thành công');

	const service = (await API.get(`${TABLE.SERVICE}/${serviceId}`, false)) as ServiceProps;

	const servicer = (await API.get(`${TABLE.USERS}/${service.servicer}`, false)) as UserProps;
	const user = (await API.get(`${TABLE.USERS}/${userId}`, false)) as UserProps;

	const servicerToken = servicer.tokenDevice;
	console.log('service: ' + JSON.stringify(service) + 'servicerToken: ' + servicerToken);

	const title = `Có đơn đặt hàng mới từ người dùng ${user?.name}`;
	const time = new Date().getTime();
	// const timeString = moment(time).format('hh:mm:ss - DD/MM/YYYY');
	const body = `Đơn hàng ${service.name} đã được đặt. Xác nhận ngay`;

	const data: NotificationProps = {
		id: '',
		title,
		body,
		time,
		isRead: false,
		data: {
			userId,
			status: '',
		},
	};
	sendNotificationToDevices(servicerToken, title, body, data);

	// save notification
	await API.post(`${TABLE.NOTIFICATION}/${servicer.id}`, data).then(async res => {
		console.log('res noti: ' + JSON.stringify(res));
		const id = res.name;
		data.id = id;
		await API.put(`${TABLE.NOTIFICATION}/${servicer.id}/${id}`, data);
	});
};

// Bắn thông báo cho servicer khi user huỷ đơn đặt hàng.
export const pushNotificationToServiceCancelOrder = (idService: string, idUser: string, idOrder: string) => {
	console.log('PN cho đơn hàng bị hủy');
};
