import Form from '../Form';
import Picture from '../Picture/Picture';

import jpg1x from '../../images/home/contact.jpg';
import jpg2x from '../../images/home/contact@2x.jpg';
import webp1x from '../../images/home/contact.webp';
import webp2x from '../../images/home/contact@2x.webp';

import {
  Section,
  FormContainer,
  Title,
  ImageContainer,
} from './Contact.styled';

const Contact = () => {
  return (
    <Section id="contact">
      <ImageContainer>
        <Picture
          jpg1x={jpg1x}
          jpg2x={jpg2x}
          webp1x={webp1x}
          webp2x={webp2x}
          alt="Contact"
        />
      </ImageContainer>
      <FormContainer>
        <Title>Request Callback</Title>
        <Form />
      </FormContainer>
    </Section>
  );
};

export default Contact;
