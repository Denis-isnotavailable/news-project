import styled from "styled-components";

export const DiscussionAreaStyled = styled.div`
    ul {
        margin-top: 8px;
    }
    button {
        margin-top: 8px;
        font-size: 12px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)
    }

    button:hover {        
        background-color: #a0e4f5;
    }
`;