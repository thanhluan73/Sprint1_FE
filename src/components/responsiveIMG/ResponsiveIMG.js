import React from 'react';
import ResponsiveIMGWrapper from './ResponsiveIMG.style';

export default class extends React.Component {
    state = {
        style: {
            width: this.props.width ? this.props.width : '100%',
            paddingTop: this.props.imgUrl ? ((this.props.ratioHeight ? this.props.ratioHeight : 9) / (this.props.ratioWidth ? this.props.ratioWidth : 16) * 100) + '%' : 0,
            backgroundImage: `${this.props.imgUrl ? `url(${this.props.imgUrl})` : `none`}`
        },
    }
    render() {
        return (
            <ResponsiveIMGWrapper style={this.state.style} />
        );
    }
} 