import React from 'react'
import { useGlobalState } from '../context/GlobalState'

const IncomeExpenses = () => {

    const { transactions } = useGlobalState()

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts.filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0);

    const expense = amounts.filter(item => item < 0)
        .reduce((acc, item) => acc += item, 0) * -1;

    return (
        <>
            <section className='md:mb-10 md:mt-10'>
                <div className='flex justify-between my-2 text-emerald-500 font-bold'>
                    <h4>Income</h4>
                    <h4>{income}</h4>
                </div>
                <div className='flex justify-between my-2 text-red-500 font-bold'>
                    <h4>Expense</h4>
                    <h4>{expense}</h4>
                </div>
            </section>
        </>
    )
}

export default IncomeExpenses