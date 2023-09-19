import React, { Fragment } from "react";
import classes from './techskill.module.css';

const Tech =(props)=>{
    return(
        <Fragment>
            <div className={classes.contmain4}>
                <div className={classes.contimg5}>
                    <img src="https://cdn-aahbe.nitrocdn.com/atRjhaAsMHbPaZMOukHscOVOXfGAsiqT/assets/images/optimized/rev-0048291/asset/img/svg/img-no-dev-336x.svg" alt="..."></img>
                </div>
                <div className={classes.continfo1}>
                    <div className={classes.contli3}>
                        <li>The Easiest Way to Improve Your Site Speed</li>
                    </div>
                    <div className={classes.contdesc3}>
                        <li>No coding or tech</li>
                        <li>skills needed.</li>

                        <p>With Sitecrafter, you get a massive site speed boost
                            effortlessly. The setup takes less than 5 minutes. 
                            After that, our service automatically optimizes your 
                            website and keeps it fast 24/7, 365 bu using the massive 
                            speed for the hosting.
                        </p>
                    </div>
                    <div className={classes.link2}>
                        <a href="https://www.google.com/search?q=css+property+to+remove+underline+from+link&rlz=1C1YTUH_enIN1027IN1027&oq=css+property+for+remove+underli&gs_lcrp=EgZjaHJvbWUqCAgBEAAYFhgeMgYIABBFGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIKCAMQABiGAxiKBTIKCAQQABiGAxiKBdIBCDk1MjhqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8">See all features &#8594;</a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Tech;
