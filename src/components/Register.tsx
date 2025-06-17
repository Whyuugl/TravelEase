import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper, IconButton, InputAdornment } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import { Visibility, VisibilityOff, Email, Lock, Person } from '@mui/icons-material'; // Added Person icon
import { Google, Facebook, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const BG_IMAGE = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'; // Use the same background image

// Reusing styled components from Login.tsx or defining similar ones
const Root = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden; /* Prevent any scrolling on the root */
  display: flex;
  flex-direction: column; /* Use flex column */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  box-sizing: border-box;
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: -10px;
  left: -10px;
  width: calc(100vw + 20px);
  height: calc(100vh + 20px);
  background: url(${BG_IMAGE}) center center/cover no-repeat;
  filter: blur(8px) brightness(0.7);
  z-index: 0;
`;

const CenterContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 100vw;
  padding: 0; /* Remove all padding from CenterContent */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const StyledPaper = muiStyled(Paper)(({ theme }) => ({
  padding: theme.spacing(1, 3), /* Further reduced vertical padding */
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  borderRadius: '28px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
  width: '100%',
  maxWidth: '450px',
  height: 'auto',
  minHeight: 'auto',
  backdropFilter: 'blur(2px)',
  margin: theme.spacing(2), /* Add some margin for spacing from edges */
  flexShrink: 0,
  boxSizing: 'border-box',
  '@media (max-width: 600px)': {
    padding: theme.spacing(0.5, 1.5), /* Further reduced vertical padding for mobile */
    borderRadius: '20px',
    margin: '10px',
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
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1), // Tambahkan gap antar field
  }));
  

const StyledTextField = muiStyled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(0.8), /* Slightly reduced margin bottom */
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    '&:hover fieldset': {
      borderColor: '#1976d2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1976d2',
    },
    boxSizing: 'border-box',
  },
}));

const StyledButton = muiStyled(Button)(({ theme }) => ({
  margin: theme.spacing(0.8, 0, 1.2), /* Adjusted vertical margins */
  padding: theme.spacing(1, 1.5), /* Slightly reduced padding */
  backgroundColor: '#1976d2',
  borderRadius: '12px',
  textTransform: 'none',
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: '#1565c0',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
  },
  transition: 'all 0.3s ease',
}));

const SocialButton = muiStyled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 0.5), /* Added slight horizontal margin */
  padding: theme.spacing(0.5, 0.8), /* Further adjusted padding */
  borderRadius: '12px',
  textTransform: 'none',
  fontSize: '0.85rem', /* Slightly smaller font size */
  backgroundColor: 'white',
  color: 'black',
  flexGrow: 1,
  minWidth: 0, /* Allow shrinking */
  '&:hover': {
    backgroundColor: '#f5f5f5',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  transition: 'all 0.3s ease',
}));

const SocialIcon = muiStyled('img')({
  width: '20px', // Smaller icon size
  height: '20px',
  marginRight: '8px', // Space between icon and text
});

const SocialButtonsContainer = muiStyled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1),
  mt: theme.spacing(0),
  mb: theme.spacing(1.5),
  width: '100%', /* Ensure Box takes full width */
  justifyContent: 'space-between', /* Distribute space */
}));

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Registration attempt with:', { name, email, password });
    // Add registration logic here
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
            Create an Account
          </Typography>
          <StyledForm onSubmit={handleSubmit}>
            <StyledTextField
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={{ color: '#1976d2' }} />
                  </InputAdornment>
                ),
              }}
            />
            <StyledTextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
              autoComplete="new-password"
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
            <Typography variant="body2" color="textSecondary" sx={{ mt: -1.5, mb: 1, alignSelf: 'flex-start' }}>
              Password must be at least 8 characters.
            </Typography>

            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 1, mb: 1.5 }}
            >
              Sign Up
            </StyledButton>

            <Typography variant="body2" align="center" sx={{ my: 1.5 }}>
              or
            </Typography>

            <SocialButtonsContainer>
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
            </SocialButtonsContainer>

            <Typography variant="body2" align="center" sx={{ mt: 1.5 }}>
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#1976d2', textDecoration: 'none' }}>
                Sign In
              </Link>
            </Typography>
          </StyledForm>
        </StyledPaper>
      </CenterContent>
    </Root>
  );
};

export default Register; 