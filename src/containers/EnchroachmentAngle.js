import React from "react";
import InputField from "../components/InputField/InputField";
import { Context } from "../Context";

const EncroachmentAngle = () => {
  const context = React.useContext(Context);
  return (
    <div>
      <h3>
        <i>f</i> = θ / 360
      </h3>
      <form>
        <InputField
          type="number"
          className="form-control"
          name="angle"
          value={""}
          onChange={() => {}}
          placeholder="angle"
          label="Encroachment Angle (θ)"
        />
        <input
          type="submit"
          className="btn btn-success btn-md btn-block"
          value="Compute Enchroachment Angle"
        />
      </form>
    </div>
  );
};

export default EncroachmentAngle;
