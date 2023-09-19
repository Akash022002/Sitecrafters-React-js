import React, { Fragment } from "react";
import classes from './Aboutmain.module.css';
import Aboutcomp from "./Aboutcomp";
import Aboutlast from "./Aboutlast";

const Aboutwrap =(props)=>{
    return(
        <Fragment>
            <div className={classes.aboutmain}>
                <Aboutcomp/>
            </div>
            <Aboutlast/>
        </Fragment>
    );
};

export default Aboutwrap;