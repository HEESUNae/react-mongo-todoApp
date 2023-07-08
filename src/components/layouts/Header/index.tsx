import React, { useEffect, useState } from 'react';

// styles
import { StyledHeader } from './style';
import PrimaryBtn from '../../button/PrimaryBtn';
import { axiosApi } from '../../../api/response';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  // 쿠키 저장
  // var setCookie = function (name: string, value: string, exp: number) {
  //   var date = new Date();
  //   date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  //   document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  // };

  // 쿠키 가져오기
  // async function get_cookie(name: string) {
  //   var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  //   return value ? value[2] : null;
  // }

  // 인증여부
  // const isAuth = async () => {
  //   const isSessionLogin = await get_cookie('isLogin');
  //   isSessionLogin === 'true' ? setIsLogin(true) : setIsLogin(false);

  //   if (location.pathname === '/') {
  //     setCookie('isLogin', 'false', 1);
  //   }

  //   if (isSessionLogin === 'false' && location.pathname !== '/' && location.pathname !== '/join') {
  //     setCookie('isLogin', 'false', 1);
  //     alert('로그인해주세요.');
  //     navigate('/');
  //   }
  // };

  //
  const logoutUser = async () => {
    try {
      const data = await axiosApi.get('/user/logout');
      // const isSessionLogin = await get_cookie('isLogin');
      // if (isSessionLogin === 'false') {
      navigate('/');
      // }
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   isAuth();
  // }, [location.pathname]);

  return (
    <StyledHeader>
      <header>
        <div className="logo-container">
          <a href="/">TODOAPP</a>
        </div>
        {isLogin && <PrimaryBtn label="로그아웃" edit onClick={logoutUser} />}
      </header>
    </StyledHeader>
  );
};

export default Header;
