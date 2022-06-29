import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./../utils/i18n";

import Button from "../styled/Button";
import Error from "../styled/Error";
import SecondTitle from "../styled/SecondTitle";
import Label from "../styled/Label";
import LabelText from "../styled/LabelText";
import Input from "../styled/Input";

const HookFormContainer = styled.form`
  width: 300px;
  margin: 0 auto;
`;

const LabelContainer = styled.div`
  position: relative;
`;

const schema = (t) => {
  
  return (
    yup.object({
    firstName: yup.string()
      .max(15, t("form.firstName"))
      .required(t("form.required")),
    lastName: yup.string()
    .max(20, t("form.lastName"))
    .required(t("form.required")),
    email: yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      t("form.email"))
    .required(t("form.required")),
  }).required())
};

const HookFormPage = () => {

  const { t } = useTranslation();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    defaultValues: {
      firstName:'',
      lastName: '',
      email: '',
    },
    reValidateMode: 'onChange',
    resolver: yupResolver(schema(t))
  });

  const onSubmit = data => console.log(data);

  return (
    <HookFormContainer onSubmit={handleSubmit(onSubmit)}>
      <SecondTitle>{t("hookForm")}</SecondTitle>
      <LabelContainer>
        <Label>
          <LabelText>{t("form.firstNameInput")}</LabelText>
          <Input {...register("firstName")} />
        </Label>
        <Error>{errors.firstName?.message}</Error>
      </LabelContainer>
      <LabelContainer>
        <Label>
          <LabelText>{t("form.lastNameInput")}</LabelText>
          <Input {...register("lastName")} />
        </Label>
        <Error>{errors.lastName?.message}</Error>
      </LabelContainer>
      <LabelContainer>
        <Label>
          <LabelText>{t("form.emeilInput")}</LabelText>
          <Input {...register("email")} type="email" />
        </Label>
        <Error>{errors.email?.message}</Error>
      </LabelContainer>
      <Button type="submit">{t("form.submit")}</Button>
    </HookFormContainer>
  );
}

export default HookFormPage;