import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import userAction from "redux/admin/user/actions";

import { Button } from 'antd';
import PanelWrapper from "containers/Custom/Panel.style";
import TableData from 'containers/DataEditor/TableData';

const { loadAllUser, deleteUser } = userAction;
const ButtonGroup = Button.Group;

class TableDataComponent extends React.Component {
    state = {
        dataArr: this.props.dataArr,
        searchAttr: 'email'
    };

    componentDidMount() {
        this.props.loadAllUser();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ dataArr: nextProps.dataArr })
    }

    handleDeleteUser = (user_id) => {
        this.props.deleteUser(user_id);
    }

    columns = [
        {
            title: 'User name',
            dataIndex: 'email',
            render: (text, record) => (
                <Link style={{ color: "rgba(0,0,0,0.87)" }} to={this.props.match.url + "/" + record.id}>
                    {text}
                </Link>
            )
        },
        {
            title: '',
            dataIndex: 'action',
            render: (text, record) => (
                <span>
                    <ButtonGroup className="table-data__button-group">
                        <Link style={{ color: "rgba(0,0,0,0.87)" }} to={this.props.match.url + "/" + record.key + "/edit"}>
                            <Button icon="edit" />
                        </Link>
                        <Button icon="delete" type="danger" onClick={() => this.handleDeleteUser(record.key)} />
                    </ButtonGroup>
                </span>
            ),
        }];

    render() {
        return (
            <PanelWrapper>
                <TableData
                    url={this.props.match.url}
                    columns={this.columns}
                    dataArr={this.state.dataArr}
                    searchAttr={this.state.searchAttr}
                />
            </PanelWrapper >
        );
    }
}

export default connect(
    state => ({
        dataArr: state.User.users ? state.User.users : [],
    }),
    { loadAllUser, deleteUser }
)(TableDataComponent);
