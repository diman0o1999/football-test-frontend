import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Grid3x3Gap, ListUl} from "react-bootstrap-icons";

import NavItem from '../NavItem'


/**
 * Главный шаблон страниц
 */
export default ({children}) => (
    <>
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand>Тестовое задание</Navbar.Brand>
            <Nav className='ml-auto'>
                <NavItem href='/authors' Icon={Grid3x3Gap}>Авторы статей</NavItem>
                <NavItem href='/posts' Icon={ListUl}>Полный список статей</NavItem>
            </Nav>
        </Navbar>
        {children}
    </>
)