import React, { Fragment } from "react";    
import classes from './Pricing.module.css';
import Sernav from "../Services/Servicesnav";
// import Aboutlast from "../About/Aboutlast";
import Pricingtype from "./Pricingtype";
import Aboutlast from "../About/Aboutlast";

const Pricingwrap =(props)=>{
    return(
        <Fragment>
            <div className={classes.pricingwrap}>
                <Sernav/>
                <Pricingtype/>
            </div>
            <Aboutlast/>            
        </Fragment>
    );
};

export default Pricingwrap;
