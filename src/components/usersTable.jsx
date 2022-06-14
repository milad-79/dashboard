import { DataGrid } from "@mui/x-data-grid";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/context";
import { usersRows } from "./inf";
import React from "react";


function UserTable() {
  const [users, setUsers] = useState(usersRows);

  const handelDelete = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };


  const context = useContext(MyContext)

  const usersColumns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="table-user-filed">
            <img src={params.row.img} alt="" className="product-img" />

            <p className="name-user">{params.row.fullName}</p>
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 180 },
    {
      field: "age",
      headerName: "Age",
      width: 130,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <span className={`status ${params.row.status}`}>
            {params.row.status}
          </span>
        );
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="btn-tabel-users">
              <button className="delete-user" onClick={() => handelDelete(params.row.id)}>Delete</button>
              <Link to='/inf-user'>
              <button className="view-user" onClick={()=>context.handelePass(params.row)}>View</button>
              </Link>  
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={usersColumns}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
        className="table"
      />
    </div>
  );
}

export default React.memo(UserTable);
