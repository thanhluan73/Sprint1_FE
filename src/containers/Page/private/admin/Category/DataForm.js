import React from "react";
import { connect } from "react-redux";

import PanelWrapper from "containers/Custom/Panel.style";
import DataForm from 'containers/DataEditor/DataForm';
import FormItem from 'components/formItem/FormItem';

import blogAction from "redux/admin/blog/actions";

const { loadCategorys, addCategory, changeCategory, deleteCategory } = blogAction;

class DataFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data_record: {
                active: false
            },
            fullScreenMode: false,
            columns: [
                {
                    key: "id",
                    label: "Category id",
                    formItem: {
                        name: "ReadOnly"
                    }
                },
                {
                    key: "name",
                    label: "Category name",
                    formItem: {
                        name: FormItem.Input,
                        action: this.changeCategorName
                    }
                },
                {
                    key: "active",
                    label: "Category active",
                    formItem: {
                        name: FormItem.Switch,
                        action: this.changeActive
                    }
                },
                {
                    key: "description",
                    label: "Category description",
                    formItem: {
                        name: FormItem.TextArea,
                        action: this.changeCategoryDescription
                    }
                }
            ],
        }
    }

    componentWillReceiveProps(nextProps) {
        const data_record = nextProps.dataArr.find(function (element) {
            const id = nextProps.match.params.id;
            return element.id.toString() === id;
        });
        const state = this.state;
        state.data_record = { ...data_record };
        this.setState(state)
    }

    changeCategorName = (e) => {
        const value = e.target.value;
        const state = this.state;
        state.data_record = { ...state.data_record, name: value };
        this.setState(state)
    }

    changeActive = (checked) => {
        const state = this.state;
        state.data_record = { ...state.data_record, active: checked };
        this.setState(state)
    }

    changeCategoryDescription = (e) => {
        const value = e.target.value;
        const state = this.state;
        state.data_record = { ...state.data_record, description: value }
        this.setState(state)
    }

    handleSubmit = () => {
        const data_record = this.state.data_record;
        if (data_record.id) {
            // change profile
            this.props.changeCategory(data_record)
        } else {
            // create new user
            this.props.addCategory(data_record)
        }
    }

    handleDelete = (id) => {
        this.props.deleteCategory(id);
    }

    handleFullScreenMode = (mode) => {
        this.setState(() => {
            return {
                fullScreenMode: mode
            };
        });
    }

    render() {
        return (
            <PanelWrapper className={this.state.fullScreenMode ? "full-screen-mode" : ""}>
                <DataForm
                    dataItem={this.state.data_record}
                    url={this.props.match.url}
                    columns={this.state.columns}
                    handleSubmit={this.handleSubmit}
                    handleDelete={this.handleDelete}
                    handleFullScreenMode={this.handleFullScreenMode}
                />
            </PanelWrapper >
        );
    }
}

export default connect(
    state => ({
        dataArr: state.Blog.categorys ? state.Blog.categorys : [],
    }),
    { loadCategorys, addCategory, changeCategory, deleteCategory }
)(DataFormComponent);