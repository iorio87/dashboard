import "./sidebar.scss";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  Storefront,
  AttachMoney,
  Assessment,
  MailOutline,
  FeedbackOutlined,
  ChatBubbleOutlineOutlined,
  WorkOutlineOutlined,
  ReportOutlined

} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">DashBoard</h3>
          <ul>
            <li className="sidebarListItem">
              <Link to='/' className="link">
              <LineStyle className="sidebarIcon" />
              Home
              </Link>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Estadisticas
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Ventas
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Acceso Rapido</h3>
          <ul>
            <li className="sidebarListItem">
             <Link to='/users' className="link">
              <Person className="sidebarIcon" />
              Usuarios
             </Link> 
            </li>
            <li className="sidebarListItem">
            <Link to='/products' className="link">
              <Storefront className="sidebarIcon" />
              Productos
              </Link> 
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Operaciones
            </li>
            <li className="sidebarListItem">
              <Assessment className="sidebarIcon" />
              reportes
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notificaciones</h3>
          <ul>
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackOutlined className="sidebarIcon" />
              FeedBack
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineOutlined className="sidebarIcon" />
              Mensajes
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul>
            <li className="sidebarListItem">
              <WorkOutlineOutlined className="sidebarIcon" />
              Administrar
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Estadisticas
            </li>            
            <li className="sidebarListItem">
              <ReportOutlined className="sidebarIcon" />
              reportes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
