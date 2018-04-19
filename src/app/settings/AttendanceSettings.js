import React  from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import {DatePicker,TextField,Slider} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {moment} from "moment";
import {Link} from "react-router-dom";
import TimePicker from 'rc-time-picker';
import Icon from 'react-icons-kit';

import {displayContainer,pageHeading,hrStyle} from "../Layout.css";
import {labelStyle,inputstyle,formStyle,inputStyle,textAreaStyle,hyperLink,floatRight,
  inputStyle1,labelStyle1,dropDownInputStyle,buttonstyle,divStyle,boxText,imageText,imageInput,iconStyle} from "./LayoutSettings.css";
  import {Header1} from "../Header1";
  import {Footer} from "../Footer";
export class AttendanceSettings extends React.Component {
  render() {

    return(
      <div>
      <Header1/>
             <div className={displayContainer}>
      <p className={pageHeading}>Attendance</p>
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
               <Slider style={{height: 115,float:'right'}} axis="y-reverse" defaultValue={0.35} />
               </MuiThemeProvider>
              <FormGroup>
                <Label className={labelStyle}>Shift Name</Label>
                <Input className={inputStyle} type="text" name="" id="" placeholder="" />
              </FormGroup>
              <div class="form-row">
              <div class="col-md-3 mb-3">
              <label className={labelStyle1}>Work Start Time</label>
             <input type="time" class="form-control" id={inputstyle} value=""/>
             </div>
             <div class="col-md-3 mb-3">
             <label className={labelStyle1}>Work End Time</label>
            <input type="time" class="form-control" id={inputstyle} value=""/>
            </div>

            </div>
              <FormGroup>
                   <Label className={labelStyle}>Description</Label>
                   <Input className={textAreaStyle} type="textarea" name="text" id="" />
                 </FormGroup>
                 <div class="form-row">
                 <div class="col-md-3 mb-3">
                 <label className={labelStyle1}>Late Mark After Time</label>
                <input type="time" class="form-control" id={inputstyle} value=""/>
                </div>
                <div class="col-md-3 mb-3">
                 <label className={labelStyle1}>Over Time</label>
                 <select id="" class="form-control" id={inputstyle}>
                 <option>Enable</option>
                  <option>Disable</option>
                </select>
               </div>

               </div>

               <FormGroup>

           <div class="row">
           <legend class="col-form-label  col-sm-2 pt-0" style={{fontSize:'0.8vw'}}>Status</legend>
           <div class="col-sm-10" style={{marginLeft:'-8vw',marginTop:'-0.4vw'}}>
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
             </div>
             </FormGroup>
                 </Form>

              <Button className="btn btn-outline-primary btn-sm" id={buttonstyle}>
              <Link to="/ViewShiftAttendance" className={hyperLink}>Save</Link></Button>
              <Button className="btn btn-outline-primary btn-sm" id={buttonstyle}>
              <Link to="/CompanyDetails" className={hyperLink}>Back</Link></Button>
              <Button className="btn btn-outline-primary btn-sm" id={buttonstyle}>
              <Link to="/AddLeave" className={hyperLink}>Next</Link></Button>
              <Button className="btn btn-outline-primary btn-sm" id={buttonstyle} style={{border:'none'}}>
              <Link to="/AddLeave" className={hyperLink}>Skip this</Link></Button>


             </div>
             <Footer/>
             </div>


    );
  }
}
