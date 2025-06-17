import React from 'react';
import styled from '@emotion/styled';
import { colors, shadows, borderRadius, transitions } from '../styles/globalStyles';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  padding: 6rem 4rem;
  background: ${colors.background.light};
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

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const DestinationCard = styled.div<{ inView: boolean; delay: number }>`
  background: ${colors.background.white};
  border-radius: ${borderRadius.medium};
  overflow: hidden;
  box-shadow: ${shadows.small};
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

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${transitions.default};

  ${DestinationCard}:hover & {
    transform: scale(1.1);
  }
`;

const LocationTag = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${colors.primary};
  color: ${colors.background.white};
  padding: 0.5rem 1rem;
  border-radius: ${borderRadius.small};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const DestinationTitle = styled.h3`
  color: ${colors.text.primary};
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: ${colors.text.secondary};
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.secondary};
`;

const Price = styled.div`
  color: ${colors.primary};
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 1rem;
`;

const destinations = [
  {
    id: 1,
    name: 'Pantai Kuta, Bali',
    location: 'Bali, Indonesia',
    rating: 4.5,
    imageUrl: 'https://c1.wallpaperflare.com/preview/223/777/288/pantai-kuta-bali-indonesia.jpg',
    description: 'Pantai Kuta adalah salah satu pantai paling populer di Bali dengan pasir putih yang memukau, ombak yang sempurna untuk berselancar, dan matahari terbenam yang menakjubkan. Nikmati suasana pantai yang ramai dengan berbagai aktivitas air dan fasilitas modern. Keunggulan: Surfing spot terbaik untuk pemula, sunset view terindah di Bali, pusat kuliner seafood segar, dan area belanja fashion terdekat.',
    price: 'Rp 150.000'
  },
  {
    id: 2,
    name: 'Candi Borobudur, Yogyakarta',
    location: 'Yogyakarta, Indonesia',
    rating: 4.8,
    imageUrl: 'https://i0.wp.com/www.escapemanila.com/wp-content/uploads/2019/02/borobudur-temple.jpg?fit=2000%2C1333&ssl=1',
    description: 'Candi Borobudur adalah warisan budaya dunia yang menakjubkan. Kuil Buddha terbesar di dunia ini menampilkan arsitektur megah dengan 2.672 panel relief dan 504 patung Buddha. Pengalaman spiritual yang tak terlupakan dengan pemandangan matahari terbit yang memukau. Keunggulan: Sunrise view terbaik di Jawa Tengah, museum arkeologi terlengkap, spot foto instagramable, dan wisata edukasi sejarah.',
    price: 'Rp 350.000'
  },
  {
    id: 3,
    name: 'Pulau Komodo, NTT',
    location: 'Nusa Tenggara Timur, Indonesia',
    rating: 4.9,
    imageUrl: 'https://th.bing.com/th/id/OIP.Pdmq3qS1Jn7V3-8pRcyI-AHaE9?rs=1&pid=ImgDetMain',
    description: 'Pulau Komodo menawarkan petualangan unik untuk melihat komodo, kadal terbesar di dunia, di habitat aslinya. Jelajahi keindahan alam yang menakjubkan, pantai-pantai berpasir merah muda, dan kehidupan laut yang kaya dengan snorkeling dan diving. Keunggulan: Satu-satunya habitat komodo di dunia, Pink Beach yang instagramable, spot diving terbaik di Indonesia, dan panorama bukit savana yang menakjubkan.',
    price: 'Rp 500.000'
  },
];

const FeaturedDestinations: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <Section>
      <Container ref={ref} inView={inView}>
        <Title inView={inView}>Destinasi Populer</Title>
        <DestinationsGrid>
          {destinations.map((destination, index) => (
            <DestinationCard key={destination.id} inView={inView} delay={index * 0.1}>
              <ImageContainer>
                <Image src={destination.imageUrl} alt={destination.name} />
                <LocationTag>
                  <FaMapMarkerAlt />
                  {destination.location}
                </LocationTag>
              </ImageContainer>
              <Content>
                <DestinationTitle>{destination.name}</DestinationTitle>
                <Description>{destination.description}</Description>
                <RatingContainer>
                  <FaStar />
                  {destination.rating}
                </RatingContainer>
                <Price>Mulai {destination.price}</Price>
              </Content>
            </DestinationCard>
          ))}
        </DestinationsGrid>
      </Container>
    </Section>
  );
};

export default FeaturedDestinations; 