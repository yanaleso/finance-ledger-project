import { HeroButton, AboutButton, BlogButton, SubmitButton } from './Button.styled';

const Button = ({ type = 'button', children = null, hero, about, blog, submit, onClick = () => null }) => {
  return (
    <>
      {hero && <HeroButton onClick={onClick}>{children}</HeroButton>}
      {about && <AboutButton onClick={onClick}>{children}</AboutButton>}
      {blog && <BlogButton onClick={onClick}>{children}</BlogButton>}
      {submit && <SubmitButton onClick={onClick}>{children}</SubmitButton>}
    </>
  );
};

export default Button;