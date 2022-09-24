import './newProduct.scss'

function NewProduct() {
    return (
        <div className="newProduct">
          <h1 className="addProductTitle">Nuevo Producto</h1>
          <form className="addProductForm">
            <div className="addProductItem">
              <label>Imagen</label>
              <input type="file" id="file" />
            </div>
            <div className="addProductItem">
              <label>Nombre</label>
              <input type="text" placeholder="Apple Airpods" />
            </div>
            <div className="addProductItem">
              <label>Stock</label>
              <input type="text" placeholder="123" />
            </div>
            <div className="addProductItem">
              <label>Activo</label>
              <select name="active" id="active">
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </div>
            <button className="addProductButton">Crear</button>
          </form>
        </div>
      );
}

export default NewProduct