import React from 'react';

// styles
import { StyledJoinPage } from './style';

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
  name: string;
}

const JoinPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormType> = async (LoginData) => {
    try {
      // todo: 비밀번호 암호화
      await axiosApi.post('/user', LoginData);
      navigate('/');
    } catch (e) {
      alert('이미 존재하는 아이디 입니다.');
    }
  };

  return (
    <StyledJoinPage>
      <Layout>
        <div className="inner">
          <p>회원가입</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <BasicInput
              placeholder="(필수) 아이디를 입력해주세요"
              formMode={{
                ...register('id', {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z0-9]{3,19}$/,
                    message: '대소문자, 숫자만 사용가능 (3~19글자)',
                  },
                }),
              }}
              aria-invalid={errors.id ? 'true' : 'false'}
            />
            {errors.id && <p role="alert">{errors.id?.message}</p>}
            <BasicInput
              type="password"
              placeholder="(필수) 비밀번호를 입력해주세요"
              formMode={{
                ...register('pw', {
                  required: true,
                  pattern: {
                    value: /^[a-z0-9]+$/,
                    message: '소문자, 숫자만 사용가능',
                  },
                }),
              }}
              aria-invalid={errors.pw ? 'true' : 'false'}
            />
            {errors.pw && <p role="alert">{errors.pw?.message}</p>}
            <BasicInput
              placeholder="(필수) 이름을 입력해주세요"
              formMode={{
                ...register('name', {
                  required: true,
                  pattern: {
                    value: /^[가-힣a-zA-Z]+$/,
                    message: '한글, 영문만 사용가능',
                  },
                }),
              }}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && <p role="alert">{errors.name?.message}</p>}
            <PrimaryBtn type="submit" label="가입하기" />
          </form>
        </div>
      </Layout>
    </StyledJoinPage>
  );
};

export default JoinPage;
