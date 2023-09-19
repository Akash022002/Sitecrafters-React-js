import React, { Fragment,useState,useEffect } from "react";
import Preloadersec from "../Preloader/Preloadersec";
import Pricingwrap from "./Pricingwrap";

const Pricing =(props)=>{
    // From here the code for the preloader of an pricing page was started
    const[preloader,setpreloader] = useState(true);

    useEffect(() => {
        // Apply an the timeout for the loading an the content
        setTimeout(() => {
          setpreloader(false);
        }, 2500);
      }, []);

    return(
        <Fragment>
            <div>
                {preloader ? <Preloadersec /> : <Pricingwrap/>}
            </div>
        </Fragment>
    );
};

export default Pricing;