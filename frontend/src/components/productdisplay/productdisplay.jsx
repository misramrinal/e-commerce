<<<<<<< HEAD
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
                <div className="right-description">
                    Blah Blah Blah
                </div>
                <div className="right-size">
                    <h1>Select Size</h1>
                    <div className="sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button className="button">ADD TO CART</button>
            </div>
        </div>
        
    )
}
=======
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
>>>>>>> 9980159c64e0c343b8cd217f429668a136834125
export default ProductDisplay