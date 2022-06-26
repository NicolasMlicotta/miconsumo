import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Store from "./pages/Store/Store";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin";

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
      </Routes>
    </div>
  );
}

export default App;
