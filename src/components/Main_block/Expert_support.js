import React, { Fragment } from "react";
import classes from './Expert_support.module.css';

const Expert =(props)=>{
    return(
        <Fragment>
            <div className={classes.contmain2}>
                <div className={classes.contimg1}>
                    <img src="https://cdn-aahbe.nitrocdn.com/atRjhaAsMHbPaZMOukHscOVOXfGAsiqT/assets/images/optimized/rev-0048291/asset/img/svg/img-experts-336x.svg" alt="..."></img>
                </div>
                <div className={classes.continfo1}>
                    <p>Expert Support Team</p>
                    <ul className={classes.contli}>
                        <li>Get instant results</li>
                        <li>and expert</li>
                        <li>support.</li>
                    </ul>
                    <p>Save time and effort with our all-in-one service. No 
                        3rd party plugins or complex setups needed. Achieve 
                        measurable results in minutes and get help from our 
                        speed experts when needed.
                    </p>
                </div>
            </div>
            
        </Fragment>
    );
};

export default Expert;