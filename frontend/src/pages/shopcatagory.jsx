<<<<<<< HEAD
import React, { useContext } from "react";
import './css/ShopCategory.css'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from "../components/items/item.jsx";
import { ShopContext } from "../context/ShopContext";

const ShopCatagory = (props) =>{
    const {all_products} = useContext(ShopContext);
    console.log(all_products)
    return(
        <div className="shop-category">
            <img src={props.banner} alt="" />
            <div className="shopcategory-indexsort">
                <p>
                    <span>Showing 1-12</span> out of 36 Products
                </p>
                <div className="shopcategory-sort">
                    sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcatagory-products">
                {all_products.map((item,i)=>{
                    // console.log(props)
                    if(props.category === item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
                    }
                    else{
                        return null
                    }
                })}
                
            </div>
        </div>
    )
}

=======
import React, { useContext } from "react";
import './css/ShopCategory.css'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from "../components/items/item.jsx";
import { ShopContext } from "../context/ShopContext";

const ShopCatagory = (props) =>{
    const {all_products} = useContext(ShopContext);
    console.log(all_products)
    return(
        <div className="shop-category">
            <img src={props.banner} alt="" />
            <div className="shopcategory-indexsort">
                <p>
                    <span>Showing 1-12</span> out of 36 Products
                </p>
                <div className="shopcategory-sort">
                    sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcatagory-products">
                {all_products.map((item,i)=>{
                    // console.log(props)
                    if(props.category === item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
                    }
                    else{
                        return null
                    }
                })}
                
            </div>
        </div>
    )
}

>>>>>>> 9980159c64e0c343b8cd217f429668a136834125
export default ShopCatagory