import React, { Fragment } from "react";
import classes from './Servicesnav.module.css';
import { Link } from "react-router-dom";

const Sernav =()=>{
    return(
        <Fragment>
            <div>
                <nav className={classes.nav}>
                        <ul className={classes.logoname}>
                            <li>Sitecrafters</li>
                        </ul>
                        <ul className={classes.navcont}>
                            <a href="sitecrafter.tech"><b><Link to={'/'}>Home</Link></b></a>
                            <a href="sitecrafter.tech"><b><Link to={'/Contact?'}>ContactUs</Link></b></a>
                            <a href="sitecrafter.tech"><b><Link to={"/about"}>About</Link></b></a>
                            <a href="sitecrafter.tech"><b><Link to={'/pricing?'}>pricing</Link></b></a>
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
        </Fragment>
    );
};

export default Sernav;