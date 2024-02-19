import React, {ReactNode, useMemo} from 'react';
import {AuthService} from "../../services/AuthService/AuthService.tsx";
import {KeyCloakAuthService} from "../../keycloak/services/AuthService/KeyCloakAuthService.tsx";


interface ApplicationContextType {
    authService: AuthService;
}

export const ApplicationContext = React.createContext<ApplicationContextType | null>(null);


export default function ApplicationContexProvider({children}: ReactNode) {
    function buildApplicationContext() {
        return {
            authService: new KeyCloakAuthService()
        };
    }

    return (
        <ApplicationContext.Provider value={useMemo(() => buildApplicationContext(), [])}>
            {children}
        </ApplicationContext.Provider>
    )
}
