import React, { Fragment } from "react";
import classes from './Footermid.module.css';
import Ready from './Readycard';
import Footlast from "./Footerlast";

const Footermid =()=>{
    return(
        <Fragment>
            <Ready/>
            <div className={classes.test}>
                <div className={classes.conttest}>
                    <div className={classes.containertext}>
                        <div className={classes.footerimg}>
                            <img src="./sitecrafter.png" alt="" className={classes.footerimgnew} />
                            <div className={classes.footerimg1}>
                            <a href="https://www.instagram.com/site_crafters/"><img src="./instagram.png" alt="..."></img></a>
                            <a href="https://www.facebook.com/profile.php?id=100090554059661"><img src="./facebook.png" alt="..."></img></a>
                            <a href="www.linkedin.com/in/akash-sawant-65983b243"><img src="./social.png" alt="..."></img></a>
                            </div>
                        </div>
                        <div className={classes.footerblock}>
                            <div className={classes.footercont}>
                                <div className={classes.footcontext}>
                                    <li>Product</li>
                                    <div className={classes.footera}>
                                        <a href="sitecrafter.tech">Features</a>
                                    </div>
                                    <a href="sitecrafter.tech">Pricing</a>
                                </div>
                            </div>

                            <div className={classes.footercont1}>
                                <div className={classes.footcontext1}>
                                    <li>Platforms</li>
                                    <div className={classes.footera1}>
                                        <a href="sitecrafter.tech">WordPress</a>
                                    </div>
                                    <a href="sitecrafter.tech">WooCommerce</a>
                                    <div className={classes.bottom1}>
                                        <a href="sitecrafter.tech">Magento</a>
                                    </div>
                                    <div className={classes.bottom1}>
                                        <a href="sitecrafter.tech">Opencart</a>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.footercont2}>
                                <div className={classes.footcontext2}>
                                    <li>Company</li>
                                    <div className={classes.footera2}>
                                        <a href="sitecrafter.tech">About</a>
                                    </div>
                                    <a href="sitecrafter.tech">Contact</a>
                                    <div className={classes.bottom1}>
                                        <a href="sitecrafter.tech">Careers</a>
                                    </div>
                                    <div className={classes.bottom1}>
                                        <a href="sitecrafter.tech">Affiliate Application</a>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.footercont3}>
                                <div className={classes.footcontext3}>
                                    <li>Resources</li>
                                    <div className={classes.footera3}>
                                        <a href="sitecrafter.tech">Blog</a>
                                    </div>
                                    <a href="sitecrafter.tech">Help Center</a>
                                    <div className={classes.bottom1}>
                                        <a href="sitecrafter.tech">Sitecraftercommunity</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <footer className={classes.footer}>
                <Footlast></Footlast>
            </footer>
        </Fragment>
    );
};

export default Footermid;