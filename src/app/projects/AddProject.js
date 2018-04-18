import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
import { glass2 } from 'react-icons-kit/icomoon/glass2';
import { search } from 'react-icons-kit/icomoon/search';
import {Link} from "react-router-dom";

import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle1,formStyle,inputStyle,textAreaStyle,hyperLink,
labelStyle1,dropDownInputStyle,buttonstyle,divStyle,radioStyle1,boxText,imageText,radioStyle,labelStyleRadio,
imageInput,iconStyle} from "./LayoutSettings.css";
import {contentHeading,inputstyle,addBtn,cancelBtn,floatRight} from "./Projects.css";

export class AddProject extends React.Component{
  render() {
    return(
      <div className={displayContainer}>
<p className={pageHeading}>Add New Project<span className={floatRight}> <Icon icon={search} /> <Icon icon={glass2} /></span></p>
<hr className={hrStyle}/>


     <Form className={formStyle}>


       <FormGroup>
         <Label className={labelStyle}>Client Name</Label>
         <Input className={inputStyle} type="text" name="" id="" placeholder="" />
       </FormGroup>
       <FormGroup>
         <Label className={labelStyle}>Project Name</Label>
         <Input className={inputStyle} type="text" name="" id="" placeholder="" />
       </FormGroup>

            <div class="form-row">
            <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Start Date</label>
            <input type="date" class="form-control" id={inputstyle}/>
            </div>
            <div class="col-md-3 mb-3">
            <label className={labelStyle1}>End Date</label>
            <input type="date" class="form-control" id={inputstyle}/>
            </div>
            </div>
       <FormGroup>
         <Label className={labelStyle}>Estimated Hours</Label>
         <Input className={inputStyle} type="text" name="" id="" placeholder="" />
       </FormGroup>

        <label className={labelStyle}>Select Employees</label>
        <select  class="form-control" id={inputstyle1}>
        <option>1</option>
        <option>2</option>
        </select>


           <Button className="btn btn-outline-primary btn-sm" id={addBtn}>
           <Link to="/ViewProject" className={hyperLink}>Add</Link></Button>
           <Button className="btn btn-outline-primary btn-sm" id={cancelBtn}>Cancel</Button>

          </Form>





      </div>
    );
  }
}
