import React, { Fragment,useState,useEffect } from "react";
import classes from './Aboutmain.module.css';
// import Aboutcomp from "./Aboutcomp";
// import Aboutlast from "./Aboutlast";
import Aboutwrap from "./Aboutwrap";
import Preloadersec from "../Preloader/Preloadersec";

const About =(props)=>{
    // code for preloader in the about page by using an the settimeout function
    const[preloader,setpreloader] = useState(true);

    useEffect(() => {
        // Apply an the timeout for the loading an the content
        setTimeout(() => {
          setpreloader(false);
        }, 2500);
      }, []);

    return(
        <Fragment>
            <div className={classes.aboutmain}>
            {preloader ? <Preloadersec /> : <Aboutwrap/>}
            </div>
        </Fragment>
    );
};

export default About;