import React from "react";
import Icon from "react-icons-kit";
import {Card,CardText} from "reactstrap";
import {holidayTextR,holidayTitleR,holidayDayR} from "./home/Home.css";
import {carousel,labelStyle1,inputstyle} from "./Layout.css";

import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import {displayContainer,orange,item,indicator,exampletable,tableinput} from "./Layout.css";
export class Test extends React.Component{


  render() {

    return(

      <div className={displayContainer}>
<p class="animated bounce infinite">Welcome</p>

      </div>
    );
  }
}
