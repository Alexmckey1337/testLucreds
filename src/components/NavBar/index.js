import React from 'react';
import styled from 'styled-components';
import { FaBeer,FaBell,FaUser } from 'react-icons/fa';

const StyledNav = styled.div`
    width:100%;
    background:lightBlue;
    display:flex;
    align-items:center;
    height:4rem;
    & .buttons {
        width:10rem;
        margin-left:auto;
        margin-right:3rem;
        display:flex;
        justify-content: space-around;
        align-items:center;
    }
    & input {
        outline: none;
    }
    & input[type=search] {
        -webkit-appearance: textfield;
        -webkit-box-sizing: content-box;
        font-family: inherit;
        font-size: 100%;
    }
    & input::-webkit-search-decoration,
    & input::-webkit-search-cancel-button {
        display: none; 
    }
    
    
    & input[type=search] {
        background: #ededed url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
        border: solid 1px #ccc;
        padding: 9px 10px 9px 32px;
        width: 55px;
        
        -webkit-border-radius: 10em;
        -moz-border-radius: 10em;
        border-radius: 10em;
        
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        transition: all .5s;
    }
    & input[type=search]:focus {
        width: 130px;
        background-color: #fff;
        border-color: #66CC75;
        
        -webkit-box-shadow: 0 0 5px rgba(109,207,246,.5);
        -moz-box-shadow: 0 0 5px rgba(109,207,246,.5);
        box-shadow: 0 0 5px rgba(109,207,246,.5);
    }
    & input[type=search] {
        width: 15px;
        padding-left: 10px;
        color: transparent;
        cursor: pointer;
        & :hover { 
            background-color: #fff;
        }
        & :focus { 
            width: 130px;
            padding-left: 32px;
            color: #000;
            background-color: #fff;
            cursor: auto;
        }
    }

`
const StyledButton = styled.button`
    width:2.5rem;
    height:2.5rem;
    background: white;
    border-radius: 50%;
    display:flex;
    align-items:center;
`


export const NavBar = () => {

   return (<StyledNav>
       <FaBeer color="blue" size="2em" style={{marginLeft:'5rem'}}/>
       <div className="buttons">
           <input type="search"  />
           <StyledButton><FaBell color="blue" size="2em"/></StyledButton>
           <StyledButton><FaUser color="blue" size="2em"/></StyledButton>
       </div>
    </StyledNav>) 
}