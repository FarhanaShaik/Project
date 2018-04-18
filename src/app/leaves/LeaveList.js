import React from "react";
import {render} from "react-dom";
import { Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';

import Icon from 'react-icons-kit';

import { bin } from 'react-icons-kit/icomoon/bin';
import {Link} from "react-router-dom";
import { search } from 'react-icons-kit/icomoon/search';
import { ic_delete } from 'react-icons-kit/md/ic_delete';
 import { ic_create } from 'react-icons-kit/md/ic_create';

import {displayContainer,pageHeading,hrStyle,labelStyle,inputstyle,hyperLink,formStyle,inputStyle,textAreaStyle,tableDiv,
  inputStyle1,labelStyle1,addNewDepartmentStyle,floatRight,verticalLine,dropDownInputStyle,buttonstyle,divStyle,radioStyle1,
  boxText,imageText,radioStyle,labelStyleRadio,imageInput,contentStyle,iconStyle,activeStyle,orange} from "../Layout.css";


export class LeaveList extends React.Component{
  render() {
    return(
      <div className={displayContainer}>
<p className={pageHeading}>Leave List<span className={floatRight}><Icon icon={search}/></span></p>
<hr className={hrStyle}/>

<table class="table table-bordered table-striped table-responsive-md" id={contentStyle}>
<thead>
    <tr className={orange}>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Leave Name</th>
          <th>Leave Type</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Reason</th>
          <th>Status</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td>E345</td>
         <td></td>
         <td></td>
          <td></td>
         <td ></td>
         <td></td>
         <td></td>
          <td></td>
         <td><Icon icon={ic_create} size={20}/>
<Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /></td>
     </tr>
     </tbody>
     </table>
      </div>
    );
  }
}
