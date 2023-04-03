import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Account from "./pages/Account";
import CurrentPage from "./pages/CurrentPage";
import Earn from "./pages/Earns";
import FinishedPage from "./pages/Finished";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import ReservedPage from "./pages/Reserved";
import Services from "./pages/Services";
function App() {
  return (
    <BrowserRouter>
      <div className="flex w-full items-center  flex-col h-screen">
        <Routes>
          <Route element={<CurrentPage />} path="/current" exact />
          <Route element={<ReservedPage />} path="/reseved" />
          <Route element={<FinishedPage />} path="/finished" />
          <Route element={<Home />} path="/" />
          <Route element={<Earn />} path="/earns" />
          <Route element={<Orders />} path="/orders" />
          <Route element={<Services />} path="/services" />
          <Route element={<Account />} path="/account" />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
