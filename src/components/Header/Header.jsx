import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import { HeaderWrap, Link, NavItem, NavList, Wrapper } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrap>
    <Container>
      <Wrapper>
        <Logo />
        <nav>
          <NavList>
            <NavItem>
              <Link href="#home">Home</Link>
            </NavItem>
            <NavItem>
              <Link href="#about">About</Link>
            </NavItem>
            <NavItem>
              <Link href="#cases">Cases</Link>
            </NavItem>
            <NavItem>
              <Link href="#blog">Blog</Link>
            </NavItem>
            <NavItem>
              <Link href="#contact">Contact</Link>
            </NavItem>
          </NavList>
        </nav>
      </Wrapper>
      </Container>
      </HeaderWrap>
  );
};

export default Header;