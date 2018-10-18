import { Col, Menu, Row } from 'antd';
import InfoCard from 'components/profile/InfoCard';
import React from 'react';
import ProfileWrapper from './profile.style';
import { Link } from 'react-router-dom';
export default class extends React.Component {
    state = {
        url: this.props.match.url,
    }
    render() {  
        return (
            <ProfileWrapper>
                <Row type='flex' justify="space-between" align="top" gutter={30}>
                    <Col className="profile-sidebar" md={6}>
                        <InfoCard
                            imgUrl='https://images.unsplash.com/photo-1531750026848-8ada78f641c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6e6b7cdc0859dbc7c84524f6e282130&w=1000&q=80'
                            name='Nguyen Minh Tu'
                            profileRole='New register'
                            email='ntu657@gmail.com'
                            phone='123958695450'
                        />
                        <div className='profile-menu'>
                            <Menu
                                mode="inline"
                            >
                                {/* default */}
                                <Menu.ItemGroup className='profile-menu-title' key="profile-configuration" title="Cấu hình tài khoản">
                                    <Menu.Item key="profile-about">Giới thiệu</Menu.Item>
                                    <Menu.Item key="profile-edit">Cập nhật thông tin</Menu.Item>
                                    <Menu.Item key="profile-password">Thay đổi mật khẩu</Menu.Item>
                                </Menu.ItemGroup>
                                {/* by role */}
                                <Menu.ItemGroup className='profile-menu-title' key="profile-access-funcs" title="Quản lý học tập">
                                    <Menu.Item key="adasdsadsdsad">
                                        <Link to={this.state.url + "/exam"}>
                                            Danh sách bài thi
                                        </Link>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                            </Menu>
                        </div>
                    </Col>
                </Row>
            </ProfileWrapper>
        );
    }
}
// https://images.unsplash.com/photo-1531750026848-8ada78f641c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6e6b7cdc0859dbc7c84524f6e282130&w=1000&q=80