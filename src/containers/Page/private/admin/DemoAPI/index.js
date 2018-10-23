import { Col, Row } from "antd";
import LayoutWrapper from "components/utility/layoutWrapper";
import EditorMenu from "containers/DataEditor/EditorMenu";
import React from 'react';
import basicStyle from "settings/basicStyle.js";
import options from "./MenuOptions";
import Users from './user/Users';
import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import UserInfo from './user/UserInfo';


export default class API extends React.Component {
    state={
        userSelected:null
    }
    getUser=(obj)=>{
        this.setState({userSelected:obj});
    }
    render() {
        const url = this.props.match.url;
 
        const { rowStyle, colStyle } = basicStyle;
        const pageStyle = {
            display: "flex",
            flexFlow: "row nowrap",
            flexDirection: 'column',
            alignItems: "flex-start",
            overflow: "hidden",
            width: '100%'
        }; 
        return (
            <LayoutWrapper>
                <div style={pageStyle}>
                    <Row>
                        <Breadcrumb menuOption={options} />
                    </Row>
                    <Row style={rowStyle} gutter={0} justify='start'>
                        <Col md={6} sm={24} xs={24} style={colStyle} className="inlineCollapse">
                            <EditorMenu url={url} options={options} />
                        </Col>
                        <Col md={18} sm={24} xs={24} style={colStyle}>
                            <Users getUser={this.getUser} url={url} />
                        </Col>
                        {
                        (this.state.userSelected!==null)?
                            <Col md={24} sm={24} xs={24} style={colStyle}>
                                <UserInfo userInfo={this.state.userSelected}/>
                            </Col>
                        :(<div></div>)
                        }
                       
                    </Row>
                </div>
            </LayoutWrapper>
        );
    }
}

