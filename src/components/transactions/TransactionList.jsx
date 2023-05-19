import React from 'react'

import { useGlobalState} from '../../context/GlobalState';

const TransactionList = () => {
    const {transactions, deleteTransaction} = useGlobalState()

    return (
        <div>
            {
                transactions.map(transaction => (
                    <div 
                    className='flex gap-3'
                    key={transaction.id}>
                        <p>{transaction.description}</p>
                        <span>{transaction.amount}</span>
                        <button 
                        onClick={() => {
                            deleteTransaction(transaction.id);
                        }}
                        className=''>
                            X
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default TransactionList