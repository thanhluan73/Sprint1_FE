import React from 'react';
import FooterWrapper from './Footer.style';
import { Row, Col, Menu } from 'antd';

const MenuItemGroup = Menu.ItemGroup;

export default class extends React.Component {
    render() {
        return (
            <FooterWrapper>
                <Row className="footer-content" gutter={16}>
                    <Col span={6}>
                        <Menu
                            onClick={this.handleClick}
                            style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <MenuItemGroup key="g1" title="Nội dung mới">
                                <Menu.Item key="1">Khóa học mới</Menu.Item>
                                <Menu.Item key="2">Tin khuyến mãi mới</Menu.Item>
                            </MenuItemGroup>
                        </Menu>
                    </Col>

                    <Col span={6}>
                        <Menu
                            onClick={this.handleClick}
                            style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <MenuItemGroup key="g1" title="Nội dung mới">
                                <Menu.Item key="1">Khóa học mới</Menu.Item>
                                <Menu.Item key="2">Tin khuyến mãi mới</Menu.Item>
                                <Menu.Item key="1">Khóa học mới</Menu.Item>
                                <Menu.Item key="2">Tin khuyến mãi mới</Menu.Item>
                            </MenuItemGroup>
                        </Menu>
                    </Col>

                    <Col span={6}>
                        <Menu
                            onClick={this.handleClick}
                            style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <MenuItemGroup key="g1" title="Nội dung mới">
                                <Menu.Item key="1">Khóa học mới</Menu.Item>
                                <Menu.Item key="2">Tin khuyến mãi mới</Menu.Item>
                                <Menu.Item key="1">Khóa học mới</Menu.Item>
                                <Menu.Item key="2">Tin khuyến mãi mới</Menu.Item>
                            </MenuItemGroup>
                        </Menu>
                    </Col>

                    <Col span={6}>
                        <Menu
                            onClick={this.handleClick}
                            style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <MenuItemGroup key="g1" title="Nội dung mới">
                                <Menu.Item key="1">Khóa học mới</Menu.Item>
                                <Menu.Item key="2">Tin khuyến mãi mới</Menu.Item>
                                <Menu.Item key="1">Khóa học mới</Menu.Item>
                                <Menu.Item key="2">Tin khuyến mãi mới</Menu.Item>
                            </MenuItemGroup>
                        </Menu>
                    </Col>

                </Row>
                <Row className="footer-bottom">
                    Copy right 2018 @ MT
                </Row>
            </FooterWrapper>
        );
    }
}