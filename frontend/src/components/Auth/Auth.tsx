import {useContext} from "react";
import {ApplicationContext} from "../../contexts/ApplicationContext/ApplicationContex.tsx";
import Home from "../Home/Home.tsx";

export default function Auth({children, role}: Readonly<{ children: React.ReactNode, role: string }>) {

    const {authService} = useContext(ApplicationContext);


    if (authService.isAuthenticationCallBack()) {
        authService.authenticate()
        return null;
    } else if (!authService.isAuthenticated()) {
        authService.login();
        return null;
    } else if (role && !authService.isAuthorized(role)) {
        return <Home/>;
    }

    return children;
}
