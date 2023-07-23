import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RotatingLines } from 'react-loader-spinner';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsSlice';
import { useEffect } from 'react';

import { notifyAddContact, serverError } from 'utils/notification';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [addContact, { isLoading, isSuccess, isError }] =
    useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  useEffect(() => {
    if (isSuccess) {
      notifyAddContact();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      serverError();
    }
  }, [isError]);

  const handleSubmit = (values, { resetForm }) => {
    const name = values.name;
    const number = values.phone;
    contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    )
      ? alert(`${values.name} is already in contacts!`)
      : addContact({ name, number }) && resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Name is required field'),

    phone: Yup.number()
      .typeError('That does not look like a phone number')
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .required('A phone number is required'),
  });

  const initialValues = {
    name: '',
    phone: '',
  };

  return (
    <>
      <ToastContainer autoClose={1000} position="top-center" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            Name
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage className={s.error} name="name" component="div" />
          </label>
          <label className={s.label}>
            Number
            <Field
              className={s.input}
              type="tel"
              name="phone"
              placeholder="phone"
            />
            <ErrorMessage className={s.error} name="phone" component="div" />
          </label>
          <button className={s.btn} disabled={isLoading} type="submit">
            {isLoading && <RotatingLines height="20" width="20" />}
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
