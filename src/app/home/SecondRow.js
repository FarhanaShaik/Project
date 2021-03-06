import React from "react";
import {EmployeeStatus} from "./EmployeeStatus";
import {Departments} from "./Departments";
import {Holidays1} from "./Holidays1";
import {rowStyle} from "../Layout.css";
import {Row} from "reactstrap";

export class SecondRow extends React.Component{
  render(){
    return(
      <Row className={rowStyle}>
         <EmployeeStatus/>
         <Departments/>
       <Holidays1/>
     </Row>
    );

  }
}
