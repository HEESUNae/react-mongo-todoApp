import React, { useEffect, useState } from 'react';

// styles
import { StyledList } from './style';

// components
import Layout from '../../components/layouts/Layout';
import PrimaryBtn from '../../components/button/PrimaryBtn';
import { axiosApi } from '../../api/response';
import { useNavigate } from 'react-router-dom';

interface ListType {
  _id: string;
  title: string;
  content: string;
  // name: string;
}

const ListPage = () => {
  const [list, setList] = useState<ListType[]>([]);
  const navigate = useNavigate();

  // 리스트 render api
  const getList = async () => {
    try {
      const { data } = await axiosApi.get('/list');
      setList(data);
    } catch (e) {
      console.log(e);
      // alert('로그인해주세요');
      // navigate('/');
    }
  };

  // 리스트 삭제
  const deleteList = async (id: string) => {
    try {
      if (window.confirm('삭제하시겠습니까?')) {
        await axiosApi.delete(`/list/${id}`);
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <StyledList>
      <Layout>
        <div className="inner">
          <div className="title-container">
            <p>리스트</p>
            <PrimaryBtn
              label="글쓰기"
              onClick={() => {
                navigate('/write');
              }}
            />
          </div>

          <div className="list-container">
            {list &&
              list.map((item) => (
                <div className="list" key={item._id}>
                  <p className="list-title">{item.title}</p>
                  <p className="list-content">{item.content}</p>
                  <div className="btn-container">
                    {/* <p className="list-name"> 글쓴이 : {item?.name}</p> */}
                    <PrimaryBtn label="삭제하기" onClick={() => deleteList(item._id)} />
                    <PrimaryBtn edit label="수정하기" onClick={() => navigate(`/write/${item._id}`)} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Layout>
    </StyledList>
  );
};

export default ListPage;
