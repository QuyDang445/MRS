import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FixedContainer from '../components/fixed-container';
import CustomHeader from '../components/custom-header';

const Listblock = () => {
	return (
		<FixedContainer>
			<CustomHeader title="Danh sách chặn" />
		</FixedContainer>
	);
};

export default Listblock;
const styles = StyleSheet.create({});
