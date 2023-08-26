import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import Splash from "./components/SplashScreen/Splash";
import RegisterPhone from "./components/Register/RegisterPhone";
import DeliveryForm from "./components/DeliveryForm/DeliveryForm";
import Dashboard from "./components/Admin/Dashboard";

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* <Route index element={<Splash />}></Route> */}
        <Route path="Dashboard" element={<Dashboard />}></Route>
        <Route path="RegisterPhone" element={<RegisterPhone />}></Route>
        <Route element={<Layout />}>
          <Route path="HomePage" element={<HomePage />}></Route>
          <Route index element={<DeliveryForm />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
