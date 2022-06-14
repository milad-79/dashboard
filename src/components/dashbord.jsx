import "../styles/containerRight.css";
import DataTable from "./table-data";
import Widget from "./widget";
import Widget2 from "./widget2";
import React from "react";
import Header from "./header";
import SideBar from "./sidbar";
import SidebarM from "./sidebar-m";

function Dashbord() {
  return (
    <div style={require("../colors.css")}>
      <Header />
      <div className="container">
        <SideBar />
        <SidebarM />
        <div className="container-right">
          <Widget />
          <Widget2 />
          <DataTable />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Dashbord);
