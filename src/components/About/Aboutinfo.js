import React, { Fragment } from "react";
import classes from './Aboutinfo.module.css';
import Pricingtag from "../Pricing/Pricingtag";

const Aboutinfo =(props)=>{
    return(
        <Fragment>
            <div className={classes.infomain}>
                <div className={classes.abouthead}>
                    <li>About</li>
                    <p>A web development company is a business that specializes in designing, developing,</p> 
                    <p className={classes.para1}>and maintaining websites for clients. These companies typically have a dedicated </p>
                    <p className={classes.para2}>team of web developers, designers, and other professionals who work on the </p>
                    <p className={classes.para3}>together to create websites that meet their clients' needs and objectives.</p>

                    <button>AVILABLE FOR DEVELOPE</button>
                </div>
                <div className={classes.aboutcont}>
                    <div className={classes.imgabout}>
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="..."></img>
                    </div>
                    <div className={classes.aboutcontent}>
                        <li>Professional Web Developer from Pune</li>
                        <div className={classes.demoinfo}>
                            <li>&#8811; <b>Phone:</b> 7769815791</li>
                            <li>&#8811; <b>Email:</b> akashsawantwork0202@gmail.com</li>
                        </div>
                        <div className={classes.demoinfo1}>
                            <li>&#8811; <b>Website : </b> www.sitecrafter.tech</li>
                            <li className={classes.demoinner1}>&#8811; <b>City : </b> Pune</li>
                        </div>
                        <div className={classes.demoinfo2}>
                            <li>&#8811; <b>Freelance : </b> Avilable</li>
                            <li className={classes.demoinner}>&#8811; <b>work :</b> 1000+ websites</li>
                        </div>
                        <div className={classes.aboutpara}>
                            <p>A web development company is a specialized firm that offers services related to the creation, design, and maintenance of websites for individuals, businesses, and organizations. These companies typically consist of a team of skilled professionals, including web developers, designers, programmers, and project managers, who collaborate to deliver high-quality websites that meet client requirements.</p>
                        </div>
                    </div>
                </div>
                <Pricingtag/>
                <div className={classes.aboutimg}>
                    <img src="./My-project.png"alt="..."></img>
                </div>
            </div>
            
        </Fragment>
    );
};

export default Aboutinfo;