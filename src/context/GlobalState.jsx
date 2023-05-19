//esto es un componente que va a englobar a otros y de esta forma cualquier dato dentro del provider va a poder ser accedido.
import { createContext, useContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {
    transactions: []
};

export const Context = createContext();

export const useGlobalState = () => {
    const context = useContext(Context);
    return context;
};
export const GlobalProvider = ( {children} ) => {
    // dispatch = setState. Same idea.
    const [state, dispatch] = useReducer( AppReducer , initialState);

    const addTransaction = (transaction) => {
        dispatch({
            //al ejecutar dispatch, espera un type que seria el nombre de la operacion que queremos ejecutar.
            type:'ADD_TRANSACTION',
            //el payload es el dato que le vamos a pasar a ese valor.
            payload: transaction
        })
    };

    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }
    
    return (
        <Context.Provider value={{
            // here we export the functions that operate in the Reducer:
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </Context.Provider>
    )
}