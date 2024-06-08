import React from 'react'
import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from '../context/GlobalState';
import TransactionDoodle from '../assets/Images/TransationDoodle';

const ExpenseGraphic = () => {
    const { transactions } = useGlobalState();

    const totalIncome = transactions.filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0);

    const totalExpense = transactions.filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

    let data = [];

    if (totalIncome > 0 && totalExpense > 0) {
        const totalExpensesPercentage = Math.round((totalExpense / totalIncome) * 100);
        const totalIncomePercentage = 100 - totalExpensesPercentage;
        data = [
            { x: 'Expenses', y: totalExpensesPercentage },
            { x: 'Incomes', y: totalIncomePercentage },
        ];
    } else if (totalIncome > 0) {
        data = [
            { x: 'Incomes', y: 100 },
        ];
    } else if (totalExpense > 0) {
        data = [
            { x: 'Expenses', y: 100 },
        ];
    }

    return (
        <section className='w-full h-full text-center relative'>
            <div className='w-full h-16 -mb-12 md:-mb-10 xl:-mb-20 red500flex justify-center items-center'>
                <span className='font-semibold uppercase'>Expense Graphic</span>
            </div>
            {
                data.length > 0 ? (
                    <VictoryPie
                        colorScale={['rgb(16, 185, 129)', 'rgb(239, 68, 68)']}
                        data={data}
                        animate={{
                            duration: 400,
                        }}
                        labels={({ datum }) => `${datum.y}%`}
                        labelComponent={<VictoryLabel
                            style={{
                                fill: 'white',
                            }}
                        />}
                    />
                ) : (
                    <>
                        <div className='w-full flex justify-center bgemerald500'>
                            <TransactionDoodle />
                            <p className='text-center text-xl font-semibold text-indigo-500 absolute bottom-0'>
                                Add a transactions to see the graphic
                            </p>
                        </div>
                    </>
                )
            }
        </section>
    )
}

export default ExpenseGraphic