import React from 'react'
import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from '../context/GlobalState';

const ExpenseGraphic = () => {
    const { transactions } = useGlobalState();

    const totalIncome = transactions.filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => (acc += transaction.amount) ,0);
    
    const totalExpense = transactions.filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => (acc += transaction.amount) ,0) * -1;

    const totalExpensesPercentage = Math.round((totalExpense / totalIncome) * 100)

    const totalIncomePercentage = 100 - totalExpensesPercentage

    return (
        <VictoryPie
            colorScale={['#D23927', '#00C9A7']}
            data={[
                { x: 'Expenses', y: totalExpensesPercentage },
                { x: 'Incomes', y: totalIncomePercentage },
            ]}
            animate={{
                duration: 200,
            }}
            labels={({ datum }) => `${datum.y}%`}
            labelComponent={<VictoryLabel
                style={{
                    fill: 'white',
                }}
            />}
        />
    )
}

export default ExpenseGraphic