/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {

    const [produtos, setProdutos] = useState([]);
    const [total, setTotal] = useState(0);
    const contexto = {
        produtos, 
        setProdutos,
        total,
        setTotal
    }

    return ( 
        <OrderContext.Provider value={contexto}>
            { children }
        </OrderContext.Provider>    
    );
}

export default OrderProvider;