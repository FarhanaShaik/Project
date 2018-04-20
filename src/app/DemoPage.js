import React from "react";
import {displayContainer,exploreDiv,exploreCard1,exploreCard2,iconStyle,hyperLinkLogin,hyperLinkLogin1} from "./Layout.css";
import {Card,CardText,CardTitle,Row} from "reactstrap";
  import Icon from 'react-icons-kit';
import { plus,compass2  } from 'react-icons-kit/icomoon';
import { ic_explore } from 'react-icons-kit/md/ic_explore';
import { plusSquare } from 'react-icons-kit/fa/plusSquare';
import {Link} from "react-router-dom";
import {Header1} from "./Header1";
import {Footer} from "./Footer";

export class DemoPage extends React.Component{
  render() {
    return(
 <div>
 <Header1/>

     <div className={exploreDiv}>
     <Row>

     <Card className={exploreCard1}>
     <Link to="/CompanyDetails" className={hyperLinkLogin}>
     <CardTitle>
         </CardTitle>
         <CardText>
     Add Company

     </CardText>
       </Link>
     </Card>

     <Card className={exploreCard2}>
     <Link to="/Home" className={hyperLinkLogin1}>
     <CardTitle>
        </CardTitle>
     <CardText>
     Explore Demo Company</CardText>
    </Link>
     </Card>
     </Row>
     </div>

<Footer/>
</div>
    );
  }
}
