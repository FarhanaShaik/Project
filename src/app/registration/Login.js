import React from "react";
import {LogoHeader} from "./LogoHeader";
import {containerRegistration,content,registrationheader,registration,forminput,submit,lasttext,hyperlink1,submitLink} from "./LayoutRegistration.css";
import {Link} from "react-router-dom";

export class Login extends React.Component{
  render(){
    return(
      <div className={containerRegistration}>
      <div className={content}>
      <LogoHeader/>
      <div className={registration}>
      <p className={registrationheader}>Log In</p>
      <form>

  <div class="form-group">
    <input type="email" class="form-control" id={forminput}  aria-describedby="emailHelp" placeholder="Email ID"/>
  </div>
  <div class="form-group">
    <input type="password" class="form-control" id={forminput}  placeholder="Password"/>
  </div>

  <button type="submit" class="btn btn-primary" id={submit}>
  <Link to="/VerifyAccount" id={submitLink}>Submit</Link>
  </button>
</form>
<p className={lasttext}>Create New user? <Link to="/SignUp" className={hyperlink1}>Sign Up</Link></p>
      </div>
      </div>
      </div>
    );
  }
}
