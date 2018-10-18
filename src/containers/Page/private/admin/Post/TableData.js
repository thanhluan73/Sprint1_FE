import React from "react";
import { connect } from "react-redux";

import { Button } from 'antd';
import PanelWrapper from "containers/Custom/Panel.style";
import TableData from 'containers/DataEditor/TableData';
import { Link } from 'react-router-dom';

// import blogAction from "redux/admin/blog/actions";

const ButtonGroup = Button.Group;
// const { loadPosts, deletePost } = blogAction;

class TableDataComponent extends React.Component {
    state = {
        columns: [
            {
                title: 'Blog title',
                dataIndex: 'title',
                render: (text, record) => (
                    <Link
                        style={{ color: "rgba(0,0,0,0.87)" }}
                        to={this.props.match.url + "/" + record.key}>
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
                            <Button icon="delete" type="danger" onClick={() => this.handleDelete(record.key)} />
                        </ButtonGroup>
                    </span>
                ),
            }],
        dataArr: this.props.dataArr,
        searchAttr: 'title'
    }

    componentDidMount() {
        // this.props.loadPosts();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ dataArr: nextProps.dataArr })
    }

    handleDelete = (id) => {
        // this.props.deletePost(id);
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
        dataArr: state.Blog.posts ? state.Blog.posts : [],
    }),
    // { loadPosts, deletePost }
    null
)(TableDataComponent);