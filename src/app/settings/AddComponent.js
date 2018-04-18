import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
import {Link} from "react-router-dom";
import {displayContainer} from "../Layout.css";
import {pageHeading,hrStyle,labelStyle,inputstyle1,formStyle,inputStyle,inputstyle,textAreaStyle,
labelStyle1,dropDownInputStyle,buttonstyle,checkboxDiv,divStyle,radioStyle1,boxText,imageText,radioStyle,hyperLink,floatRight,
labelStyleRadio,imageInput,iconStyle} from "./LayoutSettings.css";
import Slider from 'material-ui/Slider';
export class AddComponent extends React.Component{
  render() {
    return(
      <div className={displayContainer}>
<p className={pageHeading}>Salary Components</p>
<hr className={hrStyle}/>
     <Form className={formStyle}>
     <div className={floatRight} style={{fontSize:'0.9vw'}}>
     <p style={{marginTop:'1.5vw'}}>
     <Link to="/CompanyDetails" className={hyperLink}>Organization Details</Link></p>
     <p><Link to="/AttendanceSettings" className={hyperLink}>Attendance</Link></p>
     <p><Link to="/AddLeave" className={hyperLink}>Leave Types</Link></p>
     <p><Link to="/AddComponent" className={hyperLink}>Salary Cmponents</Link></p>
     </div>
     <MuiThemeProvider>
        <Slider style={{height: 115,float:'right'}} axis="y-reverse" defaultValue={0.95} />
        </MuiThemeProvider>
       <FormGroup>

         <Label className={labelStyle}>Component Name</Label>
         <Input className={inputStyle} type="text" name="" id="" placeholder="" />
       </FormGroup>
       <div class="form-row">
       <div class="col-md-3 mb-3">
       <label className={labelStyle1}>Calculation On</label>
       <select id="" class="form-control" id={inputstyle}>
       <option></option>
       </select>
       </div>
<div class="col-md-3 mb-3">
<label className={labelStyle1}>Taxable</label>
<select id="" class="form-control" id={inputstyle}>
<option></option>
</select>
</div>
  </div>

       <FormGroup>
            <Label className={labelStyle}>Description</Label>
            <Input className={textAreaStyle} type="textarea" name="text" id="" />
          </FormGroup>
           <div class="form-row">
           <div class="col-md-3 mb-3">
           <label className={labelStyle1}>Component Type</label>
           <select id="" class="form-control" id={inputstyle}>
           <option></option>
           </select>
           </div>
<div class="col-md-3 mb-3">
<label className={labelStyle1}>Amount Type</label>
<select id="" class="form-control" id={inputstyle}>
<option></option>
</select>
</div>
      </div>
          <FormGroup>


    <div class="row">
      <legend class="col-form-label  col-sm-2 pt-0" style={{fontSize:'0.8vw'}}>Status</legend>
      <div class="col-sm-4" style={{marginLeft:'-8vw',marginTop:'-0.4vw'}}>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked
          style={{marginTop:'0.7vw'}}/>
          <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginTop:'0.45vw'}}>
            Active
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
          <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.5vw'}}>
          inActive
          </label>
        </div>
        </div>

        <div class="col-sm-4" style={{marginLeft:'-12vw',marginTop:'-0.15vw'}}>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"  style={{marginTop:'0.7vw'}}/>
  <label class="form-check-label" for="defaultCheck1" id={inputstyle} style={{marginTop:'0.4vw'}}>
    Show in Payslip
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" style={{marginTop:'0.7vw'}}/>
  <label class="form-check-label" for="defaultCheck2" id={inputstyle} style={{marginTop:'0.4vw'}}>
  Show in CTC
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" style={{marginTop:'0.7vw'}}/ >
  <label class="form-check-label" for="defaultCheck2" id={inputstyle} style={{marginTop:'0.4vw'}}>
  Loss of Pay due to Employee Attendance will affect this component
  </label>
</div>
</div>
        </div>
        </FormGroup>

          </Form>

       <Button className="btn btn-outline-primary btn-sm" id={buttonstyle}>
       <Link to="/ViewSalaryComponents" className={hyperLink}>Save</Link></Button>
       <Button className="btn btn-outline-primary btn-sm" id={buttonstyle}>
       <Link to="/AddLeave" className={hyperLink}>Back</Link></Button>






      </div>
    );
  }
}
