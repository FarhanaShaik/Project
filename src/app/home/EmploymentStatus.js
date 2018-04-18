import React from "react";
import {displayContainer} from "../Layout.css";
import {dropitem} from "./Home.css";
import {Present} from "./Present";
import {Absent} from "./Absent";
import {OnLeave} from "./OnLeave";
import {Late} from "./Late";
import {Overtime} from "./Overtime";

export class EmploymentStatus extends React.Component{
  constructor(props) {
    super(props);

    this.state= {
      present:false,
      absent:false,
      onleave:false,
      late:false,
      overtime:false
    }
  }
  presentfunc(){
      if(this.state.present){
      return(
        <div><Present/></div>
      );
    }
  }
  absentfunc(){
    if(this.state.absent){
      return(
        <div> <Absent/></div>
      );
    }
  }
  onleavefunc(){
    if(this.state.onleave){
      return(
        <div> <OnLeave/></div>
      )
    }
  }
  latefunc(){
    if(this.state.late){
      return(
        <div> <Late/></div>
      )
    }
  }
  overtimefunc(){
    if(this.state.overtime){
      return(
        <div> <Overtime/></div>
      )
    }
  }
  absentstate(){
    this.setState({
      absent:!this.state.absent,
      present:false,
      onleave:false,
      late:false,
      overtime:false
    });
  }
  presentstate(){
    this.setState({
      present:!this.state.present,
      absent:false,
      onleave:false,
      late:false,
      overtime:false
    });
  }
  onleavestate(){
    this.setState({
      onleave:!this.state.onleave,
      present:false,
      absent:false,
      late:false,
      overtime:false
    })
  }
  latestate(){
    this.setState({
      late:!this.state.late,
      present:false,
      absent:false,
     onleave:false,
      overtime:false
    })
  }
  overtimestate(){
    this.setState({
      overtime:!this.state.overtime,
        late:false,
        present:false,
        absent:false,
       onleave:false

    })
  }
  allstate(){
    this.setState({
      overtime:true,
        late:true,
        present:true,
        absent:true,
       onleave:true
    })
  }
  render(){
    var present = this.presentfunc();
    var absent = this.absentfunc();
    var onleave = this.onleavefunc();
    var late = this.latefunc();
    var overtime = this.overtimefunc();

    return(
  <div className={displayContainer}>Employee status
  <div class="dropdown">
    <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select Employee status
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <a class="dropdown-item" onClick={this.presentstate.bind(this)} id={dropitem}>Present</a>
      <a class="dropdown-item" onClick={this.absentstate.bind(this)} id={dropitem}>Absent</a>
      <a class="dropdown-item" onClick={this.onleavestate.bind(this)} id={dropitem}>On Leave</a>
      <a class="dropdown-item" onClick={this.latestate.bind(this)} id={dropitem}>Late</a>
      <a class="dropdown-item" onClick={this.overtimestate.bind(this)} id={dropitem}>Overtime</a>
      <a class="dropdown-item" onClick={this.allstate.bind(this)} id={dropitem}>All</a>

    </div>
  </div>
  {present}
  {absent}
  {onleave}
  {late}
  {overtime}


  </div>
    );
  }
}
