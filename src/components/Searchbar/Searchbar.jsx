import { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormWrapper,
  SearchForm,
  SearchButton,
  ButtonLabel,
  Input,
  Icon,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [inputParam, setInputParam] = useState('');
  const schema = yup
    .object()
    .shape(() => setInputParam(inputParam).yup.string().required().trim());

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.inputParam);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ inputParam }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormWrapper>
        <SearchForm>
          <SearchButton type="submit">
            <Icon />
            <ButtonLabel>Search</ButtonLabel>
          </SearchButton>
          <Input
            type="text"
            name="inputParam"
            placeholder="Search movies"
            autoFocus
          />
          <ErrorMessage name="inputParam" />
        </SearchForm>
      </FormWrapper>
    </Formik>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
