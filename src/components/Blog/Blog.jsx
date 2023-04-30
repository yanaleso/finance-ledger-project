import { Box } from '../Box';
import Button from '../Button/Button';

import jpg1x from '../../images/home/blog.jpg';
import jpg2x from '../../images/home/blog@2x.jpg';
import webp1x from '../../images/home/blog.webp';
import webp2x from '../../images/home/blog@2x.webp';

import {
  Section,
  SubTitle,
  Title,
  Text,
  ImageContainer,
} from './Blog.styled';

const Blog = () => {
  return (
    <Section id="blog">
      <ImageContainer>
        <picture>
          <source srcSet={`${webp1x} 1x, ${webp2x} 2x`} type="image/webp" />
          <source srcSet={`${jpg1x} 1x, ${jpg2x} 2x`} />
          <img src={jpg1x} alt="Blog" />
        </picture>
      </ImageContainer>
      <Box px={5} pt={7} pb={8} flexGrow={1} flexBasis="50%">
        <SubTitle>April 16 2020</SubTitle>
        <Title>Blog Post One</Title>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </Text>
        <Button blog>Read Our Blog</Button>
      </Box>
    </Section>
  );
};

export default Blog;
