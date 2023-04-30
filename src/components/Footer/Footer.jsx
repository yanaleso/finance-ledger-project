import SocialIconsList from '../SocialIconsList';

import { StyledFooter } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <SocialIconsList fill="#28a745" />
      <p>Copyright &copy; 2021 - FinanceLedger</p>
    </StyledFooter>
  );
};

export default Footer;
