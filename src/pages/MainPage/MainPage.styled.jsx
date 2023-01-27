import styled from "styled-components";

export const MainPageStyled = styled.ul`
    /* margin-top: 16px; */
    padding: 40px;
    list-style: none;

    li {
        margin-bottom: 8px;
        padding: 8px;
        border: 1px solid #c1bebe;
        border-radius: 10px;
        cursor: pointer;

        transition: 
            background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
            transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    li:hover,
    li:focus {
        transform: scale(1.05);
        background-color: #c1bebe;
    }

    h2 {
        font-size: 18px;
    }

    div {
        display: flex;
    }

    p {
        margin-right: 20px;
    }

    span {
        color: #ab0707;
        font-weight: 500;
    }
`;