import React from 'react';
import styled from 'styled-components';
import { FaBeer } from 'react-icons/fa';

const StyledNav = styled.div`
    height: 100%;
    width: 3rem;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    & :first-child{ 
        margin-bottom:3rem;
    }
    & > * {
        padding:1rem 0;
    }
    & :last-child {
        margin-top:auto;
        margin-bottom:3rem;
    }
`

export const SideBar = () => {

   return (<StyledNav>
      <FaBeer color="white" size="1.5em" />
      <FaBeer color="white" size="1.5em" />
      <FaBeer color="white" size="1.5em" />
      <FaBeer color="white" size="1.5em" />
      <FaBeer color="white" size="1.5em" />
      <FaBeer color="white" size="1.5em" />       
    </StyledNav>) 
}