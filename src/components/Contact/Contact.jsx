import Form from '../Form';
import {
  Section,
  FormContainer,
  Title,
  ImageContainer,
} from './Contact.styled';

import jpg1x from '../../images/home/contact.jpg';
import jpg2x from '../../images/home/contact@2x.jpg';
import webp1x from '../../images/home/contact.webp';
import webp2x from '../../images/home/contact@2x.webp';

const Contact = () => {
  return (
    <Section id="contact">
      <ImageContainer>
        <picture>
          <source srcSet={`${webp1x} 1x, ${webp2x} 2x`} type="image/webp" />
          <source srcSet={`${jpg1x} 1x, ${jpg2x} 2x`} />
          <img src={jpg1x} alt="Contact" />
        </picture>
      </ImageContainer>
      <FormContainer>
        <Title>Request Callback</Title>
        <Form />
      </FormContainer>
    </Section>
  );
};

export default Contact;
