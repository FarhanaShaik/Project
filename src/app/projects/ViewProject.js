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
import {contentHeading} from "./Projects.css";


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
  import { bin2 } from 'react-icons-kit/icomoon/bin2';
import { glass2 } from 'react-icons-kit/icomoon/glass2';

export class ViewProject extends React.Component{
  render() {
    return(
      <div className={displayContainer}>
<p className={pageHeading}>View Projects<span className={floatRight}> <Icon icon={search} /> <Icon icon={glass2} /></span></p>
<hr className={hrStyle}/>

<table class="table table-bordered table-responsive-md" id={contentStyle}>
<thead>
      <tr style={{backgroundColor:'#D6D6D6'}}>
          <th>Client Name</th>
          <th>Project Name</th>
          <th>Assigned Employees</th>
          <th>Start Date</th>
          <th>End Date</th>

          <th>Status</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td>Eros International</td>
         <td>Video Content Delivery System</td>
         <td style={{textAlign:'center'}}>10</td>
         <td>01/01/2018</td>
         <td>02/06/2018</td>

         <td className={activeStyle}>Active</td>

         <td>  <Link to="/EditRole" className={hyperLink}><Icon icon={pencil} /></Link>
             <Icon icon={bin2} style={{marginLeft:'1vw'}} /> </td>
     </tr>
     <tr>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>

         <td className={activeStyle}></td>

         <td>  <Link to="/EditRole" className={hyperLink}><Icon icon={pencil} /></Link>
         <Icon icon={bin} style={{marginLeft:'1vw'}} /></td>
     </tr>

     </tbody>
     </table>


       <Button className="btn btn-outline-primary btn-sm" id={addNewDepartmentStyle}>
       <Icon icon={plus} style={{color:'#FF7F27',marginRight:'0.5vw'}} size={10} />
       <Link to="/AddProject" className={hyperLink}>Add New Project</Link></Button>




      </div>
    );
  }
}
