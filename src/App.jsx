import React from 'react'

import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'

const App = () => {
	return (
		<GlobalProvider>
			<Header />
			<Balance />
			<TransactionForm />
			<h1>Hola Mundo!</h1>
		</GlobalProvider>
	)
}

export default App