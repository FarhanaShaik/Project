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
import {contentHeading} from "../projects/Projects.css";
import { ic_delete } from 'react-icons-kit/md/ic_delete';
 import { ic_create } from 'react-icons-kit/md/ic_create';

import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle,hyperLink,formStyle,inputStyle,textAreaStyle,tableDiv,
  inputStyle1,labelStyle1,addNewDepartmentStyle,floatRight,verticalLine,dropDownInputStyle,buttonstyle,divStyle,radioStyle1,
  boxText,imageText,radioStyle,labelStyleRadio,imageInput,contentStyle,iconStyle,activeStyle} from "../settings/LayoutSettings.css";
  import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
  } from 'material-ui/Table';
  import { bin2 } from 'react-icons-kit/icomoon/bin2';
import { glass2 } from 'react-icons-kit/icomoon/glass2';

export class ViewShiftAttendance extends React.Component{
  render() {
    return(
      <div className={displayContainer}>
<p className={pageHeading}>View Shift & Attendance</p>
<hr className={hrStyle}/>

<table class="table table-bordered table-responsive-md" id={contentStyle}>
<thead>
      <tr style={{backgroundColor:'#D6D6D6'}}>
          <th>Shift Name</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Late Mark After Time</th>
          <th>Overtime Pay</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td></td>
         <td></td>
         <td style={{textAlign:'center'}}></td>
         <td></td>
         <td>Enable</td>
         <td></td>

         <td className={activeStyle}></td>

         <td>  <Link to="/AddExpenses" className={hyperLink}><Icon icon={ic_create} size={20}/></Link>
<Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
     </tr>


     </tbody>
     </table>


       <Button className="btn btn-outline-primary btn-sm" id={addNewDepartmentStyle}>
       <Icon icon={plus} style={{color:'#FF7F27',marginRight:'0.5vw'}} size={10} />
       <Link to="/AttendanceSettings" className={hyperLink}>Add New Shift</Link></Button>




      </div>
    );
  }
}
