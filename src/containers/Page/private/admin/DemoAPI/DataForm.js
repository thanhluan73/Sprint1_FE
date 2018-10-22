import React from "react";
import { connect } from "react-redux";

import userAction from "redux/admin/user/actions";

import PanelWrapper from "containers/Custom/Panel.style";
import DataForm from 'containers/DataEditor/DataForm';
import FormItem from 'components/formItem/FormItem';

const { loadRole, addNewUser, changeProfile } = userAction;
class DataFormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data_record: {
                fullName:'',
                address:'',
                phoneNumber:'',
                email:'',
                id:'',
                avatar:''
            },
            fullScreenMode: false,
            columns: [
                // {
                //     key: "id",
                //     label: "User id",
                //     formItem: {
                //         name: FormItem.Input,
                //         action: this.changeId
                //     }
                // },
                {
                    key: "id1",
                    label: "User id",
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
                    key: "fullName",
                    label: "First Name",
                    formItem: {
                        name: FormItem.Input,
                        action: this.changeFullName
                    },
                },
                {
                    key: "avatar",
                    label: "Avatar",
                    formItem: {
                        name: FormItem.Select,
                        action: this.changeAvatar,
                        options: [
                            {
                                key: 1,
                                value: 'https://s3.amazonaws.com/uifaces/faces/twitter/haruintesettden/128.jpg',
                                text: 'Image 1'
                            },
                            {
                                key: 2,
                                value: 'https://s3.amazonaws.com/uifaces/faces/twitter/we_social/128.jpg',
                                text: 'Image 2'
                            },
                            {
                                key: 3,
                                value: 'https://s3.amazonaws.com/uifaces/faces/twitter/surgeonist/128.jpg',
                                text: 'Image 3'
                            },
                            {
                                key: 4,
                                value: 'https://s3.amazonaws.com/uifaces/faces/twitter/chaensel/128.jpg',
                                text: 'Image 4'
                            },
                            {
                                key: 5,
                                value: 'https://s3.amazonaws.com/uifaces/faces/twitter/mactopus/128.jpg',
                                text: 'Image 5'
                            },
                        ]
                    },
                },
                {
                    key: "phoneNumber",
                    label: "Phone Number",
                    formItem: {
                        name: FormItem.InputNumber,
                        action: this.changePhoneNumber
                    }
                },
                {
                    key: "address",
                    label: "Address",
                    formItem: {
                        name: FormItem.Input,
                        action: this.changeAddress
                    }
                },
            ]
        }
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.loadRole(this.props.match.params.id);
        }
    }

    componentWillReceiveProps(nextProps) {
        const data_record = this.props.dataArr.find(function (element) {
            const id = nextProps.match.params.id;
            return element.id === id;
        });
        const state = this.state;
        state.data_record = { ...data_record, type: nextProps.role.length > 0 ? nextProps.role[0] : '' };
        this.setState(state)
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
        state.data_record = { ...state.data_record, fullName: value };
        this.setState(state)
    }
    changeId = (e) => {
        const value = e.target.value;
        const state = this.state;
        state.data_record = { ...state.data_record, id: value };
        this.setState(state)
    }

    changeLastName = (e) => {
        const value = e.target.value;
        const state = this.state;
        state.data_record = { ...state.data_record, lastName: value };
        this.setState(state)
    }
    changeAddress=(e)=>{
        const value = e.target.value;
        const state = this.state;
        state.data_record = { ...state.data_record, address: value };
        this.setState(state)
    }

    changePhoneNumber = (e) => {
        const value = e.target.value;
        const state = this.state;
        state.data_record = { ...state.data_record, phoneNumber: value };
        this.setState(state)
    }

    changeType = (value, action) => {
        const state = this.state;
        state.data_record = { ...state.data_record, type: value };
        this.setState(state)
    };
    changeAvatar = (value, action) => {
        const state = this.state;
        state.data_record = { ...state.data_record, avatar: value };
        this.setState(state)
    };

    changeBirthDay = (date, dateStr) => {
        const state = this.state;
        state.data_record = { ...state.data_record, birthDay: dateStr };
        this.setState(state)
    }

    handleSubmit = () => {
        const data_record_tmp = this.state.data_record;
        const data_record = { ...data_record_tmp};
        this.props.handleSubmitAdd(data_record)
        // console.log();
        // if (data_record.id) {
        //     // change profile
        //     // this.props.changeProfile(data_record)
        //     console.log(data_record);
        // } else {
        //     // create new user
        //     console.log(data_record);
        //     // this.props.addNewUser(data_record)
        // }
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
                    handleFullScreenMode={this.handleFullScreenMode}
                />
            </PanelWrapper >
        );
    }
}

export default connect(
    state => ({
        dataArr: state.User.users ? state.User.users : [],
        role: state.User.role ? state.User.role : []
    }),
    { loadRole, addNewUser, changeProfile }
)(DataFormComponent);