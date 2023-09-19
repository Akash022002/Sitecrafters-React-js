import React, { Fragment, useEffect, useState } from "react";
import classes from './Contact.module.css';
// import Contactstart from "./Contactstart";
// import Sernav from "../Services/Servicesnav";
import Aboutlast from "../About/Aboutlast";
//import Preloadernew from "../Preloader/Preloader";
import Contactwrap from "./Contactwrap";
import Preloadersec from "../Preloader/Preloadersec";


const Contact =(props)=>{
    // That was hadle the states for the loading an the preloader
    const[preloader,setpreloader] = useState(true);

    useEffect(() => {
        // Apply an the timeout for the loading an the content
        setTimeout(() => {
          setpreloader(false);
        }, 2500);
      }, []);
    return(
        <Fragment>
            <div className={classes.contactmain}> 
                {preloader ? <Preloadersec /> : <Contactwrap/>}
            </div>
            <Aboutlast/>
        </Fragment>
    );
};

export default Contact;