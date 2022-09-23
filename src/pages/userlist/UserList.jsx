import "./userlist.scss";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import {UserRows} from '../../dummydata'
import { Link } from "react-router-dom";
import { useState } from "react";





function UserList() {
  const [data, setData] = useState(UserRows)
  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Usuario",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" className="userImage" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 180 },
    { field: "status", headerName: "Estado", width: 130 },
    { field: "transaction", headerName: "Volumen de Transaccion", width: 180 },
    {
      field: "action",
      headerName: "Accion",
      width: 180,
      renderCell: (params) => {
        return (
          <>
          <Link to={'/user/'+params.row.id}>
            <button className="userListEdit">Editar</button>
            </Link>
            <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UserList;
