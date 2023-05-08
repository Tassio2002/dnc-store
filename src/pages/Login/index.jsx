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
  const [passError, setPassError] = useState('');

  const loginValidator = (event, input, regex, setError, messageError) => {
    const data = input;

    const regexTest = regex.test(data);
    if (regexTest !== true) {
      setError(messageError);
      event.preventDefault();
    } else {
      setError('');
    }
  };

  const validation = (event) => {
    const regexCpf =
      /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2})$/;
    const regexPassword = /^[A-Za-z0-9]\w{7,14}$/;
    const cpfMessageError = 'CPF inválido';
    const passMessageError = 'Senha inválida';

    loginValidator(event, cpf, regexCpf, setCpfError, cpfMessageError);
    loginValidator(
      event,
      password,
      regexPassword,
      setPassError,
      passMessageError
    );
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
          <Message>{passError}</Message>
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
