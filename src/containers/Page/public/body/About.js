import { Col, Row, Timeline } from 'antd';
import React from 'react';
import HomeWrapper from './Home.style';

export default class extends React.Component {
    render() {
        return (
            <HomeWrapper>
                {/* about section */}
                <Row
                    type="flex"
                    justify="center"
                    align="middle"
                    className="body-section body-section__dark header__pattern-bg header__large-center"

                >
                    <Col md={12}>
                        <h1
                            className="body-section__title"
                        >
                            Trung tam dao tao tieng anh ABC
                            </h1>
                        <p
                            className="body-section__des"
                        >
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                    </Col>

                </Row>
                {/* about video */}
                <Row
                    type="flex"
                    justify="center"
                    align="middle"
                    className="body-section overlay-video__center  body-section__dark"

                >
                    <Col md={18}>
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

                {/* course ads */}
                <Row type="flex" justify="space-around" align="top" className="body-section">
                    <Col md={16}>
                        <h1 className="body-section__title">
                            Feature about
                        </h1>
                        <Timeline>
                            <Timeline.Item>
                                <div className="content-topic">
                                    <h2 style={{ fontWeight: 900 }}>Powered by a community of independent designers</h2>
                                    <p className="content-topic-des">
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                    </p>
                                </div>
                            </Timeline.Item>
                            <Timeline.Item>
                                <div className="content-topic">
                                    <h2 style={{ fontWeight: 900 }}>Powered by a community of independent designers</h2>
                                    <p className="content-topic-des">
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                    </p>
                                </div>
                            </Timeline.Item>
                            <Timeline.Item>
                                <div className="content-topic">
                                    <h2 style={{ fontWeight: 900 }}>Powered by a community of independent designers</h2>
                                    <p className="content-topic-des">
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                    </p>
                                </div>
                            </Timeline.Item>
                            <Timeline.Item>
                                <div className="content-topic">
                                    <h2 style={{ fontWeight: 900 }}>Powered by a community of independent designers</h2>
                                    <p className="content-topic-des">
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                    </p>
                                </div>
                            </Timeline.Item>
                        </Timeline>,
                    </Col>
                </Row>

            </HomeWrapper>
        );
    }
}