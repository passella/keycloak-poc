import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderStyled = styled.header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderNav = styled.nav`
    display: flex;
    gap: 10px
`;

export const HeaderTitle = styled.h1`
    font-family: "Roboto", sans-serif;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    color: #333;
    background-color: #fff;
    padding: 10px 20px;
    margin: 0;
    transition: 0.2s ease-in-out;
`;

export const HeaderLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: #ddd;
    }
`;
