import "./topbar.scss";
import { Notifications } from "@mui/icons-material";

function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="topLeft">
          <div className="logo">Luciano's Admin</div>
        </div>
        <div className="topRight">
          <div className="topIconContainer">
            <Notifications />
            <span className="topIconBadge">2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
