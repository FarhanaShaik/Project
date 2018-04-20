import React from "react";
import {containerRegistration,content,rowStyle,cardStyle,back,imgStyle} from "./LayoutRegistration.css";
import {Row,Col,Card} from "reactstrap";
import Icon from 'react-icons-kit';
import { thinLeft } from 'react-icons-kit/entypo/thinLeft';
import {Link} from "react-router-dom";
import {LogoHeader} from "./LogoHeader";


export class ViewFeatures extends React.Component{
  render(){
    return(
      <div className={containerRegistration}>
      <div className={content}>

       <LogoHeader/>
      <Row className={rowStyle}>
      <Col>
      <Link to="/ViewFeature1">
      <img class="animated slideInUp" src={require('../gogles.jpg')} id={imgStyle} />
      </Link>
      </Col>
      <Col>
      <img class="animated slideInDown" src={require('../lady.jpg')} id={imgStyle} /></Col>
      <Col>
      <img class="animated slideInDown" src={require('../photo1.jpg')} id={imgStyle} /></Col>
      </Row>
      <Link to="LandingPage"><p className={back}><Icon icon={thinLeft} size={20} style={{position:'relative',top:'0.4vw'}} />Back</p></Link>
      </div>
      </div>
    );
  }
}
