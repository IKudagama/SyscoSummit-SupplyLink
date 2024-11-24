import React, { useEffect } from "react";
import { useAuth } from "react-oidc-context";

const CallbackPage = () => {
  const auth = useAuth();

  useEffect(() => {
    auth.handleRedirectCallback().catch((error) => {
      console.error("Error during callback handling:", error);
    });
  }, [auth]);

  return <div>Redirecting...</div>;
};

export default CallbackPage;
