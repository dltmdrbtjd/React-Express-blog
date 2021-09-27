import React, { useState } from 'react';
import { UserLogin } from 'src/libs/api';
import jwtDecode from 'jwt-decode';
import { history } from 'src/modules/reducers';

const LoginPage = () => {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  function Login() {
    UserLogin({ userid: id, password: pw })
      .then((res) => {
        const UserInfo: any = jwtDecode(res.data.result.token);
        localStorage.setItem('result', UserInfo.user.id);
      })
      .then(() => {
        history.push('/');
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <input type="password" onChange={(e) => setPw(e.target.value)} />
      <button type="button" onClick={Login}>
        로그인
      </button>
    </div>
  );
};

export default LoginPage;
