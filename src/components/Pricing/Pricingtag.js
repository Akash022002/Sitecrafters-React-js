import React, { Fragment } from "react";
import classes from './Pricingtag.module.css';

const Pricingtag =(props)=>{
    return(
        <Fragment>
            <div className={classes.tag}>
                <div className={classes.tagcard1}>
                    <img src="./www.png" alt="..."></img>
                    <ul>Budget Friendly Pricing</ul>
                    <p>A web development agency that offers competitive pricing can attract clients who are looking for affordable yet high-quality services.</p>
                </div>
                <div className={classes.tagcard1}>
                    <img src="./customer.png" alt="..."></img>
                    <ul>Client-Centric Approach</ul>
                    <p>A client-centric approach is essential for building long-term relationships with clients.</p>
                </div>
                <div className={classes.tagcard1}>
                    <img src="./computer.png" alt="..."></img>
                    <ul>Multiple Technologies</ul>
                    <p>A web development agency that offers expertise in multiple technologies to offer a one-stop-shop for all digital needs.</p>
                </div>
                <div className={classes.tagcard1}>
                    <img src="./technical-support.png" alt="..."></img>
                    <ul>Maintenance and Support</ul>
                    <p>Websites require ongoing maintenance and support to ensure that they remain secure, up-to-date, and functional.</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Pricingtag;
