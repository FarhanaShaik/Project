import React from "react";
import {pageHeading,hrStyle,hyperLink,addNewDepartmentStyle,floatRight} from "./Projects.css";
import {displayContainer} from "./LayoutSettings.css";
import {Container} from "reactstrap";
import {Link} from "react-router-dom";
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/icomoon/plus';
import { search } from 'react-icons-kit/icomoon/search';
import { glass2 } from 'react-icons-kit/icomoon/glass2';

export class Time extends React.Component{
  render() {
    return(

      <div className={displayContainer}>
      <p className={pageHeading}>Time Entries</p>
      <hr className={hrStyle}/>
      <button className="btn btn-outline-primary btn-sm" id={addNewDepartmentStyle}>
      <Icon icon={plus} style={{color:'#FF7F27',marginRight:'0.5vw'}} size={10} />
      <Link to="/AddTime" className={hyperLink}>Enter Time</Link></button>
      </div>

    );
  }
}
