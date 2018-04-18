import React from "react";
import { render } from "react-dom";
import {HashRouter as Router, Route,Link} from "react-router-dom";
import { Header1 } from "./Header1";
import {Home} from "./home/Home";
import {EmploymentStatus} from "./home/EmploymentStatus";
import {EventsList} from "./home/EventsList";
import {AnnouncementList} from "./home/AnnouncementList";
import {DepartmentsPage} from "./home/DepartmentsPage";
import { Footer } from "./Footer";
import {Attendance} from "./Attendance";
import {AttendanceSettings} from "./settings/AttendanceSettings";
import {Payroll} from "./payroll/Payroll";
import {Payments} from "./payroll/Payments";
import {Process} from "./payroll/Process";
import {Statement} from "./payroll/Statement";
import {AddExpenses} from "./expenses/AddExpenses";
import {ExpenseList} from "./expenses/ExpenseList";
import {Test} from "./Test";
import {Test1} from "./Test1";
import {Carousel} from "./home/Carousel";
import {Notification} from "./Notification";
import {CompanyDetails} from "./settings/CompanyDetails";
import {Departments} from "./settings/Departments";
import {Designations} from "./settings/Designations";
import {Locations} from "./settings/Locations";
import {ViewDepartment} from "./settings/ViewDepartment";
import {RolesAndPermissions} from "./settings/RolesAndPermissions";
import {AddRole} from "./settings/AddRole";
import {SendInvoice} from "./projects/SendInvoice";
import {ViewShiftAttendance} from "./settings/ViewShiftAttendance";
import {Logout} from "./profileicon/Logout";
import {Profile} from "./profileicon/Profile";
import {LeaveList} from "./leaves/LeaveList";
import {EditLeave} from "./leaves/EditLeave";
import {LeaveTypes} from "./settings/LeaveTypes";
import {AddLeave} from "./settings/AddLeave";
import {ViewSalaryComponents} from "./settings/ViewSalaryComponents";
import {AddComponent} from "./settings/AddComponent";
import {LoginPage} from "./registration/LoginPage";
import {ViewFeatures} from "./registration/ViewFeatures";
import {ViewFeature1} from "./registration/ViewFeature1";
import {SignUp} from "./registration/SignUp";
import {VerifyAccount} from "./registration/VerifyAccount";
import {CreatePassword} from "./registration/CreatePassword";
import {AddEmployee} from "./employee/AddEmployee";
import {PersonalDetails} from "./employee/PersonalDetails";
import {ProfessionalDetails} from "./employee/ProfessionalDetails";
import {BankDetails} from "./employee/BankDetails";
import {LoginInfo} from "./employee/LoginInfo";
import {JobHistory} from "./employee/JobHistory";
import {EmpDocs} from "./employee/EmpDocs";
import {ViewEmployee} from "./employee/ViewEmployee";
import {NewJoiners} from "./employee/NewJoiners";
import {Leavers} from "./employee/Leavers";
import {Projects} from "./projects/Projects";
import {AddProject} from "./projects/AddProject";
import {ViewProject} from "./projects/ViewProject";
import {Task} from "./projects/Task";
import {AddTask} from "./projects/AddTask";
import {ViewTasks} from "./projects/ViewTasks";
import {Time} from "./projects/Time";
import {AddTime} from "./projects/AddTime";
import {ViewTime} from "./projects/ViewTime";
import {ViewTimeEntry} from "./projects/ViewTimeEntry";
import {CreateInvoice} from "./projects/CreateInvoice";
import {AdminUsers} from "./admin/AdminUsers";
import {FirstPage} from "./FirstPage";
//import {Calendar1} from "./components/Calendar";
//import "../styles.css";
//import styles from "../styles.css";
export class App extends React.Component {
  render() {

    return (
  <Router>
      <div >
      <Header1/>
      <Route path="/LoginPage" component={LoginPage}/>
<Route path="/CreatePassword" component={CreatePassword}/>
<Route path="/ViewFeatures" component={ViewFeatures}/>
<Route path="/ViewFeature1" component={ViewFeature1}/>
<Route path="/SignUp" component={SignUp}/><Route path="/VerifyAccount" component={VerifyAccount}/>

              <Route path="/Home" component={Home}/>
              <Route path="/Carousel" component={Carousel}/>
              <Route path="/EmploymentStatus" component={EmploymentStatus}/>
              <Route path="/Projects" component={Projects}/>
              <Route path="/Leaves" component={LeaveList}/>
              <Route path="/EditLeave" component={EditLeave}/>
              <Route path="/LeaveTypes" component={LeaveTypes}/>
              <Route path="/Attendance" component={Attendance}/>
              <Route path="/Test1" component={Test1}/>
              <Route path="/EventsList" component={EventsList}/>
              <Route path="/NewJoiners" component={NewJoiners}/>
              <Route path="/Leavers" component={Leavers}/>
              <Route path="/Payroll" component={Payroll}/>
              <Route path="/Payments" component={Payments}/>
              <Route path="/Process" component={Process}/>
              <Route path="/Statement" component={Statement}/>
              <Route path="/DepartmentsPage" component={DepartmentsPage}/>
              <Route path="/AddExpenses" component={AddExpenses}/>
              <Route path="/ExpenseList" component={ExpenseList}/>
              <Route path="/Notification" component={Notification}/>
              <Route path="/Profile" component={Profile}/>
              <Route path="/Test" component={Test}/>
              <Route path="/AnnouncementList" component={AnnouncementList}/>
              <Route path="/CompanyDetails" component={CompanyDetails}/>
              <Route path="/AttendanceSettings" component={AttendanceSettings}/>
              <Route path="/Departments" component={Departments}/>
              <Route path="/Designations" component={Designations}/>
              <Route path="/Locations" component={Locations}/>
              <Route path="/ViewDepartment" component={ViewDepartment}/>
              <Route path="/RolesAndPermissions" component={RolesAndPermissions}/>
              <Route path="/ViewShiftAttendance" component={ViewShiftAttendance}/>
              <Route path="/SendInvoice" component={SendInvoice}/>
              <Route path="/AddRole" component={AddRole}/>
              <Route path="/AddLeave" component={AddLeave}/>
              <Route path="/ViewSalaryComponents" component={ViewSalaryComponents}/>
              <Route path="/AddComponent" component={AddComponent}/>
              <Route path="/Logout" component={Logout}/>
              <Route path="/ViewEmployee" component={ViewEmployee}/>
              <Route path="/AddEmployee" component={AddEmployee}/>
              <Route path="/PersonalDetails" component={PersonalDetails}/>
              <Route path="/ProfessionalDetails" component={ProfessionalDetails}/>
              <Route path="/BankDetails" component={BankDetails}/>
              <Route path="/LoginInfo" component={LoginInfo}/>
              <Route path="/JobHistory" component={JobHistory}/>
              <Route path="/EmpDocs" component={EmpDocs}/>
              <Route path="/AddProject" component={AddProject}/>
              <Route path="/ViewProject" component={ViewProject}/>
              <Route path="/AdminUsers" component={AdminUsers}/>
              <Route path="/Task" component={Task}/>
              <Route path="/AddTask" component={AddTask}/>
              <Route path="/ViewTasks" component={ViewTasks}/>
              <Route path="/Time" component={Time}/>
              <Route path="/AddTime" component={AddTime}/>
              <Route path="/ViewTime" component={ViewTime}/>
              <Route path="/ViewTimeEntry" component={ViewTimeEntry}/>
              <Route path="/CreateInvoice" component={CreateInvoice}/>
              <Route path="/FirstPage" component={FirstPage}/>
            <Footer/>
     </div>
</Router>

    );
  }
}
render(<App/>, window.document.getElementById("app"));
