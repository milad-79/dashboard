import Header from "./header";
import SideBar from "./sidbar";
import SidebarM from "./sidebar-m";
import UserTable from "./usersTable";
import '../styles/users.css';

function Users() {
    return ( 
        <div style={require("../colors.css")}>
        <Header />
        <div className="container">
          <SideBar />
          <SidebarM />
          <div className="container-right">
            <header className="users-header">
              <h3 className="users-h3">Users List</h3>
            </header>
  
            <div className="body-users">
             <UserTable/>
            </div>
          </div>
        </div>
      </div>
     );
}

export default Users;