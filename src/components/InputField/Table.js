import React from "react";

const Table = ({ data }) => {
  return (
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Time (yrs)</th>
          <th scope="col">Pressure (psia)</th>
          <th scope="col">𝚫P (psia)</th>
          <th scope="col">
            W<sub>eD</sub>
          </th>
          <th scope="col">
            W<sub>e</sub> (bbl)
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((value) => (
          <tr key={value.time}>
            <th scope="row">{value.time}</th>
            <td>{value.initPressure}</td>
            <td>{value.meanPressure}</td>
            <td>{value.dimTime}</td>
            <td>{value.cumWaterInflux}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
