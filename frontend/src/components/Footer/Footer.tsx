import {FooterStyled} from "./Footer.styles.tsx";
import {GrLinkedin} from "react-icons/gr";


export default function Footer() {
    return (
        <FooterStyled>
            <span>Desenvolvido por Paulo Henrique Passella</span>
            <a href="https://www.linkedin.com/in/paulo-passella/" target="_blank" rel="noopener noreferrer">
                <GrLinkedin />
            </a>
        </FooterStyled>
    );
}
