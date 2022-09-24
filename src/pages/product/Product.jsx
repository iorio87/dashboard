import { Link } from "react-router-dom";
import "./product.scss";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummydata";
import { Publish } from "@mui/icons-material";

function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Producto</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Crear</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey="Ventas"
            title="Evolucion de Ventas"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://axa.com.ar/webaxa/20252-medium_default/mouse-gamer-logitech-g203-lightsync-usb.jpg"
              alt="mouse"
              className="productInfoImg"
            />
            <span className="productName">Mouse</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">2605</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Ventas:</span>
              <span className="productInfoValue">4000</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Activo:</span>
              <span className="productInfoValue">Si</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">En Stock:</span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Nombre del Producto</label>
            <input type="text" placeholder="Mouse" />
            <label>En Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Activo</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://d3ugyf2ht6aenh.cloudfront.net/stores/955/018/products/hx-product-mouse-pulsefire-surge-3-lg1-567b23b8096ed584e816264658331284-480-0.jpg"
                alt="mouse"
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Actualizar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
