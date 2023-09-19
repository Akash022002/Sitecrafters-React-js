import React, { Fragment } from "react";
import classes from './Dev_services.module.css';
import Inside from "./Ser-inside";

const Services =()=>{
    return(
        <Fragment>
            <div className={classes.devblock}>
                <Inside/>
            </div>
        </Fragment>
    );
};

export default Services;