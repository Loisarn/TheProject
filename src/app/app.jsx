import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./pages/Hem.js";
import Renovering from "./pages/Renovering.js";
import Kostnad from "./pages/Kostnad.js";
import Car from "./components/Car.jsx";
import House from "./components/House.jsx";
import Receipt from "./components/Receipt.jsx";
import SearchBar from "./components/Searchbar.jsx";
import Login from "./components/Login.jsx";
import AuthProvider from "../context/AuthProvider.js";
import Register from "./components/Register.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import Contact from "./components/Contacts.jsx";
import FordonList from "../api/FordonList.jsx";
import ReceiptList from "../api/ReceiptList.jsx";
import Unauthorized from "./components/Unauthorized.js";
import ViewFordon from "../api/ViewFordon.jsx";
import CreateFordon from "../api/CreateFordon.jsx";
import CreateBostad from "../api/CreateBostad.jsx";
import ViewBostad from "../api/ViewBostad.jsx";
import UpdateFordon from "../api/UpdateFordon.jsx";
import UpdateBostad from "../api/UpdateBostad.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateReceipt from "../api/CreateReceipt.jsx";
import ErrorBoundary from "./components/ErrorBoundary.js";

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <Router>
      <ErrorBoundary>
        <Navbar />
        <ThemeContext.Provider value={darkTheme}>
          <div style={{ float: "right" }}>
            <button className="toggle" onClick={toggleTheme}>
              Toggle
            </button>
          </div>
          <SearchBar placeholder="Search" />
          <Routes>
            {/*public routes */}
            <Route path="/signup" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Home />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            {/*protected routes*/}
            {/* <Route element={<RequireAuth />}> */}
            <Route path="/renovering" element={<Renovering />} />
            <Route path="/cost" element={<Kostnad />} />
            <Route path="/house" element={<House />} />
            <Route path="/car" element={<Car />} />
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/vehicles" element={<FordonList />} />
            <Route path="/view-vehicles/:id" element={<ViewFordon />} />
            <Route path="/add-vehicles" element={<CreateFordon />} />
            <Route path="/update-vehicles/:id" element={<UpdateFordon />} />
            <Route path="/add-house" element={<CreateBostad />} />
            <Route path="/add-house/:id" element={<UpdateBostad />} />
            <Route path="/view-house/:id" element={<ViewBostad />} />
            <Route path="/add-receipts" element={<CreateReceipt />} />
            <Route path="/receipts" element={<ReceiptList />} />
            {/* </Route> */}
          </Routes>
          <FooterComponent />
        </ThemeContext.Provider>
      </ErrorBoundary>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
