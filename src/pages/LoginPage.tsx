import React, { useState } from 'react';
import {
  Wrapper,
  Container,
  LeftSide,
  LeftContent,
  RightSide,
  Heading,
  Subheading,
  StyledTextField,
  StyledButton,
  SocialButton,
} from '../styles/Login/Login.styles';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, Google, Apple } from '@mui/icons-material';

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const togglePasswordVisibility = () => setShowPassword((v) => !v);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', formData);
  };

  return (
    <Wrapper>
      <Container>
        <LeftSide>
          <LeftContent>
            <h1 style={{ fontWeight: '800', fontSize: '2.4rem', marginBottom: 8 }}>
              Welcome Back
            </h1>
            <p style={{ maxWidth: 300, fontSize: '1rem', lineHeight: 1.5 }}>
              Sign in to continue booking your dream hotel stays.
            </p>
          </LeftContent>
        </LeftSide>
        <RightSide>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
                InputProps={{ disableUnderline: true }}
              />
            </StyledTextField>

            <StyledTextField>
              <TextField
                fullWidth
                variant="standard"
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
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
            <SocialButton fullWidth startIcon={<Apple />}>
              Continue with Apple
            </SocialButton>
          </form>
        </RightSide>
      </Container>
    </Wrapper>
  );
};

export default LoginPage;
