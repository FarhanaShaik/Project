import React from "react";
import {LogoHeader} from "./LogoHeader";
import {containerRegistration,content,ptext,
  registrationheader,registration,forminput,formstyle,submit,lasttext,hyperlink1,submitLink} from "./LayoutRegistration.css";
import {Link} from "react-router-dom";

export class CreatePassword extends React.Component{
  render(){
    return(
      <div className={containerRegistration}>
      <div className={content}>
      <LogoHeader/>
      <div className={registration}>
      <p className={registrationheader}>Create Password</p>
      <p className={ptext}>Thank you for registering and acivating your account with <span style={{color:'red'}}>H</span>rms.</p>
      <form className={formstyle}>
      <div class="form-group">
        <input type="password" class="form-control" id={forminput} placeholder="Password"/>
      </div>
  <div class="form-group">
    <input type="password" class="form-control" id={forminput}  aria-describedby="emailHelp" placeholder="Confirm"/>
  </div>
  <button type="submit" class="btn btn-primary" id={submit}>
  <Link to="/FirstPage" id={submitLink}>Submit</Link>
  </button>
</form>

      </div>
      </div>
      </div>
    );
  }
}
