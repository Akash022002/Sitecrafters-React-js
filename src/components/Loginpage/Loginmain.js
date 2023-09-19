import React, { Fragment,useState,useEffect } from "react";
import classes from './Loginmain.module.css';
import Loginform from './Loginform';
import Preloadersec from "../Preloader/Preloadersec";

const Login =(props)=>{
    // Code for add an the Preloader in the New Registration page
    const[preloader,setpreloader] = useState(true);

    useEffect(() => {
        // Apply an the timeout for the loading an the content
        setTimeout(() => {
          setpreloader(false);
        }, 2500);
      }, []);
    return(
        <Fragment>
            <form>
                <div className={classes.login}>
                {preloader ? <Preloadersec /> : <Loginform/>}
                </div>
            </form>
        </Fragment>
    );
};

export default Login;
