import React from "react";

import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container} from "semantic-ui-react";
import TextField from 'material-ui/TextField';
import Icon from 'react-icons-kit';
import { arrowRight2,arrowLeft2,plus } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import Slider from 'material-ui/Slider';
import {displayContainer,arrowIcon} from "../Layout.css";
import {hrStyle,hyperLinkEmployee,slideremp} from "./LayoutEmployee.css";
import {pageHeading,labelStyle,inputstyle,formStyle,inputStyle,floatRight,enableBtn,disableBtn,
  inputStyle1,labelStyle1,buttonstyle,divStyle,overtimeDiv,boxText,imageText,imageInput,iconStyle} from "./LayoutSettings.css";
  import {Header1} from "../Header1";
  import {Footer} from "../Footer";
export class LoginInfo extends React.Component{
  render() {
    return(
      <div>
      <Header1/>
       <div className={displayContainer}>
<p className={pageHeading}>Login Information</p>
<hr className={hrStyle}/>
<Row>
<Col xs="10">
  <Form className={formStyle}>
      <div class="form-row">
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Name</label>
          <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
        </div>
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Email ID</label>
          <input type="text" class="form-control" id={inputstyle} placeholder="" />
        </div>
        </div>
        <FormGroup>
          <Label className={labelStyle}>Auto Generated Password</Label>
          <Input className={inputStyle} type="text" name="" id="" placeholder="" />
        </FormGroup>
      </Form>
        <button class="btn btn-outline-warning"  id={buttonstyle}>

      <Link to="/JobHistory" className={hyperLinkEmployee}>Invite</Link></button>
      </Col>
      <Col>
      <div className={floatRight} style={{fontSize:'0.9vw'}}>
      <p style={{marginTop:'1.5vw'}}>
      <Link to="/PersonalDetails" className={hyperLinkEmployee}>Personal Details</Link></p>
      <p><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Professional Details</Link></p>
      <p><Link to="/BankDetails" className={hyperLinkEmployee}>Bank Details</Link></p>
      <p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
      <p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
      <p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
      </div>

      <MuiThemeProvider>
         <Slider style={{height: 180,float:'left'}} className={slideremp} axis="y-reverse" defaultValue={0.60} />
         </MuiThemeProvider>
         </Col>
         </Row>

      <div style={{marginTop:'5vw'}}>
      <Link to="/JobHistory" className={hyperLinkEmployee} style={{position:'relative',top:'0.5vw',left:'0.5vw'}}>Skip</Link>

           <span className={floatRight}>

           <Link to="/BankDetails" className={hyperLinkEmployee} style={{marginRight:'1vw'}}>
             <Icon icon={arrowLeft2} className={arrowIcon} size={14}  />Previous</Link>
           <Link to="/JobHistory" className={hyperLinkEmployee}>Next
             <Icon icon={arrowRight2} className={arrowIcon} size={14} /></Link>
        </span>
</div>
       </div>
       <Footer/>
       </div>
     );
   }
 }
