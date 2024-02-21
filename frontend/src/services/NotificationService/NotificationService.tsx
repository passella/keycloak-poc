export default interface NotificationService {
    success(message: string): void
    error(message: string): void
}
