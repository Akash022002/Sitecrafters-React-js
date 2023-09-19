// import { ReactFragment } from "react";
import { Fragment } from 'react';
import classes from './Main.module.css';
import Integration from './Integration';
import Review from './CEO_review';
import Services from './Services/Dev_services';
import Footermid from './Footer/Footermid';

const Main =(props)=>{
    return(
        <Fragment>
            <div className={classes.container}>
                <div className={classes.cont}>
                    <ul className={classes.sentence}>
                        <li className={classes.l1}><b>One Platform.</b></li>
                    </ul>
                    <ul className={classes.sentence1}>
                        <li><b>All development Optimizations.</b></li>
                    </ul>
                    <ul className={classes.sentence2}>
                        <li><b><b>Automatically.</b></b></li>
                    </ul>
                    <ul className={classes.sentence3}>
                        <li>Outperform your buisness without writing a single line of code.</li>
                    </ul>
                    <div className={classes.arrow}>
                        <img src='https://cdn-aahbe.nitrocdn.com/atRjhaAsMHbPaZMOukHscOVOXfGAsiqT/assets/images/optimized/rev-29c456d/asset/img/svg/arrow-dots.svg' alt="..."></img>
                    </div>
                    <div className={classes.bottomimg}>
                        <img src='https://cdn-aahbe.nitrocdn.com/atRjhaAsMHbPaZMOukHscOVOXfGAsiqT/assets/images/optimized/rev-29c456d/asset/img/partners/svg/atf-devrix-logo.svg' alt="..."></img>
                        <img src='https://cdn-aahbe.nitrocdn.com/atRjhaAsMHbPaZMOukHscOVOXfGAsiqT/assets/images/optimized/rev-29c456d/asset/img/partners/svg/atf-voices-logo.svg' alt="..."></img>
                        <img src='https://cdn-aahbe.nitrocdn.com/atRjhaAsMHbPaZMOukHscOVOXfGAsiqT/assets/images/optimized/rev-29c456d/asset/img/partners/svg/atf-smartblogger-logo.svg' alt="..."></img>
                        <img src='https://cdn-aahbe.nitrocdn.com/atRjhaAsMHbPaZMOukHscOVOXfGAsiqT/assets/images/optimized/rev-29c456d/asset/img/partners/svg/atf-partnerize-logo.svg' alt="..."></img>
                        <img src='https://cdn-aahbe.nitrocdn.com/atRjhaAsMHbPaZMOukHscOVOXfGAsiqT/assets/images/optimized/rev-29c456d/asset/img/partners/svg/atf-woocamp-logo.svg' alt="..."></img>
                    </div>
                </div>
            </div>
            <Integration></Integration>
            <Review/>
            <Services>
            </Services>
            <Footermid/>
        </Fragment>
        
    );
};

export default Main;