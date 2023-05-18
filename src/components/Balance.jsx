import { useGlobalState } from "../context/GlobalState";

const Balance = () => {
    //acces to the data in GlobalState
    const data = useGlobalState();
    
    return (
        
        <div>
            <h1>Balance</h1>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    )
}

export default Balance