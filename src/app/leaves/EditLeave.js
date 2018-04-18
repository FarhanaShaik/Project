import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
import $ from "jquery";
import {Link} from "react-router-dom";

import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle1,formStyle,inputStyle,inputstyle,textAreaStyle,
labelStyle1,dropDownInputStyle,buttonstyle,divStyle,radioStyle1,hyperLink,
boxText,imageText,radioStyle,labelStyleRadio,imageInput,iconStyle} from "../settings/LayoutSettings.css";

export class EditLeave extends React.Component{
  render() {

    return(
      <div className={displayContainer}>
<p>Leaves & Time>><span className={pageHeading} onClick={this.handle}></span>Leaves</p>
<p id="click"></p>
<hr className={hrStyle}/>
     <Form className={formStyle}>


       <div class="form-row">
         <div class="col-md-3 mb-3">
           <label className={labelStyle1}>Employee ID</label>
           <input type="text" class="form-control"  id={inputstyle} placeholder=""/>

         </div>
         <div class="col-md-3 mb-3">
           <label className={labelStyle1}>Employee Name</label>
           <input type="text" class="form-control" id={inputstyle} placeholder="" />
         </div>
         </div>

            <div class="form-row">
              <div class="col-md-3 mb-3">
                <label className={labelStyle1}>Leave Name</label>
                <input type="text" class="form-control"  id={inputstyle} placeholder=""/>

              </div>
              <div class="col-md-3 mb-3">
                <label className={labelStyle1}>Leave Type</label>
                <input type="date" class="form-control" id={inputstyle} placeholder="" />
              </div>
              </div>

                     <div class="form-row">
                       <div class="col-md-3 mb-3">
                         <label className={labelStyle1}>Start Date</label>
                         <input type="date" class="form-control"  id={inputstyle} placeholder=""/>

                       </div>
                       <div class="col-md-3 mb-3">
                         <label className={labelStyle1}>End Date</label>
                         <input type="date" class="form-control" id={inputstyle} placeholder="" />
                       </div>
                       </div>
       <FormGroup>
            <Label className={labelStyle}>Reason</Label>
            <Input className={textAreaStyle} type="textarea" name="text" id="" />
          </FormGroup>


 <label className={labelStyle1}>Status</label>

<select id="" class="form-control" id={inputstyle} style={{width:'50%'}}>
<option>Approved</option>
<option>Rejected</option>
<option>Pending</option>
</select>




          </Form>

       <Button className="btn btn-outline-primary btn-sm" id={buttonstyle}>
       <Link to="/Leaves" className={hyperLink}>Save</Link></Button>




      </div>
    );
  }
}
