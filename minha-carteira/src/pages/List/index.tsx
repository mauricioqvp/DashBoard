import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content } from './styles';

const List: React.FC = () => {

    const options = [
        { value: 'Mauricio', label: 'Mauricio' },
        { value: 'Paula', label: 'Paula' },
        { value: 'Cláudia', label: 'Cláudia' }
    ];

    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={options} />
            </ContentHeader>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2022"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2022"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2022"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2022"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2022"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2022"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2022"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2022"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2022"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2022"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2022"
                    amount="R$ 130,00"
                />

                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="27/07/2022"
                    amount="R$ 130,00"
                />
            </Content>
        </Container>
    );
}

export default List;