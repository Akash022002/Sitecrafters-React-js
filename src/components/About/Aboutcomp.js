import React, { Fragment } from "react";
import classes from './Aboutcomp.module.css';
import { Link } from "react-router-dom";
import Aboutinfo from "./Aboutinfo";



const Aboutcomp =()=>{
    return(
        <Fragment>
            <div>
                <div className={classes.mainpage}>
                    <nav className={classes.nav}>
                        <ul className={classes.logoname}>
                            <li>Sitecafters</li>
                        </ul>
                        <ul className={classes.navcont}>
                            <a href="sitecrafter.tech"><b><Link to={'/'}>Home</Link></b></a>
                            <a href="sitecrafter.tech"><b><Link to={'/Contact?'}>ContactUs</Link></b></a>
                            <a href="sitecrafter.tech"><b><Link to={"/about"}>About</Link></b></a>
                            <a href="sitecrafter.tech"><b><Link to={'/Pricing'}>Pricing</Link></b></a>
                            <a href="sitecrafter.tech"><b><Link to={'/services?'}>Services</Link></b></a>
                        </ul>
                        <ul className={classes.sign}>
                            <a href="sitecrafter.tech"><b><Link to={'/mainlogin?'}>Sign In</Link></b></a>
                        </ul>
                        <ul className={classes.navbutton}>
                            <button >Get Started</button>
                        </ul>
                    </nav>
                    <Aboutinfo/>
                </div>
            </div>
        </Fragment>
    );
};

export default Aboutcomp;