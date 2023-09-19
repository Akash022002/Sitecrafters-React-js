import React, { Fragment } from "react";
import classes from './Contactform.module.css';

const Buttonclick =()=>{
    console.log('Hi')
}

const Contactform =(props)=>{
    return(
        <Fragment>
            <div className={classes.contactform}>
                <form>
                    <div className={classes.formfirst}>
                        <input placeholder="Your Name" type="name" ></input>
                        <input placeholder="Your Email" type="email" className={classes.input1}></input>
                    </div>
                    <div className={classes.formsecond}>
                        <input type="text" placeholder="Subject"></input>
                    </div>
                    <div className={classes.formthird}>
                        <input type="text" placeholder="Messege" className={classes.input2}></input>
                    </div>
                    <button onClick={Buttonclick} type="Submit">Send Message</button>
                </form>
            </div>
        </Fragment>
    );
};

export default Contactform;