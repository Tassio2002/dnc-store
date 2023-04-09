import styled from 'styled-components';

export const HeaderLogin = styled.header`
  width: 100vw;
  padding: 2em 3em;
  background-color: #2d2d2d;
`;

export const MainContainer = styled.main`
  width: 100%;
  padding-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginTitle = styled.h2`
  padding-bottom: 0.3em;
  font-size: 30px;
  color: #000;
`;

export const LoginSubtitle = styled.p`
  font-size: 22px;
  margin-bottom: 4em;
  color: #000;
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 542px;
  display: flex;
  flex-direction: column;
`;

export const LoginLabel = styled.label`
  padding-bottom: 0.5em;
  font-size: 20px;
  font-weight: 400;
  color: #000;
`;

export const UserInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Digite seu CPF',
})`
  padding: 1em;
  border: 2px solid #7a7a7a;
  border-radius: 10px;
  margin-bottom: 2em;
  font-size: 14px;
  color: #616161;
  background: rgba(255, 255, 255, 0.9);
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #616161;
  }
`;

export const PasswordInput = styled.input.attrs({
  type: 'password',
  placeholder: '***************',
})`
  padding: 1em;
  border: 2px solid #7a7a7a;
  border-radius: 10px;
  margin-bottom: 3.5em;
  font-size: 14px;
  color: #616161;
  background: rgba(255, 255, 255, 0.9);
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #616161;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 1em 0;
  border: none;
  border-radius: 6px;
  font-weight: 800;
  background-color: #0c70f2;
  color: #fff;
`;
