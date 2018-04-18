import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import {TextField,SelectField,MenuItem,Slider,DatePicker} from 'material-ui';
import Icon from 'react-icons-kit';
import { arrowRight2, arrowLeft2,plus } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,floatRight,arrowIcon} from "../Layout.css";
import {pageHeading,hrStyle,labelStyle,inputstyle,formStyle,inputStyle,
  inputStyle1,labelStyle1,buttonstyle,hyperLinkEmployee,enableBtn,disableBtn,
  overtimeDiv,slideremp,dateStyle} from "./LayoutEmployee.css";
export class ProfessionalDetails extends React.Component{
  render() {
    return(
       <div className={displayContainer}>
<p className={pageHeading}>Professional Details</p>
<hr className={hrStyle}/>
<Row>
<Col xs="10">
      <Form className={formStyle}>
      <div class="form-row">
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>First Name</label>
          <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
        </div>
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Last Name</label>
          <input type="text" class="form-control" id={inputstyle} placeholder="" />
        </div>
        </div>
        <FormGroup>
          <Label className={labelStyle}>Email ID</Label>
          <Input className={inputStyle} type="text" name="" id="" placeholder="" />
        </FormGroup>
        <div class="form-row">
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Employee ID</label>
            <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
          </div>
          <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Designation</label>
          <select id="" class="form-control" id={inputstyle}>
          <option></option>
          </select>
          </div>
          </div>
        <div class="form-row">
        <div class="col-md-3 mb-3">
        <label className={labelStyle1}>Department</label>
        <select id="" class="form-control" id={inputstyle}>
        <option></option>
        </select>
        </div>
        <div class="col-md-3 mb-3">
        <label className={labelStyle1}>Employment Type</label>
        <select id="" class="form-control" id={inputstyle}>
        <option></option>
        </select>
        </div>
          </div>
         <FormGroup>
            <Label className={labelStyle}>Reporting Mananger</Label>
            <Input className={inputStyle} type="text" name="" id="" placeholder="" />
          </FormGroup>
          <div class="form-row">
            <div class="col-md-3 mb-3">
              <label className={labelStyle1}>Date of Joining</label>
              <MuiThemeProvider>
        <DatePicker hintText="date of joining" underlineStyle={{display: 'none'}} className={dateStyle} />
            </MuiThemeProvider>
            </div>
            <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Location</label>
            <select id="" class="form-control" id={inputstyle}>
            <option></option>
            </select>
            </div>
            </div>

           </Form>
           </Col>
           <Col>
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
              <Slider style={{height: 180,float:'left'}} className={slideremp} axis="y-reverse" defaultValue={0.25} />
              </MuiThemeProvider>
              </Col>
              </Row>
    <Row>
    <p style={{marginLeft:'1vw'}}>Overtime Pay</p>
    <button type="btn btn-outline-primary" className={enableBtn}>Enable</button>
    <button type="btn btn-outline-primary" className={disableBtn}>Disable</button>
 </Row>
 <div className={overtimeDiv}>
 <div class="form-check">
   <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked
   style={{marginTop:'0.7vw'}}/>
   <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginTop:'0.45vw'}}>
     On Holidays
   </label>
 </div>
 <div class="form-check">
   <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
   <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.5vw'}}>
   On Week Off
   </label>
 </div>
 <div class="form-check">
   <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
   <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.5vw'}}>
    Daily
   </label>
 </div>
 </div>
 <button type="button" class="btn btn-outline-warning"  id={buttonstyle}>
 <Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Save</Link></button>

 <Link to="/BankDetails" className={hyperLinkEmployee} style={{position:'relative',top:'0.5vw',left:'0.5vw'}}>Skip </Link>
             <span className={floatRight}>

             <Link to="/PersonalDetails" className={hyperLinkEmployee} style={{marginRight:'1vw'}}>
               <Icon icon={arrowLeft2} className={arrowIcon} size={14} />Prev </Link>
             <Link to="/BankDetails" className={hyperLinkEmployee}>Next
               <Icon icon={arrowRight2} className={arrowIcon} size={14}/></Link>

          </span>


       </div>
     );
   }
 }
