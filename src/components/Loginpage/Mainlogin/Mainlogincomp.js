import React, { Fragment } from "react";
import classes from './Mainlogincomp.module.css';
import { Link } from "react-router-dom";
import Sernav from "../../Services/Servicesnav";
import Aboutlast from "../../About/Aboutlast";

const MainLogincomp =(props)=>{
    return(
        <Fragment>
            <div className={classes.loginform2}>
                <Sernav/>
                <div className={classes.body}>
                    <div className={classes.containerlogin}>
                        <div className={classes.headerlogin}>
                            Become a Member
                        </div>
                        <form method="post">
                            <br/>
                            <div className={classes.fieldset}>
                                <input type="text" name="username" id="username" placeholder="Full Name" required autofocus></input>
                                <br/><br/>
                                <input type="email" name="email" id="email" placeholder="E-mail" required></input>
                                <br/><br/>
                                <input type="password" name="password" id="password" placeholder="Password" required></input>
                                <br/><br/>
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" required></input><br/><br/><br/>
                                <label className={classes.label1} for="myfile">Not have Account? Register Now</label><br></br>
                                <a href="sitecrafter.tech"><br></br><Link to={'/login?'}><u>Register</u></Link></a>
                                <br/> <br/> 
                                <label for="submit"></label>
                                <input type="submit" name="submit" id="submit" value="Login"></input>
                            </div>
                        </form>
                    </div>
                </div>
                <Aboutlast/>
            </div>
        </Fragment>
    );
};

export default MainLogincomp;
