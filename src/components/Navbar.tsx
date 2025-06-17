import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors, shadows, transitions, borderRadius } from '../styles/globalStyles';

const Nav = styled.nav`
  background: ${colors.background.white};
  padding: 0.8rem 4rem;
  box-shadow: ${shadows.small};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const Logo = styled.div`
  font-size: 1.7rem;
  font-weight: 800;
  color: ${colors.primary};
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const NavLink = styled.a<{ active?: boolean }>`
  color: ${(props) => (props.active ? colors.primary : colors.text.primary)};
  text-decoration: none;
  font-weight: ${(props) => (props.active ? 700 : 600)};
  font-size: 1rem;
  transition: ${transitions.default};
  padding: 0.4rem 0.8rem;
  position: relative;
  border-radius: ${borderRadius.small};
  z-index: 1;

  &:hover {
    color: ${colors.primary};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => (props.active ? colors.primary + '20' : colors.primary + '10')};
    border-radius: ${borderRadius.small};
    z-index: -1;
    transform: ${(props) => (props.active ? 'scale(1)' : 'scale(0.8)')};
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: ${transitions.default};
  }

  &:hover::before {
    transform: scale(1);
    opacity: 1;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: ${transitions.default};
  cursor: pointer;
  letter-spacing: 0.3px;
`;

const SignInButton = styled(Button)`
  background-color: transparent;
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  padding: 0.5rem 1.6rem;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.background.white};
    transform: translateY(-2px);
    box-shadow: ${shadows.medium};
  }
`;

const SignUpButton = styled(Button)`
  background-color: ${colors.primary};
  color: ${colors.background.white};
  border: 2px solid ${colors.primary};

  &:hover {
    background-color: ${colors.primaryLight};
    border-color: ${colors.primaryLight};
    transform: translateY(-2px);
    box-shadow: ${shadows.medium};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Navbar: React.FC<{ activeSection?: string }> = ({ activeSection }) => {
  return (
    <Nav>
      <NavContainer>
        <LeftNav>
          <StyledLink to="/">
            <Logo>TravelEase</Logo>
          </StyledLink>
          <NavLinks>
            <NavLink href="#home" active={activeSection === 'home'}>Beranda</NavLink>
            <NavLink href="#categories" active={activeSection === 'categories'}>Kategori</NavLink>
            <NavLink href="#destinations" active={activeSection === 'destinations'}>Destinasi</NavLink>
            <NavLink href="#about" active={activeSection === 'about'}>Tentang</NavLink>
            <NavLink href="#contact" active={activeSection === 'contact'}>Kontak</NavLink>
          </NavLinks>
        </LeftNav>
        <RightNav>
          <StyledLink to="/login">
            <SignInButton>Masuk</SignInButton>
          </StyledLink>
          <StyledLink to="/register">
            <SignUpButton>Daftar</SignUpButton>
          </StyledLink>
        </RightNav>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 