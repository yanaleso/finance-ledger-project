import { StyledFooter } from './Footer.styled';

import SocialIconsList from '../SocialIconsList';

const Footer = () => {
  return (
    <StyledFooter>
      <SocialIconsList fill="#28a745" />
      <div>Copyright © 2021 - FinanceLedger</div>
    </StyledFooter>
  );
};

export default Footer;
