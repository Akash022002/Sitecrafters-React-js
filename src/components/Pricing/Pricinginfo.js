import React, { Fragment } from "react";
import classes from './Pricinginfo.module.css';

const Pricinginfo =(props)=>{
    return(
        <Fragment>
            <div className={classes.priceinfo}>
                <div className={classes.priceinfocard}>
                    <div className={classes.infocardinner}>
                        <div className={classes.onecont}>
                            <ul>Increase Sales Exponentially</ul>
                            <p>A website can enhance a business’s credibility and reputation. By providing customers with a professional and informative website, a business can establish trust and build a strong online presence. That helps in increased business & Sales.</p>
                            <button>Contact Us</button>
                        </div>
                        <img src="https://infidemo.xyz/wp-content/uploads/2023/05/website-developer-pune-1536x1106.jpg" alt="..."></img>
                    </div>
                    <div className={classes.infocardinner1}>
                        <img src="https://infidemo.xyz/wp-content/uploads/2023/05/contact.jpg" alt="..."></img>
                        <div className={classes.onecont1}>
                            <ul>Stay Open 24/7</ul>
                            <p>A website is available 24/7, providing customers with the convenience of accessing information about a business’s products or services at any time. This can lead to increased customer satisfaction and loyalty.</p>
                            <button>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.priceser}>
                <div className={classes.priceoffer}>
                    <ul>We Also Offer</ul>
                </div>
                <div className={classes.offercard1}>
                    <div className={classes.offerinner1}>
                        <img src="seo.png" alt="..."></img>
                        <ul>SEO</ul>
                        <p>Give a boost to google ranking of your website and reach more customers online.</p>
                    </div>
                    <div className={classes.offerinner1}>
                        <img src="content-strategy.png" alt="..."></img>
                        <ul>Social Media Marketing</ul>
                        <p>Hype-Up your brand on social media to grow awareness about your brand.</p>
                    </div>
                    <div className={classes.offerinner1}>
                        <img src="data-analysis.png" alt="..."></img>
                        <ul>Google PPC</ul>
                        <p>Get quality leads to increase sales with Google PPC campaigns.</p>
                    </div>
                </div>
                <div className={classes.offercard2}>
                    <div className={classes.offerinner1}>
                        <img src="graphic-design.png" alt="..."></img>
                        <ul>Graphic design</ul>
                        <p>Get Trendy, Unique designs for your brand including Logo, Social Media Posts, Brochures, etc.</p>
                    </div>
                    <div className={classes.offerinner1}>
                        <img src="brand.png" alt="..."></img>
                        <ul>Brand Designing</ul>
                        <p>We will design a unique identity for your business that makes you stand out from the crowd.</p>
                    </div>
                    <div className={classes.offerinner1}>
                        <img src="website-codes.png" alt="..."></img>
                        <ul>Website Design</ul>
                        <p>Get quality leads to increase sales with the help of design your website production ready.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Pricinginfo;
