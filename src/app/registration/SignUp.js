import React from "react";
import {LogoHeader} from "./LogoHeader";
import {containerRegistration,content,registrationheader,registration,forminput,submit,lasttext,hyperlink,submitLink} from "./LayoutRegistration.css";
import {Link} from "react-router-dom";

export class SignUp extends React.Component{
  render(){
    return(
      <div className={containerRegistration}>
      <div className={content}>
      <LogoHeader/>
      <div className={registration}>
      <p className={registrationheader}>Registration</p>
      <form>
      <div class="form-group">
        <input type="text" class="form-control" id={forminput} placeholder="Name"/>
      </div>
  <div class="form-group">
    <input type="email" class="form-control" id={forminput}  aria-describedby="emailHelp" placeholder="Email ID"/>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id={forminput}  placeholder="Phone"/>
  </div>

  <button type="submit" class="btn btn-primary" id={submit}>
  <Link to="/VerifyAccount" id={submitLink}>Submit</Link>
  </button>
</form>
<p className={lasttext}>Existing user? <Link to="/Login" className={hyperlink}>Log In</Link></p>
      </div>
      </div>
      </div>
    );
  }
}
