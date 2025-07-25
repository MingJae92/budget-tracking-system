import React, { useState } from "react";
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
import {
  StyledTextField,
  StyledButton,
  SocialButton,
} from "../styles/FormStyles/FormStyles.styles";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff, Google } from "@mui/icons-material";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const togglePasswordVisibility = () => setShowPassword((v) => !v);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", formData);
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
              Sign in to continue booking your dream hotel stays.
            </p>
          </LeftContent>
        </LeftSide>

        <RightSide>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Heading>Sign In</Heading>
            <Subheading>Please enter your credentials below</Subheading>

            <StyledTextField>
              <TextField
                fullWidth
                variant="standard"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                multiline
                minRows={3}
                InputProps={{ disableUnderline: true }}
              />
            </StyledTextField>

            <StyledTextField>
              <TextField
                fullWidth
                variant="standard"
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                multiline
                minRows={3}
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={togglePasswordVisibility}
                        edge="end"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </StyledTextField>

            <StyledButton type="submit" fullWidth>
              Login
            </StyledButton>

            <SocialButton fullWidth startIcon={<Google />}>
              Continue with Google
            </SocialButton>
          </form>
        </RightSide>
      </Container>
    </Wrapper>
  );
};

export default LoginPage;
