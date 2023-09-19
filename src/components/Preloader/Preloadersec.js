import React, { Fragment } from "react";
import classes from './Preloadersec.module.css';

  
/**
 * Preloader
*/

const Preloadersec =(props)=>{
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }
  return(
    <Fragment>
      <div className={classes.container}>
        <div className={classes.preloader}>
            <div className={classes.loader}></div>
        </div>
	  </div>
    </Fragment>
  );
}


export default Preloadersec;