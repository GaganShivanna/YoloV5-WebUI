import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "@mui/material";

const LogoutButton = () => {
  const { logout ,isAuthenticated} = useAuth0();

  return ( isAuthenticated &&
    <Button  variant ="contained" type="button" className="btn btn-primary btn-lg" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;