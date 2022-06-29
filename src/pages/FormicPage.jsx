import React from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import "./../utils/i18n";

import CustomInput from "./../components/CustomInput/CustomInput";
import SecondTitle from "../styled/SecondTitle";
import Error from './../styled/Error';
import Button from "../styled/Button";
import styled from "styled-components";

const FormicForm = styled.form`
  width: 300px;
  margin: 0 auto;
`;

const LabelContainer = styled.div`
  position: relative;
`;

export const FormicPage = () => {

  const { t } = useTranslation();

  const validate = (values) => {

    const errors = {};
    if (!values.firstName) {
      errors.firstName = t("form.required");
    } else if (values.firstName.length > 15) {
      errors.firstName = t("form.firstName");
    }
  
    if (!values.lastName) {
      errors.lastName = t("form.required");
    } else if (values.lastName.length > 20) {
      errors.lastName = t("form.lastName");
    }
  
    if (!values.email) {
      errors.email = t("form.required");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = t("form.email");
    }
  
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  }, t);

  return (
    <FormicForm onSubmit={formik.handleSubmit}>
      <SecondTitle>{t("formik")}</SecondTitle>
      <LabelContainer>
        <CustomInput id="firstName" 
          handleBlur={formik.handleBlur} handleChange={formik.handleChange} 
          value={formik.values.firstName} textLabel={t("form.firstNameInput")}/>
          {formik.touched.firstName && formik.errors.firstName ? <Error >{formik.errors.firstName}</Error> : null}
      </LabelContainer>
      <LabelContainer>
        <CustomInput id="lastName" 
          handleBlur={formik.handleBlur} handleChange={formik.handleChange} 
          value={formik.values.lastName} textLabel={t("form.lastNameInput")}/>
          {formik.touched.lastName && formik.errors.lastName ? <Error>{formik.errors.lastName}</Error> : null}
      </LabelContainer>
      <LabelContainer>
        <CustomInput id="email" 
          handleBlur={formik.handleBlur} handleChange={formik.handleChange} 
          value={formik.values.email} textLabel={t("form.emeilInput")}/>
          {formik.touched.email && formik.errors.email ? <Error>{formik.errors.email}</Error> : null}
      </LabelContainer>
      <Button type="submit" disabled={!formik.isValid}>{t("form.submit")}</Button>
    </FormicForm>
  );
}