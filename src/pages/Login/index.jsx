import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  HeaderLogin,
  MainContainer,
  LoginTitle,
  LoginSubtitle,
  LoginForm,
  LoginLabel,
  UserInput,
  PasswordInput,
  Message,
  LoginButton,
} from './styles';
import logo from '../../assets/images/logo.png';

function LoginPage() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [cpfError, setCpfError] = useState('');

  // criar mensagems personaliadas
  const loginValidator = (event, input, regex) => {
    const data = input;

    const regexTest = regex.test(data);
    if (regexTest !== true) {
      setCpfError('CPF inválido');
      event.preventDefault();
    }
  };

  const validation = (event) => {
    const regexCpf =
      /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2})$/;
    const regexPassword = /^[A-Za-z0-9]\w{7,14}$/;
    loginValidator(event, cpf, regexCpf);
    loginValidator(event, password, regexPassword);
  };
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
          <Message>{cpfError}</Message>
          <LoginLabel>Senha:</LoginLabel>
          <PasswordInput onChange={(e) => setPassword(e.target.value)} />
          <Message>{cpfError}</Message>
          <Link to="/home">
            <LoginButton type="button" onClick={validation}>
              Entrar
            </LoginButton>
          </Link>
        </LoginForm>
      </MainContainer>
    </>
  );
}

export default LoginPage;
