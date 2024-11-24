const oidcConfig = {
    client_id: "2ej5njuadhgiuekog495ngtogs", // Cognito App Client ID
    authority: "https://ap-south-1an9rkiqgs.auth.ap-south-1.amazoncognito.com", // Cognito Domain
    redirect_uri: "http://localhost:8083/callback", // App redirect URL after login
    post_logout_redirect_uri: "http://localhost:8083/login", // Logout URL
    scope: "openid profile email", // Scopes
    response_type: "code", // Authorization Code Flow
  };
  
  export default oidcConfig;
  