import React, { useEffect } from 'react';

// styles
import { StyledWrite } from './style';

// components
import Layout from '../../components/layouts/Layout';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosApi } from '../../api/response';
import PrimaryBtn from '../../components/button/PrimaryBtn';

interface FormDataType {
  title: string;
  content: string;
}

const WritePage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, getValues } = useForm<FormDataType>();
  let params = useParams();

  // 폼 전송시 실행 데이터
  const onSubmit: SubmitHandler<FormDataType> = async (formData) => {
    try {
      if (params.id) {
        await axiosApi.put(`/list/${params.id}`, formData);
      } else {
        const data = await axiosApi.post('/list', formData);
        console.log(data);
      }
      navigate('/main');
    } catch (e) {
      console.log(e);
    }
  };

  // 일치데이터 가져오기
  const getListById = async () => {
    try {
      const { data } = await axiosApi.get(`/list/${params.id}`);
      setValue('title', data.title);
      setValue('content', data.content);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (params.id) {
      getListById();
    }
  }, [params]);

  return (
    <StyledWrite>
      <Layout>
        <div className="inner">
          <div className="write-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                {...register('title', { required: true })}
                defaultValue={getValues('title')}
                placeholder="제목을 입력해주세요"
              />
              <textarea
                {...register('content', { required: true })}
                defaultValue={getValues('content')}
                placeholder="내용을 입력해주세요"
              ></textarea>
              <div className="btn-container">
                <PrimaryBtn
                  label="목록보기"
                  edit
                  onClick={() => {
                    navigate('/main');
                  }}
                />
                <PrimaryBtn type="submit" label="등록하기" />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </StyledWrite>
  );
};

export default WritePage;
