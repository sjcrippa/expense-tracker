import React, { useState } from 'react'

const TransactionForm = () => {
    // this is the info that the user puts to explain the expenses.
    const [description, setDescription] = useState();
    const [amount, setAmount] = useState(0);

    return (
        <>
            <div>
                <form>
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