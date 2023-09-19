import React, { Fragment } from "react";
import classes from './Preloader.module.css';
/**
* Template Name: PhotoFolio
* Updated: May 30 2023 with Bootstrap v5.3.0
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

  
/**
 * Preloader
 */

const Preloadernew =(props)=>{
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
		    <div className={classes.loader}><span></span></div>
		      <div className={classes.loader}><span></span></div>
		      <div className={classes.loader}><i></i></div>
		    <div className={classes.loader}><i></i></div>
	  </div>
    </Fragment>
  );
}


export default Preloadernew;