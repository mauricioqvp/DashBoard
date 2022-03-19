import React, { useMemo } from 'react';
import Toggle from '../Toggle';
import { Container, Profile, Welcome, UserName } from './styles'; 


import emojis from '../../utils/emojs';

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {

        const indice = Math.floor(Math.random()* emojis.length);
        return emojis[indice];
    },[]);

    return (
        <Container>
            <Toggle />
            <Profile>
                <Welcome>Olá, {emoji} </Welcome>
                <UserName>Maurício Quaranta</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;