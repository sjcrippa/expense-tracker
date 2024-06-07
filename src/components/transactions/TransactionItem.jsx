import React from 'react';

import TrashIcon from '../../icons/Icons';
import { useGlobalState } from '../../context/GlobalState';

const TransactionItem = ({ transaction }) => {
    const { deleteTransaction } = useGlobalState()

    const formattedAmount = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'USD'
    }).format(transaction.amount);

    return (
        <li className='bg-zinc-600 text-white px-3 py-2 rounded-lg mb-2 w-full flex justify-between items-center gap-5'>
            <p className='text-sm font-semibold'>{transaction.description}</p>
            <div className='flex flex-row items-center'>
                <span className='font-semibold'>{formattedAmount}</span>
                <button
                    onClick={() => {
                        deleteTransaction(transaction.id);
                    }}
                    className='ml-4 items-center'>
                    <TrashIcon />
                </button>
            </div>
        </li>
    )
};

export default TransactionItem;