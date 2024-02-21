import {useContext, useEffect} from "react";
import {Navigate, useParams} from "react-router-dom";
import {ApplicationContext} from "../../contexts/ApplicationContext/ApplicationContex.tsx";

export default function Logout() {
    const {code} = useParams();
    const {authService} = useContext(ApplicationContext)

    useEffect(() => {
        authService.cleanLogout(code)
    }, [code]);

    return <Navigate to="/"/>;
}
