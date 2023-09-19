import React, { Fragment } from "react";
import Sernav from "../Services/Servicesnav";
import Contactstart from "./Contactstart";

const Contactwrap =()=>{
    return(
        <Fragment>
            <div>
                <Sernav/>
                <Contactstart/>
            </div>
        </Fragment>
    );
};

export default Contactwrap;