import React, { useState } from "react";
import {
  Wrapper,
  ContainerBox,
  ImageBox,
  HeroLogo,
  FormBox,
  Title,
  Subtitle,
  BlurBox,
} from "../styles/Login/Login.styles";
import {
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Link,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff, Google, Apple, ArrowBackIos } from "@mui/icons-material";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleTogglePassword = () => setShowPassword((show) => !show);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in:", formData);
  };

  return (
    <Wrapper>
      <ContainerBox>
        <ImageBox>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
            <HeroLogo>H</HeroLogo>
            <Typography variant="h3" sx={{ fontWeight: 400 }}>
              Home Away
            </Typography>
          </Box>

          <Box sx={{ marginBottom: 6 }}>
            <IconButton
              sx={{
                bgcolor: "rgba(79,172,181,0.2)",
                color: "rgba(79,172,181,0.9)",
                width: 60,
                height: 60,
                mb: 4,
                "&:hover": { bgcolor: "rgba(79,172,181,0.3)" },
              }}
              aria-label="go back"
            >
              <ArrowBackIos />
            </IconButton>
            <Typography variant="h2" sx={{ fontWeight: 400, lineHeight: 1.2 }}>
              Away from Home,
              <br />
              Yet Feels Like Home
            </Typography>
          </Box>

          <BlurBox />
        </ImageBox>

        <FormBox>
          <Box sx={{ textAlign: "center", marginBottom: 6 }}>
            <Title variant="h4">Login</Title>
            <Subtitle>Welcome back! Please enter your details.</Subtitle>
          </Box>

          <Box component="form" onSubmit={handleLogin} sx={{ width: "100%" }}>
            <TextField
              fullWidth
              variant="outlined"
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              margin="normal"
            />

            <TextField
              fullWidth
              variant="outlined"
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleInputChange}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      onClick={handleTogglePassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={{ textAlign: "right", mt: 1 }}>
              <Link href="#" underline="hover" fontSize={14}>
                Forgot password?
              </Link>
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 4,
                py: 1.8,
                textTransform: "uppercase",
                fontWeight: 600,
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              Login
            </Button>
          </Box>

          <Divider sx={{ my: 4, color: "grey.300" }}>or</Divider>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<Google />}
            sx={{
              mb: 2,
              py: 1.8,
              textTransform: "none",
              fontWeight: 600,
              borderColor: "grey.400",
              color: "text.primary",
              "&:hover": { bgcolor: "grey.100", borderColor: "grey.500" },
            }}
          >
            Continue with Google
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<Apple />}
            sx={{
              py: 1.8,
              textTransform: "none",
              fontWeight: 600,
              borderColor: "grey.400",
              color: "text.primary",
              "&:hover": { bgcolor: "grey.100", borderColor: "grey.500" },
            }}
          >
            Continue with Apple
          </Button>

          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              Don't have an account?{" "}
              <Link href="#" underline="hover" color="primary">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </FormBox>
      </ContainerBox>
    </Wrapper>
  );
};

export default LoginPage;
