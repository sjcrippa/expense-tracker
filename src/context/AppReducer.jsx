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
            }; // transactions antes era un array vacio, con el operador spreed lo copiamos y le aniadimos un nuevo elemento
        default:
            return state
    }
}