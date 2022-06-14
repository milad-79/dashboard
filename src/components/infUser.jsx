import Chart from "./chart";
import Header from "./header";
import SideBar from "./sidbar";
import SidebarM from "./sidebar-m";
import DataTable from "./table-data";
import "../styles/infUser.css";
import React from "react";

function InfUser() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div style={require("../colors.css")}>
        <Header />
        <div className="container">
          <SideBar />
          <SidebarM />
          <div className="container-right">
            <div className="infUserHeader">
              <div className="left">
                <h3>User Inf</h3>
                <div className="body-inf-left">
                  <img src={user.img} alt="" />
                  <div className="user-inf">
                    <p>Full Name: {user.fullName}</p>
                    <p>Email: {user.email}</p>
                    <p>Age: {user.age}</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <h3>User Shop</h3>
                <Chart />
              </div>
            </div>

            <div className="bottom-user-inf">
              <h3 className="title-user-table">Products User Buy</h3>
              <DataTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(InfUser);
