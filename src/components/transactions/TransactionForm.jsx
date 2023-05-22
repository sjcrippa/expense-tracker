import React, { useState } from 'react'

import {useGlobalState} from '../../context/GlobalState';

const TransactionForm = () => {
    // this is the info that the user puts to explain the expenses.
    const { addTransaction} = useGlobalState();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            // we need to give an unique id number for each movement, so we will use a library named crypto through the browser
            id: window.crypto.randomUUID(),
            description,
            amount: +amount, //gracias al +, cualquier string que reciba se convertira en un number
        })
        setAmount(0);
        setDescription('');
    }

    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full '
                        onChange={(e) => setDescription(e.target.value)}
                        type="text" 
                        placeholder='Enter a Description'
                        value={description}/>
                        
                    <input
                        className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full '
                        onChange={(e) => setAmount(e.target.value)}
                        step='0.01'
                        type="number" 
                        placeholder='00.00'
                        value={amount}/>
                        
                        <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg mb-2 block w-full'>
                            Add transaction
                        </button>
                </form>
            </div>
        </>
    )
}

export default TransactionForm