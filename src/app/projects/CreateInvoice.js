import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
import {Link} from "react-router-dom";
import {enableBtn,disableBtn,subDiv,addBtn,cancelBtn,contentHeading} from "./Projects.css";
import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle,formStyle,inputStyle,floatRight,labelstyle,hyperLink,
  inputstyle1,labelStyle1,buttonstyle,divStyle,overtimeDiv,boxText,imageText,imageInput,iconStyle,hyperLinkEmployee} from "./LayoutSettings.css";


export class CreateInvoice extends React.Component{
  render() {
    return(


       <div className={displayContainer}>
<p className={pageHeading}>Create Invoice</p>
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
      <FormGroup>
        <Label className={labelStyle}>Task Name</Label>
        <Input className={inputStyle} type="text" name="" id="" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label className={labelStyle}>Date</Label>
        <Input className={inputStyle} type="text" name="" id="" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label className={labelStyle}>Time Spent</Label>
        <Input className={inputStyle} type="text" name="" id="" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label className={labelStyle}>Amount</Label>
        <Input className={inputStyle} type="text" name="" id="" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label className={labelStyle}>Client Email ID</Label>
        <Input className={inputStyle} type="text" name="" id="" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label className={labelStyle}>Attach a file</Label>
        <Input className={inputStyle} type="file" name="" id="" placeholder="" />
      </FormGroup>

   <Button className="btn btn-outline-primary btn-sm" id={addBtn} >
   <Link to="/SendInvoice" className={hyperLink}>Add</Link></Button>
   <Button className="btn btn-outline-primary btn-sm" id={cancelBtn}>Cancel</Button>

   </Form>

       </div>
     );
   }
 }
