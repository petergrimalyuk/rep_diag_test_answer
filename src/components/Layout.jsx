import {React} from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Navbar,Nav,Container,NavDropdown} from "react-bootstrap";
import logo from "../imgs/logo.jpg";
const Layout = () => {
    return (
        <>
            <header>
                <Navbar className="bg-body-tertiary" fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                    <div className= "logo-block">
                    <img src = {logo} id = "logo"></img>
                    <div className="close"></div>
                 
                    </div>
                            <Nav className="mr-auto">
                                <div className="header-rows">
                                <NavLink to="/" id = "dashboard"> <p>Дашборд</p></NavLink>
                                <div class = "navd">
                                <NavDropdown title="Параметры" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/params">Модель здоровья клиента</NavDropdown.Item><br/>
                                    <NavDropdown.Item href="/params">Модель рекомендации<br/>целевых действий</NavDropdown.Item><br/>
                                    <NavDropdown.Item href="/params">Модель CrossSale/UpSale</NavDropdown.Item><br/>
                                </NavDropdown><br/>
                                </div>
                                <NavLink id = "subs" to="/subs"><p>Подписки</p></NavLink>
                                <NavLink id = "profile"  to="/profile"><p>Личный кабинет</p></NavLink>
                                <NavLink id = "settings" to="/settings"><p>Настройки</p></NavLink>
                                <NavLink  to="/login"><p>Вход</p></NavLink>
                                </div>
                            </Nav>
                    </Container>
                </Navbar>
                </header>
            <main className="container">
                <Outlet/>
            </main>
            
        </>
    )
}

export {Layout}