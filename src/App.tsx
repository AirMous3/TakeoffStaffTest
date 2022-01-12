import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "./components/login/LoginForm";
import { useSelector } from "react-redux";
import { RootStateType } from "./redux/store/store";
import { Contacts } from "./components/contacts/Contacts";
import { Header } from "./components/header/Header";

export const App = () => {
  const userId = useSelector((state: RootStateType) => state.app.userID);

  useEffect(() => {
    localStorage.setItem("userId", userId !== null ? String(userId) : "");
  }, [userId]);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            userId ? <Contacts userId={userId} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/login"
          element={!userId ? <LoginForm /> : <Navigate to={"/"} />}
        />
      </Routes>
    </div>
  );
};
