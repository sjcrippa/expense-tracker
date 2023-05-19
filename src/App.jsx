import React from 'react';
import { GlobalProvider } from './context/GlobalState';

import Header from './components/Header';
import Balance from './components/Balance';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import IncomeExpenses from './components/IncomeExpenses';

const App = () => {
	return (
		<GlobalProvider>
			<Header />
			<IncomeExpenses />
			<Balance />
			<TransactionForm />
			<TransactionList />
			<h1>Hola Mundo!</h1>
		</GlobalProvider>
	)
}

export default App