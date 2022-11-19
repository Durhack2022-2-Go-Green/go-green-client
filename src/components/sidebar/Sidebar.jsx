import "./Sidebar.css";
import ProfileIcon from '../../assets/icons/profile-icon.svg';
import FriendsIcon from '../../assets/icons/friends-icon.svg';
import GardenIcon from '../../assets/icons/garden-icon.svg';
import CampaignsIcon from ' ../../assets/icons/campaigns-icon.svg';
import SettingsIcon from '../../assets/icons/settings-icon.svg';
import SidebarBanner from '../../assets/icons/sidebar-banner.svg';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <img src={ProfileIcon} alt="" />
            <span className="sidebarListItemText">Profile</span>
          </li>
          <li className="sidebarListItem">
            <img src={FriendsIcon} alt="" />
            <span className="sidebarListItemText">Friends</span>
          </li>
          <li className="sidebarListItem">
            <img src={GardenIcon} alt="" />
            <span className="sidebarListItemText">My garden</span>
          </li>
          <li className="sidebarListItem">
            <img src={CampaignsIcon} alt="" />
            <span className="sidebarListItemText">My campaigns</span>
          </li>
          <li className="sidebarListItem">
            <img src={SettingsIcon} alt="" />
            <span className="sidebarListItemText">Settings</span>
          </li>
        </ul>
        <img src={SidebarBanner} alt="" />
        <p>Make that impact!</p>
        <button className="sidebarButton">Share your contribution now!</button>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
}