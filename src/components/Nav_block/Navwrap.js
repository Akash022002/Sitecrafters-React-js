// import {Fragement} from "react";
//import { useState,useEffect } from "react";
import classes from "./Nav.module.css";
import Main from '../Main_block/container'
// import for the add link of next redirected page
import { Link } from "react-router-dom";
// For navigate page when button was clicked



const Navwrap =(props)=>{
    // Code for the add an the preloader in the main Page of the wbsite
   /* const[preloader,setpreloader] = useState(true);

    useEffect(() => {
        // Apply an the timeout for the loading an the content
        setTimeout(() => {
          setpreloader(false);
        }, 2500);
      }, []);
      */
    return(
        <div>
            <div className={classes.mainpage}>
                <nav className={classes.nav}>
                    <ul className={classes.logoname}>
                        <li><i>Sitecrafters</i></li>
                    </ul>
                    <ul className={classes.navcont}>
                        <a href="sitecrafter.tech"><b><Link to={'/'}>Home</Link></b></a>
                        <a className={classes.contacttag} href="sitecrafter.tech"><b><Link to={"/Contact?"}>ContactUs</Link></b></a>
                        <a className={classes.abouttag} href="sitecrafter.tech"><b><Link to={"/about"}>About</Link></b></a>
                        <a href="sitecrafter.tech"><b><Link to={"/pricing?"}>Pricing</Link></b></a>
                        <a href="sitecrafter.tech"><b><Link to={'/services?'}>Services</Link></b></a>
                    </ul>
                    <ul className={classes.sign}>
                        <a href="sitecrafter.tech"><b><Link to={'/mainlogin?'}>Sign In</Link></b></a>
                    </ul>
                    <ul className={classes.navbutton}>
                        <button >Get Started</button>
                    </ul>
                </nav>
            </div>
            <Main/>
        </div>
        
    );
}

export default Navwrap;