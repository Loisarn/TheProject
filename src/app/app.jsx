import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  IndexRoute,
} from "react-router-dom";
import "./app.css";
import Home from "./pages/Hem.js";
import Renovering from "./pages/Renovering.js";
import Kostnad from "./pages/Kostnad.js";
import Car from "./components/Car.jsx";
import House from "./components/House.jsx";
import Receipt from "./components/Receipt.jsx";
import SearchBar from "./components/Searchbar.jsx";
import Login from "./components/Login.jsx";
import { AuthProvider } from "../context/AuthProvider.js";
import Register from "./components/Register.jsx";
import FooterComponent from "./components/FooterComponent.js";
import Contact from "./components/Contacts.jsx";
import { db as data } from "../../data/db.json";
import FordonList from "../api/FordonList.jsx";
import Layout from "./components/Layout.js";
import Unauthorized from "./components/Unauthorized.js";
import ViewFordon from "../api/ViewFordon.jsx";
import CreateFordon from "../api/CreateFordon.jsx";
import EditFordon from "../api/EditFordon.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <Router>
      <Navbar />
      <SearchBar placeholder="Search" data={data} />
      <Routes>
        {/* <Route patch="/" element={<Layout />} /> */}
        {/*public routes */}
        <Route path="/signup" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        {/*protected routes*/}
        {/* <Route element={<RequireAuth />}> */}
        <Route path="/renovering" element={<Renovering />} />
        <Route path="/cost" element={<Kostnad />} />
        <Route path="/house" element={<House />} />
        <Route path="/car" element={<Car />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/vehicles" element={<FordonList />} />
        <Route path="/view-vehicles/:id" element={<ViewFordon />} />
        {<Route path="/add-vehicles/_add" element={<CreateFordon />} />}
        {<Route path="/add-vehicles/:id" element={<EditFordon />} />}
        {/* </Route> */}
      </Routes>
      <FooterComponent />
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  // <AuthProvider>
  <App />
  /* </AuthProvider> */
);
