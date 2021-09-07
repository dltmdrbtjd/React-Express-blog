import React from 'react';
import { useHistory } from 'react-router';
import { UserLogin } from 'src/libs/api';
import { setCookie } from '../../libs/cookie';

const LoginPage = () => {
  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');

  const history = useHistory();

  const userinfo = {
    userid: id,
    password: pw,
  };

  function LoginApi() {
    UserLogin(userinfo)
      .then((res) => {
        history.push('/');
        const token = res.data.result.token;
        setCookie(token);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  return (
    <div>
      <p>로그인</p>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <br />
      <p>패스워드</p>
      <input type="password" onChange={(e) => setPw(e.target.value)} />
      <br />
      <button type="submit" onClick={LoginApi}>
        로그인
      </button>
    </div>
  );
};

export default LoginPage;
