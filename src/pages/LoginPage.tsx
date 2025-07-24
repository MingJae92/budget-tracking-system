import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Link,
  Divider,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Google,
  Apple,
  ArrowBackIos,
} from '@mui/icons-material';

import {
  rootSx,
  containerSx,
  leftHeroSx,
  heroLogoSx,
  rightFormSx,
  backButtonSx,
  blurBoxSx,
} from '../styles/Login/Login.styles';

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleTogglePassword = () => setShowPassword((show) => !show);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in:', formData);
  };

  return (
    <Box sx={rootSx}>
      <Box sx={containerSx}>
        {/* Left Hero Side */}
        <Box sx={leftHeroSx}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Box sx={heroLogoSx}>H</Box>
            <Typography variant="h3" sx={{ fontWeight: 400 }}>
              Home Away
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            <IconButton sx={backButtonSx} aria-label="go back">
              <ArrowBackIos />
            </IconButton>
            <Typography variant="h2" sx={{ fontWeight: 400, lineHeight: 1.2 }}>
              Away from Home,
              <br />
              Yet Feels Like Home
            </Typography>
          </Box>

          <Box sx={blurBoxSx} />
        </Box>

        {/* Right Login Form Side */}
        <Box sx={rightFormSx}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
            <Typography color="text.secondary" fontSize={16}>
              Welcome back! Please enter your details.
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleLogin} sx={{ mb: 4 }}>
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
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={handleTogglePassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={{ textAlign: 'right', mt: 1 }}>
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
                textTransform: 'uppercase',
                fontWeight: 600,
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              Login
            </Button>
          </Box>

          <Divider sx={{ mb: 4, color: 'grey.300' }}>or</Divider>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<Google />}
            sx={{
              mb: 2,
              py: 1.8,
              textTransform: 'none',
              fontWeight: 600,
              borderColor: 'grey.400',
              color: 'text.primary',
              '&:hover': { bgcolor: 'grey.100', borderColor: 'grey.500' },
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
              textTransform: 'none',
              fontWeight: 600,
              borderColor: 'grey.400',
              color: 'text.primary',
              '&:hover': { bgcolor: 'grey.100', borderColor: 'grey.500' },
            }}
          >
            Continue with Apple
          </Button>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Don't have an account?{' '}
              <Link href="#" underline="hover" color="primary">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
