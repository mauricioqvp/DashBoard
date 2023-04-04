import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const Dashboard: React.FC = () => {

    const options = [
        { value: 'Mauricio', label: 'MauricioX'},
        { value: 'Caqui', label: 'Caqui'},
        { value: 'Pera', label: 'Pera'}
    ]

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#fff">
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;