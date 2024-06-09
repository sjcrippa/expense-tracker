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
    let colorScale = [];

    if (totalIncome > 0 && totalExpense > 0) {
        const total = totalIncome + totalExpense;
        const totalExpensesPercentage = Math.round((totalExpense / total) * 100);
        const totalIncomePercentage = 100 - totalExpensesPercentage;
        data = [
            { x: 'Expenses', y: totalExpensesPercentage },
            { x: 'Incomes', y: totalIncomePercentage },
        ];
        colorScale = ['rgb(239, 68, 68)', 'rgb(16, 185, 129)']; // rojo y verde
    } else if (totalIncome > 0) {
        data = [
            { x: 'Incomes', y: 100 },
        ];
        colorScale = ['rgb(16, 185, 129)']; // solo verde
    } else if (totalExpense > 0) {
        data = [
            { x: 'Expenses', y: 100 },
        ];
        colorScale = ['rgb(239, 68, 68)']; // solo rojo
    }

    return (
        <section className='w-full h-full text-center relative z-10'>
            {
                data.length > 0 ? (
                    <>
                        <section className='-z-10'>
                            <div className='w-full h-16 -mb-12 md:-mb-10 xl:-mb-20 red500flex justify-center items-center'>
                                <span className='font-semibold uppercase'>Expense Graphic</span>
                            </div>
                            <VictoryPie
                                colorScale={colorScale}
                                data={data}
                                animate={{
                                    duration: 500,
                                }}
                                labels={({ datum }) => `${datum.y}%`}
                                labelComponent={<VictoryLabel
                                    style={{
                                        fill: 'white',
                                    }}
                                />}
                            />
                        </section>
                    </>
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