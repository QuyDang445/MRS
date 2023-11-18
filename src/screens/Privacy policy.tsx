import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import CustomHeader from '../components/custom-header';
import FixedContainer from '../components/fixed-container';
import {HTML_POLICY_EN} from '../constants/data';

const PrivacyPolicy = () => {
	const text = {
		title: 'QUY ĐỊNH ĐIỀU KHOẢN',
	};
  return (
		<FixedContainer>
			<CustomHeader title={text.title} />
			<WebView
				source={{html: HTML_POLICY_EN}}
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

const styles = StyleSheet.create({
	loading: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default PrivacyPolicy;
