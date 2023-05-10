//esto es un componente que va a englobar a otros y de esta forma cualquier dato dentro del provider va a poder ser accedido.
import { createContext } from "react";

export const Create = createContext();

export const GlobalProvider = ({children}) => {
    return (
        <Context.Provider value={{total: 100}}>
            {children}
        </Context.Provider>
    )
}