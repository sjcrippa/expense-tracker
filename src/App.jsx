import React from 'react';
import { GlobalProvider } from './context/GlobalState';

import Balance from './components/Balance';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import IncomeExpenses from './components/IncomeExpenses';
import ExpenseGraphic from './components/ExpenseGraphic';

const App = () => {
	return (
		<GlobalProvider>
			<main className='text-white h-full mb-10 flex flex-col justify-center items-center overflow-y-visible'>
				<h1 className='mt-5 mb-5 text-4xl font-bold'>Expense Tracker</h1>
				{/* father flex */}
				<div className='bg-zinc-800 p-5 rounded-lg flex flex-col md:flex md:flex-row gap-x-5 md:w-4/6 xl:w-3/6'>
					{/* child of the flex, one column */}
					<div>
						<TransactionForm />
						<IncomeExpenses />
						<Balance />
					</div>
					{/* child of the flex, one column */}
					<div className='flex flex-col flex-1'>
						<ExpenseGraphic />
						<TransactionList />
					</div>
				</div>
			</main>
		</GlobalProvider>
	)
}

export default App