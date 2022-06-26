import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Store from "./pages/Store/Store";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin";
import CargarSkus from "./pages/CargarSkus/CargarSkus";
import SkusHabilitados from "./pages/SkusHabilitados/SkusHabilitados";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index path="/" element={<Store />} />
        <Route path="store" element={<Store />} />
        <Route path="store/:categoria" element={<Store />} />
        <Route path="shoppingcart" element={<ShoppingCart />} />
        <Route path="profile" element={<Profile />} />
        <Route path="admin" element={<Admin />} />
        <Route path="cargarskus" element={<CargarSkus />} />
        <Route path="skushabilitados" element={<SkusHabilitados />} />
      </Routes>
    </div>
  );
}

export default App;
