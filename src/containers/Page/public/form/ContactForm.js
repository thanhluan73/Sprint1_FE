import React from 'react';
import { Form, Select, Input, Button } from 'antd';
import ContactFormWrapper from './ContactForm.style';

const FormItem = Form.Item;
const {TextArea} = Input;
const { Option } = Select;
class ContactForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <ContactFormWrapper>

                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        label="Ho ten"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        {getFieldDecorator('note', {
                            rules: [{ required: true, message: 'Vui long nhap thong tin!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        label="Email"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your note!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        label="So dien thoai"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input />
                    </FormItem>
                    <FormItem
                        label="Chon loai dich vu"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        {getFieldDecorator('services', {
                            rules: [{ required: true, message: 'Please select your services!' }],
                        })(
                            <Select
                                mode="multiple"
                                placeholder="Select a option and change input text above"
                                onChange={this.handleSelectChange}
                            >
                                <Option value="a">service a</Option>
                                <Option value="b">service b</Option>
                                <Option value="c">service c</Option>
                                <Option value="d">service d</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        label="Nhap noi dung"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        {getFieldDecorator('services', {
                            rules: [{ required: true, message: 'Please select your content!' }],
                        })(
                            <TextArea rows={5}/>
                        )}
                    </FormItem>
                    <FormItem
                        wrapperCol={{ span: 24 }}
                    >
                        <Button type="primary" htmlType="submit" size="large" block>
                            Gui
                        </Button>
                    </FormItem>
                </Form>
            </ContactFormWrapper>
        );
    }
}

export default Form.create()(ContactForm);