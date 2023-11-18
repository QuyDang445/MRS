import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import CustomHeader from '../components/custom-header';
import FixedContainer from '../components/fixed-container';
import {HTML_TERM_EN} from '../constants/data';

const TermsAndConditions = () => {
	return (
		<FixedContainer>
			<CustomHeader title={'CHÍNH SÁCH QUYỀN RIÊNG TƯ'} />
			<WebView
				source={{html: HTML_TERM_EN}}
				startInLoadingState={true}
				renderLoading={() => (
					<View style={styles.loading}>
						<ActivityIndicator />
					</View>
				)}
			/>
		</FixedContainer>
	);
};

export default TermsAndConditions;
const styles = StyleSheet.create({
	loading: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
