import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
import {Link} from "react-router-dom";
import {enableBtn,disableBtn,subDiv,addBtn,cancelBtn,} from "./Projects.css";
import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle,formStyle,inputStyle,floatRight,labelstyle,hyperLink,
  inputstyle1,labelStyle1,buttonstyle,divStyle,overtimeDiv,boxText,imageText,imageInput,iconStyle,hyperLinkEmployee} from "./LayoutSettings.css";


export class AddTask extends React.Component{
  render() {
    return(


       <div className={displayContainer}>
<p className={pageHeading}>Add Task</p>
<hr className={hrStyle}/>
      <Form className={formStyle}>
      <label className={labelStyle}>Select Project to Add Tasks</label>
      <select  class="form-control" id={inputstyle1}>
      <option>1</option>
      <option>2</option>
      </select>
      <div className={subDiv}>
      <label className={labelStyle}>Task Name</label>
      <select  class="form-control" id={inputstyle1}>
      <option>1</option>
      <option>2</option>
      </select>
      <label className={labelStyle}>Assign Employees</label>
      <select  class="form-control" id={inputstyle1}>
      <option>1</option>
      <option>2</option>
      </select>


    <Row>
    <p style={{marginLeft:'1vw',fontSize:'0.9vw'}}>Task is Billable</p>
    <button type="btn" className={enableBtn}>Yes</button>
    <button type="btn" className={disableBtn} disabled>No</button>
 </Row>

 <div className={overtimeDiv}>
 <div class="form-check">
   <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked
   style={{marginTop:'0.7vw'}}/>
   <label class="form-check-label" for="gridRadios1" style={{fontSize:'0.8vw',marginTop:'0.45vw'}}>
     Hour
   </label>
 </div>
 <div class="form-check">
   <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
   <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.5vw'}}>
   Day
   </label>
 </div>
 <div class="form-check">
   <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" style={{marginTop:'0.7vw'}}/>
   <label class="form-check-label" for="gridRadios2" style={{fontSize:'0.8vw',marginTop:'0.5vw'}}>
    Month
   </label>
 </div>
 </div>
 <div class="form-group row">
    <label for="inputPassword" class="col-form-label" id={labelstyle}>Task Time</label>
    <div class="col-sm-02">
      <input type="text" class="form-control"  placeholder="00:00" id={inputstyle1}/>
    </div>
  </div>
  <div class="form-group row">
     <label for="inputPassword" class="col-form-label" id={labelstyle}>Amount</label>
     <div class="col-sm-02">
       <input type="text" class="form-control"  placeholder="" id={inputstyle1}/>
     </div>
   </div>

   <Button className="btn btn-outline-primary btn-sm" id={addBtn} >
   <Link to="/ViewTasks" className={hyperLink}>Add</Link></Button>
   <Button className="btn btn-outline-primary btn-sm" id={cancelBtn}>Cancel</Button>
   </div>
   </Form>

       </div>
     );
   }
 }
