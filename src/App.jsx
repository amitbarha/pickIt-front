import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import Splash from "./components/SplashScreen/Splash";
import RegisterPhone from "./components/Register/RegisterPhone";
import DeliveryForm from "./components/DeliveryForm/DeliveryForm";
import Dashboard from "./components/Admin/Dashboard";
import ConfirmPhone from "./components/Register/ConfirmPhone";
import RegisterForm from "./components/Register/RegisterForm";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route index element={<Splash />}></Route>
        <Route path="Dashboard" element={<Dashboard />}></Route>
        <Route path="RegisterPhone" element={<RegisterPhone />}></Route>
        <Route path="ConfirmPhone" element={<ConfirmPhone />}></Route>
        <Route path="RegisterForm" element={<RegisterForm />}></Route>
        <Route element={<Layout />}>
          <Route path="HomePage" element={<HomePage />}></Route>
          <Route path="FastOrder" element={<DeliveryForm />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
