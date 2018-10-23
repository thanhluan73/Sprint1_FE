import React, { Component } from 'react';
import { Input, Select } from 'antd';
import Form from 'components/uielements/form';
import Checkbox from 'components/uielements/checkbox';
import Button from 'components/uielements/button';
// import { relative } from 'path';
// import { Link } from "react-router-dom";
// import IntlMessages from "components/utility/intlMessages";

// import Notification from 'components/notification';

const FormItem = Form.Item;
// const Option = Select.Option;

class ConfirmRegisterForm extends Component {
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
        // const Option = Select.Option;

        // const { size } = this.props;

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
                    <FormItem>
                        {getFieldDecorator('Email', {
                            rules: [{ required: true, message: 'Vui lòng nhập email của bạn!' }],
                        })(
                            <Input size="large" placeholder="Email" />
                        )}
                    </FormItem>
                    <FormItem hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Vui lòng nhập mật khẩu!',
                                },
                                {
                                    len: 6,
                                    message: 'Greater than 6 characters',
                                },
                                {
                                    validator: this.checkConfirm,
                                },
                            ],
                        })(<Input size="large" type="password" placeholder="Mật khẩu" />)}
                    </FormItem>
                    <FormItem hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Vui lòng xác nhận lại mật khẩu!',
                                },
                                {
                                    len: 6,
                                    message: 'Greater than 6 characters',
                                },
                                {
                                    validator: this.checkPassword,
                                },
                            ],
                        })(<Input size="large" type="password" onBlur={this.handleConfirmBlur} placeholder="Xác nhận mật khẩu" />)}
                    </FormItem>

                    <FormItem>
                        {getFieldDecorator('phoneNumber', {
                            rules: [{ required: true, message: 'Vui lòng nhập số điện thoại của bạn!' }],
                        })(
                            <Input addonBefore={prefixSelector} size="large" placeholder="Số điện thoại của bạn" type="number" />
                        )}
                    </FormItem>
                    <FormItem>
                            {getFieldDecorator('addressUser', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập địa chỉ của bạn!',
                                    },
                                ],
                            })(<Input size="large" placeholder="Địa chỉ của bạn" />)}
                    </FormItem>
                    <FormItem style={{ marginBottom: 8 }}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                            rules: [
                                {
                                    required: true,
                                    message: 'Bạn có đồng ý với các điều kiện của chúng tôi!',
                                }
                            ]
                        })
                        }
                        <Checkbox>
                            I have read the <span>agreement</span>
                        </Checkbox>
                    </FormItem>
                    <FormItem >
                        <Button type="primary" htmlType="submit">
                            Đăng ký
                        </Button>
                        {/* <Link to="/confirmregister">
                            <h3><IntlMessages id="page.confirmRegister" /></h3>
                        </Link> */}
                    </FormItem>
                </div>
            </Form >
        );
    }
}

const WrappedSignupForm = Form.create()(ConfirmRegisterForm);
export default WrappedSignupForm;
