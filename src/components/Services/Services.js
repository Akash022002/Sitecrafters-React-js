import React, { Fragment,useState,useEffect } from "react";
import classes from './Services.module.css';
//import { Link } from "react-router-dom";
//import Servicesmain from './Servicesstart';
import Aboutlast from "../About/Aboutlast";
//import Sernav from "./Servicesnav";
import Serviceswrap from "./Serviceswrap";
import Preloadersec from "../Preloader/Preloadersec";

const Servicespage =()=>{
    // Code for the add an the preloader for the services page 
    const[preloader,setpreloader] = useState(true);

    useEffect(() => {
        // Apply an the timeout for the loading an the content
        setTimeout(() => {
          setpreloader(false);
        }, 2500);
      }, []);
    return(
        <Fragment>
            <div className={classes.sermain}>
                <div className={classes.mainpage}>
                    {preloader ? <Preloadersec /> : <Serviceswrap/>}
                </div>
            </div>
            <Aboutlast/>
        </Fragment>
    );
};

export default Servicespage;