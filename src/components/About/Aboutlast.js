import React, { Fragment } from "react";
import classes from './Aboutlast.module.css';
import { Link } from "react-router-dom";

const Aboutlast =()=>{
    return(
        <Fragment>
            <div className={classes.aboutlastcont}>
                <div className={classes.lastmain}>
                    <div className={classes.firstfooter}>
                        <li className={classes.copyright}>© Copyright Sitecrafter . </li>
                        <li className={classes.reserve}> All Rights Reserved</li>
                    </div>
                    <div className={classes.secfooter}>
                        <p>Desinged by</p>
                        <a href="sitecrafter.tech"><Link to={'/'}>Sitecafters</Link></a>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    );
};

export default Aboutlast;
