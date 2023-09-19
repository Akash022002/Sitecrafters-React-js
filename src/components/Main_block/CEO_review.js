import React, { Fragment } from "react";
import classes from './CEO_review.module.css';
import Expert from "./Expert_support";
import Design from "./UX_design";
import Tech from "./tech_skill";
import Hosting from "./Hosting";

const Review =()=>{
    return(
        <Fragment>
            <div className={classes.review}>
                <div className={classes.dot2}>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                </div>
                <div className={classes.dot}>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                    <li>•</li>
                </div>
                <div className={classes.post}>
                    <div className={classes.dot3}>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                    </div>
                    <div className={classes.dot1}>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                        <li>•</li>
                    </div>
                    
                    <div className={classes.postcard}>
                        <p>"I'm the kind of person who obsesses over and hand-tunes the performance of my websites. By now, I think I've used pretty much every tool and technique out there to save bytes and milliseconds. NitroPack stood out from the crowd; I was surprised by how smart their approach was, and how much time it saved me. They're optimizing in ways that far exceeds the competition"</p>
                        <li><b>  -      CEO sitecrafter</b></li>
                        <ul>Founder of Sitecrafter</ul>
                    </div>
                </div>
                <div className={classes.contmain}>
                    <div className={classes.container1}>
                        <div className={classes.cont1}>
                            <p>Complete Site Speed Optimization Service</p>
                            <li>Make more money</li>
                            <li>with a faster</li>
                            <li>website.</li>
                        </div>
                        <div className={classes.cont2}>
                            <ul>
                                Speeding up your website can help you:
                            </ul>
                            <li>
                                &#9829;  Increase conversion rates
                            </li>
                            <li>
                                &#9829;  Provide a better user experience
                            </li>
                            <li>
                                &#9829;  Gain an edge over competitors.
                            </li>
                            <p>
                                With Sitecrafter, you get everything you need for a 
                                fast website, in one place. Features like caching, 
                                image optimization, and a CDN are ready to go out 
                                of the box.
                            </p>
                        </div>
                        <div className={classes.link}>
                            <a href="https://www.google.com/search?q=css+property+to+remove+underline+from+link&rlz=1C1YTUH_enIN1027IN1027&oq=css+property+for+remove+underli&gs_lcrp=EgZjaHJvbWUqCAgBEAAYFhgeMgYIABBFGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIKCAMQABiGAxiKBTIKCAQQABiGAxiKBdIBCDk1MjhqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8">See the complete industry-defining feature set &#8594;</a>
                        </div>
                    </div>
                    <div className={classes.contimg1}>
                        <img src="https://cdn-aahbe.nitrocdn.com/atRjhaAsMHbPaZMOukHscOVOXfGAsiqT/assets/images/optimized/rev-0048291/asset/img/img-build-in-optimization-475x0.png" alt="..."></img>
                    </div>
                </div>

                <Expert/>
                <Design/>
                <Tech/>
                <Hosting/>
            </div>
        </Fragment>
    );
};

export default Review;