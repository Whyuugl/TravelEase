import React from 'react';
import styled from '@emotion/styled';
import { colors, shadows, transitions, borderRadius } from '../styles/globalStyles';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Section = styled.section<{ inView: boolean }>`
  padding: 6rem 4rem;
  background: ${colors.background.white};
  position: relative;

  /* Animation styles */
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) => (props.inView ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${colors.text.primary};
  text-align: center;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${colors.primary};
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  color: ${colors.text.secondary};
  text-align: center;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 2rem auto 4rem;
  line-height: 1.6;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: start;
`;

const ContactInfo = styled.div`
  background: ${colors.background.light};
  padding: 3rem;
  border-radius: ${borderRadius.medium};
  box-shadow: ${shadows.medium};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  background: ${colors.primary}10;
  color: ${colors.primary};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ContactDetails = styled.div``;

const ContactTitle = styled.h4`
  color: ${colors.text.primary};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ContactText = styled.p`
  color: ${colors.text.secondary};
  font-size: 1rem;
  line-height: 1.6;
`;

const Form = styled.form`
  background: ${colors.background.light};
  padding: 3rem;
  border-radius: ${borderRadius.medium};
  box-shadow: ${shadows.medium};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: ${colors.text.primary};
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid ${colors.primary}20;
  border-radius: ${borderRadius.small};
  font-size: 1rem;
  transition: ${transitions.default};
  background: ${colors.background.white};
  color: ${colors.text.primary};

  &::placeholder {
    color: ${colors.text.secondary}80;
  }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primary}10;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid ${colors.primary}20;
  border-radius: ${borderRadius.small};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: ${transitions.default};
  background: ${colors.background.white};
  color: ${colors.text.primary};

  &::placeholder {
    color: ${colors.text.secondary}80;
  }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primary}10;
  }
`;

const SubmitButton = styled.button`
  background: ${colors.primary};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: ${borderRadius.small};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${transitions.default};
  width: 100%;

  &:hover {
    background: ${colors.primaryLight};
    transform: translateY(-2px);
    box-shadow: ${shadows.medium};
  }
`;

const ContactUs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="contact" ref={ref} inView={inView}>
      <Container>
        <Title>Hubungi Kami</Title>
        <Subtitle>
          Punya pertanyaan? Tim kami siap membantu Anda dengan informasi dan bantuan yang Anda butuhkan
        </Subtitle>

        <ContentGrid>
          <ContactInfo>
            <ContactItem>
              <IconWrapper>
                <FaPhone />
              </IconWrapper>
              <ContactDetails>
                <ContactTitle>Telepon</ContactTitle>
                <ContactText>+62 812 3456 7890</ContactText>
                <ContactText>+62 821 2345 6789</ContactText>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <ContactDetails>
                <ContactTitle>Email</ContactTitle>
                <ContactText>info@travelease.com</ContactText>
                <ContactText>support@travelease.com</ContactText>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <IconWrapper>
                <FaMapMarkerAlt />
              </IconWrapper>
              <ContactDetails>
                <ContactTitle>Alamat</ContactTitle>
                <ContactText>
                  Jl. Sudirman No. 123<br />
                  Jakarta Pusat, 10220<br />
                  Indonesia
                </ContactText>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <IconWrapper>
                <FaClock />
              </IconWrapper>
              <ContactDetails>
                <ContactTitle>Jam Operasional</ContactTitle>
                <ContactText>
                  Senin - Jumat: 09:00 - 17:00<br />
                  Sabtu: 09:00 - 15:00<br />
                  Minggu: Tutup
                </ContactText>
              </ContactDetails>
            </ContactItem>
          </ContactInfo>

          <Form>
            <FormGroup>
              <Label>Nama Lengkap</Label>
              <Input type="text" placeholder="Masukkan nama lengkap Anda" />
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="Masukkan email Anda" />
            </FormGroup>

            <FormGroup>
              <Label>Subjek</Label>
              <Input type="text" placeholder="Masukkan subjek pesan" />
            </FormGroup>

            <FormGroup>
              <Label>Pesan</Label>
              <TextArea placeholder="Tulis pesan Anda di sini..." />
            </FormGroup>

            <SubmitButton type="submit">Kirim Pesan</SubmitButton>
          </Form>
        </ContentGrid>
      </Container>
    </Section>
  );
};

export default ContactUs; 