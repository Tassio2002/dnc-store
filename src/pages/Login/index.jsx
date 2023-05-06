import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  HeaderLogin,
  MainContainer,
  LoginTitle,
  LoginSubtitle,
  LoginForm,
  LoginLabel,
  ValidCpf,
  UserInput,
  PasswordInput,
  LoginButton,
} from './styles';
import logo from '../../assets/images/logo.png';

function LoginPage() {
  const [cpf, setCpf] = useState('');
  const [isValid, setIsValid] = useState('');

  const cpfValidation = (event) => {
    const currentCpf = cpf;
    const regexTest =
      /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2})$/.test(
        currentCpf
      );

    if (regexTest !== true) {
      setIsValid('CPF inválido');
      event.preventDefault();
    }
  };
  //password validation
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
          <UserInput onChange={(e) => setCpf(e.target.value)} />
          <ValidCpf>{isValid}</ValidCpf>
          <LoginLabel>Senha:</LoginLabel>
          <PasswordInput />
          <Link to="/home">
            <LoginButton type="button" onClick={cpfValidation}>
              Entrar
            </LoginButton>
          </Link>
        </LoginForm>
      </MainContainer>
    </>
  );
}

export default LoginPage;
