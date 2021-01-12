import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'


export const Container = styled.div`
`

export const Header = styled.div`
    display: flex;
    font-size: 3rem;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: black;
    margin: 0;
    padding: 1rem;

` 


export const Link = styled(RouterLink)`
     font-size: 2rem;
    color: white;

    :hover {
        color: #ccc;
        outline: none;
        text-decoration: none;
    }
`

export const Title = styled.h2`
    display: flex;
    font-size: 2.4rem;
    align-items: center;
    justify-content: center;
    color: white;
`