import React from "react";
import { AuthProvider } from "react-oidc-context";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import CallbackPage from "./callback/CallbackPage";
import oidcConfig from "./config/oidcConfig";

const App = () => {
  return (
    <AuthProvider {...oidcConfig}>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
