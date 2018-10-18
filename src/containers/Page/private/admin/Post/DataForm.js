import React from "react";
import { connect } from "react-redux";

import moment from 'moment';

import PanelWrapper from "containers/Custom/Panel.style";
import DataForm from 'containers/DataEditor/DataForm';
import FormItem from 'components/formItem/FormItem';

// import blogAction from "redux/admin/blog/actions";

// const { loadTags, loadPostTags, addPost, changePost, deletePost } = blogAction;

class DataFormComponent extends React.Component {
    constructor(props) {
        super(props);
        const defaultDate = moment(new Date()).format("DD/MM/YYYY")
        this.state = {
            data_record: {
                active: false,
                createDate: defaultDate,
                tags: []
            },
            fullScreenMode: false,
            columns: [
                {
                    key: "id",
                    label: "Post id",
                    formItem: {
                        name: "ReadOnly"
                    }
                },
                {
                    key: "title",
                    label: "Post title",
                    formItem: {
                        name: FormItem.Input,
                        action: this.changeTitle
                    }
                },
                {
                    key: "createDate",
                    label: "Post create day",
                    formItem: {
                        name: FormItem.DatePicker,
                        action: this.changeDatetime
                    }
                },
                {
                    key: "updateDate",
                    label: "Post update day",
                    formItem: {
                        name: FormItem.DatePicker,
                        action: this.changeDatetime
                    }
                },
                {
                    key: "active",
                    label: "Post active",
                    formItem: {
                        name: FormItem.Switch,
                        action: this.changeActive
                    }
                },
                {
                    key: "tag",
                    label: "Post Tags",
                    formItem: {
                        name: FormItem.Select,
                        mode: 'tags',
                        options: [
                        ],
                        action: this.changeSelected,
                    },
                },
                {
                    key: "description",
                    label: "Blog description",
                    formItem: {
                        name: FormItem.TextArea,
                        action: this.changeDescription
                    }
                },
                {
                    key: "bodyContent",
                    label: "Blog Content",
                    formItem: {
                        name: FormItem.TextEditer,
                        action: this.changeContent
                    }
                }
            ],
        }
    }

    componentDidMount() {
        this.props.loadTags();
        const id = this.props.match.params.id
        if (id) {
            this.props.loadPostTags(id)
        }
    }

    componentWillReceiveProps(nextProps) {
        const data_record = nextProps.dataArr.find(function (element) {
            const id = nextProps.match.params.id;
            return element.id.toString() === id;
        });
        const state = { ...this.state };

        state.data_record = { ...data_record, tags: nextProps.postTags };

        const tags = nextProps.tags.map(item => {
            return {
                key: item.id,
                value: JSON.stringify(item),
                text: item.name,
            }
        })

        const columns = { ...state.columns }
        columns[5].formItem.options = tags
        state.columns = columns
        this.setState(state)
    }

    changeTitle = (e) => {
        const value = e.target.value;
        const state = this.state;
        state.data_record = { ...state.data_record, title: value };
        this.setState(state)
    }

    changeActive = (checked) => {
        const state = this.state;
        state.data_record = { ...state.data_record, active: checked };
        this.setState(state)
    }

    changeSelected = (value) => {
        const tags = value.map(item => {
            return JSON.parse(item)
        })

        const state = this.state;
        state.data_record = { ...state.data_record, tags: tags };
        this.setState(state)
    }

    changeDescription = (e) => {
        const value = e.target.value;
        const state = this.state;
        state.data_record = { ...state.data_record, description: value }
        this.setState(state)
    }

    changeContent = (value) => {
        const state = this.state;
        state.data_record = { ...state.data_record, content: value }
        this.setState(state)
    }

    changeDatetime = (date, dateString) => {
    }

    handleSubmit = () => {
        const data_record = this.state.data_record;
        console.log('====================================');
        console.log(data_record);
        console.log('====================================');
        if (data_record.id) {
            // change profile
            this.props.changePost(data_record)
        } else {
            // create new user
            this.props.addPost(data_record)
        }
    }

    handleDelete = (id) => {
        console.log('handle delete ====================================');
        console.log(id);
        console.log('====================================');
        this.props.deletePost(id);
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
        dataArr: state.Blog.posts ? state.Blog.posts : [],
        tags: state.Blog.tags ? state.Blog.tags : [],
        postTags: state.Blog.postTags ? state.Blog.postTags : []
    }),
    // { loadTags, loadPostTags, addPost, changePost, deletePost }
    null
)(DataFormComponent);