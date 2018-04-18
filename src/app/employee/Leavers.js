import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { user } from 'react-icons-kit/fa/user';
import {cardText,displayContainer,cardTitle,
  cardStyle,imgStyle,addNewDepartmentStyle,hyperLinkEmployee} from "./LayoutSettings.css";
  import {hrStyle,empDesign,empPhone,empId} from "./LayoutEmployee.css";
import {pageHeading} from "../projects/Projects.css";
import {Link} from "react-router-dom";
import {CardTemplate} from "./CardTemplate";

export class Leavers extends React.Component{
  render() {
    return(
      <div className={displayContainer}>
<p>Home>><span className={pageHeading}>Leavers</span></p>
<hr className={hrStyle}/>


<CardTemplate text={"Albert Walker"}>
 <p className={empDesign}>Test engineer</p>
 <p className={empId}>E153</p>
 <p className={empPhone}>9786456787</p>
</CardTemplate>



  </div>
    );
  }
}
