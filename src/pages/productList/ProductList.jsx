import "./productList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Producto",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="productListUser">
            <img src={params.row.image} alt="" className="productListImage" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 180 },
    { field: "status", headerName: "Estado", width: 130 },
    { field: "price", headerName: "Precio", width: 180 },
    {
      field: "action",
      headerName: "Accion",
      width: 180,
      renderCell: (params) => {
        return (
          <>
          <Link to={'/product/'+params.row.id}>
            <button className="productListEdit">Editar</button>
            </Link>
            <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
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

export default ProductList;
