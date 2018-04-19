import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Row,Col } from 'reactstrap';
import {DatePicker,TextField,Slider} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Icon from 'react-icons-kit';
import { plus,arrowRight2 } from 'react-icons-kit/icomoon';
import {Link} from "react-router-dom";
import {displayContainer,floatRight,arrowIcon} from "../Layout.css";
import {pageHeading,hrStyle,labelStyle,inputstyle,formStyle,inputStyle,
  inputStyle1,labelStyle1,buttonstyle,hyperLinkEmployee,slideremp} from "./LayoutEmployee.css";
  import {Header1} from "../Header1";
  import {Footer} from "../Footer";

export class PersonalDetails extends React.Component{
  render() {
    return(
      <div>
      <Header1/>

       <div className={displayContainer}>
<p className={pageHeading}>Personal Details</p>
<hr className={hrStyle}/>
<Row>
<Col xs="10">
      <Form className={formStyle}>
      <div class="form-row">
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>Fathers Name</label>
          <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
        </div>
        <div class="col-md-3 mb-3">
          <label className={labelStyle1}>DOB</label>
          <input type="text" class="form-control" id={inputstyle} placeholder="" />
        </div>
        </div>
        <div class="form-row">
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Gender</label>
            <input type="text" class="form-control"  id={inputstyle} placeholder=""/>

          </div>
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Phone</label>
            <input type="text" class="form-control" id={inputstyle} placeholder="" />
          </div>
          </div>
        <FormGroup>
          <Label className={labelStyle}>Permanent Address</Label>
          <Input className={inputStyle} type="text" name="" id="" placeholder="" />
        </FormGroup>
        <div class="form-row">
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Nationality</label>
            <input type="text" class="form-control"  id={inputstyle} placeholder=""/>

          </div>
          <div class="col-md-3 mb-3">
            <label className={labelStyle1}>Marital Status</label>
            <input type="text" class="form-control" id={inputstyle} placeholder="" />
          </div>
          </div>
           </Form>
        <p className={pageHeading}>Emergency Contact Details</p>
        <Form className={formStyle}>
          <div class="form-row">
            <div class="col-md-3 mb-3">
              <label className={labelStyle1}>Contact Person Name</label>
              <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
            </div>
            <div class="col-md-3 mb-3">
              <label className={labelStyle1}>Phone</label>
              <input type="text" class="form-control" id={inputstyle} placeholder="" />
            </div>
            </div>
              <div class="form-row">
                <div class="col-md-3 mb-3">
                  <label className={labelStyle1}>Relationship</label>
                  <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
                </div>
                <div class="col-md-3 mb-3">
                  <label className={labelStyle1}>Email ID</label>
                  <input type="text" class="form-control" id={inputstyle} placeholder="" />
                </div>
                </div>
          </Form>
          </Col>
          <Col>  <div className={floatRight} style={{fontSize:'0.9vw'}}>
            <p style={{marginTop:'1.5vw'}}>
            <Link to="/PersonalDetails" className={hyperLinkEmployee} >Personal Details</Link></p>
            <p><Link to="/ProfessionalDetails" className={hyperLinkEmployee} >Professional Details</Link></p>
            <p><Link to="/BankDetails" className={hyperLinkEmployee}>Bank Details</Link></p>
            <p><Link to="/LoginInfo" className={hyperLinkEmployee}>Login Information</Link></p>
            <p><Link to="/JobHistory" className={hyperLinkEmployee}>Job History</Link></p>
            <p><Link to="/EmpDocs" className={hyperLinkEmployee}>Employee Documents</Link></p>
            </div>
            <MuiThemeProvider>
               <Slider className={slideremp} style={{height:180,float:'left'}} axis="y-reverse" defaultValue={0.08} />
               </MuiThemeProvider></Col>
          </Row>
           <button type="button" class="btn btn-outline-warning" data-dismiss="modal" id={buttonstyle}>
             <Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Save</Link></button>
          <Link to="/ProfessionalDetails" className={hyperLinkEmployee} style={{position:'relative',top:'0.5vw',left:'0.5vw'}}>Skip</Link>
          <span className={floatRight}><Link to="/ProfessionalDetails" className={hyperLinkEmployee}>Next
          <Icon icon={arrowRight2} size={14} className={arrowIcon} /></Link></span>
          <div>
          </div>
       </div>
       <Footer/>
       </div>
     );
   }
 }
