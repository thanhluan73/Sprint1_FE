import React from 'react';
import HeaderWrapper from './Header.style';
import { Menu, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const SubMenu = Menu.SubMenu;
export default class extends React.Component {
    state = {
        current: 'home',
        url: this.props.url,
    }

    render() {
        return (
            <HeaderWrapper>
                <Row gutter={16}>
                    <Col span={4} className="left-pane">
                        <Logo />
                    </Col>
                    <Col span={20} className="right-pane">
                        {/* flex-1 */}
                        <Menu
                            // selectedKeys={[this.state.current]}
                            mode="horizontal"
                            theme="dark"
                        >
                            <Menu.Item key="home">
                                <Link to={this.state.url + "/home"}>Trang chu</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link to={this.state.url + "/about"}>Gioi thieu</Link>
                            </Menu.Item>
                            <SubMenu title="Khoa hoc">
                                <Menu.Item key="course-1">
                                    <Link to={this.state.url + "/course"}>Tat ca khoa hoc</Link>
                                </Menu.Item>
                                <Menu.Item key="course-2">
                                    <Link to={this.state.url + "/course/2"}>Course-2</Link>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="blog">
                                <Link to={this.state.url + "/blog/all"}>Tin tức</Link>
                            </Menu.Item>
                            <Menu.Item key="faq">
                                <Link to={this.state.url + "/faq"}>Tư vấn</Link>
                            </Menu.Item>
                            <Menu.Item key="contact">
                                <Link to={this.state.url + "/contact"}>Liên hệ</Link>
                            </Menu.Item>
                            <Menu.Item key="free-test">
                                <Link to={"/signup"}>Đăng ký thi thử</Link>
                            </Menu.Item>
                            <Menu.Item key="profile">
                                <Link to={this.state.url + "/profile"}>Profile</Link>
                            </Menu.Item>
                        </Menu>
                        {/* flex-2 */}
                        <div className="btn-group__right">
                            <Button type="default" >Đăng nhập</Button>
                            <Button type="primary" >Đăng ký</Button>
                        </div>
                    </Col>
                </Row>
            </HeaderWrapper >
        );
    }
}