import { Col, Row } from "antd";
import LayoutWrapper from "components/utility/layoutWrapper";
import EditorMenu from "containers/DataEditor/EditorMenu";
import React from 'react';
import basicStyle from "settings/basicStyle.js";
import options from "./MenuOptions";
import TableDataRoute from "containers/Page/private/admin/User/TableDataRoute";
import DataFormRoute from 'containers/Page/private/admin/User/DataFormRoute';
import Users from './user/Users';

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

        const addNew = window.location.href.split("/")[window.location.href.split('/').length - 1] === 'add-new';
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
                    <Row style={rowStyle} gutter={0} justify='start'>
                        {/* config menu */}
                        <Col md={6} sm={24} xs={24} style={colStyle} className="inlineCollapse">
                            <EditorMenu url={url} options={options} />
                        </Col>
                        {/* table data */}
                        <Col md={10} sm={24} xs={24} style={colStyle}>
                            <Users getUser={this.getUser} url={url} />
                        </Col>
                        {
                        (this.state.userSelected!==null)?
                            <Col md={13} sm={24} xs={24} style={colStyle}>
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