import { Col, Icon, Pagination, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { frontPageConfig } from 'settings/index';
import HomeWrapper from '../body/Home.style';
import BlogItem from './BlogItem';

export default class extends React.Component {
    state = {
        url: `${frontPageConfig.baseUrl}/blog/${this.props.match.params.cate}`,
        blogId: this.props.match.params.id,
        blogCate: {
            title: 'Blog category title'
        }
    }
    render() {
        console.log(this.state.blogId);
        return (
            <HomeWrapper>
                <Row
                    type="flex"
                    justify="space-between"
                    align="top"
                    className="body-section"
                    gutter={60}
                >

                    <Col md={14} className='blog-wrapper'>
                        <div className='blog-cate-title'>
                            <Link
                                className='outline-deco-link'
                                to={this.state.url}
                            >
                                <Icon type="double-right" theme="outlined" /> {this.state.blogCate.title}
                            </Link>
                        </div>

                        {/* blog list */}

                        {
                            typeof this.state.blogId === "undefined" ? (
                                <div>
                                    <Link
                                        to={`${this.state.url}/id`}
                                    >
                                        <BlogItem />
                                    </Link>
                                    <Link
                                        to={`${this.state.url}/id`}
                                    >
                                        <BlogItem />
                                    </Link>
                                    <Link
                                        to={`${this.state.url}/id`}
                                    >
                                        <BlogItem />
                                    </Link>
                                    <Link
                                        to={`${this.state.url}/id`}
                                    >
                                        <BlogItem />
                                    </Link>
                                    <Link
                                        to={`${this.state.url}/id`}
                                    >
                                        <BlogItem />
                                    </Link>
                                    <Link
                                        to={`${this.state.url}/id`}
                                    >
                                        <BlogItem />
                                    </Link>
                                    <Link
                                        to={`${this.state.url}/id`}
                                    >
                                        <BlogItem />
                                    </Link>
                                    <Link
                                        to={`${this.state.url}/id`}
                                    >
                                        <BlogItem />
                                    </Link>
                                    <Link
                                        to={`${this.state.url}/id`}
                                    >
                                        <BlogItem />
                                    </Link>
                                    <Link
                                        to={`${this.state.url}/id`}
                                    >
                                        <BlogItem />
                                    </Link>
                                    <Pagination size="small" total={100} pageSize={10} style={{ marginTop: 30 }} />
                                </div>
                            ) : (
                                    <div>
                                        <BlogItem viewMode='full' />
                                    </div>
                                )
                        }

                    </Col>
                    <Col md={8}>
                    </Col>
                </Row>
            </HomeWrapper>
        );
    }
}