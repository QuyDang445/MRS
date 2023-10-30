import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NotificationItemProps, UserProps} from '../../constants/types';
import {TYPE_USER} from '../../constants/enum';

interface userInfoState {
	userInfo?: UserProps;
	notificationList?: NotificationItemProps[];
}

const initialState: userInfoState = {
	userInfo: undefined,
	notificationList: undefined,
};

const userInfo = createSlice({
	name: 'userInfo',
	initialState,
	reducers: {
		clearUserData: () => initialState,
		cacheUserInfo: (state, action: PayloadAction<any>) => {
			state.userInfo = action.payload;
		},
		updateUserInfo: (state, action: PayloadAction<any>) => {
			state.userInfo = {...state.userInfo, ...action.payload};
		},
		updateNotificationList: (state, action: PayloadAction<any>) => {
			state.notificationList = action.payload;
		},
	},
});

export const {cacheUserInfo, clearUserData, updateUserInfo, updateNotificationList} = userInfo.actions;
const userInfoReducer = userInfo.reducer;
export default userInfoReducer;
