import React from 'react';
import { MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { Container, Header, LogImg, MenuContainer, MenuItemLink, Title } from './styles'; 

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>
        
        <MenuContainer>
            <Link to="/dashboard">
                <MdDashboard />
                DashBoard
            </Link>

            <Link to="/list/entry-balance">
                <MdArrowUpward />
                Entradas
            </Link>

            <Link to="/list/exit-balance">
                <MdArrowDownward />
                Saídas
            </Link>

            <Link to="#">
                <MdExitToApp />
                Menu
            </Link>
        </MenuContainer>
        </Container>

    );
}

export default Aside;