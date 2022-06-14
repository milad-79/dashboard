import "../styles/header.css";
import React from "react";
import {
  Search,
  LanguageRounded,
  NotificationsOutlined,
  ModeCommentOutlined,
  Menu
} from "@mui/icons-material";
import {MyContext} from "../context/context";

function Header() {  
  const context = React.useContext(MyContext)

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">Milad Adimin</div>
        <div className="menu" onClick={context.handeleOpen}>
          <Menu></Menu>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <Search></Search>
        </div>
      </div>
      <div className="header-right">
        <div className="icons">
          <div className="lan-icon" >
            <LanguageRounded></LanguageRounded>
            <p>Engilsh</p>
          </div>

            <div className="badge-body">
                <NotificationsOutlined></NotificationsOutlined>
                <div className="badga">1</div>
            </div>

            <div className="badge-body">
                <ModeCommentOutlined></ModeCommentOutlined>
                <div className="badga">2</div>
            </div>
            
        </div>
        <div className="avatar">
          <img src='https://randomuser.me/api/portraits/men/12.jpg' alt='' className='avatar-img'/>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
