import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, useAnimation } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { colors, shadows, borderRadius, transitions, gradients } from '../styles/globalStyles';
import { useInView } from 'react-intersection-observer';

const SectionContainer = styled.section<{ inView: boolean }>`
  padding: 6rem 4rem;
  background: ${gradients.background};
  display: grid;
  grid-template-columns: 520px 1px 1fr; // ← 3 kolom: teks | garis | slider
  gap: 2rem;
  overflow: hidden;
  align-items: start;
  position: relative;

  /* Animation styles */
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) => (props.inView ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${gradients.primary};
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 4rem 2rem;
    gap: 4rem;
  }
`;


const LeftContent = styled.div`
  z-index: 2;
  background: ${colors.background.white};
  padding: 2rem;
  border-radius: ${borderRadius.large};
  box-shadow: ${shadows.medium};

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const VerticalDivider = styled.div`
  width: 1px;
  background: linear-gradient(to bottom, transparent, ${colors.primary}, transparent);
  height: 100%;

  @media (max-width: 1024px) {
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, ${colors.primary}, transparent);
  }
`;

const RightWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SliderRow = styled.div`
  overflow: hidden;
`;

const SliderContent = styled(motion.div)`
  display: flex;
  gap: 1rem;
`;

const TestimonialCard = styled.div<{ isEmpty?: boolean }>`
  background: ${colors.background.white};
  border-radius: ${borderRadius.medium};
  padding: 2rem;
  box-shadow: ${shadows.small};
  color: ${colors.text.primary};
  min-width: ${props => props.isEmpty ? '120px' : '320px'};
  max-width: ${props => props.isEmpty ? '120px' : '320px'};
  flex-shrink: 0;
  height: 200px;
  opacity: ${props => props.isEmpty ? 0.5 : 1};
  border: 1px solid ${colors.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${transitions.default};
  cursor: pointer;
  backdrop-filter: blur(5px);

  &:hover {
    background-color: ${colors.primary} !important;
    color: ${colors.background.white} !important;
    opacity: ${props => props.isEmpty ? 0.7 : 1};
    transform: translateY(-2px);
    box-shadow: ${shadows.large};
  }
`;

const TestimonialHeader = styled.p`
  color: ${colors.primary};
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SectionTitle = styled.h2`
  color: ${colors.text.primary};
  font-size: 2.8rem;
  margin-bottom: 1.2rem;
  background: ${gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled.p`
  color: ${colors.text.secondary};
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 1.5rem;
  background: ${colors.primary}10;
  border-radius: ${borderRadius.medium};
`;

const RatingNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.primary};
  text-shadow: 0 2px 4px ${colors.primary}20;
`;

const Stars = styled.div`
  color: ${colors.secondary};
  font-size: 1.5rem;
  display: flex;
  gap: 0.3rem;
  filter: drop-shadow(0 2px 4px ${colors.secondary}30);
`;

const ReviewCount = styled.p`
  color: ${colors.text.secondary};
  font-size: 1rem;
  margin-top: 0.5rem;
  font-weight: 500;
`;

const AboutSection: React.FC = () => {
  const aboutCards = [
    { text: 'Kami adalah platform wisata terpercaya yang membantu Anda menemukan destinasi terbaik di Indonesia.' },
    { text: 'Dengan pengalaman lebih dari 5 tahun, kami memahami kebutuhan wisatawan lokal dan internasional.' },
    { isEmpty: true },
    { text: 'Tim kami terdiri dari para ahli pariwisata yang siap membantu perjalanan Anda menjadi lebih berkesan.' },
    { text: 'Kami berkomitmen memberikan informasi akurat dan pelayanan terbaik untuk setiap pengunjung.' },
    { isEmpty: true },
    { text: 'Jelajahi keindahan Indonesia bersama kami, temukan pengalaman liburan yang tak terlupakan.' },
    { isEmpty: true },
  ];

  const duplicated = [...aboutCards, ...aboutCards];

  const controlsTop = useAnimation();
  const controlsBottom = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const cardWidth = 320;
    const gap = 32;
    const totalWidth = (cardWidth + gap) * aboutCards.length;
  
    const animateSlider = async (controls: any, direction: 'left' | 'right') => {
      while (true) {
        await controls.start({
          x: direction === 'left' ? -totalWidth : 0,
          transition: {
            duration: aboutCards.length * 3,
            ease: 'linear',
          },
        });
        await controls.set({ x: direction === 'left' ? 0 : -totalWidth });
      }
    };

    if (inView) {
      animateSlider(controlsTop, 'left');
      animateSlider(controlsBottom, 'right');
    } else {
      controlsTop.stop();
      controlsBottom.stop();
    }
  
    return () => {
      controlsTop.stop();
      controlsBottom.stop();
    };
  }, [controlsTop, controlsBottom, aboutCards.length, inView]);

  const handleMouseEnter = (controls: any) => {
    controls.stop();
  };

  const handleMouseLeave = (controls: any, direction: 'left' | 'right') => {
    const cardWidth = 320;
    const gap = 32;
    const totalWidth = (cardWidth + gap) * aboutCards.length;
    
    controls.start({
      x: direction === 'left' ? -totalWidth : 0,
      transition: {
        duration: aboutCards.length * 3,
        ease: 'linear',
      },
    });
  };

  return (
    <SectionContainer ref={ref} inView={inView}>
      <LeftContent>
        <TestimonialHeader>• Tentang Kami</TestimonialHeader>
        <SectionTitle>Jelajahi Keindahan Indonesia</SectionTitle>
        <SectionSubtitle>Platform wisata terpercaya untuk menemukan destinasi terbaik</SectionSubtitle>
        <RatingContainer>
          <RatingNumber>5.0</RatingNumber>
          <Stars>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </Stars>
          <ReviewCount>Melayani 10.000+ wisatawan</ReviewCount>
        </RatingContainer>
      </LeftContent>

      <VerticalDivider />

      <RightWrapper>
        <SliderRow>
          <SliderContent 
            animate={controlsTop}
            onMouseEnter={() => handleMouseEnter(controlsTop)}
            onMouseLeave={() => handleMouseLeave(controlsTop, 'left')}
          >
            {duplicated.map((t, i) => (
              <TestimonialCard key={`top-${i}`} isEmpty={t.isEmpty}>
                {!t.isEmpty && `"${t.text}"`}
              </TestimonialCard>
            ))}
          </SliderContent>
        </SliderRow>

        <SliderRow>
          <SliderContent 
            animate={controlsBottom}
            onMouseEnter={() => handleMouseEnter(controlsBottom)}
            onMouseLeave={() => handleMouseLeave(controlsBottom, 'right')}
          >
            {duplicated.map((t, i) => (
              <TestimonialCard key={`bottom-${i}`} isEmpty={t.isEmpty}>
                {!t.isEmpty && `"${t.text}"`}
              </TestimonialCard>
            ))}
          </SliderContent>
        </SliderRow>
      </RightWrapper>
    </SectionContainer>
  );
};

export default AboutSection;