import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper, IconButton, InputAdornment } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import { Visibility, VisibilityOff, Email, Lock } from '@mui/icons-material';
import { Google, Facebook, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const BG_IMAGE = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80';

const Root = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  width: calc(100vw + 20px);
  height: calc(100vh + 20px);
  background: url(${BG_IMAGE}) center center/cover no-repeat;
  filter: blur(8px) brightness(0.5);
  z-index: 0;
`;

const CenterContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPaper = muiStyled(Paper)(({ theme }) => ({
  padding: theme.spacing(6, 6),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  borderRadius: '28px',
  boxShadow: 'none',
  width: '100%',
  maxWidth: '520px',
  minHeight: '520px',
  backdropFilter: 'none',
  '@media (max-width: 600px)': {
    padding: theme.spacing(3, 1),
    borderRadius: '0',
    minHeight: '100vh',
  },
}));

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #1976d2;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledForm = muiStyled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
}));

const StyledTextField = muiStyled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    '&:hover fieldset': {
      borderColor: '#1976d2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1976d2',
    },
  },
}));

const StyledButton = muiStyled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
  padding: theme.spacing(1.5),
  backgroundColor: '#1976d2',
  borderRadius: '12px',
  textTransform: 'none',
  fontSize: '1.1rem',
  '&:hover': {
    backgroundColor: '#1565c0',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
  },
  transition: 'all 0.3s ease',
}));

const ForgotPassword = muiStyled(Typography)(({ theme }) => ({
  color: '#1976d2',
  cursor: 'pointer',
  marginTop: theme.spacing(1),
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const SocialButton = muiStyled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 0),
  padding: theme.spacing(0.8, 1.5),
  borderRadius: '12px',
  textTransform: 'none',
  fontSize: '0.9rem',
  backgroundColor: 'white',
  color: 'black',
  flexGrow: 1,
  '&:hover': {
    backgroundColor: '#f5f5f5',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  transition: 'all 0.3s ease',
}));

const SocialIcon = muiStyled('img')({
  width: '20px',
  height: '20px',
  marginRight: '8px',
});

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Login attempt with:', { email, password });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Root>
      <BackgroundImage />
      <CenterContent>
        <StyledPaper elevation={3}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo>
              <span role="img" aria-label="plane" style={{ fontSize: '2rem' }}>✈️</span>
              TravelEase
            </Logo>
          </Link>
          <Typography component="h1" variant="h5" sx={{ mb: 3, color: '#1976d2', fontWeight: 600 }}>
            Welcome Back!
          </Typography>
          <StyledForm onSubmit={handleSubmit}>
            <StyledTextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: '#1976d2' }} />
                  </InputAdornment>
                ),
              }}
            />
            <StyledTextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: '#1976d2' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <ForgotPassword variant="body2" align="right">
              Forgot password?
            </ForgotPassword>
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </StyledButton>

            <Typography variant="body2" align="center" sx={{ my: 2 }}>
              or
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, mt: 0, mb: 1 }}>
              <SocialButton>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                  <SocialIcon src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" />
                  Google
                </Box>
              </SocialButton>
              <SocialButton>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                  <SocialIcon src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_logo.svg" alt="Facebook Logo" />
                  Facebook
                </Box>
              </SocialButton>
              <SocialButton>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                  <SocialIcon src="https://upload.wikimedia.org/wikipedia/commons/5/58/X_logo_2023.svg" alt="X/Twitter Logo" />
                  X
                </Box>
              </SocialButton>
            </Box>

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Don't have an account?{' '}
              <Link to="/register" style={{ color: '#1976d2', textDecoration: 'none' }}>
                Sign Up
              </Link>
            </Typography>
          </StyledForm>
        </StyledPaper>
      </CenterContent>
    </Root>
  );
};

export default Login; 