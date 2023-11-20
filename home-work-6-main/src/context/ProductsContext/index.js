import React from "react";
import axios from "axios";

export const ProductsContext = React.createContext(null);


const ProductProvider = ({children}) => {
    const [products, setProducts] = React.useState([]);

    React.useEffect( () => {
       const getData = async () => {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);
            return response;
        };
        getData();
    }, []);

    

    return ( <ProductsContext.Provider value={{products, setProducts}}>
        {children}
    </ProductsContext.Provider>
    );
};

export default ProductProvider;