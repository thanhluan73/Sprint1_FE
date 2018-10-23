import { Col, Row } from "antd";
import LayoutWrapper from "components/utility/layoutWrapper";
import EditorMenu from "containers/DataEditor/EditorMenu";
import React from 'react';
import basicStyle from "settings/basicStyle.js";
import options from "./MenuOptions";
import Users from './user/Users';
import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import UserInfo from './user/UserInfo';
export default class extends React.Component {
    state={
        userSelected:null
    }
    getUser=(obj)=>{
        this.setState({userSelected:obj});
    }
    render() {
        const url = this.props.match.url;

        // const addNew = window.location.href.split("/")[window.location.href.split('/').length - 1] === 'add-new';
        const { rowStyle, colStyle } = basicStyle;
        const pageStyle = {
            display: "flex",
            flexFlow: "row nowrap",
            flexDirection: 'column',
            alignItems: "flex-start",
            overflow: "hidden",
            width: '100%'
        };
        const breadStyle = {
            marginLeft: '5px',
            position: 'relative',
            marginBottom: '10px'

        }
        return (
            <LayoutWrapper>
                <div style={pageStyle}>
                    <Row style={breadStyle}>
                        <Breadcrumb menuOption={options} url={url}/>
                    </Row>
                    <Row style={rowStyle} gutter={0} justify='start'>
                        {/* config menu */}
                        <Col md={4} sm={24} xs={24} style={colStyle} className="inlineCollapse">
                            <EditorMenu url={url} options={options} />
                        </Col>
                        {/* table data */}
                        <Col md={10} sm={24} xs={24} style={colStyle}>
                            <Users getUser={this.getUser} url={url} />
                        </Col>
                        {
                        (this.state.userSelected!==null)?
                            <Col md={10} sm={24} xs={24} style={colStyle}>
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