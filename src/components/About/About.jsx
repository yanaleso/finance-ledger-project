import { Box } from '../Box';
import Button from '../Button/Button';
import Picture from '../Picture/Picture';

import jpg1x from '../../images/home/people.jpg';
import jpg2x from '../../images/home/people@2x.jpg';
import webp1x from '../../images/home/people.webp';
import webp2x from '../../images/home/people@2x.webp';

import { Section, SubTitle, Title, Text, ImageContainer } from './About.styled';

const About = () => {
  return (
    <Section id="about">
      <ImageContainer>
        <Picture
          jpg1x={jpg1x}
          jpg2x={jpg2x}
          webp1x={webp1x}
          webp2x={webp2x}
          alt="People"
        />
      </ImageContainer>
      <Box px={7} py={22} flexGrow={1} flexBasis="50%">
        <SubTitle>What you are looking for</SubTitle>
        <Title>We provide bespoke solutions</Title>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </Text>
        <Button about>Read more</Button>
      </Box>
    </Section>
  );
};

export default About;
