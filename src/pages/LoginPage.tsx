import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // fixed import here

import { Wrapper, Container } from "../styles/LayoutStyles/LayoutSyles.styles";
import {
  LeftSide,
  LeftContent,
  RightSide,
} from "../styles/SidePanelStyles/SidePanelStyles.styles";
import {
  Heading,
  Subheading,
} from "../styles/TypographyStyles/TypographyStyles.styles";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse: any) => {
    if (credentialResponse?.credential) {
      const userData = jwtDecode(credentialResponse.credential);
      console.log("Decoded Google User:", userData);
      console.log("User successfully logged in!"); // Added success log

      // Store user data in localStorage or Context here if needed
      localStorage.setItem("user", JSON.stringify(userData));

      // Navigate to dashboard using useNavigate()
      navigate("/dashboard");
    }
  };

  const handleLoginFailure = () => {
    console.log("Google login failed.");
  };

  return (
    <Wrapper>
      <Container>
        <LeftSide>
          <LeftContent>
            <h1
              style={{ fontWeight: 800, fontSize: "2.4rem", marginBottom: 8 }}
            >
              Welcome Back
            </h1>
            <p style={{ maxWidth: 300, fontSize: "1rem", lineHeight: 1.5 }}>
              Sign in with your Google account to continue.
            </p>
          </LeftContent>
        </LeftSide>

        <RightSide>
          <Heading>Sign In</Heading>
          <Subheading>Use your Google Account</Subheading>

          <div style={{ marginTop: "2rem" }}>
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginFailure}
            />
          </div>
        </RightSide>
      </Container>
    </Wrapper>
  );
};

export default LoginPage;
