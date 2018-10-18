import { Button, Col, Icon, Row} from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeWrapper from './Home.style';
import ResponsiveIMG from 'components/responsiveIMG/ResponsiveIMG';

export default class extends React.Component {
    render() {
        return (
            <HomeWrapper>
                {/* about section */}
                <Row
                    type="flex"
                    justify="space-between"
                    align="middle"
                    className="body-section body-section__dark header__pattern-bg"
                >
                    <Col md={10}>
                        <Row type="flex" justify="flex-start" align="middle" >
                            <h1
                                className="body-section__title"                                
                            >
                                Gioi thieu chuong trinh dao tao
                            </h1>
                            <p
                                className="body-section__des"                                
                            >
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                            <Button type="primary" size="large">Thi thu mien phi<Icon type="right" theme="outlined" /></Button>
                        </Row>
                    </Col>
                    <Col md={12}>
                        <Row type="flex" justify="flex-start" align="middle" >
                            <div style={{
                                position: 'relative',
                                height: '100%',
                                paddingBottom: '56.27%',
                                width: '100%'
                            }}>
                                <iframe title="abc" src="https://www.youtube.com/embed/hdGr8VVjF6Q?ecver=2" style={
                                    {
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        left: 0
                                    }
                                } width="640" height="360" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </div>
                        </Row>
                    </Col>
                </Row>

                {/* course feature */}
                <Row type="flex" justify="space-around" align="top" className="body-section body-section__dark">
                    <Col md={10}>
                        <div className="content-topic">
                            <ResponsiveIMG imgUrl='https://images.unsplash.com/photo-1467307983825-619715426c70?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aae59f980253ffe9d8e9eadcb5faf077&w=1000&q=80'/>
                            <h3 className="content-topic-title">Tieng anh Tong hop</h3>
                            <p className="content-topic-des">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                            <Link to="#general">Xem them <Icon type="double-right" theme="outlined" /></Link>
                        </div>
                    </Col>
                    
                    <Col md={10}>
                        <div className="content-topic">
                            <ResponsiveIMG imgUrl='https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f168e050241c6c8041b0e9ccf98eefb9&w=1000&q=80'/>
                            <h3 className="content-topic-title">Tieng anh giao tiep</h3>
                            <p className="content-topic-des">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                            <Link to="#general">Xem them <Icon type="double-right" theme="outlined" /></Link>
                        </div>
                    </Col>
                    
                    <Col md={10}>
                        <div className="content-topic">
                            <ResponsiveIMG imgUrl='https://images.unsplash.com/photo-1531539427495-97c44a449837?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2759d95539a9c04949b43b9157d5efb5&w=1000&q=80'/>
                            <h3 className="content-topic-title">TOEIC</h3>
                            <p className="content-topic-des">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                            <Link to="#general">Xem them <Icon type="double-right" theme="outlined" /></Link>
                        </div>
                    </Col>
                    
                    <Col md={10}>
                        <div className="content-topic">
                            <ResponsiveIMG imgUrl='https://images.unsplash.com/photo-1525248075710-0e168875bbdb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cda187d2bf8c7889b071a82c98be58e3&w=1000&q=80'/>
                            <h3 className="content-topic-title">IELTS</h3>
                            <p className="content-topic-des">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                            <Link to="#general">Xem them <Icon type="double-right" theme="outlined" /></Link>
                        </div>
                    </Col>
                    
                    
                </Row>

                {/* course ads */}
                <Row type="flex" justify="flex-start" align="middle" className="body-section">
                    <Col md={12}>
                        <Row type="flex" justify="center" align="middle">
                            <img width="100%" src="https://i.pinimg.com/originals/1e/4c/c3/1e4cc375dc389c08c6803e4bc33ead9c.gif" alt=""/>
                        </Row>
                    </Col>
                    <Col md={12}>
                        <Row type="flex" justify="flex-start" align="middle" style={{ paddingLeft: '5%' }}>
                            <h1 className="body-section__title">Dang ky ngay de huong <strong>uu dai hap dan</strong></h1>
                            <p className="body-section__des">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <Button type="primary" size="large">Đăng ký <Icon type="right" theme="outlined" /></Button>
                        </Row>
                    </Col>
                </Row>

            </HomeWrapper>
        );
    }
}