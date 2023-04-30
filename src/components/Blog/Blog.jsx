import { Box } from '../Box';
import Button from '../Button/Button';
import Picture from '../Picture/Picture';

import jpg1x from '../../images/home/blog.jpg';
import jpg2x from '../../images/home/blog@2x.jpg';
import webp1x from '../../images/home/blog.webp';
import webp2x from '../../images/home/blog@2x.webp';

import { Section, SubTitle, Title, Text, ImageContainer } from './Blog.styled';

const Blog = () => {
  return (
    <Section id="blog">
      <ImageContainer>
        <Picture
          jpg1x={jpg1x}
          jpg2x={jpg2x}
          webp1x={webp1x}
          webp2x={webp2x}
          alt="Blog"
        />
      </ImageContainer>
      <Box px={7} pt={15} pb={17} flexGrow={1} flexBasis="50%">
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
