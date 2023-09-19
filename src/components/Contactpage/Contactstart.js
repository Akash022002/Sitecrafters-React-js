import React, { Fragment } from "react";
import classes from './Contactstart.module.css';
import Contactform from "./Contactform";

const Contactstart =(props)=>{
    return(
        <Fragment>
            <div className={classes.innercontact}>
                <div className={classes.contcontact}>
                    <ul>Contact</ul>
                    <p>Our companies often offer e-commerce solutions to enable businesses to sell products</p>
                    <p className={classes.para1}>or services online.They integrate secure payment gateways, shopping cart,payment</p>
                    <p className={classes.para2}>and inventory management systems to facilitate seamless online transactions.</p>
                </div>
                <div className={classes.contentcont}>
                    <div className={classes.contdis}>
                        <img src="./location.png" alt="..."></img>
                        <div className={classes.firstcard}>
                            <ul>Location:</ul>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                    
                    <div className={classes.contdis1}>
                        <img src="email-file.png" alt="..." />
                        <div className={classes.firstcard1}>
                            <ul>Email:</ul>
                            <p>info@sitecrafter.tech</p>
                        </div>
                    </div>
                    
                    <div className={classes.contdis2}>
                        <img src="./telephone-call.png" alt="..."></img>
                        <div className={classes.firstcard2}>
                            <ul>Calls:</ul>
                            <p>+91 7769815791</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Contactform/>
        </Fragment>
    );
};

export default Contactstart;