import { DatePicker, Form, Input, Select, Switch } from 'antd';
import Editor from '../../components/uielements/editor';
import moment from 'moment';
import React from 'react';

const FormItem = Form.Item;
export default class extends React.Component {

    static Input = ({ formItemLayout, dataField, action }) => {
        return (
            <FormItem {...formItemLayout} label={dataField.label}>
                <Input onChange={action} placeholder={`Please input ${dataField.label.toLowerCase()}`} defaultValue={dataField.value} />
            </FormItem>
        );
    }

    static InputNumber = ({ formItemLayout, dataField, action }) => {
        return (
            <FormItem {...formItemLayout} label={dataField.label}>
                <Input onChange={action} placeholder={`Please input ${dataField.label.toLowerCase()}`} defaultValue={dataField.value} type="number" />
            </FormItem>
        );
    }

    static PlainText = ({ formItemLayout, dataField }) => {
        return (
            <FormItem
                {...formItemLayout}
                label={dataField.label}
            >
                <span className="ant-form-text">{dataField.value}</span>
            </FormItem>
        );
    }
    static DatePicker = ({ formItemLayout, dataField, action }) => {
        const dateFormat = 'DD/MM/YYYY';
        let defaultValue = moment(new Date(), dateFormat)
        if (!dataField) {
            defaultValue = moment(dataField.value, dateFormat)
        }
        return (
            <FormItem
                {...formItemLayout}
                label={dataField.label}
            >
                <DatePicker onChange={action} defaultValue={defaultValue} format={dateFormat} />
            </FormItem>
        );
    }
    static Select = ({ formItemLayout, dataField, config, action }) => {
        const Option = Select.Option;
        return (
            <FormItem
                {...formItemLayout}
                label={dataField.label}
            >
                <Select
                    showSearch
                    placeholder={`Select a ${dataField.label.toLowerCase()}`}
                    defaultValue={dataField.value}
                    mode={config.mode}
                    onChange={action}
                >
                    {
                        config.options.map((option) => {
                            return (
                                <Option key={option.text} value={option.value}>{option.text}</Option>
                            );
                        })
                    }
                </Select>
            </FormItem>
        );
    }
    static TextEditer = ({ formItemLayout, dataField, action, readOnly = false }) => {
        const editorOption = {
            value: dataField.value ? dataField.value : "",
            action: action,
            readOnly: readOnly
        };

        return (
            <FormItem
                {...formItemLayout}
                label={dataField.label}>
                <Editor
                    {...editorOption} />
            </FormItem>
        );
    }
    static TextArea = ({ formItemLayout, dataField, action }) => {
        console.log('TextArea====================================');
        console.log(dataField.value);
        console.log('====================================');
        return (
            <FormItem
                {...formItemLayout}
                label={dataField.label}>
                <Input.TextArea
                    defaultValue={dataField.value}
                    onChange={action}
                    placeholder={`Please input ${dataField.label.toLowerCase()}`} />
            </FormItem>
        );
    }

    static Switch = ({ formItemLayout, dataField, action, disabled = false }) => {
        const checked = dataField.value ? true : false
        return (
            <FormItem
                {...formItemLayout}
                label={dataField.label}>
                <Switch
                    checked={checked} onChange={action}
                    disabled={disabled}
                />
            </FormItem>
        );
    }
}