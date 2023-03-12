import React from 'react';

import { HeaderLogin } from './styles';
import logo from '../../assets/images/logo.png';

function LoginPage() {
  return (
    <HeaderLogin>
      <img src={logo} alt="" />
    </HeaderLogin>
  );
}

export default LoginPage;
