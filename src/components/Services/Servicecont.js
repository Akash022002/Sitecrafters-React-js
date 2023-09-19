import React, { Fragment } from "react";
import classes from './Servicecont.module.css';
import Review from "./Servicesreview";
import Pricinginfo from "../Pricing/Pricinginfo";

const Servicecont =()=>{
    return(
        <Fragment>
            <div className={classes.contservice}>
                <div className={classes.carditem1}>
                    <img src="./web-dev.png" alt="..."></img>
                    <li>Web Developement</li>
                    <p>Our company are offer the best web Developement oppotunity for your business bust.</p>
                </div>
                <div className={classes.carditem1}>
                    <img src="./designer.png" alt="..."></img>
                    <li className={classes.cardli1}>UI/UX Design</li>
                    <p>We are create a best UI and UX Design for your website content</p>
                </div>
                <div className={classes.carditem1}>
                    <img src="./www.png" alt="..."></img>
                    <li className={classes.margin1}>Social Media Marketing</li>
                    <p>We are do yoor branding and Social Media AD's and Marketing</p>
                </div>
                <div className={classes.carditem1}>
                    <img src="./payment.png" alt="..."></img>
                    <li>Payement Gateway</li>
                    <p>Our comapany Develope an the payment gateway for website</p>
                </div>
            </div>

            <div className={classes.cardprice}>
                <div className={classes.tag}>
                    <li>PRICES</li>
                    <p> -----------------</p>
                </div>
                <div className={classes.pricetag}>
                    Check my adorable pricing
                </div>

                <div className={classes.priceser}>
                    <div className={classes.innerprice}>
                        <div className={classes.cardinner1}>
                            <div className={classes.pricename}>
                                <li>E-commerce website</li>
                                <p>$250.00</p>
                            </div>
                            <ul>----------------------------------------------------------------------------------------</ul>
                            <div className={classes.pricename}>
                                <li>All Business websites</li>
                                <p>$280.00</p>
                            </div>
                            <ul>----------------------------------------------------------------------------------------</ul>
                            <div className={classes.pricename}>
                                <li>Social media Advertis</li>
                                <p>$250.00</p>
                            </div>
                            <ul>----------------------------------------------------------------------------------------</ul>
                        </div>
                        <div className={classes.cardinner2}>
                            <div className={classes.pricename}>
                                <li>Company logo design</li>
                                <p>$100.00</p>
                            </div>
                            <ul>-----------------------------------------------------------------------------------------</ul>
                            <div className={classes.pricename}>
                                <li>Payment Gateway Dev</li>
                                <p>$150.00</p>
                            </div>
                            <ul>-----------------------------------------------------------------------------------------</ul>
                            <div className={classes.pricename}>
                                <li>UI\UX Design for web</li>
                                <p>$200.00</p>
                            </div>
                            <ul>-----------------------------------------------------------------------------------------</ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.reviewser}>
                <div className={classes.mainreview}>
                    <li>TESTIMONIALS</li>
                    <ul>------------------</ul>
                </div>
                <div className={classes.nexttitle}>
                    <ul>What they are saying</ul>
                </div>
                <Review/>
            </div>
            <Pricinginfo/>
        </Fragment>
    );
};

export default Servicecont;
