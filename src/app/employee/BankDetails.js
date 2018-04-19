import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import {DatePicker,Slider,TextField} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import {arrowLeft2, arrowRight2,pencil,search} from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import { ic_create,ic_delete } from 'react-icons-kit/md';
import {addNewDepartmentStyle,dropDownInputStyle,
  boxText,imageText,contentStyle} from "../settings/LayoutSettings.css";
import {displayContainer,arrowIcon,tableinput,contentStyle1,right,hrStyle} from "../Layout.css";
import {hyperLinkEmployee,btnManual,btnAuto} from "./LayoutEmployee.css";
import {pageHeading,labelStyle,inputstyle,formStyle,inputStyle,floatRight,enableBtn,disableBtn,
  inputStyle1,labelStyle1,buttonstyle,overtimeDiv,iconStyle} from "./LayoutSettings.css";
import {Manual} from "./Manual";
import {Auto} from "./Auto";

export class BankDetails extends React.Component{
  constructor(props) {
    super(props);
    this.nextmanual=this.nextmanual.bind(this);
    this.nextauto=this.nextauto.bind(this);
    this.state = {
      manualcomponents:false,
      autocomponents:false
    };
  }
  nextmanual(){
    this.setState({
  manualcomponents:!this.state.manualcomponents,
  autocomponents:false
    });
  }
  nextauto(){
    this.setState({
      autocomponents:!this.state.autocomponents,
      manualcomponents:false
    })
  }
  manualdisplay(){
    if(this.state.manualcomponents){
      return(
        <Auto/>
      );
    }
  }
    autodisplay(){
      if(this.state.autocomponents){
        return(
        <Manual/>
        );
      }
    }
  render() {
var manualcomponents = this.manualdisplay();
var autocomponents = this.autodisplay();
    return(
       <div className={displayContainer}>
<p className={pageHeading}>Bank Details</p>
<hr className={hrStyle}/>
  <Form className={formStyle}>
<div className={floatRight} style={{fontSize:'0.9vw',marginTop:'1.5vw'}}>
<p>
<Link to="/PersonalDetails" className={hyperLinkEmployee}>Personal Details</Link></p>
<p><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Professional Details</Link></p>
<p><Link to="/BankDetails" className={hyperLinkEmployee}>Bank Details</Link></p>
<p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
<p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
<p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
</div>
<MuiThemeProvider>
   <Slider style={{height: 180,float:'right'}} axis="y-reverse" defaultValue={0.43} />
   </MuiThemeProvider>

      <div class="form-row">
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Account Holder Name</label>
          <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
        </div>
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Bank Name</label>
          <input type="text" class="form-control" id={inputstyle} placeholder="" />
        </div>
        </div>
        <div class="form-row">
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Branch Name</label>
            <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
          </div>
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Account Number</label>
            <input type="text" class="form-control" id={inputstyle} placeholder="" />
          </div>
          </div>
        <div class="form-row">
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>IFSC Code</label>
            <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
          </div>
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Account Type</label>
            <input type="text" class="form-control" id={inputstyle} placeholder="" />
          </div>
          </div>
</Form>
<p className={pageHeading} style={{marginTop:'2vw'}}>Salary Component</p>

<div class="form-row">
  <div class="col-md-3 mb-3">
    <label className={labelStyle1}>Annual CTC</label>
    <input type="text" class="form-control"  id={tableinput} placeholder=""/>
  </div>
  <div class="col-md-3 mb-3">
    <label className={labelStyle1}>Monthly CTC</label>
    <input type="text" class="form-control" id={tableinput} placeholder="" />
  </div>
  <form class="form-inline">
<div class="form-group">
<label for="inputPassword6">Salary Break up</label>
<button class="btn btn-outline-warning" onClick={this.nextmanual.bind(this)} id={btnManual}>Manual</button>
<button class="btn btn-outline-warning" onClick={this.nextauto.bind(this)} id={btnAuto}>Auto</button>
</div>
</form>
</div>
{manualcomponents}
{autocomponents}
    <button class="btn btn-outline-warning"  id={buttonstyle}>
     <Link to="/LoginInfo" className={hyperLinkEmployee}>Save</Link></button>
     <Link to="/LoginInfo" className={hyperLinkEmployee} style={{position:'relative',top:'0.5vw',left:'0.5vw'}}>Skip</Link>

          <span className={floatRight}>

          <Link to="/ProfessionalDetails" className={hyperLinkEmployee} style={{marginRight:'1vw'}}>
            <Icon icon={arrowLeft2} className={arrowIcon} size={14}  />Previous</Link>
          <Link to="/LoginInfo" className={hyperLinkEmployee}>Next
            <Icon icon={arrowRight2} className={arrowIcon} size={14} /></Link>
       </span>
       </div>
     );
   }
 }
