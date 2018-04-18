import React from "react";
import {Container} from "reactstrap";
import {dropdown,dropdownContent,floatRight,cardimgleft,imgStyle} from "./Layout.css";
import Icon from 'react-icons-kit';
import { bellO } from 'react-icons-kit/fa/bellO';
import {Card,CardTitle,CardText} from "reactstrap";
import { arrowLeft2 } from 'react-icons-kit/icomoon/arrowLeft2';
import { spinner11 } from 'react-icons-kit/icomoon/spinner11';

import {cardStyle,cardText,cardTitle} from "./NotificationLayout.css";
export class Notification extends React.Component {
  render() {
    return (
      <Container style={{height:'43.5vw'}}>
       <p>This is the notification page</p>
       <p>All the notification content goes here </p>

       <div className={dropdown}>
          <Icon icon={bellO} size={21} style={{color:'black',cursor:'pointer'}}/>
         <div className={dropdownContent}>
          <p>  <Icon icon={arrowLeft2}  /><span className={floatRight}><Icon icon={spinner11} size={12}/></span> </p>
           <Card >
           <div class="row">
           <div class="col-md-6">
           <img className={cardimgleft} src={require('./profile.jpg')} id={imgStyle}/>
         </div>
         <div class="col-md-6" style={{marginTop:'1vw'}}>
           <CardTitle className={cardTitle}>Jane Smith</CardTitle>
           <CardText className={cardText}>Requested for Leave</CardText>
           <CardText className={cardText}>New</CardText>
           </div>
           </div>
           </Card>
           <Card style={{height:'7vw',marginBottom:'1vw',marginTop:'2vw'}}>
           <div class="row">
           <div class="col-md-6">
           <img className={cardimgleft} src={require('./profile.jpg')} id={imgStyle}/>
           </div>
           <div class="col-md-6" style={{marginTop:'1vw'}}>
           <CardTitle className={cardTitle}>Jane Smith</CardTitle>
           <CardText className={cardText}>Requested for Leave</CardText>
           <CardText className={cardText}>New</CardText>
           </div>
           </div>
           </Card>
           <Card style={{height:'7vw',marginBottom:'1vw',marginTop:'2vw'}}>
           <div class="row">
           <div class="col-md-6">
           <img className={cardimgleft} src={require('./profile.jpg')} id={imgStyle}/>
           </div>
           <div class="col-md-6" style={{marginTop:'1vw'}}>
           <CardTitle className={cardTitle}>Jane Smith</CardTitle>
           <CardText className={cardText}>Requested for Leave</CardText>
           <CardText className={cardText}>New</CardText>
           </div>
           </div>
           </Card>
        </div>
        </div>

      </Container>
    );
  }
}
