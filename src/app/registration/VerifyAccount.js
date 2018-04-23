import React from "react";
import {LogoHeader} from "./LogoHeader";
import {containerRegistration,content,registrationheader,registration,
  forminputotp,submit,submitLink,lasttext1,lasttext2,hyperlink1,otptext} from "./LayoutRegistration.css";
import {Link} from "react-router-dom";
import {Row} from "reactstrap";
import {FooterText} from "./Footertext";

export class VerifyAccount extends React.Component{
  render(){
    return(
      <div>
      <div className={containerRegistration}>
      <div className={content}>
      <LogoHeader/>
      <div className={registration}>
      <p className={registrationheader}>Verify Account</p>
<p className={otptext}>OTP has been sent on your phone Number _ _ _ _ _ _ _660. please enter it below</p>
<form>
<div class="form-group">
  <input type="text" class="form-control" id={forminputotp} placeholder="OTP"/>
</div>
</form>

  <Link to="/CreatePassword" ><button type="submit" class="btn btn-light" id={submit}>
Submit
  </button></Link>

<p className={lasttext1}>Resend OTP<span ><Link to="/SignUp" className={lasttext2}>Change Number</Link></span></p>
      </div>
      </div>
      </div>
      <FooterText/>
      </div>
    );
  }
}
