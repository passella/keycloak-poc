import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {AppStyled} from "./App.styles.tsx";
import {Outlet} from "react-router-dom";


export default function App() {
    return (
        <AppStyled>
            <Header/>
            <Outlet/>
            <Footer/>
        </AppStyled>
    )
}
