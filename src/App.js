import "./app.css";
import Dashbord from "./components/dashbord";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Products from "./components/products";
import Users from "./components/users";
import InfUser from "./components/infUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbord />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/inf-user" element={<InfUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
