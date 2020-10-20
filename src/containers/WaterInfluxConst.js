import React from "react";
import InputField from "../components/InputField/InputField";
import { Context } from "../Context";

const WaterInfluxConst = () => {
  const context = React.useContext(Context);
  return (
    <div>
      <h3>
        <i>C</i> = 1.119<i>f</i>𝝓hc<sub>tw</sub><span>r<sub>e</sub></span><sup>2</sup> (bbl/psi)
      </h3>
      <form>
        <InputField
          type="number"
          className="form-control"
          name="angle"
          value={""}
          onChange={() => {}}
          placeholder="Enchroachment angle"
          label={<span>Encroachment Angle, <i>f</i></span>}
        />
        <InputField
          type="number"
          className="form-control"
          name="porosity"
          value={""}
          onChange={() => {}}
          placeholder="Porosity"
          label="Acquifer Porosity, 𝜙"
        />
        <InputField
          type="number"
          className="form-control"
          name="thickness"
          value={""}
          onChange={() => {}}
          placeholder="Thickness"
          label="Aquifer Thickness, h"
        />
        <InputField
          type="number"
          className="form-control"
          name="angle"
          value={""}
          onChange={() => {}}
          placeholder="Total compressibilty"
          label={<span>Total compressibilty, c<sub>tw</sub></span>}
        />
        <InputField
          type="number"
          className="form-control"
          name="angle"
          value={""}
          onChange={() => {}}
          placeholder="Reservoir Radius"
          label={<span>Reservoir Radius, r<sub>e</sub></span>}
        />
        <input
          type="submit"
          className="btn btn-success btn-md btn-block"
          value="Compute Water Influx constant"
        />
      </form>
    </div>
  );
};

export default WaterInfluxConst;
