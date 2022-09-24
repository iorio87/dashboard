import "./newuser.scss";

function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nuevo Usuario</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nombre de Usuario</label>
          <input type="text" placeholder="juan87" />
        </div>
        <div className="newUserItem">
          <label>Nombre Completo</label>
          <input type="text" placeholder="Juan Perez" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="juan@perez.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Telefono</label>
          <input type="text" placeholder="123 456" />
        </div>
        <div className="newUserItem">
          <label>Direccion</label>
          <input type="text" placeholder="Calle Falsa 123" />
        </div>
        <div className="newUserItem">
          <label>Genero</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="masculino" />
            <label For="male">Masculino</label>
            <input type="radio" name="gender" id="female" value="femenino" />
            <label For="female">Femenino</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Activo</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
        <button className="newUserButton">Crear</button>
    </div>
  );
}

export default NewUser;
