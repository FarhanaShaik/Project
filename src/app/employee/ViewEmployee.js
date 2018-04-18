import React from "react";
import {displayContainer,addNewDepartmentStyle,hyperLinkEmployee} from "./LayoutSettings.css";
import {empDesign,empPhone,empId,pagination} from "./LayoutEmployee.css";
import Icon from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search';
  import { filter } from 'react-icons-kit/fa/filter';
import { smallRight } from 'react-icons-kit/entypo/';
import {pageHeading,pageHeader,hrStyle,arrow,orange,floatRight} from "../Layout.css";
import {Link} from "react-router-dom";
import {CardTemplate} from "./CardTemplate";

export class ViewEmployee extends React.Component{
  render() {
    return(
      <div className={displayContainer}>
<p className={pageHeader}>Home<span className={arrow}>></span><span className={pageHeading}>
Employee List<span  className={floatRight}> <Icon icon={search} /><Icon icon={filter} /></span></span></p>
<hr className={hrStyle}/>
<button className="btn btn-outline-primary btn-sm" id={addNewDepartmentStyle}>
<Link to="/AddEmployee" className={hyperLinkEmployee}>Add</Link> </button>
      <div class="row" style={{marginLeft:'0.4vw',marginTop:'1vw'}}>

<CardTemplate text={"Albert Walker"}>
 <p className={empDesign}>Test Engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
 <p className={empDesign}>Test Engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
 <p className={empDesign}>Test Engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
 <p className={empDesign}>Test engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
 <p className={empDesign}>Test engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>
</div>
<div class="row" style={{marginLeft:'0.4vw',marginTop:'1vw'}}>
<CardTemplate text={"Albert Walker"}>
<p className={empDesign}>Test Engineer</p>
<p className={empId}>E153</p>
<p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
<p className={empDesign}>Test Engineer</p>
<p className={empId}>E153</p>
<p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
<p className={empDesign}>Test Engineer</p>
<p className={empId}>E153</p>
<p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
<p className={empDesign}>Test Engineer</p>
<p className={empId}>E153</p>
<p className={empPhone}>9786456787</p>
</CardTemplate>
<CardTemplate text={"Albert Walker"}>
<p className={empDesign}>Test Engineer</p>
<p className={empId}>E153</p>
<p className={empPhone}>9786456787</p>
</CardTemplate>

</div>
<p className={pagination}><span className={orange}>1</span> 2 3 4 5 ></p>
  </div>
    );
  }
}
