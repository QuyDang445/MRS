import {POLICY} from './html-policy';
import {TERM} from './html-term';

export const EN = {
	UserAdmin: {
		title: 'ADMIN',
		accountManagement: 'ACCOUNT MANAGEMENT:',
		changePassword: 'Change Password',
		otherInformation: 'OTHER INFORMATION:',
		updatePaymentMethod: 'Update Payment Method',
		termsAndConditions: 'Terms and Conditions',
		privacyPolicy: 'Privacy Policy',
		faqs: 'FAQs',
		logout: 'Logout',
		logoutConfirmation: 'Are you sure you want to log out?',
		settingsButtonText: 'Setting'
	},
	BottomTab: {
		logoutAlert: 'Your account has been blocked!',
		logoutAlertReason: (reasonBlock: string) => `Reason: ${reasonBlock}`,
	},
	Transactionsrequireconfirmation:{
		title: "Transactionsrequireconfirmation",
	},
	ManageUser:{
		title: "ManageUser",
	},
	Home: {
		title: 'HOME',
		Listofservices: 'List of Services',
		all: 'All',
		outstandingservice: 'Outstanding Service',
		servicesavailable: 'No available services',
		filterCategory: (text: string) => `Service Category: ${text}`,
		all_service: 'All Services',
	},
	Notification: {
		title: 'NOTIFICATION',
		notifiavailable: 'No notifications available',
		delete_success: 'Delete successful!',
	},
	Order: {
		title: 'ORDER',
		all: 'All',
		pending: 'Pending',
		inprocess: 'In Progress',
		completed: 'Completed',
		canceled: 'Canceled',
	},
	OrderAll: {
		no_order: 'No orders!',
	},
	User: {
		title: 'PROFILE',
		activityStatusText: 'Activity Status',
		updateInfoButtonText: 'Update Information',
		addressButtonText: 'Address',
		changePasswordButtonText: 'Change Password',
		feeServiceText: 'Service Fee: ',
		blockedUsersButtonText: 'Blocked Users List',
		otherInfoText: 'OTHER INFORMATION',
		termsButtonText: 'Terms and Conditions',
		privacyPolicyButtonText: 'Privacy Policy',
		faqsButtonText: 'FAQs',
		settingsButtonText: 'Settings',
		logoutButtonText: 'Logout',
		logoutConfirmationMessage: 'Are you sure you want to log out?',
		unpaid: 'Unpaid',
		paid: 'Paid',
		wait: 'Pending Approval',
		ACCOUNT_MANAGEMENT: 'ACCOUNT MANAGEMENT',
		SERVICE: 'SERVICE',
	},
	Search: {
		title: 'SEARCH',
		entersearch: 'Enter search information',
		sort: 'Sort',
		filters: 'Filters',
		servicesavailable: 'No available services',
		sort1: 'Ascending Rating',
		sort2: 'Descending Rating',
		all: 'All',
	},
	DetailService: {
		title: 'SERVICE DETAILS',
		descriptionservicesL: 'Service Description',
		description: 'Review Content',
		suggestions: 'Suggestions for You',
		infomationprovider: 'Service Provider Information',
		booking: 'Book Appointment',
		evulate: 'Review',
		allevulate: 'See All Reviews',
		noevulate: 'No reviews available',
		servicerNotActive: 'This service provider is currently inactive!',
		servicerBlocked: 'You have been blocked by this user!',
		shareService: 'Share Service',
		shareMessage: (service: string, name: string, link: string) =>
			`Click the link to order the ${service} service. Shared by ${name}. Link: ${link}`,
		shareError: 'An error occurred!',
	},
	Booking: {
		title: 'BOOK APPOINTMENT',
		namecustomer: 'CUSTOMER NAME',
		phonecustomer: 'PHONE NUMBER',
		addresscustomer: 'ADDRESS',
		localaddress: 'Use Current Location',
		chooseaddress: 'Choose Address',
		datebooking: 'APPOINTMENT DATE',
		timebooking: 'APPOINTMENT TIME',
		desprolem: 'PROBLEM DESCRIPTION',
		image: 'IMAGES',
		choosebooking: 'CHOOSE APPOINTMENT DATE',
		booking: 'BOOK APPOINTMENT',
		alertMessage: 'Have you double-checked the information?',
		booking_success: (text: string) => `Appointment created successfully! ${text}`,
	},
	
	InfoServicer: {
		title: 'DETAILS',
		all: 'ALL SERVICES PROVIDED',
		noservicer: 'No services available',
		allevulate: 'ALL REVIEWS',
		noevulate: 'No reviews available',
	},
	AllReview: {
		title: 'ALL REVIEWS',
	},
	NotificationDetail: {
		title: 'Notification Details',
	},
	ChangePassword: {
		title: 'CHANGE PASSWORD',
		enterpass: 'ENTER CURRENT PASSWORD',
		enterpassnew: 'ENTER NEW PASSWORD',
		enterpassnew1: 'CONFIRM NEW PASSWORD',
		currentPasswordIncorrect: 'Incorrect current password!',
		passwordMismatch: 'Password confirmation mismatch!',
		confirmChangePassword: 'Are you sure you want to change the password?',
		changePasswordSuccess: 'Password changed successfully!',
		changePasswordFailure: 'Failed to change password',
	},
	Setting: {
		title: 'SETTINGS',
		listLanguage: ['Vietnamese', 'English', 'Chinese', 'Japanese', 'Korean'],
		Language: 'Language',
	},
	TermsAndConditions: {
		title: 'PRIVACY POLICY',
		HTML: TERM.EN,
	},
	UpdateInformation: {
		title: 'UPDATE INFORMATION',
		fullname: 'FULL NAME',
		phonenumber: 'PHONE NUMBER',
		addresss: 'Address',
		save: 'SAVE',
		showmessagename: 'Name is missing',
		missingPhoneNumber: 'Phone number is missing',
		saveSuccess: 'Saved successfully',
		saveFailure: 'Failed to save information',
	},
	ListAddress: {
		title: 'ADDRESS BOOK',
		addaddress: 'Add Address',
		noaddress: 'No address information',
		name: 'Name: ',
		phone: 'Phone: ',
		address: 'Address: ',
		deleteConfirm: 'Do you want to delete?',
	},

	DetailOrder: {
		title: 'ORDER DETAILS',
		status: 'Status',
		description: 'Description',
		timebooking: 'Booking Time',
		appointmentschedule: 'Appointment Schedule',
		address: 'Address',
		reason: 'Reason',
		result: 'Result',
		cancel: 'Cancel',
		comform: 'Confirm',
		complete: 'Complete',
		report: 'Report',
		evulate: 'Review',
		Provideslevelresults: 'Provide Results',
		des: 'Please upload result images for reference in case of issues',
		des1: 'Service does not match description',
		other: 'Other',
		cancelorder: 'CANCEL ORDER',
		enterdes: 'ENTER REASON',
		enterdo: 'Please enter a reason',
		confirmSuccess: 'Confirmation successful!',
		orderCancelled: 'Order has been cancelled!',
		cancelSuccess: 'Order cancellation successful!',
		cannotCancel: 'Cannot cancel!',
		orderInProcess: 'Order has been confirmed and is in progress!',
		completionSuccess: 'Order completed!',
		reportPrompt: 'Report',
		reportDescription1: 'Service does not match description',
		reportOther: 'Other',
		reportEnterDescription: 'Enter reason',
		reportCancel: 'Cancel',
		reportSubmit: 'Submit',
	},
	AddService: {
		title: 'ADD SERVICE',
		category: 'SERVICE CATEGORY',
		selectCategory: 'Select service category',
		serviceName: 'SERVICE NAME',
		image: 'IMAGE',
		uploadImage: 'Upload image',
		description: 'DESCRIPTION',
		addService: 'ADD',
		editService: 'EDIT',
		confirmCheckInfo: 'Are you sure you have checked the information?',
		successMessage: 'Service added successfully',
		editMessage: 'Service edited successfully!',
	},
	AcceptServicer: {
		title: 'ACCOUNT APPROVAL',
		date: (text: string) => `Registration Date: ${text}`,
	},
	Payment: {
		title: 'PAYMENT',
		feeservicer: 'Service Fee',
		payfees: '50,000 VND/month',
		bank: 'Bank',
		bankname: 'Techcombank',
		numberaccount: 'Account Number',
		nameaccount: 'Account Holder Name',
		descriptsion: 'Description',
	},
	EvaluateService: {
		title: 'SERVICE REVIEW',
		description: 'Review Content',
		enterdescription: 'Enter review',
		image: 'Image',
		evulate: 'Review',
		successMessage: 'Review successful',
	},
	PrivacyPolicy: {
		title: 'TERMS AND CONDITIONS',
		HTML: POLICY.EN,
	},
	FAQ: {
		title: 'FREQUENTLY ASKED QUESTIONS',
		content: 'Here is an example of some frequently asked questions (FAQs) for the Maintenance and Repair Services mobile app.',
		question: 'Question ',
		answer: '- Answer: ',
	},
	HomeAdmin: {
		title: 'HOME',
		AccountWitingForApproval: 'Account pending approval',
		AccountUserManager: 'MANAGE USER ACCOUNT',
		AccountProviderManager: 'SUPPLIER ACCOUNT MANAGEMENT\nSERVICE PROVIDER',
		BROWSEWAYSTODEPOSIT:'BROWSE WAYS TO DEPOSIT',
		
	},
	HomeServicer: {
		title: 'ORDERS',
		pending: 'Pending',
		inprocess: 'In Progress',
		completed: 'Completed',
		canceled: 'Cancelled',
	},
	Listblock: {
		title: 'BLOCKED LIST',
		block: 'Block',
		enterPhoneNumber: 'Please enter a phone number.',
		invalidPhoneNumber: 'Invalid phone number.',
		blockSuccess: 'Phone number blocked successfully!',
		confirmDelete: 'Are you sure you want to delete?',
		deleteSuccess: 'Delete successful!',
	},
	OrderServicer: {
		title: 'MY SERVICES',
		servicesavailable: 'You have no services',
		confirmDelete: 'Are you sure you want to delete?',
		deleteSuccess: 'Service deleted successfully!',
	},
	StatusOrder: {
		OrderPending: 'OrderPending',
		OrderCanceled: 'OrderCanceled',
		OrderInProcess: 'OrderInProcess',
		OrderCompleted: 'OrderCompleted',
	},
	AddPayment:{
		title: "THÊM PHƯƠNG THỨC THANH TOÁN",
		
	}
};
