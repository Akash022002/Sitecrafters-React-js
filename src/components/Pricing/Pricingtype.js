import React, { Fragment } from "react";
import classes from './Pricingtype.module.css';
import Pricingtag from "./Pricingtag";
import Pricinginfo from "./Pricinginfo";

const Pricingtype =(props)=>{
    return(
        <Fragment>
            <div className={classes.Pricingmain}> 
                <div className={classes.test1}>
                    <li>Our Development Pricing</li>
                </div>
            </div>
            <div className={classes.typemain}>
                <div className={classes.typecard1}>
                    <div className={classes.priceimg}>
                        <img src="./computer.png" alt="..."></img>
                    </div>
                    <div className={classes.typeinner1}>
                        <ul>Static Website Development</ul>
                        <div className={classes.features}>
                            <ul>Website Features</ul>
                            <li>&#9830; Free Domain & Hosting</li>
                            <li>&#9830; Premium Design</li>
                            <li>&#9830; SSL Secured Website</li>
                            <li>&#9830; Professional Email ID</li>
                            <li>&#9830; 1 Year Maintenance</li>
                            <li>&#9830; Website Speed Optimization</li>
                            <li>&#9830; Responsive Website Design</li>
                        </div>
                        <div className={classes.pricerupee}>
                            <ul><i>Starting From Just</i></ul>
                            <li> &#8377; 7,999 /-</li>
                        </div>
                        
                    </div>
                </div>
                <div className={classes.typecard1}>
                <div className={classes.priceimg}>
                        <img src="./dynamic.png" alt="..."></img>
                    </div>
                    <div className={classes.typeinner1}>
                        <ul>Dynamic Web Development</ul>
                        <div className={classes.features}>
                            <ul>Website Features</ul>
                            <li>&#9830; Free Domain & Hosting</li>
                            <li>&#9830; Premium Design</li>
                            <li>&#9830; SSL Secured Website</li>
                            <li>&#9830; Professional Email ID</li>
                            <li>&#9830; 1 Year Maintenance</li>
                            <li>&#9830; Website Speed Optimization</li>
                            <li>&#9830; Responsive Website Design</li>
                        </div>
                        <div className={classes.pricerupee}>
                            <ul><i>Starting From Just</i></ul>
                            <li> &#8377; 12,999 /-</li>
                            
                        </div>
                    </div>
                </div>
                <div className={classes.typecard1}>
                <div className={classes.priceimg}>
                        <img src="./ecommerce.png" alt="..."></img>
                    </div>
                    <div className={classes.typeinner1}>
                        <ul>E-commerce Website Dev't</ul>
                        <div className={classes.features}>
                            <ul>Website Features</ul>
                            <li>&#9830; Free Domain & Hosting</li>
                            <li>&#9830; Premium Design</li>
                            <li>&#9830; SSL Secured Website</li>
                            <li>&#9830; Professional Email ID</li>
                            <li>&#9830; 1 Year Maintenance</li>
                            <li>&#9830; Website Speed Optimization</li>
                            <li>&#9830; Responsive Website Design</li>
                        </div>
                        <div className={classes.pricerupee}>
                            <ul><i>Starting From Just</i></ul>
                            <li> &#8377; 20,999 /-</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.pricebtn}>
                <button>Contact</button>
            </div>
            <Pricingtag/>
            <Pricinginfo/>
        </Fragment>
    );
};

export default Pricingtype;
