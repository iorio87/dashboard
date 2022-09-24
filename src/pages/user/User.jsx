import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import "./user.scss";

function User() {
  const param = useParams();
  console.log(param);
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar Usuario</h1>
        <button className="userAddButton">Crear</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Juan Perez</span>
              <span className="userShowUserTitle">Programador</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Cuenta</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">JuanP87</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">01/01/2000</span>
            </div>
            <span className="userShowTitle">Datos de Contacto</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+50 1111 123</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">juan@perez.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">
                Calle Falsa 123 | Argentina
              </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <div className="userUpdateTitle">Editar</div>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="">Usuario</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Nombre de usuario..."
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Nombre</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Nombre..."
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Direccion de mail..."
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Telefono</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Numero de telefono..."
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Direccion</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Direccion..."
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="https://i.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0" alt="" className="userUpdateImg" />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon"/>
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
                <button className="userUpdateButton">Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
