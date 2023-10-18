import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CommonActions} from '@react-navigation/native';
import React, {memo, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {AppState, DeviceEventEmitter, Image, Keyboard, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ICONS} from '../assets/image-paths';
import FixedContainer from '../components/fixed-container';
import {WIDTH} from '../constants/constants';

