import React, { createContext } from "react";
import all_products from '../components/assets/all_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (props)=>{
    const contextvalue = {all_products};

    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
            
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;