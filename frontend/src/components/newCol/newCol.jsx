import React from "react";
import './newCol.css'
import new_col from '../assets/new_collections'
import Item from "../items/item";
const NewCol =() => {
    return(
        <div className="new-col">
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="col">
                {new_col.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}
export default NewCol