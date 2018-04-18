import React from "react";
import {Card,Col,CardText,Row} from "reactstrap";
import {approvalsRow1,approvalsRow2,approvalsDiv,buttonStyle,buttonStyleL} from "./CardStyling.css";
import {cardStyle1} from "./Home.css";
import Icon from 'react-icons-kit';


import {CardHeader} from "./CardHeader";



export class Approvals extends React.Component{
  render() {
    return(
      <Col style={{marginRight:'-1vw'}}>
        <Card body inverse className={cardStyle1} >
          <CardHeader text={"APPROVALS"}/>
          <CardText style={{fontSize:'3vw',color:'orange', textAlign:'center'}}>12
           </CardText>
          <div className={approvalsDiv}>
          <Row className={approvalsRow1}>
            <button type="button" class="btn btn-outline-light" id={buttonStyle}>Leaves</button>
            <button type="button" class="btn btn-outline-light" id={buttonStyle}>Attendance</button>
            <button type="button" class="btn btn-outline-light" id={buttonStyleL}>Overtime</button>
          </Row>
          <Row className={approvalsRow2}>
            <button type="button" class="btn btn-outline-light" id={buttonStyle}>Reimbursement</button>
            <button type="button" class="btn btn-outline-light" id={buttonStyle}>Claims</button>
            <button type="button" class="btn btn-outline-light" id={buttonStyleL}>others</button>
          </Row>
          </div>
      </Card>
      </Col>
    );
  }
}
