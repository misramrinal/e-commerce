<<<<<<< HEAD
import React from "react";
import './item.css'
import { Link } from "react-router-dom"
const Item = (props) => {
    // console.log(props)
    return(
        <div className="item">
            <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
            <p>
                {props.name}
            </p>
            <div className="item-prices">
                <div className="item-price-new">
                    Rs.{props.new_price}
                </div>
                <div className="item-price-old">
                    Rs.{props.old_price}
                </div>
            </div>
        </div>
    )
}

=======
import React from "react";
import './item.css'
import { Link } from "react-router-dom"
const Item = (props) => {
    // console.log(props)
    return(
        <div className="item">
            <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
            <p>
                {props.name}
            </p>
            <div className="item-prices">
                <div className="item-price-new">
                    Rs.{props.new_price}
                </div>
                <div className="item-price-old">
                    Rs.{props.old_price}
                </div>
            </div>
        </div>
    )
}

>>>>>>> 9980159c64e0c343b8cd217f429668a136834125
export default Item