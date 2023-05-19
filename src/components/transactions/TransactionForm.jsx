import React, { useState } from 'react'

import {useGlobalState} from '../../context/GlobalState';

const TransactionForm = () => {
    // this is the info that the user puts to explain the expenses.
    const { addTransaction} = useGlobalState();
    const [description, setDescription] = useState();
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            // we need to give an unique id number for each movement, so we will use a library named crypto through the browser
            id: window.crypto.randomUUID(),
            description,
            amount
        })
    }

    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        className='border-2 border-black rounded-md m-2'
                        onChange={(e) => setDescription(e.target.value)}
                        type="text" 
                        placeholder='Enter a Description'/>
                    <input
                        className='border-2 border-black rounded-md m-2'
                        onChange={(e) => setAmount(e.target.value)}
                        step='0.01'
                        type="number" 
                        placeholder='00.00'/>
                        <button>
                            Add transaction
                        </button>
                </form>
            </div>
        </>
    )
}

export default TransactionForm