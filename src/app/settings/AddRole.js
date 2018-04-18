import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';

import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle1,formStyle,inputStyle,textAreaStyle,
labelStyle1,dropDownInputStyle,buttonstyle,divStyle,radioStyle1,boxText,imageText,radioStyle,labelStyleRadio,
imageInput,iconStyle} from "./LayoutSettings.css";

export class AddRole extends React.Component{
  render() {
    return(
      <div className={displayContainer}>
<p className={pageHeading}>Roles & Permissions</p>
<hr className={hrStyle}/>
     <Form className={formStyle}>

       <FormGroup>

         <Label className={labelStyle}>Role Name</Label>
         <Input className={inputStyle} type="text" name="" id="" placeholder="" />
       </FormGroup>


        <label className={labelStyle}>Access To Modules</label>
        <select  class="form-control" id={inputstyle1}>
        <option>1</option>
        <option>2</option>
        </select>


       <FormGroup>
            <Label className={labelStyle}>Description</Label>
            <Input className={textAreaStyle} type="textarea" name="text" id="" />
          </FormGroup>
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

       <Button className="btn btn-outline-primary btn-sm" id={buttonstyle}>Save</Button>




      </div>
    );
  }
}
