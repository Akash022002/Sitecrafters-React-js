import React, { Fragment } from "react";
import classes from './Servicesstart.module.css';
import Servicecont from "./Servicecont";


const Servicesmain =()=>{
    return(
        <Fragment>
            <div className={classes.main}>
                <div className={classes.list1}>
                    <li>Services</li>
                    <p>Our companies often offer e-commerce solutions to enable businesses to sell products</p>
                    <p className={classes.para1}>or services online.They integrate secure payment gateways, shopping cart,payment</p>
                    <p className={classes.para2}>and inventory management systems to facilitate seamless online transactions.</p>

                    <button>AVILABLE FOR DEVELOPE</button>
                </div>
            </div>
            <Servicecont/>
        </Fragment>
    );
};

export default Servicesmain;