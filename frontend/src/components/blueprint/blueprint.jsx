<<<<<<< HEAD
import React from "react";
import './blueprint.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

const Blueprint = (props) => {
    const {product} = props
    console.log(props)
    return (
        <div className="blueprint">
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    )
}
=======
import React from "react";
import './blueprint.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

const Blueprint = (props) => {
    const {product} = props
    console.log(props)
    return (
        <div>
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    )
}
>>>>>>> 9980159c64e0c343b8cd217f429668a136834125
export default Blueprint