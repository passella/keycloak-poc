import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Produtos from "./components/Produtos/Produtos.tsx";
import Pessoas from "./components/Pessoas/Pessoas.tsx";
import Home from "./components/Home/Home.tsx";
import ApplicationContexProvider from "./contexts/ApplicationContext/ApplicationContex.tsx";
import Auth from "./components/Auth/Auth.tsx";
import Logout from "./components/Logout/Logout.tsx";


export async function postAction({params, request}) {
    console.log(params);
    console.log(request)
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/produtos", element: <Auth role="PRODUTOS"><Produtos/></Auth>},
            {path: "/pessoas", element: <Auth role="PESSOAS"><Pessoas/></Auth>},
            {path: "/logout/:code", element: <Logout/>}
        ]
    },
    {path: "/auth", element: <Auth/>},
    {path: "/logout", element: <App/>, action: {postAction}},
    {path: "*", element: <div>404</div>}
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApplicationContexProvider>
            <RouterProvider router={router}/>

        </ApplicationContexProvider>
    </React.StrictMode>,
)
