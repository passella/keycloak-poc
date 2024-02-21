import React, {ReactNode, useMemo} from 'react';
import {AuthService} from "../../services/AuthService/AuthService.tsx";
import {KeyCloakAuthService} from "../../keycloak/services/AuthService/KeyCloakAuthService.tsx";
import ReactToastifyNotificationServiceImpl from "../../services/NotificationService/ReactToastifyNotificationServiceImpl.tsx";
import NotificationService from "../../services/NotificationService/NotificationService.tsx";


interface ApplicationContextType {
    authService: AuthService;
    notificationService: NotificationService;
}

export const ApplicationContext = React.createContext<ApplicationContextType | null>(null);


export default function ApplicationContexProvider({children}: ReactNode) {
    function buildApplicationContext() {
        return {
            authService: new KeyCloakAuthService(),
            notificationService: new ReactToastifyNotificationServiceImpl(),
        };
    }

    const value = useMemo(() => buildApplicationContext(), []);

    return (
        <ApplicationContext.Provider value={value}>
            {children}
        </ApplicationContext.Provider>
    )
}
