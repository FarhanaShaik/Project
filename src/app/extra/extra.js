<table class="table table-striped table-bordered scroll" id={exampletable}>
<thead>
<tr>
<th>First Name</th>
<th>Last Name</th>
</tr>
</thead>
<tbody>
<tr>
<td>Farhana</td>
<td>Shaik</td>
</tr>
<tr>
<td>Farhana</td>
<td>Shaik</td>
</tr>
<tr>
<td>Farhana</td>
<td>Shaik</td>
</tr>
</tbody>
</table>



const Projects1 = ({ match }) => (
 <Container style={{height:'43.5vw'}}>
     <h2>Projects</h2>
     <ul>
       <li>
         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
       </li>
       <li>
         <Link to={`${match.url}/components`}>Components</Link>
       </li>
       <li>
         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
       </li>
     </ul>
     <Route path={`${match.url}/:topicId`} component={Project} />
     <Route
       exact
       path={match.url}
       render={() => <h3>Please select a Project.</h3>}
     />
   </Container>
 );
const Project = ({ match }) => (
<Container style={{height:'43.5vw'}}>
   <h3>{match.params.topicId}</h3>
</Container>
);
        const MyAccount = ({ match }) => (
         <Container style={{height:'43.5vw'}}>
             <h2>My Account Details</h2>
             <ul>
               <li>
                 <Link to={`${match.url}/Editing the account`}>Editing the Account</Link>
               </li>
               <li>
                 <Link to={`${match.url}/Deleting`}>Deleting the Account</Link>
               </li>

             </ul>

             <Route path={`${match.url}/:topicId`} component={Project} />
             <Route
               exact
               path={match.url}
               render={() => <h3>Please select a Topic.</h3>}
             />
           </Container>
         );

import React from "react";
import {Row,Col,Card} from "reactstrap";
import {CardHeader} from "./CardHeader";
import {Repotees} from "./Repotees";
import {repoteesRowStyle,repoteesCardStyle,rowStyle,repoteesStyle} from "../Layout.css";
import {Circle} from 'react-shapes';
import Icon from 'react-icons-kit';
import { thinRight } from 'react-icons-kit/entypo/thinRight';
import { thinLeft } from 'react-icons-kit/entypo/thinLeft';

export class FourthRow extends React.Component{
  displayrepotees(){
    if(this.state.repotees){
      return(
      <Row className={repoteesStyle}>
      <Icon icon={thinLeft} size={35} onClick={this.next.bind(this)} style={{color:'gray'}}/>
            <Repotees/>
            <Repotees/>
            <Repotees text={<Circle r={5} fill={{color:'#FEC835'}}  />}/>
            <Repotees text={<Circle r={5} fill={{color:'#29A751'}}  />}/>

            <Repotees text={<Circle r={5} fill={{color:'#EF462E'}}  />}/>

      </Row>);
    }
      else if(this.state.remainingrepotees){
      return(
        <Row  className={repoteesStyle}>

              <Repotees text={<Circle r={5} fill={{color:'#29A751'}}  />}/>
              <Repotees text={<Circle r={5} fill={{color:'#EF462E'}}  />}/>
              <Repotees text={<Circle r={5} fill={{color:'#FEC835'}}  />}/>
              <Repotees/>
              <Repotees/>

<Icon icon={thinRight} size={35} onClick={this.next.bind(this)} style={{color:'gray'}}/>
        </Row>
      );
    }
    else {
      return null;
    }
  }
  expandedText(){
    this.setState({
      expanded:!this.state.expanded
    });
  }
  getMoreTextDiv(){
    if(this.state.expanded){
      return <span> also we have the next Annual Function on March 25th 2018 . The next Board Meeting to be scheduled on March 30th 2018. </span>;
    }
    else {
      return null;
    }
  }
  next(){
    this.setState({
  repotees:!this.state.repotees
    });
  }
  constructor(props) {
    super(props);
    this.expandedText= this.expandedText.bind(this);
    this.next=this.next.bind(this);
    this.state = {
      expanded: false,
      remainingrepotees:true,
      repotees:false
    };
  }
  state = {
  date: new Date(),
}
  render(){
    var expanded="";
    var repotees=this.displayrepotees();
    var expandedDiv = this.getMoreTextDiv();
    return(
      <Row className={rowStyle}>
       <Col>
           <Card  className={repoteesCardStyle}>
           <CardHeader text={"MY REPOTEES"}  />
            {repotees}
            <Row className={repoteesRowStyle}>
                <div> <Circle r={5} fill={{color:'#29A751'}}  />
               <span style={{paddingLeft:'0.3vw',paddingRight:'2vw',fontSize:'0.9vw'}}>Present</span></div>
                 <div> <Circle r={5} fill={{color:'#EF462E'}}  />
                 <span style={{paddingLeft:'0.3vw',paddingRight:'2vw',fontSize:'0.9vw'}}>Absent</span></div>
                 <div><Circle r={5} fill={{color:'#FEC835'}}  />
                 <span style={{paddingLeft:'0.3vw',paddingRight:'2vw',fontSize:'0.9vw'}}>On Leave</span></div>
          </Row>
         </Card>
         </Col>
     </Row>
    );
  }
}

<Row>
  <button type="button" class="btn btn-outline-light" id={buttonStyle}>
<Icon icon={gift} className={giftIcon}/>Birthday<span className={orange}> {' '}1</span></button>
  <button type="button" class="btn btn-outline-light" id={buttonStyle}>
<Icon icon={birthdayCake} className={giftIcon}/>Aniversary<span className={orange}> {' '}1</span></button>
  <button type="button" class="btn btn-outline-light" id={buttonStyleL}>
  <Icon icon={graduationCap} className={giftIcon}/>Last Day<span className={orange}>{' '}1</span></button>

</Row>
<UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret style={{color:'white',paddingRight:'5.6vw',marginTop:'-0.7vw'}}>
    Projects
    </DropdownToggle>
    <DropdownMenu className={dropDownStyle}>
      <DropdownItem>
      <Link to="/Projects" className={hyperLink}>
        Projects
        </Link>
      </DropdownItem>
      <DropdownItem>
      <Link to="/Task" className={hyperLink}>
      Tasks
      </Link>
      </DropdownItem>
      <DropdownItem>
      <Link to="/Time" className={hyperLink}>
      Time
      </Link>
      </DropdownItem>
       <DropdownItem>
       <Link to="/SendInvoice" className={hyperLink}>
        Invoice
        </Link>
        </DropdownItem>
        <DropdownItem>
        <Link to="/ViewProject" className={hyperLink}>
          View Projects
          </Link>
        </DropdownItem>
        <DropdownItem>
        <Link to="/ViewTasks" className={hyperLink}>
          View Tasks
          </Link>
        </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
  <div className={divStyle}>
  <Icon icon={plus} size={25} style={{marginTop:'2vw',marginLeft:'4vw',color:'#B8EDEC'}} />
   <p className={boxText}>Upload Your Image</p>
  </div>
  <p className={imageText}>Only .jpg,.jpeg or .png files are allowed</p>
  <UncontrolledDropdown nav inNavbar >
    <DropdownToggle nav caret style={{color:'white',paddingRight:'5.6vw',marginTop:'-0.7vw'}}>
      Settings
    </DropdownToggle>
    <DropdownMenu  className={dropDownStyle}>
      <DropdownItem>
      <Link to="/CompanyDetails" className={hyperLink}>
      Company Details
      </Link>
      </DropdownItem>
      <DropdownItem>
      <Link to="/Departments" className={hyperLink}>
        Departments
        </Link>
      </DropdownItem>
      <DropdownItem>
      <Link to="/Designations" className={hyperLink}>
        Designations
        </Link>
      </DropdownItem>
      <DropdownItem>
      <Link to="/Locations" className={hyperLink}>
        Locations
        </Link>
      </DropdownItem>
      <DropdownItem>
      <Link to="/RolesAndPermissions" className={hyperLink}>
        Roles
        </Link>
      </DropdownItem>
      <DropdownItem>
      <Link to="/AttendanceSettings" className={hyperLink}>
        Attendance
        </Link>
      </DropdownItem>
      <DropdownItem>
      <Link to="/LeaveTypes" className={hyperLink}>
        Leave Types
        </Link>
      </DropdownItem>
      <DropdownItem>
      <Link to="/ViewSalaryComponents" className={hyperLink}>
        Salary Components
        </Link>
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>


  <Row className={rowStyle} >
  <Col xs="6" style={{marginRight:'-1vw'}}>
  <Card className={cardStyle1}>
  <CardHeader text={"COMPANY ACTIVITIES"}/>

   <CardTitle><Link to="/companyactivities" className={cardTitleStyle}>Outcome of the Board...</Link>
   <span style={{paddingLeft:'15vw',color:'#C3C3D7',textDecoration:'none',fontSize:'0.8vw'}}>Posted on:today</span>
   </CardTitle>
   <CardText style={{fontSize:'0.8vw',paddingLeft:'1vw'}}>Additonal items approved by Board: Incorporation of Wholly You are
   Providing ways for your current employees to connect with your new employees{ expandedDiv }...
   <p onClick={this.expandedText.bind(this)} style={{cursor: 'pointer',paddingLeft:'20vw',fontSize:'0.8vw',color:'#C3C3D7',marginTop:'1vw'}}>
     Read More>>
   </p>
   </CardText>
   </Card>
   </Col>
   <Col xs="6" style={{marginRight:'-1vw'}}>
   <Card  className={cardStyle1}>
    <CardHeader text={"UPCOMING HOLIDAYS"}/>
    </Card>
    </Col>
 </Row>
