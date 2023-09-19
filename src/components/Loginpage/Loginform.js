import React, { Fragment } from "react";
import classes from './Loginform.module.css';
import { Link } from "react-router-dom";
import Sernav from "../Services/Servicesnav";
//import Aboutlast from "../About/Aboutlast";

const Loginform =(props)=>{
    return(
        <Fragment>
            <div className={classes.loginform1}>
                <Sernav/>
                <div className={classes.body}>
                    <div className={classes.containerlogin}>
                        <div className={classes.headerlogin}>
                            New a Member
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
                                <label className={classes.label1} for="myfile">Already Sign In? Login Now</label><br></br>
                                <a href="sitecrafter.tech"><br></br><Link to={'/Mainlogin?'}><u>Login</u></Link></a>
                                <br/> <br/> 
                                <label for="submit"></label>
                                <input type="submit" name="submit" id="submit" value="REGISTER"></input>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div className={classes.aboutlastcont}>
                    <div className={classes.lastmain}>
                        <div className={classes.firstfooter}>
                            <li className={classes.copyright}>© Copyright Sitecrafter . </li>
                            <li className={classes.reserve}> All Rights Reserved</li>
                        </div>
                        <div className={classes.secfooter}>
                            <p>Desinged by</p>
                            <a href="sitecrafter.tech"><Link to={'/'}>Sitecafters</Link></a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Loginform;
