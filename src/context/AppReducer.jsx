// al hacer una operacion, necesitamos crear un objeto con un type en la que se da cierta orden:
/* {
    type: 'ADD_TRANSACTION',
    payload: -20
} */

export default (state, action) => {
    switch(action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions:[...state.transactions, action.payload],
            }; // transactions antes era un array vacio, con el operador spreed lo copiamos y le aniadimos un nuevo elemento.
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload) // el action.payload es el id que nos pasan, si es distinto, se va a mantener en el array. Si la transaccion es igual no se aniade en el nuevo array, se estaria quitando el id que estoy buscando del array de transactions.
            }
        default:
            return state
    }
}