import React, { Fragment } from "react";
import classes from './Footerlast.module.css';
import { Link } from "react-router-dom";

const Footlast =()=>{
    return(
        <Fragment>
            <div className={classes.last}>
                <div className={classes.last1}>
                    <div className={classes.innerlast}>
                        <a href="sitecrafter.tech">Privacy Policy</a>
                        <div className={classes.innerlast1}>
                            <ul>|</ul>
                            <a href="sitecrafter.tech">Terms of Use</a>
                            <ul>|</ul>
                            <a href="sitecrafter.tech">Affiliate Terms of Use</a>
                            <ul>|</ul>
                            <a href="sitecrafter.tech">Refund Policy</a>
                        </div>
                    </div>
                    <div className={classes.footend}>
                        <p>Copyright © Sitecrafter 2023</p>
                    </div>
                </div>
                <div className={classes.dev}><Link to={"sitecrafter.tech"}>Developed by Sitecrafter</Link></div>
            </div>
        </Fragment>
    );
};

export default Footlast;
