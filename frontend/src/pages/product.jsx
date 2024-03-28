import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Blueprint from "../components/blueprint/blueprint";
import ProductDisplay from "../components/productdisplay/productdisplay";
const Product = () =>{
    const {all_products} = useContext(ShopContext)
    const {productID} = useParams()
    const product = all_products.find((e)=> {
        if(e.id == Number(productID)){
            console.log(e)
            return e
        }
        // console.log(productID)
    })
    return(
        <div>
            <Blueprint product={product}/>
            <ProductDisplay product={product}/>
        </div>
    )
}

export default Product