import React from 'react'

import { useGlobalState } from '../../context/GlobalState';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
    const { transactions } = useGlobalState()

    return (
        <section className='w-full h-full'>
            <div className='mt-5'>
                <h3 className='text-white text-xl font-bold w-full text-center mb-2'>History</h3>
                <ul className='mx-auto w-full lg:w-1/2'>
                    {
                        transactions.map(transaction => (
                            <TransactionItem transaction={transaction} key={transaction.id} />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default TransactionList