import React, {ReactNode, useContext, useEffect, useState} from "react";
import {ApplicationContext} from "../../contexts/ApplicationContext/ApplicationContex.tsx";
import {Navigate} from "react-router-dom";


export default function Auth({children, role}: Readonly<{ children: ReactNode, role: string }>) {

    const {authService, notificationService} = useContext(ApplicationContext);
    const [isAuthorized, setIsAuthorized] = useState(true);

    useEffect(() => {
        if (role && !authService.isAuthorized(role)) {
            notificationService.error("Usuario sem autorização para acessar essa rota!");
            setIsAuthorized(false);
        }
    }, [role]);

    if (authService.isAuthenticationCallBack()) {
        authService.authenticate()
        return null;
    } else if (!authService.isAuthenticated()) {
        authService.login();
        return null;
    } else if (!isAuthorized) {
        return <Navigate to="/">

        </Navigate>
    }

    return children;
}
