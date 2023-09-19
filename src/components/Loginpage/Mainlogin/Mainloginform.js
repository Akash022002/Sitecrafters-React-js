import React, { Fragment,useState,useEffect } from "react";
import classes from './Mainloginform.module.css';
import MainLogincomp from "./Mainlogincomp";
import Preloadersec from "../../Preloader/Preloadersec";

const Mainlogin =(props)=>{
    // Code for add an the Preloader in the login page
    const[preloader,setpreloader] = useState(true);

    useEffect(() => {
        // Apply an the timeout for the loading an the content
        setTimeout(() => {
          setpreloader(false);
        }, 2500);
      }, []);

    return(
        <Fragment>
            <div className={classes.Mainlogin}>
                {preloader ? <Preloadersec /> : <MainLogincomp/>}
            </div>
        </Fragment>
    );
};

export default Mainlogin;
