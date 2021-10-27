import "./featuredinfo.css"
/*eslint-disable */
import { ArrowUpward } from "@material-ui/icons";
/*eslint-disable */
import { WiHumidity,WiSnowWind,WiSnow } from "react-icons/wi";





export default function Featuredinfo() {
    return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Kelembaban</span>
        <div className="featuredtempContainer">
          <span className="featuredtemp">10,40</span>
          <span className="featuredtempRate">
            1,2 <WiHumidity  className="featuredIcon"/>
          </span>
        </div>
            <span className="featuredSub">Rata-Rata per hari</span>
        </div>
        <div className="featuredItem">
        <span className="featuredTitle">Water Ph</span>
        <div className="featuredtempContainer">
          <span className="featuredtemp">12,79</span>
          <span className="featuredtempRate">
            3,4 <WiSnowWind className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Rata-Rata per hari</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Water EC</span>
        <div className="featuredtempContainer">
          <span className="featuredtemp">13,70</span>
          <span className="featuredtempRate">
            1,8 <WiSnow className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Rata-Rata per hari</span>
      </div>
    </div>
  );
}