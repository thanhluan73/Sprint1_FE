import { Button, Card, Col, Icon, Row, Carousel } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeWrapper from './Home.style';
import ContactForm from 'containers/Page/public/form/ContactForm';

const { Meta } = Card;
export default class extends React.Component {
    render() {
        return (
            <HomeWrapper>
                {/* banner */}
                <Carousel autoplay effect="fade">
                    <div>
                        <Row type="flex" style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1526431038803-6f6c3ee137ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5313cc83d899a7d913f9e3341f5fabf0&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)'
                        }} justify="flex-start" align="middle" className="banner">
                            <Col span={8}>
                                <h1 className="banner__title">Khoa hoc moi</h1>
                                <p className="banner__description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <Button type="primary" size="large">Dang ky</Button>
                                <Button size="large">Xem them</Button>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row type="flex" style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1532700918736-e42b0e45d39e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=51d2ad86962a85b10c45fc9ba44e281e&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)'
                        }} justify="flex-start" align="middle" className="banner">
                            <Col span={8}>
                                <h1 className="banner__title">Khoa hoc moi</h1>
                                <p className="banner__description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <Button type="primary" size="large">Dang ky</Button>
                                <Button size="large">Xem them</Button>
                            </Col>
                        </Row>
                    </div>
                </Carousel>

                {/* course group */}
                <Row type="flex" justify="space-between" align="top" className="course-group body-section" gutter={30}>
                    <Col md={6} sm={12}>
                        <Link to="#Course-1">
                            <Card
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://images.unsplash.com/photo-1521702813222-1943f3fb9c07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8d68fe28d622ff80478dfc1b036dbd3&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" />}
                                actions={[<h3 className="action-link" >Đăng ký học ngay <Icon type="right" theme="outlined" /> </h3>]}
                            >
                                <Meta
                                    title="Tieng anh tong hop"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                                />

                            </Card>,
                        </Link>
                    </Col>
                    <Col md={6} sm={12}>
                        <Link to="#Course-1">
                            <Card
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://images.unsplash.com/photo-1520515785810-d86ce0f8872e?ixlib=rb-0.3.5&s=067814549db80a16e72ad9f8a0fa092b&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" />}
                                actions={[<h3 className="action-link" >Đăng ký học ngay <Icon type="right" theme="outlined" /> </h3>]}
                            >
                                <Meta
                                    title="Tieng anh giao tiep"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                                />

                            </Card>,
                        </Link>
                    </Col>
                    <Col md={6} sm={12}>
                        <Link to="#Course-1">
                            <Card
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://images.unsplash.com/photo-1525422847952-7f91db09a364?ixlib=rb-0.3.5&s=da13a911783ae00ee9093e562c4a485e&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" />}
                                actions={[<h3 className="action-link" >Đăng ký học ngay <Icon type="right" theme="outlined" /> </h3>]}
                            >
                                <Meta
                                    title="IELTS"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                                />

                            </Card>,
                        </Link>
                    </Col>
                    <Col md={6} sm={12}>
                        <Link to="#Course-1">
                            <Card
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://images.unsplash.com/photo-1527664557558-a2b352fcf203?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4341976025ae49162643ccdb47a72a4d&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" />}
                                actions={[<h3 className="action-link" >Đăng ký học ngay <Icon type="right" theme="outlined" /> </h3>]}
                            >
                                <Meta
                                    title="TOEIC"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                                />

                            </Card>,
                        </Link>
                    </Col>
                </Row>

                {/* about section */}
                <Row type="flex" justify="flex-start" align="middle" className="body-section body-section__dark">
                    <Col md={12}>
                        <Row type="flex" justify="flex-start" align="middle" >
                            <h1 className="body-section__title">Tai sao chon trung tam <strong>ClassName</strong>?</h1>
                            <p className="body-section__des">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <Button type="primary" size="large">Xem them <Icon type="right" theme="outlined" /></Button>
                        </Row>
                    </Col>
                    <Col md={12}>
                        <Row type="flex" justify="flex-start" align="middle" >
                            <div style={{
                                position: 'relative',
                                height: 0,
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

                {/* course ads */}
                <Row type="flex" justify="flex-start" align="middle" className="body-section">
                    <Col md={12}>
                        <Row type="flex" justify="flex-start" align="middle">
                            <img src="https://i.pinimg.com/originals/1e/4c/c3/1e4cc375dc389c08c6803e4bc33ead9c.gif" alt=""/>
                        </Row>
                    </Col>
                    <Col md={12}>
                        <Row type="flex" justify="flex-start" align="middle" style={{ paddingLeft: '5%' }}>
                            <h1 className="body-section__title">Dang ky ngay de huong <strong>uu dai hap dan</strong></h1>
                            <p className="body-section__des">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <Button type="primary" size="large">Xem them <Icon type="right" theme="outlined" /></Button>
                        </Row>
                    </Col>
                </Row>
                {/* dang ky thi thu */}
                <Row type="flex" justify="flex-start" align="middle" className="body-section body-section__dark">
                    <Col md={12}>
                        <Row type="flex" justify="flex-start" align="middle">
                            <h1 className="body-section__title">Dang ky thi thu <strong>mien phi</strong></h1>
                            <p className="body-section__des">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <Button type="primary" size="large">Dang ky thi thu <Icon type="right" theme="outlined" /></Button>
                        </Row>
                    </Col>
                    <Col md={12}>
                        <Row type="flex" justify="flex-start" align="middle">
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/68d86645319371.582ca2d7bf985.gif" alt=""/>
                        </Row>
                    </Col>
                </Row>

                {/* Lien he & blogs */}
                <Row type="flex" justify="flex-start" align="top" className="body-section">
                    <Col md={12}>
                        <Row type="flex" justify="space-between" align="middle">
                            <h1 className="body-section__title">Tin tuc noi bat</h1>
                            <Link to="#blog">
                                Xem them <Icon type="double-right" theme="outlined" />
                            </Link>
                        </Row>
                        <Carousel autoplay>
                            <div>
                                <Row
                                    type="flex"
                                    justify="flex-start"
                                    align="middle"
                                    gutter={16}
                                    style={{ padding: 15 }}
                                >
                                    <Col md={12}>
                                        <Link to="#news">
                                            <Card
                                                hoverable
                                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                                <Meta
                                                    title="Europe Street beat"
                                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                                                />
                                            </Card>
                                        </Link>
                                    </Col>
                                    <Col md={12}>
                                        <Link to="#news">
                                            <Card
                                                hoverable
                                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                                <Meta
                                                    title="Europe Street beat"
                                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                                                />
                                            </Card>
                                        </Link>
                                    </Col>
                                </Row>

                            </div>
                            <div>
                                <Row
                                    type="flex"
                                    justify="flex-start"
                                    align="middle"
                                    gutter={16}
                                    style={{ padding: 15 }}
                                >
                                    <Col md={12}>
                                        <Link to="#news">
                                            <Card
                                                hoverable
                                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                                <Meta
                                                    title="Europe Street beat"
                                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                                                />
                                            </Card>
                                        </Link>
                                    </Col>
                                    <Col md={12}>
                                        <Link to="#news">
                                            <Card
                                                hoverable
                                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                                <Meta
                                                    title="Europe Street beat"
                                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                                                />
                                            </Card>
                                        </Link>
                                    </Col>
                                </Row>

                            </div>
                        </Carousel>
                        {/* <Row type="flex" justify="center" align="middle">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0790678841768!2d106.74899691423587!3d10.805256161616901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175266bb48db1bd%3A0xce5af9e4f491f0a1!2sToong+Oxygen!5e0!3m2!1sen!2s!4v1535977844151" width="100%" height="440" frameBorder="0" allowFullScreen style={{ border: 0 }}></iframe>
                        </Row> */}
                    </Col>
                    <Col md={12}>
                        <Row type="flex" justify="flex-start" align="middle" style={{ padding: '0 15%' }}>
                            <div style={{ width: '100%' }}>
                                <h1 className="body-section__title">Lien he de nhan tu van</h1>
                                <ContactForm />
                            </div>
                        </Row>
                    </Col>
                </Row>


            </HomeWrapper>
        );
    }
}