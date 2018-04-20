import React from "react";
import {containerRegistration,content,cardStyle2,rowStyle,featureHeading,featuretext,list,back,imgStyle} from "./LayoutRegistration.css";
import {LogoHeader} from "./LogoHeader";
import {Row,Col,Card} from "reactstrap";
import Icon from 'react-icons-kit';
import { thinLeft } from 'react-icons-kit/entypo/thinLeft';
import {Link} from "react-router-dom";

export class ViewFeature2 extends React.Component{
  render(){
    return(
      <div className={containerRegistration}>
      <div className={content}>
      <LogoHeader/>
      <Row className={rowStyle}>
        <Col xs="4">
        <img class="animated slideInUp" src={require('../gogles.jpg')} id={imgStyle} />
        </Col>
      <Col>
      <p id={featureHeading} class="animated slideInRight">
      Time and Attendance
      </p>
      <p id={featuretext} class="animated fadeInLeft">
      Streamline your end-to-end processes and productivity
      <ul className={list}>
  <li> Automate your rules and calculations to reduce compliance risks</li>
  <li> Eliminate manual time entries and redundant processes</li>
  <li> Avoid costly, time-consuming integrations</li>
</ul>
      </p>
      </Col>
      </Row>
        <Link to="ViewFeatures"><p className={back}><Icon icon={thinLeft} size={20} style={{position:'relative',top:'0.4vw'}} />Back</p></Link>
      </div>
      </div>
    );
  }
}
