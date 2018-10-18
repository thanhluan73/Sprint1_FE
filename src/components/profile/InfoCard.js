import { Col, Row } from 'antd';
import ResponsiveIMG from 'components/responsiveIMG/ResponsiveIMG';
import React from 'react';
import InfoCardWrapper from './InfoCard.style'; 
export default class extends React.Component {
    state = {
        imgUrl: this.props.imgUrl,
        name: this.props.name,
        role: this.props.profileRole,
        email: this.props.email,
        phone: this.props.phone
    } 
    render() {
        return (
            <InfoCardWrapper>
                <Row type="flex" justify="space-between" align="top" gutter={15}>
                    {/* avatar */}
                    <Col md={8} xd={8}>
                        <ResponsiveIMG
                            className='profile-avatar'
                            ratioWidth={1}
                            ratioHeight={1}
                            imgUrl={this.state.imgUrl}
                        />
                    </Col>
                    <Col md={16} xd={16}>
                        <h2 className='profile-name'>
                            {this.state.name}
                        </h2>
                        <div className='profile-role'>
                            {this.state.role}
                        </div>
                        <div className='profile-contact'>
                            <div>Email: {this.state.email}</div>
                            <div>Phone: {this.state.phone}</div>
                        </div>
                    </Col>
                </Row>
            </InfoCardWrapper>
        );
    }
}