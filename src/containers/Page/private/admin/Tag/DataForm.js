import React from "react";
import { connect } from "react-redux";

import PanelWrapper from "containers/Custom/Panel.style";
import DataForm from 'containers/DataEditor/DataForm';
import FormItem from 'components/formItem/FormItem';
import {ACCESS_TOKEN} from 'settings/sessionStorage';
import {handleAPI} from 'actions/api';
// import blogAction from "redux/admin/blog/actions";

// const { loadTags, addTag, changeTag, deleteTag } = blogAction;

class DataFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data_record: {
            },
            fullScreenMode: false,
            columns: [ 
                {
                    key: "id",
                    label: "Tag id",
                    formItem: {
                        name: "ReadOnly"
                    }
                },
                {
                    key: "name",
                    label: "Tag name",
                    formItem: {
                        name: FormItem.Input,
                        action: this.changeTagName
                    }
                }
            ],
        }
    }
    componentWillMount(){
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
        const data_record = nextProps.dataArr.find(function (element) {
            const id = nextProps.match.params.id;
            return element.id.toString() === id;
        });

        const state = this.state;
        state.data_record = { ...data_record };
        this.setState(state)
    }

    changeTagName = (e) => {
        const value = e.target.value;
        const state = this.state;
        state.data_record = { ...state.data_record, name: value };
        this.setState(state)
    }

    handleSubmit = () => {
        const data_record = this.state.data_record;
        if (data_record.name && data_record !== '') {
            console.log(data_record);
            if (data_record.id) {
                // change profile
                this.props.changeTag(data_record)
            } else {
                // create new user
                this.props.addTag(data_record)
            }

        }
    }

    handleDelete = (id) => {
        this.props.deleteTag(id);
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
        dataArr: state.demo ? state.demo : [],
    }),
    // { loadTags, addTag, changeTag, deleteTag }
    {handleAPI}
)(DataFormComponent);