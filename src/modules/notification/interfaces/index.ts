export interface INotificationStateStore {
    notification_isLoading: boolean;
}

export interface INotificationResponse {
    bookingId: string;
    userId: string;
    title: string;
    message: string;
    is_read: boolean;
}