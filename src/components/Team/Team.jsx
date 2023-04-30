import Container from '../Container';
import SocialIconsList from '../SocialIconsList';
import { Box } from '../Box';
import Picture from '../Picture/Picture';

import jpg11x from '../../images/team/person1.jpg';
import jpg12x from '../../images/team/person1@2x.jpg';
import webp11x from '../../images/team/person1.webp';
import webp12x from '../../images/team/person1@2x.webp';
import jpg21x from '../../images/team/person2.jpg';
import jpg22x from '../../images/team/person2@2x.jpg';
import webp21x from '../../images/team/person2.webp';
import webp22x from '../../images/team/person2@2x.webp';
import jpg31x from '../../images/team/person3.jpg';
import jpg32x from '../../images/team/person3@2x.jpg';
import webp31x from '../../images/team/person3.webp';
import webp32x from '../../images/team/person3@2x.webp';

import {
  Section,
  SubTitle,
  Title,
  StyledImageGrid,
  ImageContainer,
  Overlay,
  Name,
} from './Team.styled';

const Team = () => {
  return (
    <Container>
      <Section>
        <Box pb={18}>
          <SubTitle>Who we are</SubTitle>
          <Title>Our Professional Team</Title>
          <SubTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </SubTitle>
        </Box>
        <StyledImageGrid>
          <div>
            <ImageContainer>
              <Picture
                jpg1x={jpg11x}
                jpg2x={jpg12x}
                webp1x={webp11x}
                webp2x={webp12x}
                alt="Team member 1"
              />
              <Overlay>
                <SocialIconsList opacity={0.8} />
              </Overlay>
            </ImageContainer>
            <Box pt={4}>
              <Name>John Doe</Name>
              <SubTitle>President</SubTitle>
            </Box>
          </div>

          <div>
            <ImageContainer>
              <Picture
                jpg1x={jpg21x}
                jpg2x={jpg22x}
                webp1x={webp21x}
                webp2x={webp22x}
                alt="Team member 2"
              />
              <Overlay>
                <SocialIconsList opacity={0.8} />
              </Overlay>
            </ImageContainer>
            <Box pt={4}>
              <Name>Jane Doe</Name>
              <SubTitle>Vice President</SubTitle>
            </Box>
          </div>

          <div>
            <ImageContainer>
              <Picture
                jpg1x={jpg31x}
                jpg2x={jpg32x}
                webp1x={webp31x}
                webp2x={webp32x}
                alt="Team member 3"
              />
              <Overlay>
                <SocialIconsList opacity={0.8} />
              </Overlay>
            </ImageContainer>
            <Box pt={4}>
              <Name>Steve Smith</Name>
              <SubTitle>Marketing Head</SubTitle>
            </Box>
          </div>
        </StyledImageGrid>
      </Section>
    </Container>
  );
};

export default Team;
