import React, { Fragment } from "react";
import classes from './Services.module.css';
//import { Link } from "react-router-dom";
import Servicesmain from './Servicesstart';
import Aboutlast from "../About/Aboutlast";
import Sernav from "./Servicesnav";

const Serviceswrap =(props)=>{
    return(
        <Fragment>
            <div className={classes.sermain}>
                <div className={classes.mainpage}>
                    <Sernav/>
                    <Servicesmain/>
                </div>
            </div>
            <Aboutlast/>
        </Fragment>
    );
};

export default Serviceswrap;