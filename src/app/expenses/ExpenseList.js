import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { plus,pencil,bin,search } from 'react-icons-kit/icomoon';
import { ic_delete, ic_create  } from 'react-icons-kit/md';
import {Link} from "react-router-dom";
import {contentHeading} from "../projects/Projects.css";
import {orange,contentStyle,displayContainer,pageHeading,hrStyle} from "../Layout.css";
import {labelStyle,inputstyle,hyperLink,formStyle,inputStyle,textAreaStyle,tableDiv,
  inputStyle1,labelStyle1,addNewDepartmentStyle,floatRight,verticalLine,dropDownInputStyle,buttonstyle,divStyle,radioStyle1,
  boxText,imageText,radioStyle,labelStyleRadio,imageInput,iconStyle,activeStyle} from "../settings/LayoutSettings.css";

import {Header1} from "../Header1";
import {Footer} from "../Footer";
export class ExpenseList extends React.Component{
  render() {
    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
<p className={pageHeading}>Claims</p>
<hr className={hrStyle}/>

<table class="table table-bordered table-striped table-responsive-md" id={contentStyle}>
<thead>
    <tr className={orange}>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Expense Title</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td>E253</td>
         <td>David</td>
         <td></td>
         <td></td>
         <td></td>
         <td className={activeStyle}></td>
         <td>  <Link to="/AddExpenses" className={hyperLink}><Icon icon={ic_create} size={20}/></Link>
<Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
     </tr>
     <tr>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td className={activeStyle}></td>

         <td>  <Link to="/AddExpenses" className={hyperLink}><Icon icon={ic_create} size={20}/></Link>
<Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /></td>
     </tr>

     </tbody>
     </table>
       <Button className="btn btn-outline-warning" id={addNewDepartmentStyle}>
       <Icon icon={plus} style={{color:'#FF7F27',marginRight:'0.5vw'}} size={10} />
       <Link to="/AddExpenses" className={hyperLink}>Add New Expense</Link></Button>
      </div>
      <Footer/>
      </div>
    );
  }
}
