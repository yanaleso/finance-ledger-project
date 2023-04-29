import { Box } from '../Box';
import Button from '../Button/Button';
import { Section, SubTitle, Title, Text, Img } from './About.styled';
import jpg1x from '../../images/home/people.jpg';
import jpg2x from '../../images/home/people@2x.jpg';
import webp1x from '../../images/home/people.webp';
import webp2x from '../../images/home/people@2x.webp';

const About = () => {
  return (
    <Section id="about">
      <picture>
        <source srcSet={`${webp1x} 1x, ${webp2x} 2x`} type="image/webp" />
        <source srcSet={`${jpg1x} 1x, ${jpg2x} 2x`} />
        <Img src={jpg1x} alt="People" />
      </picture>
      <Box px={5} py={9}>
        <SubTitle>What you are looking for</SubTitle>
        <Title>We provide bespoke solutions</Title>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</Text>
        <Button about>Read more</Button>
      </Box>
    </Section>
  );
};

// About.propTypes = {
//   type: PropTypes.string,
//   width: PropTypes.number,
//   onClick: PropTypes.func,
//   children: PropTypes.node,
// };

export default About;