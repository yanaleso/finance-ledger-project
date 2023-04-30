import Container from '../Container/Container';
import Button from '../Button/Button';
import icons from '../../images/icons.svg';
import { Section, Title, SubTitle } from './Hero.styled';

const Hero = () => {
  return (
    <Section id="home">
      <Container>
        <Title>The Sky Is The Limit</Title>
        <SubTitle>We provide world class financial assistance</SubTitle>
        <Button hero>
          <svg width="9" height="18">
            <use href={`${icons}#icon-angle-right`}></use>
          </svg>{' '}
          Read More
        </Button>
      </Container>
    </Section>
  );
};

export default Hero;
