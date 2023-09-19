import React, { Fragment } from "react";
import classes from './Readycard.module.css';
 

const Ready =()=>{
    return(
        <Fragment>
            
            <div className={classes.cardmain}>
                <div className={classes.design1}>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                </div>
                <div className={classes.design}>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                </div>
                <div className={classes.flex}>
                    <div className={classes.cardready}>
                        <div className={classes.maincontent}>
                            <li>Ready to get started?</li>
                            <p className={classes.cardreadyp}>Join 1,000+ who chose Sitecrafter</p>
                            <p>to get a blazing fast website and boost sales.</p>
                            <button href="sitecrafters.tech">Choose your plan</button>
                        </div>
                        <div className={classes.showcontent}>
                            <img src="./new.png" alt="..."></img>
                        </div>
                    </div>
                    <div className={classes.design2}>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    </div>
                    <div className={classes.design3}>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    </div>
                </div>
            </div>
            
        </Fragment>
    );
};

export default Ready;