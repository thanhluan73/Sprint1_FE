import { Col, Row } from "antd";
import LayoutWrapper from "components/utility/layoutWrapper";
import EditorMenu from "containers/DataEditor/EditorMenu";
import React from 'react';
import basicStyle from "settings/basicStyle.js";
import options from "./MenuOptions";
import TableDataRoute from "containers/Page/private/admin/Category/TableDataRoute";
import DataFormRoute from 'containers/Page/private/admin/Category/DataFormRoute';

export default class extends React.Component {
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
                        <Col md={addNew ? 18 : 8} sm={24} xs={24} style={colStyle}>
                            <TableDataRoute url={url} />
                        </Col>
                        {/* data form */}
                        {!addNew&&(
                            <Col md={10} sm={24} xs={24} style={colStyle}>
                                <DataFormRoute url={url}/>
                            </Col>
                        )}
                        
                    </Row>
                </div>
            </LayoutWrapper>
        );
    }
}