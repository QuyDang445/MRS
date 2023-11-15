export enum FONT_FAMILY {
	REGULAR = 'Signika-Regular',
	SEMI_BOLD = 'Signika-SemiBold',
	BOLD = 'Signika-Bold',
}

export enum ASYNC_STORAGE_KEY {
	FIRST_OPEN = 'FIRST_OPEN',
}

export enum EMIT_EVENT {
	DATA_LOGIN = 'DATA_LOGIN',
	CHECK_SCREEN_ORDER = 'CHECK_SCREEN_ORDER',
	LOGOUT = 'LOGOUT',
	LOAD_SERVICE = 'LOAD_SERVICE',
}

export enum TYPE_USER {
	USER = 'USER',
	ADMIN = 'ADMIN',
	SERVICER = 'SERVICER',
}


export enum TABLE {
    USERS = 'USERS',
    ADDRESS = 'ADDRESS',
    ORDERS = 'ORDERS',
    ADMIN = 'ADMIN',
    CATEGORY_SERVICE = 'CATEGORY_SERVICE',
    SERVICE = 'SERVICE',
    CATEGORY = 'CATEGORY',
    NOTIFICATION = 'NOTIFICATION',
    SERVICE_BLOCK_USER = 'SERVICE_BLOCK_USER',
    EVALUATE = 'EVALUATE',
    PAYMENT_FEE_SERVICE = "PAYMENT_FEE_SERVICE"
}

export enum TYPE_BLOCK_SERVICER {
	ReportedManyTimes = 'ReportedManyTimes',
	LatePaymentOfFees = 'LatePaymentOfFees',
	Other = 'Other',
	ThereIsUnusualSpamBehavior = 'ThereIsUnusualSpamBehavior',
}

export enum TYPE_ORDER_SERVICE {
	OrderPending = 'OrderPending',
	OrderCanceled = 'OrderCanceled',
	OrderInProcess = 'OrderInProcess',
	OrderCompleted = 'OrderCompleted',
}
export enum NOTIFICATION_TYPE {
	BOOKING_SUCCESS = 'BOOKING_SUCCESS',
	BOOKING_CONFIRMED = 'BOOKING_CONFIRMED',
	BOOKING_DONE = 'BOOKING_DONE',
	BOOKING_CANCEL = 'BOOKING_CANCEL',
	NEW_BOOKING = 'NEW_BOOKING',
	BOOKING_EVALUATE = 'BOOKING_EVALUATE',
	NEW_PAYMENT = 'NEW_PAYMENT',
	NEW_SERVICER = 'NEW_SERVICER',
}
