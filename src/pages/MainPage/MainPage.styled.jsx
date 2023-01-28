import styled from "styled-components";

export const MainPageStyled = styled.ul`
    /* margin-top: 16px; */
    padding: 40px;
    list-style: none;

    button {
        cursor: pointer;
        margin-bottom: 20px;
        padding: 12px 20px 12px 20px;
        border-radius: 10px;
        border: 1px solid #c1bebe;
        font-size: 20px;
        font-weight: 700;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    button:hover {
        background-color: #c1bebe;
    }



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