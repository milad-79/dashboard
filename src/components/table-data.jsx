import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../styles/dateTabel.css";
import { dashbordColumns, dashbordRows } from "./inf";

const DataTable = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={dashbordRows}
        columns={dashbordColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        className="table"
      />
    </div>
  );
};

export default DataTable;
