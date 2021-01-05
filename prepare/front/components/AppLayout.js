// 일부 컴포넌트를 모아 놓는 곳
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu,Input, Row, Col } from 'antd';

const AppLayout = ({children}) =>{
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButton style={{verticalAlign:'middle'}}/>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row>
                {/*xs: 모바일 sm: 태블릿, md: 작은 데스크탑 n/24 라고 생각 ex 24/24 = 100% 차지, 12/24 = 50% 차지  */}
                <Col xs={24} md={6}>
                    왼쪽 메뉴
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