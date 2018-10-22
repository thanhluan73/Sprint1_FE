import React, { Component } from 'react';
import { Input, Select, Cascader } from 'antd';
import Form from 'components/uielements/form';
import Checkbox from 'components/uielements/checkbox';
import Button from 'components/uielements/button';
import { relative } from 'path';
import { Link } from "react-router-dom";
import IntlMessages from "components/utility/intlMessages";

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
        const Option = Select.Option;

        const { size } = this.props;

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
                                        message: 'Vui lòng nhập quốc gia của bạn!',
                                    },
                                ],
                            })(<Select
                                style={{width: '186px',}} 
                                size="large"
                                placeholder="Quốc gia">
                                    <Option value="VN">Việt Nam</Option>
                                    <Option value="TL">Thái Lan</Option>
                                    <Option value="HK">Hong Kong</Option>
                                </Select>)}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('lastName', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập thành phố của bạn!',
                                    },
                                ],
                            })(<Select 
                                style={{ width: '195px'}} 
                                size="large"
                                placeholder="Thành phố">
                                    <Option value="HCM">Hồ Chi Minh</Option>
                                    <Option value="HN">Hà Nội</Option>
                                    <Option value="ĐN">Đà Nẵng</Option>
                                </Select>)}
                        </FormItem>
                    </div>
                    <div className="isoLeftRightComponent">
                        <FormItem>
                            {getFieldDecorator('firstName', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập họ của bạn!',
                                    },
                                ],
                            })(<Input size="large" placeholder="Họ" />)}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('lastName', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập tên của bạn!',
                                    },
                                ],
                            })(<Input size="large" style={{position: relative ,marginLeft: '10px'}} placeholder="Tên" />)}
                        </FormItem>
                    </div>

                    <FormItem hasFeedback>
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'Email bạn nhập không hợp lệ!',
                                },
                                {
                                    required: true,
                                    message: 'Vui lòng nhập Email của công ty!',
                                },
                            ],
                        })(<Input size="large" name="email" id="email" placeholder="Địa chỉ email công ty" />)}
                    </FormItem>
                    {/* <FormItem hasFeedback>
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
                    </FormItem> */}
                    <FormItem>
                        {getFieldDecorator('phoneNumber', {
                            rules: [{ required: true, message: 'Vui lòng nhập số điện thoại công ty!' }],
                        })(
                            <Input addonBefore={prefixSelector} size="large" placeholder="Số điện thoại công ty" type="number" />
                        )}
                    </FormItem>
                    <FormItem>
                            {getFieldDecorator('nameCompany', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập tên công ty của bạn!',
                                    },
                                ],
                            })(<Input size="large" placeholder="Tên công ty" />)}
                    </FormItem>
                    <div className="isoLeftRightComponent">
                    <FormItem>
                            {getFieldDecorator('sizeCompany', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập size công ty!',
                                    },
                                ],
                            })(
                            <Select
                                style={{width: '181px',}} 
                                size="large"
                                placeholder="Kích thước của công ty">
                                    <Option value="l">0 - 10</Option>
                                    <Option value="m">11 - 50</Option>
                                    <Option value="s">51 - 100</Option>
                                </Select>)}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('taxCode', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập MST công ty!',
                                    },
                                ],
                            })(<Input style={{ width: '195px', marginLeft : '20px'}} size="large" placeholder="Mã số thuế"/>)}
                        </FormItem>
                    </div>
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
                        // (
                        //     <Checkbox>
                        //         I have read the <a href="">agreement</a>
                        //     </Checkbox>
                        // )
                        }
                    </FormItem>
                    <FormItem >
                        {/* <Button type="primary" htmlType="submit">
                            Register
                        </Button> */}
                        <Link to="/confirmregister">
                            <h3><IntlMessages id="page.confirmRegister" /></h3>
                        </Link>
                    </FormItem>
                </div>
            </Form >
        );
    }
}

const WrappedSignupForm = Form.create()(SignupForm);
export default WrappedSignupForm;
