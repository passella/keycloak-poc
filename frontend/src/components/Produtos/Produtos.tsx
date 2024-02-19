import {useContext} from "react";
import {ApplicationContext} from "../../contexts/ApplicationContext/ApplicationContex.tsx";

export default function Produtos() {

    const {tokenService} = useContext(ApplicationContext);

    function handleOnClick() {
        alert(tokenService.getToken())
    }

    return (
        <div>
            <div>
                <h1>Produtos</h1>
                <button onClick={handleOnClick}>Clique aqui</button>
            </div>
        </div>
    )
}
