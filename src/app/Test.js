import React from "react";
import Icon from "react-icons-kit";
import {Card,CardText} from "reactstrap";
import {holidayTextR,holidayTitleR,holidayDayR} from "./home/Home.css";
import {carousel,labelStyle1,inputstyle} from "./Layout.css";
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import {displayContainer,orange,item,indicator,exampletable,tableinput} from "./Layout.css";
export class Test extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      components:false
    };
  }
  next(){
    this.setState({
  components:!this.state.components
    });
  }

  render() {

    return(

      <div className={displayContainer}>

           <div class="form-row">
             <div class="col-md-3 mb-3">
               <label className={labelStyle1}>Annual CTC</label>
               <input type="text" class="form-control"  id={tableinput} placeholder=""/>
             </div>
             <div class="col-md-3 mb-3">
               <label className={labelStyle1}>Monthly CTC</label>
               <input type="text" class="form-control" id={tableinput} placeholder="" />
             </div>

             <form class="form-inline">
   <div class="form-group">
     <label for="inputPassword6">Salary Break up</label>
     <input type="text" id={tableinput} class="form-control" aria-describedby="passwordHelpInline"/>
   </div>

 </form>
   </div>
      </div>
    );
  }
}
