import axios from 'axios';
import {YOUR_SERVER_KEY} from '../constants/constants';
import {NOTIFICATION_TYPE, TABLE} from '../constants/enum';
import API from '../services/api';
import {Notification} from '../constants/types';

export const sendNotificationToDevices = async (token: string, title: string, body: any, data: Notification) => {
	try {
		const response = await axios.post(
			'https://fcm.googleapis.com/fcm/send',
			{
				to: token,
				notification: {
					title: title,
					body: body,
				},
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

const getTokenDeviceFromID = async (id: string) => {
	const servicer = await API.get(`${TABLE.USERS}/${id}`);
	return servicer?.tokenDevice as string | undefined;
};

// Bắn thông báo cho service khi người dùng đặt hàng thành công.
export const pushNotificationToServiceNewOrder = (idService: string, idUser: string, idOrder: string) => {};

// Bắn thông báo cho user khi service xác nhận đơn đặt hàng.

// Bắn thông báo cho service khi user huỷ đơn đặt hàng.
export const pushNotificationToServiceCancelOrder = (idService: string, idUser: string, idOrder: string) => {};

// Bắn thông báo cho Admin khi có 1 tài khoản mới cần được duyệt
export const pushNotificationAdminNewServicer = async (idServicer: string) => {
	const idAdmin = 'admin';
	const token = await getTokenDeviceFromID(idAdmin);
	const nameServicer = await API.get(`${TABLE.USERS}/${idServicer}`).then(({name}) => name);

	const title = 'Có tài khoản dịch vụ cần được duyệt!';
	const body = `Bạn có 1 tài khoản dịch vụ cần được duyệt ${nameServicer}`;

	const data = {
		data: {idOrder: idServicer},
		idUser: idAdmin,
		status: NOTIFICATION_TYPE.NEW_SERVICER,
	};
	console.log('Tài khoản SP mới!')
	token && sendNotificationToDevices(token, title, body, data);
};