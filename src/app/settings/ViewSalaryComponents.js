import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
  import { pencil } from 'react-icons-kit/icomoon/pencil'
import { bin } from 'react-icons-kit/icomoon/bin';
import {Link} from "react-router-dom";
import { search } from 'react-icons-kit/icomoon/search';


import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle,hyperLink,formStyle,inputStyle,textAreaStyle,tableDiv,
  inputStyle1,labelStyle1,addNewDepartmentStyle,floatRight,verticalLine,dropDownInputStyle,buttonstyle,divStyle,radioStyle1,
  boxText,imageText,radioStyle,labelStyleRadio,imageInput,contentStyle,iconStyle,activeStyle} from "./LayoutSettings.css";
  import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
  } from 'material-ui/Table';

export class ViewSalaryComponents extends React.Component{
  render() {
    return(
      <div className={displayContainer}>
<p className={pageHeading}>Salary Components<span className={floatRight}> <Icon icon={search} /></span></p>
<hr className={hrStyle}/>

<table class="table table-bordered table-responsive-md" id={contentStyle}>
<thead>
      <tr>
          <th>Component Name</th>
          <th>Calculation On</th>
          <th>Component Type</th>
          <th>Amount Type</th>
          <th>Formula</th>
          <th>Show in PaySlip</th>
          <th>Show in CTC</th>
          <th>Taxable</th>
          <th>Status</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td className={activeStyle}>Active</td>

         <td>  <Link to="/EditRole" className={hyperLink}><Icon icon={pencil} /></Link>
         <Icon icon={bin} style={{marginLeft:'1vw'}} /></td>
     </tr>
     <tr>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td className={activeStyle}>Active</td>

         <td>  <Link to="/EditRole" className={hyperLink}><Icon icon={pencil} /></Link>
         <Icon icon={bin} style={{marginLeft:'1vw'}} /></td>
     </tr>

     </tbody>
     </table>


       <Button className="btn btn-outline-primary btn-sm" id={addNewDepartmentStyle}>
       <Icon icon={plus} style={{color:'#FF7F27',marginRight:'0.5vw'}} size={10} />
       <Link to="/AddComponent" className={hyperLink}>Add New Component</Link></Button>




      </div>
    );
  }
}
