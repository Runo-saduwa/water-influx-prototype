import React from "react";
import Table from "../components/InputField/Table";
import { Context } from "../Context";

const TableContainer = ({ props }) => {
  const data = React.useContext(Context);
  return (
    <>
      <h2>The result is tabulated below:</h2>
      <Table data={data.results} />
    </>
  );
};

export default TableContainer;
