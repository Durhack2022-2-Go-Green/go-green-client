import React from "react";
import Logo from "../../assets/logo-icon.svg";
import Home from "../../assets/icons/home-icon.svg";
import Friends from "../../assets/icons/friends-icon.svg";
import Messaging from "../../assets/icons/messaging-icon.svg";
import Notifications from "../../assets/icons/notifications-icon.svg";
import Search from "../../assets/icons/search-icon.svg";
import Person from "../../assets/person/1.jpeg";
import "./Topbar.css";
// import { Link } from "react-router-dom";
const Topbar = () => {
  //   const user = {
  //     username: "username",
  //   };
  return (
    <div className="topbar">
      <div className="topbarContainer">
        <div className="topbarLeft">
          {/* <Link to="/" style={{ textDecoration: "none" }}> */}
          <img src={Logo} alt="Go Green" />
          {/* </Link> */}
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <img src={Search} alt="Search" />

            <input
              placeholder="Search for friend, post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div id="desktop-menu" className="topbarRight">
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <img src={Home} alt="Home" />
            </div>
            <div className="topbarIconItem">
              <img src={Friends} alt="" />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <img src={Messaging} alt="" />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <img src={Notifications} alt="" />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          {/* <Link to={`/profile/${user.username}`}> */}
          <img
            // src={
            // //   user.profilePicture
            // //     ? PF + user.profilePicture
            // //     : PF + "person/noAvatar.png"
            // }
            src={Person}
            alt=""
            className="topbarImg"
          />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
