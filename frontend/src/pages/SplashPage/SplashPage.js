import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Box, Paper } from "@mui/material";
import "./styles.css";

const SplashPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Paper className="bg">
      <Box className="login-container">
        <img
          src="https://i.ibb.co/SBfqNbc/imageedit-1-4156875095.png"
          width="300px"
        />
        <h3 className="title"> Merchant portal </h3>
        <p>
          Log in to manage your restaurants, refund orders, and drive new
          business.
        </p>
        <Button
          className="login"
          key="auth0-login"
          onClick={() => loginWithRedirect()}
          variant="contained"
        >
          Log in
        </Button>
      </Box>
    </Paper>
  );
};

export default SplashPage;
