import React from "react";
import {Link} from "react-router-dom";
import {displayContainer} from "../Layout.css";
import {Marketing} from "./Marketing";
import {InformationTechnology} from "./InformationTechnology";
import {Finance} from "./Finance";
import {All} from "./All";
import {dropitem} from "./Home.css";
import {Header1} from "../Header1";
import {Footer} from "../Footer";

export class DepartmentsPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      marketing:false,
      it:false,
      finance:false,
      all:false
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
allfunc(){
  if(this.state.all){
    return(
      <div>
      <All/>
      </div>
    )
  }
}
  marketing(){
    this.setState({
marketing:!this.state.marketing,
it:false,
finance:false,
all:false
    });
  }
  it(){
    this.setState({
it:!this.state.it,
marketing:false,
finance:false,
all:false
    });
  }
finance(){
    this.setState({
finance:!this.state.finance,
marketing:false,
it:false,
all:false
    });
  }
  all(){
    this.setState({
      finance:false,
      marketing:false,
      it:false,
      all:true
    })
  }
  render(){
    var marketing=this.marketingfunc();
    var it=this.itfunc();
    var finance=this.financefunc();
    var all=this.allfunc();
    return(
      <div>
      <Header1/>
      <div className={displayContainer}>
      DepartmentsPage
      <div class="dropdown">
        <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select Department
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" id={dropitem}><span onClick={this.marketing.bind(this)} >Marketing</span></a>
          <a class="dropdown-item" id={dropitem}><span onClick={this.it.bind(this)} >Information Technology</span></a>
          <a class="dropdown-item" id={dropitem}><span onClick={this.finance.bind(this)} >Finance</span></a>
          <a class="dropdown-item" id={dropitem}><span onClick={this.all.bind(this)} >All</span></a>
        </div>
      </div>
      {marketing}
      {it}
      {finance}
      {all}
      </div>
      <Footer/>
      </div>
    );
  }
}
