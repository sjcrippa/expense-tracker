// al hacer una operacion, necesitamos crear un objeto con un type en la que se da cierta orden:
/* {
    type: 'ADD_TRANSACTION',
    payload: -20
} */

export default (state, action) => {
    switch(action.type) {
        case 'ADD_TRANSACTION':
            return state
        default:
            return state
    }
}