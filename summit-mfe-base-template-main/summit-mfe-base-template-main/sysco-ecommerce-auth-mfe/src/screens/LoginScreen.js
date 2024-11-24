// LoginScreen.js
import React from "react";
import { useAuth } from "react-oidc-context";

const LoginScreen = () => {
  const auth = useAuth(); // Access the react-oidc-context instance

  // Sign-out redirect function
  const signoutRedirect = () => {
    const clientId = "2ej5njuadhgiuekog495ngtogs"; // Cognito App Client ID
    const logoutUri = "http://localhost:8083/login"; // Your application's logout URL
    const cognitoDomain = "https://ap-south-1an9rkiqgs.auth.ap-south-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  // Handle different states of authentication
  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Error: {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <h2>Welcome, {auth.user?.profile.email}</h2>
        <pre>ID Token: {auth.user?.id_token}</pre>
        <pre>Access Token: {auth.user?.access_token}</pre>
        <pre>Refresh Token: {auth.user?.refresh_token}</pre>
        <button onClick={() => auth.removeUser()}>Sign Out</button>
        <button onClick={signoutRedirect}>Sign Out (Redirect)</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => auth.signinRedirect()}>Sign In with Cognito</button>
    </div>
  );
};

export default LoginScreen;
