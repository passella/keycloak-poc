export interface AuthService {
    isAuthenticated(): boolean
    authenticate(): void
    isAuthenticationCallBack(): boolean
    login(): void
    logout(): void

    isAuthorized(role: string): boolean;

    cleanLogout(code: string): void;
}
