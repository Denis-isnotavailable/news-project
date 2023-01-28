import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PostPageStyled = styled.div`
    padding: 40px;

    h2 {
        margin-bottom: 12px;
        padding: 8px;
        border: 1px solid #c1bebe;
    }

    a {
        display: block;
        margin-bottom: 12px;
        padding: 8px;
        border: 1px solid #c1bebe;
    }

    p {
        font-size: 12px;
    }

    ul {
        list-style: none;
    }

    li {
        margin-bottom: 16px;
    }
`;

export const TextContainer = styled.div`    
    margin-bottom: 12px;
    padding: 8px;
    border: 1px solid #c1bebe;

    p {
        margin-bottom: 8px;
        font-size: 16px;
    }
`;

export const AuthorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    color: #701515;
`;

export const CommentsContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: baseline;
    margin-bottom: 12px;
    padding: 8px;

    button {
        position: absolute;
        top: 8px;
        right: 8px;
        border: 1px solid #c1bebe;
        border-radius: 5px;
        background-color: #f1d0df;
        cursor: pointer;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)
    }

    button:hover {        
        background-color: #a0e4f5;
    }
`;

export const BackButton = styled(NavLink)`
    width: 90px;
    margin-bottom: 20px;
    padding: 12px 20px 12px 20px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid #c1bebe;
    font-size: 20px;
    font-weight: 700;
    color: #000000;    
    text-decoration: none;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        background-color: #c1bebe;
    }
`;