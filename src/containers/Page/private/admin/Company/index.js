import { Col, Row } from "antd";
import LayoutWrapper from "components/utility/layoutWrapper";
import EditorMenu from "containers/DataEditor/EditorMenu";
import React from 'react';
import basicStyle from "settings/basicStyle.js";
import options from "./MenuOptions";
import Company from './company/Company';

import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import CompanyInfo from './company/CompanyInfo';
export default class extends React.Component {
    state={
        userSelected:{
            name:'Proptech Plus',
            size:'12'
        }
    }
    getCompany=(obj)=>{
        this.setState({userSelected:obj});
    }
    render() {
        const url = this.props.match.url;

        const info = window.location.href.split("/")[window.location.href.split('/').length - 1] === 'info';
        const { rowStyle, colStyle } = basicStyle;
        const pageStyle = {
            display: "flex",
            flexFlow: "row nowrap",
            flexDirection: 'column',
            alignItems: "flex-start",
            overflow: "hidden",
            width: '100%',
            paddingTop:0
        };
        return (
            <LayoutWrapper>
                <div style={pageStyle}>
                    <Row>
                        <Breadcrumb menuOption={options} url={url}/>
                    </Row>
                    <Row style={rowStyle} gutter={0} justify='start'>
                        <Col md={6} sm={24} xs={24} style={colStyle} className="inlineCollapse">
                            <EditorMenu url={url} options={options} />
                        </Col>
                        {
                        (info)?
                            <Col md={13} sm={24} xs={24} style={colStyle}>
                                <CompanyInfo companySelected={this.state.userSelected}/>
                            </Col>
                        :(
                            <Col md={13} sm={24} xs={24} style={colStyle}>
                                <CompanyInfo companySelected={this.state.userSelected}/>
                            </Col>
                        )
                        }
                       
                    </Row>
                </div>
            </LayoutWrapper>
        );
    }
}