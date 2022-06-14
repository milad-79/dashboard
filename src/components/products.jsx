import { DataGrid } from "@mui/x-data-grid";
import "../styles/products.css";
import Header from "./header";
import SideBar from "./sidbar";
import SidebarM from "./sidebar-m";
import "../styles/dateTabel.css";
import { productsColumns, productsRows } from "./inf";

function Products() {
  return (
    <div style={require("../colors.css")}>
      <Header />
      <div className="container">
        <SideBar />
        <SidebarM />
        <div className="container-right">
          <header className="products-header">
            <h3 className="products-h3">Products List</h3>
          </header>

          <div className="body-products">
            <div style={{ height: 600, width: "100%" }}>
              <DataGrid
                rows={productsRows}
                columns={productsColumns}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
                className="table"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
