import { useGlobalState } from "../context/GlobalState";

const Balance = () => {
    //acces to the data in GlobalState
    const {transactions} = useGlobalState();
    
    //el transactions es un array de objetos, cada obj tiene un id, un description y un amount. Para calcular el balance solo necesitamos el amount del objeto, entonces lo vamos a recorrer con un map y extraer el monto.
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acumulador, item) => (acumulador += item), 0);
    
    return (
        
        <div className="flex justify-between">
            <h3>Balance</h3>
            {/* el ,2 para que se vea uno abajo del otro, supuestamente. */}
            <h1 className="text-2xl font-bold">${total}</h1>
        </div>
    )
}

export default Balance;