import React, { Component } from 'react';
import { Input, Select } from 'antd';
import Form from 'components/uielements/form';
import Checkbox from 'components/uielements/checkbox';
import Button from 'components/uielements/button';

// import Notification from 'components/notification';

const FormItem = Form.Item;
// const Option = Select.Option;

class SignupForm extends Component {
    state = {
        confirmDirty: false,
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.register(values);
            }
        });
    };

    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '+84',
        })(
            <Select style={{ width: 70 }}>
                {/* <Option value="+84">+84</Option> */}
            </Select>
        );
        return (
            <Form onSubmit={this.handleSubmit}>
                <div className="isoSignUpForm">
                    <div className="isoLeftRightComponent">
                        <FormItem>
                            {getFieldDecorator('firstName', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your First name!',
                                    },
                                ],
                            })(<Input size="large" placeholder="First name" />)}
                        </FormItem>

                        <FormItem>
                            {getFieldDecorator('lastName', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your Last name!',
                                    },
                                ],
                            })(<Input size="large" placeholder="Last name" />)}
                        </FormItem>
                    </div>

                    <FormItem hasFeedback>
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                        })(<Input size="large" name="email" id="email" placeholder="Email" />)}
                    </FormItem>
                    <FormItem hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    len: 6,
                                    message: 'Greater than 6 characters',
                                },
                                {
                                    validator: this.checkConfirm,
                                },
                            ],
                        })(<Input size="large" type="password" placeholder="password" />)}
                    </FormItem>
                    <FormItem hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                {
                                    len: 6,
                                    message: 'Greater than 6 characters',
                                },
                                {
                                    validator: this.checkPassword,
                                },
                            ],
                        })(<Input size="large" type="password" onBlur={this.handleConfirmBlur} placeholder="Confirm Password" />)}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('phoneNumber', {
                            rules: [{ required: true, message: 'Please input your phone number!' }],
                        })(
                            <Input addonBefore={prefixSelector} size="large" placeholder="Phone number" type="number" />
                        )}
                    </FormItem>
                    <FormItem style={{ marginBottom: 8 }}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                            rules: [
                                {
                                    required: true,
                                    message: 'ban co dong y voi dk trang web',
                                }
                            ]
                        })(
                            <Checkbox>
                                I have read the <a href="">agreement</a>
                            </Checkbox>
                        )}
                    </FormItem>
                    <FormItem >
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </FormItem>
                </div>
            </Form >
        );
    }
}

const WrappedSignupForm = Form.create()(SignupForm);
export default WrappedSignupForm;
