import React from 'react'

import { useGlobalState } from '../../context/GlobalState';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
    const { transactions } = useGlobalState()

    return (
        <>
            <h3 className='text-white text-xl font-bold w-full text-center mb-2'>History</h3>
            <ul className='mx-auto w-full md:w-1/2'>
                {
                    transactions.map(transaction => (
                        <TransactionItem transaction={transaction} key={transaction.id} />
                    ))
                }
            </ul>
        </>
    )
}

export default TransactionList