import React, { Fragment,useState,useEffect } from "react";
//import { Link } from "react-router-dom";
import classes from './Errorpage.module.css';
import Preloadersec from "../Preloader/Preloadersec";
import Errorwrap from "./Errorwrap";

const Errorpage =(props)=>{
    // Code for add an the preloader in the website for an Error page
    const[preloader,setpreloader] = useState(true);

    useEffect(() => {
        // Apply an the timeout for the loading an the content
        setTimeout(() => {
          setpreloader(false);
        }, 2500);
      }, []);

    return(
        <Fragment>
            <div className={classes.errortop}>
            {preloader ? <Preloadersec /> : <Errorwrap/>}
            </div>
        </Fragment>
    );
};

export default Errorpage;
