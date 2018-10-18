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
                type: '',
                firstName: '',
                lastName: '',
            },
            fullScreenMode: false,
            columns: [
                {
                    key: "id",
                    label: "User id",
                    formItem: {
                        name: "ReadOnly"
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
                    key: "firstName",
                    label: "First Name",
                    formItem: {
                        name: FormItem.Input,
                        action: this.changeFirstName
                    },
                },
                {
                    key: "lastName",
                    label: "Last Name",
                    formItem: {
                        name: FormItem.Input,
                        action: this.changeLastName
                    },
                },
                {
                    key: "type",
                    label: "User type",
                    formItem: {
                        name: FormItem.Select,
                        action: this.changeType,
                        options: [
                            {
                                key: 1,
                                value: 'New register',
                                text: 'New register'
                            },
                            {
                                key: 2,
                                value: 'Administrator',
                                text: 'Administrator'
                            },
                            {
                                key: 3,
                                value: 'Manager',
                                text: 'Manager'
                            },
                            {
                                key: 4,
                                value: 'Teacher',
                                text: 'Teacher'
                            },
                            {
                                key: 5,
                                value: 'Student',
                                text: 'Student'
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
                    key: "birthDay",
                    label: "Birth day",
                    formItem: {
                        name: FormItem.DatePicker,
                        action: this.changeBirthDay
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

    changeFirstName = (e) => {
        const value = e.target.value;
        const state = this.state;
        state.data_record = { ...state.data_record, firstName: value };
        this.setState(state)
    }

    changeLastName = (e) => {
        const value = e.target.value;
        const state = this.state;
        state.data_record = { ...state.data_record, lastName: value };
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

    changeBirthDay = (date, dateStr) => {
        const state = this.state;
        state.data_record = { ...state.data_record, birthDay: dateStr };
        this.setState(state)
    }

    handleSubmit = () => {
        const data_record_tmp = this.state.data_record;
        const data_record = { ...data_record_tmp, roleName: data_record_tmp.type };
        if (data_record.id) {
            // change profile
            this.props.changeProfile(data_record)
        } else {
            // create new user
            this.props.addNewUser(data_record)
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