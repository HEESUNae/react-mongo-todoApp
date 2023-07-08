import React, { useEffect } from 'react';

// styles
import { StyledLoginPage } from './style';

// libraries
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

// api
import { axiosApi } from '../../api/response';

// components
import Layout from '../../components/layouts/Layout';
import PrimaryBtn from '../../components/button/PrimaryBtn';
import BasicInput from '../../components/input/BasicInput';

interface LoginFormType {
  id: string;
  pw: string;
}

const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginFormType>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormType> = async (LoginData) => {
    try {
      const data = await axiosApi.post('/user/login', LoginData);
      console.log(data);
      // navigate('/main');
    } catch (e) {
      alert('아이디 또는 비밀번호를 확인해주세요');
    }
  };

  return (
    <StyledLoginPage>
      <Layout>
        <div className="inner">
          <p>로그인</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <BasicInput placeholder="아이디를 입력해주세요" formMode={{ ...register('id', { required: true }) }} />
            <BasicInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              formMode={{ ...register('pw', { required: true }) }}
            />
            <PrimaryBtn type="submit" label="로그인" />
          </form>
          <div className="btn-container">
            <PrimaryBtn
              label="회원가입하기"
              edit
              onClick={() => {
                navigate('/join');
              }}
            />
          </div>
        </div>
      </Layout>
    </StyledLoginPage>
  );
};

export default LoginPage;
