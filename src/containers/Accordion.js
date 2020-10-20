import React from "react";
import EncroachmentAngle from "./EnchroachmentAngle";
import WaterInfluxConst from "./WaterInfluxConst";



const Accordion = () => {
  return (
    <div class="accordion mb-3" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Enchroachment Angle, <i>f</i>
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
           <EncroachmentAngle/>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Water Influx Constant, <i>C</i>
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div class="card-body">
           <WaterInfluxConst/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
