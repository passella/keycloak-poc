import {AuthService} from "../../../services/AuthService/AuthService.tsx";
import Token from "./Token.tsx";


export class KeyCloakAuthService implements AuthService {
    cleanLogout(code: string): void {
        const localCode = sessionStorage.getItem("code");
        if (localCode && localCode === code) {
            this.token = null;
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("path");
            sessionStorage.removeItem("code");
        }
    }

    private isAuthenticating: boolean;
    private token: Token | null;


    constructor() {
        this.token = null;
    }


    private getToken(): Token | null {
        if (this.token === null) {
            const token = sessionStorage.getItem("token");
            if (token) {
                this.token = new Token(JSON.parse(token));
            }
        }
        return this.token;
    }

    private setToken(data: unknown) {
        this.token = new Token(data);
        sessionStorage.setItem("token", JSON.stringify(data));
    }


    isAuthenticated(): boolean {
        return (this.isAuthenticating) || (this.getToken() !== null);
    }

    authenticate() {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        if (code) {
            const headers = this.buildHeaders();
            const body = this.buildBody(code);
            const requestInit = this.buildRequestInit(headers, body);
            this.isAuthenticating = true
            fetch("http://localhost:8081/realms/POC/protocol/openid-connect/token", requestInit)
                .then((response) => response.json())
                .then((data) => this.handleKeyCloakCallBack(data, code))
                .catch((error) => this.handleException(error))
                .finally(() => this.handleKeyCloackCallBackFinally());
        }
    }

    private handleKeyCloackCallBackFinally() {
        this.isAuthenticating = false;
    }

    private handleKeyCloakCallBack(data, code: string) {
        this.setToken(data);
        this.storeCode(code);
        this.restorePath();
    }

    private buildRequestInit(headers: Headers, body: URLSearchParams) {
        const requestInit = {
            method: "POST",
            headers: headers,
            body: body,
            redirect: "follow"
        };
        return requestInit;
    }

    private buildHeaders() {
        const headers = new Headers();
        headers.append("Accept", "*/*");
        headers.append("Connection", "keep-alive");
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("Origin", "http://localhost:5173");
        headers.append("Referer", "http://localhost:5173/");
        headers.append("Sec-Fetch-Dest", "empty");
        headers.append("Sec-Fetch-Mode", "no-cors");
        headers.append("Sec-Fetch-Site", "same-site");
        return headers;
    }

    private buildBody(code: string) {
        const body = new URLSearchParams();
        body.append("code", code);
        body.append("grant_type", "authorization_code");
        body.append("client_id", "poc");
        body.append("client_secret", "00BtYbADiOYIy9AlekKi8Sl3kshQtkeL");
        body.append("redirect_uri", "http://localhost:5173/auth");
        return body;
    }

    private handleException(error) {
        console.error(error);
    }

    private storeCode(code: string) {
        sessionStorage.setItem("code", code);
    }

    private restorePath() {
        const path = sessionStorage.getItem("path");
        path && window.location.replace(path);
    }

    isAuthenticationCallBack(): boolean {
        return (!this.isAuthenticating) && (new URLSearchParams(window.location.search).has('code'));
    }

    login(): void {
        sessionStorage.setItem("path", window.location.pathname)
        const redirectUri = `${encodeURIComponent(window.location.origin + "/auth")}`;
        window.location.href = `http://localhost:8081/realms/POC/protocol/openid-connect/auth?client_id=poc&redirect_uri=${redirectUri}&response_type=code`;
    }

    logout(): void {
        const localCode = sessionStorage.getItem("code");
        const redirectUri = encodeURIComponent(`${window.location.origin}/logout/${localCode}`);
        window.location.href = `http://localhost:8081/realms/POC/protocol/openid-connect/logout?client_id=poc&post_logout_redirect_uri=${redirectUri}`;
    }

    isAuthorized(role: string): boolean {
        const token = this.getToken();
        if (token) {
            return token.getRoles().includes(role);
        }
        return false;
    }
}
