import React from "react";
import {logo,floatingtext1,insidefloating1,hyperlink} from "./LayoutRegistration.css";
import {Link} from "react-router-dom";

export class LogoHeader extends React.Component{
  render(){
    return(
      <div>
      <h1 className={logo} >H<span style={{color:'white'}}>rms</span></h1>
      <p className={floatingtext1}>
      <span className={insidefloating1}>Log In</span>
      <span><Link to="/SignUp" className={hyperlink}>Sign Up</Link></span>
      </p>
      </div>
    );
  }
}
