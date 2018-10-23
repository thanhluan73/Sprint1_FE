import React from "react";
import { connect } from "react-redux";

import { withRouter} from 'react-router-dom';

import PanelWrapper from "containers/Custom/Panel.style";
import DataForm from 'containers/DataEditor/DataForm';
import FormItem from 'components/formItem/FormItem';
class DataFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data_record: {
                name:'',
                phone:'',
                email:'',
                id:'',
                size:''
            },
            fullScreenMode: false,
            columns: [
                {
                    key: "id",
                    label: "Company id",
                    formItem: {
                        name: FormItem.Input,
                        action: this.changeId
                    }
                },
                {
                    key: "email",
                    label: "Email",
                    formItem: {
                        name: FormItem.Input,
                        action: this.changeEmail
                    }
                },
                {
                    key: "name",
                    label: "Name",
                    formItem: {
                        name: FormItem.Input,
                        action: this.changeFullName
                    },
                },
               
                {
                    key: "phone",
                    label: "Phone Number",
                    formItem: {
                        name: FormItem.InputNumber,
                        action: this.changePhoneNumber
                    }
                },
                {
                    key: "size",
                    label: "Size",
                    formItem: {
                        name: FormItem.InputNumber,
                        action: this.changeSize
                    }
                },
            ]
        }
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        this.setState({data_record:nextProps.itemEdit});
    }

    changeEmail = (e) => {
        const value = e.target.value;
        const state = this.state;
        state.data_record = { ...state.data_record, email: value };
        this.setState(state)
    }

    changeFullName = (e) => {
        const value = e.target.value;
        const state = this.state;
        state.data_record = { ...state.data_record, name: value };
        this.setState(state)
    }
    changeId = (e) => {
        const value = e.target.value;
        const state = this.state;
        state.data_record = { ...state.data_record, id: value };
        this.setState(state)
    }

    changeSize=(e)=>{
        const value = e.target.value;
        const state = this.state;
        state.data_record = { ...state.data_record, size: value };
        this.setState(state)
    }

    changePhoneNumber = (e) => {
        const value = e.target.value;
        const state = this.state;
        state.data_record = { ...state.data_record, phone: value };
        this.setState(state)
    }

    handleSubmit = () => {
        const addNew = window.location.href.split("/")[window.location.href.split('/').length - 1] === 'add-new';
        const data_record_tmp = this.state.data_record;
        const data_record = { ...data_record_tmp};
        if (!addNew) {
            // change profile
            // console.log(data_record);
            this.props.handleSubmitEdit(data_record);
        } else {
            this.props.handleSubmitAdd(data_record)
        }
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
                    handleDelete={this.props.handleDelete}
                    handleFullScreenMode={this.handleFullScreenMode}
                />
            </PanelWrapper >
        );
    }
}

const mapStateToProps = state => {
    return {
        dataArr: state.demo.demo ? state.demo.demo : [],
        itemEdit:state.demo.itemEdit
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}
       

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DataFormComponent));