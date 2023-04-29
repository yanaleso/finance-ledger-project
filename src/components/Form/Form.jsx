import { Formik } from 'formik';
// import { toast } from 'react-toastify';
import { FormBox, FormError, Input, Label } from './Form.styled';
import Button from '../Button/Button';
// import { useDispatch } from 'react-redux';
// import { authOperations } from 'redux/auth';
// import { useState, useEffect } from "react";

const Form = () => {
  // const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
  };

  // const handleSubmit = (values, { resetForm }) => {
  //   console.log(values);
  //   dispatch(authOperations.register(values));
  //   resetForm();
  // }; onSubmit={handleSubmit}

  return (
    <Formik initialValues={initialValues}>
      <FormBox>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer."
          />
          <FormError name="name" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" />
          <FormError name="email" />
        </Label>

        <Button type="submit" submit>
          Sign up
        </Button>
      </FormBox>
    </Formik>
  );
};

export default Form;
