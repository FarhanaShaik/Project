import React from "react";

import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2';
import { arrowLeft2 } from 'react-icons-kit/icomoon/arrowLeft2';
import { plus } from 'react-icons-kit/icomoon/plus';
import {Link} from "react-router-dom";
import Slider from 'material-ui/Slider';
import {displayContainer,arrowIcon} from "../Layout.css";
import {hrStyle,hyperLinkEmployee,dateStyle} from "./LayoutEmployee.css";
import {pageHeading,labelStyle,inputstyle,formStyle,inputStyle,floatRight,enableBtn,disableBtn,
  inputStyle1,labelStyle1,buttonstyle,divStyle,overtimeDiv,boxText,imageText,imageInput,iconStyle} from "./LayoutSettings.css";
import {Header1} from "../Header1";
import {Footer} from "../Footer";

export class JobHistory extends React.Component{
  render() {
    return(
  <div>
  <Header1/>
      <div className={displayContainer}>
<p className={pageHeading}>Job History</p>
<hr className={hrStyle}/>
<Form className={formStyle}>
<div className={floatRight} style={{fontSize:'0.9vw'}}>
<p style={{marginTop:'1.5vw'}}>
<Link to="/PersonalDetails" className={hyperLinkEmployee}>Personal Details</Link></p>
<p><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Professional Details</Link></p>
<p><Link to="/BankDetails" className={hyperLinkEmployee}>Bank Details</Link></p>
<p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
<p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
<p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
</div>

<MuiThemeProvider>
   <Slider style={{height: 180,float:'right'}} axis="y-reverse" defaultValue={0.80} />
   </MuiThemeProvider>

      <div class="form-row">
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Company Name</label>
          <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
        </div>
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Department</label>
          <input type="text" class="form-control" id={inputstyle} placeholder="" />
        </div>
        </div>
        <div class="form-row">
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Designation</label>
            <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
          </div>
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Reporting Mananger</label>
            <input type="text" class="form-control" id={inputstyle} placeholder="" />
          </div>
          </div>
        <div class="form-row">
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Start Date</label>
          <MuiThemeProvider>
    <DatePicker hintText="date of joining" underlineStyle={{display: 'none'}} className={dateStyle} />
        </MuiThemeProvider>
        </div>
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>End Date</label>
          <MuiThemeProvider>
    <DatePicker hintText="date of joining" underlineStyle={{display: 'none'}} className={dateStyle} />
        </MuiThemeProvider>
        </div>
          </div>

</Form>
  <button class="btn btn-outline-warning"  id={buttonstyle}>
 ADD</button>
<div style={{marginTop:'5vw'}}>
<Link to="/EmpDocs" className={hyperLinkEmployee} style={{position:'relative',top:'0.5vw',left:'0.5vw'}}>Skip</Link>

     <span className={floatRight}>

     <Link to="/LoginInfo" className={hyperLinkEmployee} style={{marginRight:'1vw'}}>
       <Icon icon={arrowLeft2} className={arrowIcon} size={14}  />Previous</Link>
     <Link to="/EmpDocs" className={hyperLinkEmployee}>Next
       <Icon icon={arrowRight2} className={arrowIcon} size={14} /></Link>
  </span>
          </div>
       </div>
       <Footer/>
       </div>

     );
   }
 }
