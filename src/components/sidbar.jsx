import "../styles/sidebar.css";
import {
  Dashboard,
  PersonOutlined,
  AddBusiness,
  CreditCard,
  NotificationsOutlined,
  InsertChartSharp,
  SettingsSharp,
  PsychologyOutlined,
  SettingsSystemDaydreamOutlined,
  PersonRounded,
  ExitToAppOutlined,
} from "@mui/icons-material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="icon-body-main">
        <h5 className="title">Main</h5>
        <Link to="/">
          <div className="icon-body">
            <Dashboard className="icon"></Dashboard>
            <p>Dashboard</p>
          </div>
        </Link>
      </div>

      <div className="icon-body-main second">
        <h5 className="title">Lists</h5>

        <Link to="/users">
          <div className="icon-body">
            <PersonOutlined className="icon"></PersonOutlined>
            <p>Users</p>
          </div>
        </Link>

        <Link to="/products">
          <div className="icon-body">
            <AddBusiness className="icon"></AddBusiness>
            <p>Products</p>
          </div>
        </Link>
        
        <div className="icon-body">
          <CreditCard className="icon"></CreditCard>
          <p>Orders</p>
        </div>

        <div className="icon-body">
          <LocalShippingIcon className="icon"></LocalShippingIcon>
          <p>Delivery</p>
        </div>
      </div>

      <div className="icon-body-main second">
        <h5 className="title">Usful</h5>
        <div className="icon-body">
          <InsertChartSharp className="icon"></InsertChartSharp>
          <p>Stats</p>
        </div>

        <div className="icon-body">
          <NotificationsOutlined className="icon"></NotificationsOutlined>
          <p>Notificatuons</p>
        </div>
      </div>

      <div className="icon-body-main second">
        <h5 className="title">Service</h5>
        <div className="icon-body">
          <SettingsSystemDaydreamOutlined className="icon"></SettingsSystemDaydreamOutlined>
          <p>System Health</p>
        </div>

        <div className="icon-body">
          <PsychologyOutlined className="icon"></PsychologyOutlined>
          <p>Logs</p>
        </div>

        <div className="icon-body">
          <SettingsSharp className="icon"></SettingsSharp>
          <p>Settings</p>
        </div>
      </div>

      <div className="icon-body-main second">
        <h5 className="title">Service</h5>
        <div className="icon-body">
          <PersonRounded className="icon"></PersonRounded>
          <p>Profile</p>
        </div>

        <div className="icon-body">
          <ExitToAppOutlined className="icon"></ExitToAppOutlined>
          <p>Logout</p>
        </div>

        <div className="darkmood">
          <div
            className="box light"
            onClick={() => {
              document
                .querySelector(".container-main")
                .classList.remove("dark-them");
            }}
          ></div>
          <div
            className="box dark"
            onClick={() => {
              document
                .querySelector(".container-main")
                .classList.add("dark-them");
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
