import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from './Errorpage.module.css';

const Errorwrap =()=>{
    return(
        <Fragment>
            <div className={classes.errortop}>
                <section className="page_404">
                    <div class={classes.container}>
                        <div className={classes.row}>	
                            <div className={classes.col}>
                                <div className={classes.col }>
                                    <div className={classes.four_zero_four_bg}>
                                        <h1 className={classes.textcenter}>404</h1>
                                    </div>
                                    <div className={classes.imgmain}>
                                        <div className={classes.contant_box_404}>
                                            <h3>
                                                Look like you're lost
                                            </h3>
                                            <p>the page you are looking for not avaible!</p>
                                            <button className={classes.link_404} ><Link to={'/'}><a href="sitecrafter.tech">Go to Home</a></Link></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    );
};

export default Errorwrap;
