import React from "react";
import Hero from "../components/hero/hero";
import Popular from "../components/popular/popular";
import Offers from "../components/offers/offers";
import NewCol from "../components/newCol/newCol";
const Shop = () =>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCol/>
        </div>
    )
}

export default Shop