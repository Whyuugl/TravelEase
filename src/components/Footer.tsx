import React from 'react';
import styled from '@emotion/styled';
import { colors, shadows, transitions, borderRadius } from '../styles/globalStyles';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope 
} from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${colors.text.primary};
  color: ${colors.background.white};
  padding: 4rem 4rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div``;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${colors.background.white};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${colors.background.white}90;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${colors.background.white};
  font-size: 1.2rem;
  transition: ${transitions.default};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${colors.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${colors.primary};
    transform: translateY(-3px);
  }
`;

const FooterTitle = styled.h4`
  color: ${colors.background.white};
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.8rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: ${colors.primary};
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;

  a {
    color: ${colors.background.white}90;
    text-decoration: none;
    transition: ${transitions.default};
    display: inline-block;

    &:hover {
      color: ${colors.primary};
      transform: translateX(5px);
    }
  }
`;

const ContactInfo = styled.div`
  color: ${colors.background.white}90;
  line-height: 1.8;
`;

const ContactItem = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
`;

const BottomBar = styled.div`
  border-top: 1px solid ${colors.background.white}20;
  padding-top: 2rem;
  text-align: center;
  color: ${colors.background.white}70;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <Logo>TravelEase</Logo>
            <Description>
              Platform wisata terpercaya yang membantu Anda menjelajahi keindahan Indonesia dengan pengalaman perjalanan yang tak terlupakan.
            </Description>
            <SocialLinks>
              <SocialLink href="#" target="_blank">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="#" target="_blank">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="#" target="_blank">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="#" target="_blank">
                <FaYoutube />
              </SocialLink>
              <SocialLink href="#" target="_blank">
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#home">Beranda</a></FooterLink>
              <FooterLink><a href="#destinations">Destinasi</a></FooterLink>
              <FooterLink><a href="#categories">Kategori</a></FooterLink>
              <FooterLink><a href="#about">Tentang Kami</a></FooterLink>
              <FooterLink><a href="#contact">Kontak</a></FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Layanan</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#">Paket Wisata</a></FooterLink>
              <FooterLink><a href="#">Pemesanan Hotel</a></FooterLink>
              <FooterLink><a href="#">Tiket Pesawat</a></FooterLink>
              <FooterLink><a href="#">Tour Guide</a></FooterLink>
              <FooterLink><a href="#">Asuransi Perjalanan</a></FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Kontak</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <FaMapMarkerAlt /> Jl. Sudirman No. 123, Jakarta
              </ContactItem>
              <ContactItem>
                <FaPhone /> +62 812 3456 7890
              </ContactItem>
              <ContactItem>
                <FaEnvelope /> info@travelease.com
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterGrid>

        <BottomBar>
          © {new Date().getFullYear()} TravelEase. All rights reserved.
        </BottomBar>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 