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
import Login from "./components/Register/Login";
import Test from "./components/Test/Test";
import Exercise from "./components/Exercise/Exercise";
import ExerciseQuiz from "./components/Exercise/ExerciseQuiz";

function App() {
  return (
    <div className="app-container" dir="rtl">
      <Routes>
        <Route index element={<Splash />}></Route>
        <Route path="Dashboard" element={<Dashboard />}></Route>
        <Route path="Test" element={<Test />}></Route>
        <Route path="ExerciseQuiz" element={<ExerciseQuiz />}></Route>
        <Route path="RegisterPhone" element={<RegisterPhone />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="ConfirmPhone" element={<ConfirmPhone />}></Route>
        <Route path="RegisterForm" element={<RegisterForm />}></Route>
        <Route element={<Layout />}>
          <Route path="HomePage" element={<HomePage />}></Route>
          <Route path="Exercise" element={<Exercise />}></Route>
          <Route path="FastOrder" element={<DeliveryForm />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
