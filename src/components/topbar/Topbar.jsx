import "./topbar.scss";
import { Notifications, Language, Settings } from "@mui/icons-material";
import foto from "../../assets/profile.png";
import logo from "../../assets/logo.jpg";

function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="topLeft">
          <div className="logo">
            <img src={logo} alt="logo" className="topbarLogoImg" />
            ADMIN DASHBOARD
          </div>
        </div>
        <div className="topRight">
          <div className="topIconContainer">
            <Notifications />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topIconContainer">
            <Settings />
          </div>
          <img src={foto} alt="profile" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
