import React from "react";
import {render} from "react-dom";
import TimePicker from 'material-ui/TimePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from "react-router-dom";
import {containerRegistration,logo,text,hrStyle,content,floatingtext1,insidefloating1,pagetext,viewfeatures,hyperlink }from "./LayoutRegistration.css";
export class LoginPage extends React.Component{
  render()
  {
    return(
      <div className={containerRegistration}>
      <div className={content}>
<h1 className={logo}>H<span style={{color:'white'}}>rms</span></h1>
<p className={text}>Human Resource Management
<span className={floatingtext1}>
<span className={insidefloating1}>Log In</span>
<span><Link to="/SignUp" className={hyperlink}>Sign Up</Link></span>
</span>
</p>
<hr className={hrStyle} />
<p className={pagetext}>An easy assign-and-schedule mechanism for a 360-degree overview on your workforce</p>
<Link to="/ViewFeatures"><button id={viewfeatures} class="btn btn-light">View Features</button></Link>
</div>
      </div>

    );
  }
}
