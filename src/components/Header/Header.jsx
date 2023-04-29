import { useState, useEffect } from 'react';

import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import { HeaderWrap, Link, NavItem, NavList, Wrapper } from './Header.styled';

const Header = () => {
  const [inTop, setInTop] = useState(true);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setInTop(false);
    } else {
      setInTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);

    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <HeaderWrap inTop={inTop}>
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
                <Link href="#team">Team</Link>
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
