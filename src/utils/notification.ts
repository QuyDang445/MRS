import axios from 'axios';
import {YOUR_SERVER_KEY} from '../constants/constants';
import {NOTIFICATION_TYPE, TABLE} from '../constants/enum';
import API from '../services/api';

export const sendNotificationToDevices = async (token: string, title: string, body: any) => {
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

// + có 1 giao dịch cần được xác thực
export const pushNotificationAdminNewPayment = async (idServicer: string, idPayment: string, nameServicer: string) => {
	const idAdmin = 'admin';
	const token = await getTokenDeviceFromID(idAdmin);
	const data = {
		data: {idOrder: idPayment},
		idUser: idAdmin,
		status: NOTIFICATION_TYPE.NEW_PAYMENT,
	};
	const title = 'Có giao dịch cần được xác nhận!';
	const body = `Bạn có 1 giao dịch cần được xác nhận tên ${nameServicer}`;

	API.post(`${TABLE.NOTIFICATION}/${idAdmin}`, {data, title, body, time: new Date().valueOf()});
	token && sendNotificationToDevices(token, title, body, data);
};



// Bắn thông báo cho service khi người dùng đặt hàng thành công.
export const pushNotificationToServiceNewOrder = (idService: string, idUser: string, idOrder: string) => {};

// Bắn thông báo cho user khi service xác nhận đơn đặt hàng.

// Bắn thông báo cho service khi user huỷ đơn đặt hàng.
export const pushNotificationToServiceCancelOrder = (idService: string, idUser: string, idOrder: string) => {};