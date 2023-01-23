import React from "react";
import "./currentpollution.css";
const CurrentPollution = ({ data }) => {
  const dataInfo = data.list[0];
  console.log(dataInfo);
  return (
    <>
      <h1>Current Pollution</h1>
      <div className="pollution">
      <label htmlFor="" className="aqi_label">
            Air Quality Index
          </label>
        <div className="aqi">
          
          <p className="aqi__element">{dataInfo.main.aqi}</p>
           
        </div>

        <div className="eachgas">
          <div className="col1">
            <div className="eachgas_row">
              <span className="gas_label">NO:</span>
              <span className="gas_value">{dataInfo.components.no}</span>
            </div>
            <div className="eachgas_row">
              <span className="gas_label">
                NH<sub></sub>:
              </span>
              <span className="gas_value">{dataInfo.components.nh3}</span>
            </div>
            <div className="eachgas_row">
              <span className="gas_label">
                NO<sub>2</sub>:
              </span>
              <span className="gas_value">{dataInfo.components.no2}</span>
            </div>
            <div className="eachgas_row">
              <span className="gas_label">CO:</span>
              <span className="gas_value">{dataInfo.components.co}</span>
            </div>
          </div>
          <div className="col2">
            <div className="eachgas_row">
              <span className="gas_label">O3:</span>
              <span className="gas_value">{dataInfo.components.o3}</span>
            </div>
            <div className="eachgas_row">
              <span className="gas_label">
                PM<sub>25</sub>:
              </span>
              <span className="gas_value">{dataInfo.components.pm2_5}</span>
            </div>
            <div className="eachgas_row">
              <span className="gas_label">
                PM<sub>10</sub>:
              </span>
              <span className="gas_value">{dataInfo.components.pm10}</span>
            </div>
            <div className="eachgas_row">
              <span className="gas_label">
                SO<sub>2</sub>:
              </span>
              <span className="gas_value">{dataInfo.components.so2}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentPollution;
//<div></div>
{
  /* <div className="eachgas_row">
<span className="gas_label">CO:</span>
<span className="gas-value">{dataInfo.components.co}</span>
</div>
<div className="eachgas_row">
<span className="gas_label">NO:</span>
<span className="gas-value">{dataInfo.components.no}</span>
</div>
<div className="eachgas_row">
<span className="gas_label">NH3:</span>
<span className="gas-value">{dataInfo.components.nh3}</span>
</div>
<div className="eachgas_row">
<span className="gas_label">NO2:</span>
<span className="gas-value">{dataInfo.components.no2}</span>
</div>

<div className="eachgas_row">
<span className="gas_label">O3:</span>
<span className="gas-value">{dataInfo.components.o3}</span>
</div>
<div className="eachgas_col_two">
<span className="gas_label">PM25:</span>
<span className="gas-value">{dataInfo.components.pm2_5}</span>
</div>
<div className="eachgas_col_two">
<span className="gas_label">PM10:</span>
<span className="gas-value">{dataInfo.components.pm10}</span>
</div>
<div className="eachgas_col_two">
<span className="gas_label">SO2:</span>
<span className="gas-value">{dataInfo.components.so2}</span>
</div>  */
}
