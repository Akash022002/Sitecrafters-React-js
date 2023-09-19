// import {Fragement} from "react";
import { useState,useEffect } from "react";
//import classes from "./Nav.module.css";
//import Main from '../Main_block/container'
// import for the add link of next redirected page
//import { Link } from "react-router-dom";
import Preloadersec from "../Preloader/Preloadersec";
import Navwrap from "./Navwrap";
// For navigate page when button was clicked



const Nav =(props)=>{
    // Code for the add an the preloader in the main Page of the wbsite
    const[preloader,setpreloader] = useState(true);

    useEffect(() => {
        // Apply an the timeout for the loading an the content
        setTimeout(() => {
          setpreloader(false);
        }, 2500);
      }, []);

    return(
        <div>
            {preloader ? <Preloadersec /> : <Navwrap/>}
        </div>
        
    );
}

export default Nav;