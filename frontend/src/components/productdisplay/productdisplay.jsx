import React from "react";
import './productdisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
const ProductDisplay = (props) =>{
    const {product} = props;
    console.log("HI")
    return (
        <div className="productdisplay">
            <div className="display-left">
                <div className="display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="display-image">
                    <img className="display-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="display-right">
                <h1>{product.name}</h1>
                <div className="display-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>
                        (122)
                    </p>
                </div>
                <div className="display-right-prices">
                    <div className="price-old">Rs.{product.old_price}</div>
                    <div className="price-new">Rs.{product.new_price}</div>
                </div>
            </div>
        </div>
        
    )
}
export default ProductDisplay