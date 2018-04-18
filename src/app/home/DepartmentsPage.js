import React from "react";
import {Link} from "react-router-dom";
import {displayContainer} from "../Layout.css";
import {Marketing} from "./Marketing";
import {InformationTechnology} from "./InformationTechnology";
import {Finance} from "./Finance";
import {dropitem} from "./Home.css";

export class DepartmentsPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      marketing:false,
      it:false,
      finance:false
    };
  }
financefunc(){
    if(this.state.finance){
      return(
        <div>
        <Finance/>
        </div>
      );
    }
  }
  itfunc(){
    if(this.state.it){
       return(
         <div>
         <InformationTechnology/>
         </div>
       );
     }
  }
marketingfunc(){
  if(this.state.marketing){
        return(
          <div>
          <Marketing/>
          </div>
        );
      }
}
  marketing(){
    this.setState({
marketing:!this.state.marketing,
it:false,
finance:false
    });
  }
  it(){
    this.setState({
it:!this.state.it,
marketing:false,
finance:false
    });
  }
finance(){
    this.setState({
finance:!this.state.finance,
marketing:false,
it:false
    });
  }
  all(){
    this.setState({
      finance:true,
      marketing:true,
      it:true
    })
  }
  render(){
    var marketing=this.marketingfunc();
    var it=this.itfunc();
    var finance=this.financefunc();
    return(
      <div className={displayContainer}>
      DepartmentsPage
      <div class="dropdown">
        <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select Department
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item"><span onClick={this.marketing.bind(this)} id={dropitem}>Marketing</span></a>
          <a class="dropdown-item"><span onClick={this.it.bind(this)} id={dropitem}>Information Technology</span></a>
          <a class="dropdown-item"><span onClick={this.finance.bind(this)} id={dropitem}>Finance</span></a>
          <a class="dropdown-item"><span onClick={this.all.bind(this)} id={dropitem}>All</span></a>
        </div>
      </div>

      {marketing}
      {it}
      {finance}



      </div>
    );
  }
}
