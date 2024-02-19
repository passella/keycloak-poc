export default class Token {
    private token: string;

    constructor(token: unknown) {
        this.token = token;
    }

    getAccessToken(): string {
        return this.token.access_token
    }

    getExpiresIn(): number {
        return this.token.expires_in
    }
    getRefresExpiresIn(): number {
        return this.token.refresh_expires_in
    }
    getRefreshToken(): string {
        return this.token.refresh_token
    }
    getTokenType(): string {
        return this.token.token_type
    }

    getNotBeforePolicy(): number {
        return this.token.not_before_policy
    }

    getSessionState(): string {
        return this.token.session_state
    }

    getScope(): string {
        return this.token.scope
    }

    getRoles(): string[] {
        const decodedToken = JSON.parse(atob(this.token.access_token.split(".")[1]));
        return decodedToken.realm_access.roles;
    }

}
