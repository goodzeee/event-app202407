import React from 'react';
import { Form, Link, useActionData } from 'react-router-dom';  // Link 컴포넌트 추가
import styles from './LoginForm.module.scss';
import { AUTH_URL } from '../../config/host-config';

const LoginForm = () => {

  const errorText = useActionData();

  return (
  <>
    <Form method="post" className={styles.form}>
      <h1>Log in</h1>
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required/>
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" required/>
      </p>
      <div className={styles.actions}>
        <button type="submit" className={styles.loginButton}>Login</button>
      </div>

      {errorText && <p className={styles.error}>{errorText}</p>}

      <div className={styles.registerLink}>
        <Link to="/sign-up">회원이 아니십니까? 회원가입을 해보세요</Link>
      </div>
    </Form>
  </>
);
};

export default LoginForm;


// login form에 대한 트리거 액션 함수
export const loginAction = async ( {request} ) => {

  // 입력데이터 읽기 formData
  const formData = await request.formData();
  // const entries = formData.entries();
  
  const payload = {
    email: formData.get('email'),
    password: formData.get('password')
  };
  // console.log(payload);

  const response = await fetch(`${AUTH_URL}/sign-in`, {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify(payload)
  });

  // 로그인 실패한 경우
  if (response.status === 422) {
    const errorText = await response.text();
    console.log(errorText);

    // 액션함수가 리턴한 데이터를 컴포넌트에서 쓰는 법
    // 📌 컴포넌트에서 useActionData 훅을 사용 !
    return errorText;
  }
};