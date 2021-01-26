// 일부 컴포넌트를 모아 놓는 곳
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu,Input, Row, Col } from 'antd';
import styled,{createGlobalStyle} from 'styled-components';
import {useSelector} from 'react-redux';


import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';

const Global = createGlobalStyle`
    .ant-row{
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    
    .ant-col:first-child{
      padding-left: 0 !important;
    }
    
    .ant-col:last-child{
      padding-right: 0 !important;
    }
`;

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({children}) =>{
    const isLoggedIn = useSelector((state) =>state.user.isLoggedIn); // redux에서 받아온 것
    return(
        <div>
            <Global/>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                {/*xs: 모바일 sm: 태블릿, md: 작은 데스크탑 n/24 라고 생각 ex 24/24 = 100% 차지, 12/24 = 50% 차지
                 gutter : 컬럼사이의 간격 */}
                <Col xs={24} md={6}>
                    {/*로그인 되어있으면 UseProfile 안되어있으면 LoginForm*/}
                    {isLoggedIn ? <UserProfile/> : <LoginForm/>}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    오른쪽 메뉴
                </Col>
            </Row>
        </div>
    );
};


AppLayout.propTypes ={
    children:PropTypes.node.isRequired,
}

export default AppLayout;