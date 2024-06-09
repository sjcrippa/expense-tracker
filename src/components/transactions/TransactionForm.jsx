import React, { useState } from 'react'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

import { useGlobalState } from '../../context/GlobalState';

const TransactionForm = () => {
    // this is the info that the user puts to explain the expenses.
    const { addTransaction, transaction } = useGlobalState();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        if (description === '' || amount === '' || isNaN(amount) || amount === 0) {
            Toastify({
                text: "Ops, you need to add a description and a value!",
                duration: 3000,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                style: {
                    background: "rgb(239, 68, 68)",
                },
            }).showToast()
            return;
        }

        addTransaction({
            // we need to give an unique id number for each movement, so we will use a library named crypto through the browser
            id: window.crypto.randomUUID(),
            description,
            amount: +amount, //gracias al +, cualquier string que reciba se convertira en un number
        })

        Toastify({
            text: "You have added a transaction!",
            duration: 3000,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            style: {
                background: "rgb(99, 102, 241)",
            },
        }).showToast();

        setAmount(0);
        setDescription('');
    }

    return (
        <>
            <section>
                <form onSubmit={onSubmit}>
                    <input
                        className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full '
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        placeholder='Enter a Description'
                        value={description} />

                    <input
                        className='bg-zinc-600 red text-white px-3 py-2 rounded-lg block mb-2 w-full '
                        onChange={(e) => setAmount(e.target.value)}
                        step='0.01'
                        type="number"
                        placeholder='00.00'
                        value={amount} />

                    <button
                        className='bg-indigo-700 text-white px-3 py-2 rounded-lg mb-2 block w-full hover:bg-opacity-85'>
                        Add transaction
                    </button>
                </form>
            </section >
        </>
    )
}

export default TransactionForm