import React from 'react';

import {
  HeaderLogin,
  MainContainer,
  LoginTitle,
  LoginSubtitle,
  LoginForm,
  LoginLabel,
  UserInput,
  PasswordInput,
  LoginButton,
} from './styles';
import logo from '../../assets/images/logo.png';

function LoginPage() {
  return (
    <>
      <HeaderLogin>
        <img src={logo} alt="" />
      </HeaderLogin>
      <MainContainer>
        <LoginTitle>Acesse com seu login ou cadastre-se!</LoginTitle>
        <LoginSubtitle>você pode entrar com o seu CPF</LoginSubtitle>
        <LoginForm>
          <LoginLabel>Digite seu CPF:</LoginLabel>
          <UserInput />
          <LoginLabel>Senha:</LoginLabel>
          <PasswordInput />
          <LoginButton>Entrar</LoginButton>
        </LoginForm>
      </MainContainer>
    </>
  );
}

export default LoginPage;
