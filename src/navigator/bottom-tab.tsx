import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CommonActions} from '@react-navigation/native';
import React, {memo, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {AppState, DeviceEventEmitter, Image, Keyboard, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ICONS} from '../assets/image-paths';
import FixedContainer from '../components/fixed-container';
import {WIDTH} from '../constants/constants';
import {clearUserData} from '../stores/reducers/userReducer';
import {useAppDispatch, useAppSelector} from '../stores/store/storeHooks';
import {colors} from '../styles/colors';
import {heightScale, widthScale} from '../styles/scaling-utils';
import {RootStackScreensParams} from './params';
import {ROUTE_KEY} from './routers';
import {RootStackScreenProps} from './stacks';

const Tab = createBottomTabNavigator<RootStackScreensParams>();

const CusTomTabBar = memo((props: BottomTabBarProps) => {
	const {state, navigation} = props;

	const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setIsShowKeyBoard(true));
		const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setIsShowKeyBoard(false));

		return () => {
			keyboardDidHideListener.remove();
			keyboardDidShowListener.remove();
		};
	}, []);

	const getIcon = useCallback((i: number) => {
		switch (i) {
			case 0:
				return ICONS.home;
			case 1:
				return ICONS.notification;
			case 2:
				return ICONS.bill;
			default:
				return ICONS.user;
		}
	}, []);

	if (isShowKeyBoard) {
		return <></>;
	}
});