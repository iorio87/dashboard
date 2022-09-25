import "./widgetSm.scss";
import { Visibility } from "@mui/icons-material/";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Nuevos Suscriptores</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://i.pinimg.com/474x/ff/65/07/ff6507537e97fb9fee25ee130fc311be.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Juan Perez</span>
            <span className="widgetSmUsetTitle">Ingeniero</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://i.pinimg.com/474x/ff/65/07/ff6507537e97fb9fee25ee130fc311be.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Roberto Carlos</span>
            <span className="widgetSmUsetTitle">Diseñador</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://i.pinimg.com/474x/ff/65/07/ff6507537e97fb9fee25ee130fc311be.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Luis Miguel</span>
            <span className="widgetSmUsetTitle">Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://i.pinimg.com/474x/ff/65/07/ff6507537e97fb9fee25ee130fc311be.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Marco Antonio</span>
            <span className="widgetSmUsetTitle">Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://i.pinimg.com/474x/ff/65/07/ff6507537e97fb9fee25ee130fc311be.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Marcos Garcia</span>
            <span className="widgetSmUsetTitle">Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
