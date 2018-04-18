import React from "react";
import {Container} from "reactstrap";


import {HashRouter as Router,Route,Link} from "react-router-dom";

export class Logout extends React.Component {
  yes(){
  alert("Hey! You are logged out now!");


  }
  no(){
  alert("Hey! You are still logged In.");

  }
  render() {

    return(
      <Container style={{height:'43.5vw'}}>
       <p style={{margin:'15vw 10vw -12vw 26vw'}}>Do you want to Log out??</p>

   <button onClick={this.yes} type="button" class="btn btn-success" style={{margin:'15vw 0vw 0vw 27vw'}}>Yes</button>
   <button onClick={this.no} type="button" class="btn btn-danger" style={{margin:'15vw 0vw 0vw 5vw'}}>No</button>

      </Container>
    );
  }
}
