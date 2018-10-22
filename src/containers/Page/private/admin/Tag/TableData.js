import React from "react";
import { connect } from "react-redux";

import { Button, Avatar } from 'antd';
import PanelWrapper from "containers/Custom/Panel.style";
import TableData from 'containers/DataEditor/TableData';
import { Link } from 'react-router-dom';

// import blogAction from "redux/admin/blog/actions";
import {ACCESS_TOKEN} from 'settings/sessionStorage';
import {handleAPI} from 'actions/api';
const ButtonGroup = Button.Group;
// const { loadTags, deleteTag } = blogAction;



class TableDataComponent extends React.Component {
    state = {
        columns: [
            {
                title: "id",
                dataIndex: "id",
                key:`id`,
            },
           {
               title: "Full Name",
               dataIndex: "fullName",
               key:`fullName`,
           },
           {
               title: "Avatar",
               dataIndex: "avatar",
               key:`avatar`,
               render: (txt) => <Avatar size='small' src={`${txt}`} />
           },
           {
               title: "Address",
               dataIndex: "address",
               key:`address`,
           },
           {
               title: "Phone Number",
               dataIndex: "phoneNumber",
               key:`phoneNumber`,
           },
           {
               title: "Email",
               dataIndex: "email",
               key:`email`,
           },
            {
                title: '',
                dataIndex: 'id',
                // key:'id',
                render: (text, record) => (
                    <span>
                        <ButtonGroup className="table-data__button-group">
                            <Link style={{ color: "rgba(0,0,0,0.87)" }} to={this.props.match.url + "/" + text + "/edit"}>
                                <Button icon="edit" />
                            </Link>
                            <Button icon="delete" type="danger" onClick={() => this.handleDelete(record.key)} />
                        </ButtonGroup>
                    </span>
                ),
            }],
        dataArr: this.props.dataArr,
        searchAttr: 'name'
    }

    componentDidMount() {
        var {pageSize,pageIndex,iSearch} = this.state;
        var accesstoken =sessionStorage.getItem(ACCESS_TOKEN);
        var methodType='INFO_API';
        var objectParam={
            endpointAPI:'user',
            objData:null,
            objCount:null,
            accesstoken:accesstoken,
            objectLoadData:{
                // page:pageSize,
                // pageNow:pageIndex,
                // iSearch:iSearch
            },
            ActionType:'FETCHING_ORGAN'
        }
        this.props.handleAPI(methodType,objectParam);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ dataArr: nextProps.dataArr })
    }

    handleDelete = (id) => {
        this.props.deleteTag(id);
    }

    render() {
        return (
            <PanelWrapper>
                <TableData
                    url={this.props.match.url}
                    columns={this.state.columns}
                    dataArr={this.state.dataArr}
                    searchAttr={this.state.searchAttr}
                />
            </PanelWrapper >
        );
    }
}

export default connect(
    state => ({
        dataArr: state.demo ? state.demo : [],
    }),
    // { loadTags, deleteTag }
    {handleAPI}
)(TableDataComponent);