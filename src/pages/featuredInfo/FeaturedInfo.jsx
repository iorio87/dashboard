import "./featuredInfo.scss";
import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
} from "@mui/icons-material/";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Valuacion</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$300</span>
          <span className="featuredMoneyRate">
            -10
            <ArrowDownwardOutlined className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Comparacion al mes anterior</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Ventas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3000</span>
          <span className="featuredMoneyRate">
            -2.35
            <ArrowDownwardOutlined className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Comparacion al mes anterior</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Costos</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$435</span>
          <span className="featuredMoneyRate">
            +10
            <ArrowUpwardOutlined className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Comparacion al mes anterior</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
