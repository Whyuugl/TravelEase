import React from 'react';
import styled from '@emotion/styled';
import { colors, shadows, borderRadius, transitions } from '../styles/globalStyles';
import { FaMountain, FaWater, FaCity, FaTree, FaUmbrellaBeach, FaHotel } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  padding: 6rem 4rem;
  background: ${colors.background.main};
`;

const Container = styled.div<{ inView: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2<{ inView: boolean }>`
  font-size: 2.5rem;
  color: ${colors.text.primary};
  text-align: center;
  margin-bottom: 3rem;

  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) => (props.inView ? 'translateY(0)' : 'translateY(30px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const CategoryCard = styled.div<{ inView: boolean; delay: number }>`
  background: ${colors.background.white};
  padding: 2rem;
  border-radius: ${borderRadius.medium};
  box-shadow: ${shadows.small};
  text-align: center;
  transition: ${transitions.default};
  cursor: pointer;

  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) => (props.inView ? 'translateY(0)' : 'translateY(30px)')};
  transition: opacity 0.6s ease-out ${(props) => props.delay}s, transform 0.6s ease-out ${(props) => props.delay}s, ${transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${shadows.large};
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: ${colors.primary}10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: ${colors.primary};
  font-size: 1.5rem;
`;

const CategoryTitle = styled.h3`
  color: ${colors.text.primary};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const CategoryDescription = styled.p`
  color: ${colors.text.secondary};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const categories = [
  {
    icon: <FaMountain />,
    title: 'Pegunungan',
    description: 'Jelajahi keindahan alam pegunungan Indonesia'
  },
  {
    icon: <FaWater />,
    title: 'Air Terjun',
    description: 'Temukan air terjun tersembunyi yang menakjubkan'
  },
  {
    icon: <FaCity />,
    title: 'Kota',
    description: 'Nikmati kehidupan perkotaan dan budaya modern'
  },
  {
    icon: <FaTree />,
    title: 'Hutan',
    description: 'Petualangan di hutan tropis Indonesia'
  },
  {
    icon: <FaUmbrellaBeach />,
    title: 'Pantai',
    description: 'Pantai-pantai indah dengan pasir putih'
  },
  {
    icon: <FaHotel />,
    title: 'Resort',
    description: 'Akomodasi mewah dengan pemandangan menakjubkan'
  }
];

const CategoriesSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <Section>
      <Container ref={ref} inView={inView}>
        <Title inView={inView}>Kategori Wisata</Title>
        <CategoriesGrid>
          {categories.map((category, index) => (
            <CategoryCard key={index} inView={inView} delay={index * 0.1}>
              <IconWrapper>{category.icon}</IconWrapper>
              <CategoryTitle>{category.title}</CategoryTitle>
              <CategoryDescription>{category.description}</CategoryDescription>
            </CategoryCard>
          ))}
        </CategoriesGrid>
      </Container>
    </Section>
  );
};

export default CategoriesSection;