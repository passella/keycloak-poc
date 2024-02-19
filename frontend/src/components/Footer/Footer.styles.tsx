import styled from "styled-components";

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #f7f7f7;
    border-top: 1px solid #ddd;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    span {
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        color: #333;
    }

    a {
        margin-left: 10px;
        color: #333;
        text-decoration: none;
        transition: 0.2s ease-in-out;

        &:hover {
            color: #000;
        }
    }
`;
