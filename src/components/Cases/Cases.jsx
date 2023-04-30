import { Box } from '../Box';
import Picture from '../Picture/Picture';
import Container from '../Container/Container';

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

import { Section, SubTitle, Title, StyledImageGrid } from './Cases.styled';

const Cases = () => {
  return (
    <Container>
      <Section id="cases">
        <Box pb={17}>
          <SubTitle>This is what we do</SubTitle>
          <Title>Business Cases</Title>
          <SubTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </SubTitle>
        </Box>
        <StyledImageGrid>
          <a
            href={jpg11x}
            data-lightbox="cases"
            data-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!"
          >
            <Picture
              jpg1x={jpg11x}
              jpg2x={jpg12x}
              webp1x={webp11x}
              webp2x={webp12x}
              alt="Case 1"
            />
          </a>

          <a
            href={jpg21x}
            data-lightbox="cases"
            data-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!"
          >
            <Picture
              jpg1x={jpg21x}
              jpg2x={jpg22x}
              webp1x={webp21x}
              webp2x={webp22x}
              alt="Case 2"
            />
          </a>

          <a
            href={jpg31x}
            data-lightbox="cases"
            data-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!"
          >
            <Picture
              jpg1x={jpg31x}
              jpg2x={jpg32x}
              webp1x={webp31x}
              webp2x={webp32x}
              alt="Case 3"
            />
          </a>

          <a
            href={jpg41x}
            data-lightbox="cases"
            data-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!"
          >
            <Picture
              jpg1x={jpg41x}
              jpg2x={jpg42x}
              webp1x={webp41x}
              webp2x={webp42x}
              alt="Case 4"
            />
          </a>

          <a
            href={jpg51x}
            data-lightbox="cases"
            data-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!"
          >
            <Picture
              jpg1x={jpg51x}
              jpg2x={jpg52x}
              webp1x={webp51x}
              webp2x={webp52x}
              alt="Case 5"
            />
          </a>

          <a
            href={jpg61x}
            data-lightbox="cases"
            data-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!"
          >
            <Picture
              jpg1x={jpg61x}
              jpg2x={jpg62x}
              webp1x={webp61x}
              webp2x={webp62x}
              alt="Case 6"
            />
          </a>
        </StyledImageGrid>
      </Section>
    </Container>
  );
};

export default Cases;
