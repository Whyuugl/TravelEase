import React from 'react';
import styled from '@emotion/styled';
import { colors, shadows, transitions, borderRadius } from '../styles/globalStyles';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Section = styled.section<{ inView: boolean }>`
  padding: 6rem 4rem;
  background: linear-gradient(135deg, ${colors.background.light} 0%, ${colors.primary}10 100%);
  position: relative;
  overflow: hidden;

  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) => (props.inView ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80') center/cover;
    opacity: 0.05;
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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
  margin: 0 auto 4rem;
  line-height: 1.6;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background: ${colors.background.white};
  padding: 2.5rem;
  border-radius: ${borderRadius.medium};
  box-shadow: ${shadows.medium};
  transition: ${transitions.default};
  position: relative;
  border: 1px solid ${colors.primary}10;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${shadows.large};
    border-color: ${colors.primary}30;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
    border-radius: ${borderRadius.medium} ${borderRadius.medium} 0 0;
  }
`;

const QuoteIcon = styled(FaQuoteLeft)`
  color: ${colors.primary};
  font-size: 2.5rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  opacity: 0.2;
`;

const Rating = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-bottom: 1.5rem;
  color: ${colors.secondary};
  font-size: 1.2rem;
`;

const Review = styled.p`
  color: ${colors.text.secondary};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-style: italic;
  flex-grow: 1;
`;

const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${colors.primary}10;
  margin-top: auto;
`;

const ReviewerImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${colors.primary}20;
  padding: 2px;
  flex-shrink: 0;
`;

const ReviewerDetails = styled.div``;

const ReviewerName = styled.h4`
  color: ${colors.text.primary};
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  font-weight: 600;
`;

const ReviewerLocation = styled.p`
  color: ${colors.primary};
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const testimonials = [
  {
    id: 1,
    name: 'Sarah Wijaya',
    location: 'Jakarta',
    rating: 5,
    review: 'Pengalaman liburan yang luar biasa! Tim TravelEase sangat profesional dan membantu kami merencanakan perjalanan dengan sempurna. Destinasi yang direkomendasikan sangat indah.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    id: 2,
    name: 'Budi Santoso',
    location: 'Surabaya',
    rating: 5,
    review: 'Saya sangat puas dengan layanan TravelEase. Harga yang ditawarkan sangat kompetitif dan semua fasilitas sesuai dengan yang dijanjikan. Akan menggunakan layanan mereka lagi!',
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id: 3,
    name: 'Dewi Putri',
    location: 'Bandung',
    rating: 4,
    review: 'Perjalanan yang menyenangkan dan terorganisir dengan baik. Panduan wisata sangat informatif dan ramah. Hanya perlu sedikit perbaikan pada jadwal yang terlalu padat.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg'
  }
];

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="testimonials" ref={ref} inView={inView}>
      <Container>
        <Title>Apa Kata Mereka?</Title>
        <Subtitle>
          Dengarkan pengalaman perjalanan dari wisatawan yang telah menggunakan layanan kami
        </Subtitle>
        
        <TestimonialsGrid>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <QuoteIcon />
              <Rating>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </Rating>
              <Review>{testimonial.review}</Review>
              <ReviewerInfo>
                <ReviewerImage src={testimonial.image} alt={testimonial.name} />
                <ReviewerDetails>
                  <ReviewerName>{testimonial.name}</ReviewerName>
                  <ReviewerLocation>{testimonial.location}</ReviewerLocation>
                </ReviewerDetails>
              </ReviewerInfo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </Section>
  );
};

export default Testimonials; 