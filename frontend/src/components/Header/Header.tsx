import {HeaderLink, HeaderNav, HeaderStyled, HeaderTitle} from "./Header.styles.tsx";
import {useContext} from "react";
import {ApplicationContext} from "../../contexts/ApplicationContext/ApplicationContex.tsx";


export default function Header() {

    const {authService} = useContext(ApplicationContext);

    return (
        <HeaderStyled>
            <HeaderTitle>KeyCloak POC</HeaderTitle>
            <HeaderNav>
                <HeaderLink to="/">Home</HeaderLink>
                <HeaderLink to="/pessoas">Pessoas</HeaderLink>
                <HeaderLink to="/produtos">Produtos</HeaderLink>
                <HeaderLink onClick={() => authService.logout()}>Logout</HeaderLink>
            </HeaderNav>
        </HeaderStyled>
    );
}
