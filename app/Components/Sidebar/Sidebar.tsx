"use client"
import React from "react";
import styled from 'styled-components';
import { useGlobalState } from "@/app/context/globalProvider"

export default function Sidebar(){
    const { theme } = useGlobalState();
    
    return <SidebarStyled theme={theme}>Sidebar</SidebarStyled>;
}

const SidebarStyled = styled.nav`
    position: relative;
    width: ${(props) => props.theme.sidebarWidth};
    background-color: ${(props) => props.theme.colorBg2};
`;