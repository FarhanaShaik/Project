import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import {DatePicker,TextField} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { plus,glass2,search } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,pageHeading,hrStyle} from "../Layout.css";
import {dateStyle} from "../employee/LayoutEmployee.css";
import {labelStyle,inputstyle1,formStyle,inputStyle,textAreaStyle,
labelStyle1,dropDownInputStyle,buttonstyle,divStyle,radioStyle1,boxText,imageText,radioStyle,labelStyleRadio,
imageInput,iconStyle,hyperLink} from "../settings/LayoutSettings.css";
import {contentHeading,inputstyle,addBtn,cancelBtn,floatRight} from "../projects/Projects.css";
import {Header1} from "../Header1";
import {Footer} from "../Footer";

export class AddExpenses extends React.Component{
  render() {
    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
<p className={pageHeading}>Add Claims</p>
<hr className={hrStyle}/>

     <Form className={formStyle}>

       <FormGroup>
         <Label className={labelStyle}>Expense Name</Label>
         <Input className={inputStyle} type="text" name="" id="" placeholder="" />
       </FormGroup>

            <div class="form-row">
            <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Amount</label>
            <input type="text" class="form-control" id={inputstyle}/>
            </div>
            <div class="col-md-3 mb-3">
              <label className={labelStyle1}>Date</label>
              <MuiThemeProvider>
        <DatePicker hintText="date of joining" underlineStyle={{display: 'none'}} className={dateStyle} />
            </MuiThemeProvider>
            </div>
            </div>
            <FormGroup>
                 <Label className={labelStyle}>Description</Label>
                 <Input className={textAreaStyle} type="textarea" name="text" id="" />
               </FormGroup>


           <Button className="btn btn-outline-primary btn-sm" id={addBtn}>
           <Link to="/ExpenseList" className={hyperLink}>Submit</Link></Button>

          </Form>

      </div>
      <Footer/>
      </div>
    );
  }
}
