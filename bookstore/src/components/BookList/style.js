import styled from "styled-components";

export const StyledBookList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    li{
        border: 1px solid;
        width: 100%;
    }

    @media (max-width: 1150px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 450px){
        display: flex;
        overflow: auto;

        li{
            min-width: 280px;
        }
    }
`