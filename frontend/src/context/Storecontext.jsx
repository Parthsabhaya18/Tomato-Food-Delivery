import {createContext} from 'react';
import {food_list} from '../assets/assets'

export const Storecontext=createContext(null)
const StoreContextProvider=(props)=>{
    const contextvalue={
        food_list
    }
    return(
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
        )
}
export default StoreContextProvider