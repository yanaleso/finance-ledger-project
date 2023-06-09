import { Formik, Form } from 'formik';
import * as yup from 'yup';

import Button from '../Button/Button';

import { handleSubmit } from '../../services/netlifyForm';

import {
  FieldWrapper,
  InputWrapper,
  FormError,
  Input,
  Label,
} from './Form.styled';

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
  };

  const contactSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Name must be more than 2 characters!')
      .max(30, 'Name must be less than 30 characters!')
      .required('The name field is required.'),
    email: yup
      .string()
      .email('Not a proper email')
      .required('The email field is required.'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      <Form name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <FieldWrapper>
          <InputWrapper>
            <Input type="text" name="name" placeholder=" " />
            <Label>Enter your name</Label>
          </InputWrapper>
          <FormError name="name" />
        </FieldWrapper>

        <FieldWrapper>
          <InputWrapper>
            <Input type="email" name="email" placeholder=" " />
            <Label>Enter email*</Label>
          </InputWrapper>
          <FormError name="email" />
        </FieldWrapper>

        <Button type="submit" submit>
          Sign up
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
