import {
  StyledTeam,
  SubTitle,
  Title,
  StyledImageGrid,
  ImageContainer,
  Overlay,
  Name,
} from './Team.styled';

import Container from '../Container';
import SocialIconsList from '../SocialIconsList';
import { Box } from '../Box';

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

const Team = () => {
  return (
    <Container>
      <StyledTeam>
        <Box pb={8}>
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
              <picture>
                <source
                  srcSet={`${webp11x} 1x, ${webp12x} 2x`}
                  type="image/webp"
                />
                <source srcSet={`${jpg11x} 1x, ${jpg12x} 2x`} />
                <img src={jpg11x} alt="People" />
              </picture>
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
              <picture>
                <source
                  srcSet={`${webp21x} 1x, ${webp22x} 2x`}
                  type="image/webp"
                />
                <source srcSet={`${jpg21x} 1x, ${jpg22x} 2x`} />
                <img src={jpg21x} alt="People" />
              </picture>
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
              <picture>
                <source
                  srcSet={`${webp31x} 1x, ${webp32x} 2x`}
                  type="image/webp"
                />
                <source srcSet={`${jpg31x} 1x, ${jpg32x} 2x`} />
                <img src={jpg31x} alt="People" />
              </picture>
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
      </StyledTeam>
    </Container>
  );
};

export default Team;
