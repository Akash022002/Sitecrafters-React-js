import React, { Fragment } from "react";
import classes from './UX_design.module.css';

const Design =()=>{
    return(
        <Fragment>
            <div className={classes.contmain3}>
                <div className={classes.continside}>
                    <div className={classes.contli2}>
                        <li>Enhanced Mobile & Desktop UX</li>
                    </div>
                    <div className={classes.contdesc}>
                        <li>Win at customer</li>
                        <li>experience.</li>
                        <p>People prefer to read, browse and shop from fast 
                            websites. Sitecrafter ensures that you don't lose any 
                            more potential customers because of slow load 
                            times.
                        </p>
                    </div>
                    <div className={classes.link1}>
                        <a href="https://www.google.com/search?q=css+property+to+remove+underline+from+link&rlz=1C1YTUH_enIN1027IN1027&oq=css+property+for+remove+underli&gs_lcrp=EgZjaHJvbWUqCAgBEAAYFhgeMgYIABBFGDkyCAgBEAAYFhgeMggIAhAAGBYYHjIKCAMQABiGAxiKBTIKCAQQABiGAxiKBdIBCDk1MjhqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8">See all features &#8594;</a>
                    </div>
                </div>
                <div className={classes.contimg3}>
                    <img src="https://cdn-aahbe.nitrocdn.com/atRjhaAsMHbPaZMOukHscOVOXfGAsiqT/assets/images/optimized/rev-0048291/asset/img/svg/img-ux-336x.svg" alt="..."></img>
                </div>
            </div>
        </Fragment>
    );
};

export default Design;
