import React from 'react';
import { GlobalProvider } from './context/GlobalState';

import Balance from './components/Balance';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import IncomeExpenses from './components/IncomeExpenses';

const App = () => {
	return (
		<GlobalProvider>
			<div className='bg-zinc-950 text-white h-screen flex justify-center items-center'>
				{/* father flex */}
				<div className='container mx-auto w-3/6'>
					<div className='bg-zinc-800 p-10 rounded-lg flex gap-x-2'>
						{/* child of the flex, one column */}
						<div>
							<h1 className='text-4xl font-bold'>Expense Tracker</h1>
							<IncomeExpenses />
							<Balance />
							<TransactionForm />
						</div>
						{/* child of the flex, one column */}
						<div className='w-full'>
							<TransactionList />
						</div>
					</div>
				</div>
			</div>
		</GlobalProvider>
	)
}

export default App