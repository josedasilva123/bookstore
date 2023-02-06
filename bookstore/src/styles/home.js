import styled from "styled-components"

export const StyledHomePageFlexGrid = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;

    .left{
        border: 1px solid;
        width: 100%;
    }

    .right{
        border: 1px solid;
        width: 100%;
        max-width: 400px;
    }

    @media (max-width: 900px){
        align-items: center;
        flex-direction: column;
    }
`