import React from 'react';
import styled from '@emotion/styled';
import { colors, shadows, borderRadius, transitions, gradients } from '../styles/globalStyles';
import { FaSearch, FaPlane } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const HeroContainer = styled.section<{ inView: boolean }>`
  min-height: 100vh;
  padding: 8rem 4rem;
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
    url('https://th.bing.com/th/id/R.30bb3b6d5f2178effda220e05747ebf2?rik=LqZ%2bI5opq6VRKA&riu=http%3a%2f%2fwww.pacificvoyagers.org%2fwp-content%2fuploads%2f2020%2f07%2fSolo-Travel-in-Nature-acbfea52bfaf.jpg&ehk=DPCVJcr1VfbSj4V0Ia8mv6LeeZc%2b0q5RGj7VdIkgYws%3d&risl=&pid=ImgRaw&r=0'); /* Replace with your desired background image URL */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;
  position: relative;
  overflow: hidden;

  /* Animation styles */
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) => (props.inView ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 4rem 2rem;
    gap: 4rem;
    text-align: center;
  }
`;

const HeroContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const HeroContentRight = styled.div`
  width: 600px;
  height: 450px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    height: 300px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${borderRadius.large};
  box-shadow: ${shadows.large};
  position: relative;
  z-index: 2;
`;

const HeroCardBackground = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 100%;
  height: 100%;
  background-color: ${colors.background.white};
  opacity: 0.9; /* Adjust opacity as needed for the translucent effect */
  backdrop-filter: blur(5px); /* Optional: adds a blur effect behind the card */
  border-radius: ${borderRadius.large};
  box-shadow: ${shadows.medium};
  z-index: 1;

  @media (max-width: 1024px) {
    top: 20px;
    left: 20px;
  }
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  color: ${colors.text.primary};
  line-height: 1.2;
  margin: 0 0 0.8rem 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${colors.text.secondary};
  line-height: 1.6;
  margin: 0 0 2rem 0;
  max-width: 500px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: ${colors.background.white};
  padding: 0.5rem 1.2rem;
  border-radius: ${borderRadius.medium};
  box-shadow: ${shadows.small};
  width: 100%;
  max-width: 500px;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0.8rem;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 0.4rem 0.6rem;
  font-size: 1rem;
  outline: none;
  background: transparent;
  color: ${colors.text.primary};

  &::placeholder {
    color: ${colors.text.light};
  }
`;

const SearchButton = styled.button`
  background: ${colors.primary};
  color: ${colors.background.white};
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: ${borderRadius.small};
  font-weight: 600;
  cursor: pointer;
  transition: ${transitions.default};
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    background: ${colors.primaryLight};
    transform: translateY(-2px);
    box-shadow: ${shadows.medium};
  }
`;

const HeroSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HeroContainer ref={ref} inView={inView}>
      <HeroContentLeft>
        <Title>Jelajahi Keindahan Indonesia</Title>
        <Subtitle>
          Temukan destinasi wisata terbaik dan pengalaman tak terlupakan di seluruh Indonesia
        </Subtitle>
        <SearchContainer>
          <FaPlane style={{ color: colors.text.secondary, fontSize: '1.1rem' }} />
          <SearchInput placeholder="Cari destinasi wisata..." />
          <SearchButton>
            <FaSearch style={{ fontSize: '1.1rem' }} />
            Cari
          </SearchButton>
        </SearchContainer>
      </HeroContentLeft>
      <HeroContentRight>
        <HeroCardBackground />
        <HeroImage src="https://th.bing.com/th/id/OIP.n13SS2DyuTz1_06ZJs7CTAHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain" alt="Travel related image" />
      </HeroContentRight>
    </HeroContainer>
  );
};

export default HeroSection; 