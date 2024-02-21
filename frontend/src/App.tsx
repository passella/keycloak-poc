import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {AppStyled} from "./App.styles.tsx";
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
    return (
        <AppStyled>
            <Header/>
            <Outlet/>
            <Footer/>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"/>
        </AppStyled>
    )
}
