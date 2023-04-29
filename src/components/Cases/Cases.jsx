import { StyledCases, SubTitle, Title, StyledImageGrid } from './Cases.styled';
import { Box } from '../Box';

import jpg11x from '../../images/cases/cases1.jpg';
import jpg12x from '../../images/cases/cases1@2x.jpg';
import webp11x from '../../images/cases/cases1.webp';
import webp12x from '../../images/cases/cases1@2x.webp';
import jpg21x from '../../images/cases/cases2.jpg';
import jpg22x from '../../images/cases/cases2@2x.jpg';
import webp21x from '../../images/cases/cases2.webp';
import webp22x from '../../images/cases/cases2@2x.webp';
import jpg31x from '../../images/cases/cases3.jpg';
import jpg32x from '../../images/cases/cases3@2x.jpg';
import webp31x from '../../images/cases/cases3.webp';
import webp32x from '../../images/cases/cases3@2x.webp';
import jpg41x from '../../images/cases/cases4.jpg';
import jpg42x from '../../images/cases/cases4@2x.jpg';
import webp41x from '../../images/cases/cases4.webp';
import webp42x from '../../images/cases/cases4@2x.webp';
import jpg51x from '../../images/cases/cases5.jpg';
import jpg52x from '../../images/cases/cases5@2x.jpg';
import webp51x from '../../images/cases/cases5.webp';
import webp52x from '../../images/cases/cases5@2x.webp';
import jpg61x from '../../images/cases/cases6.jpg';
import jpg62x from '../../images/cases/cases6@2x.jpg';
import webp61x from '../../images/cases/cases6.webp';
import webp62x from '../../images/cases/cases6@2x.webp';
import Container from '../Container/Container';

const Cases = () => {
  return (
    <Container>
      <StyledCases>
        <Box pb={6}>
          <SubTitle>This is what we do</SubTitle>
          <Title>Business Cases</Title>
          <SubTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </SubTitle>
        </Box>
        <StyledImageGrid>
          <picture>
            <source srcSet={`${webp11x} 1x, ${webp12x} 2x`} type="image/webp" />
            <source srcSet={`${jpg11x} 1x, ${jpg12x} 2x`} />
            <img src={jpg11x} alt="People" />
          </picture>

          <picture>
            <source srcSet={`${webp21x} 1x, ${webp22x} 2x`} type="image/webp" />
            <source srcSet={`${jpg21x} 1x, ${jpg22x} 2x`} />
            <img src={jpg21x} alt="People" />
          </picture>

          <picture>
            <source srcSet={`${webp31x} 1x, ${webp32x} 2x`} type="image/webp" />
            <source srcSet={`${jpg31x} 1x, ${jpg32x} 2x`} />
            <img src={jpg31x} alt="People" />
          </picture>

          <picture>
            <source srcSet={`${webp41x} 1x, ${webp42x} 2x`} type="image/webp" />
            <source srcSet={`${jpg41x} 1x, ${jpg42x} 2x`} />
            <img src={jpg41x} alt="People" />
          </picture>

          <picture>
            <source srcSet={`${webp51x} 1x, ${webp52x} 2x`} type="image/webp" />
            <source srcSet={`${jpg51x} 1x, ${jpg52x} 2x`} />
            <img src={jpg51x} alt="People" />
          </picture>

          <picture>
            <source srcSet={`${webp61x} 1x, ${webp62x} 2x`} type="image/webp" />
            <source srcSet={`${jpg61x} 1x, ${jpg62x} 2x`} />
            <img src={jpg61x} alt="People" />
          </picture>
        </StyledImageGrid>
      </StyledCases>
    </Container>
  );
};

export default Cases;
