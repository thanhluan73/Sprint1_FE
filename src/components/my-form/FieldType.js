
import { Input,Icon,Select ,Switch ,Checkbox,Col,Row,DatePicker } from 'antd';
import React from 'react';
const { TextArea } = Input;


const Option = Select.Option;

export const FieldTypeInputText = (val)=>{
    return <Input 
                prefix={<Icon type={val.icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={val.placeholder}
                type="text"
                onChange={val.event.onChange}
                size={val.size}
            />
}
export const FieldTypeNumber = (val)=>{
    return <Input 
                prefix={<Icon type={val.icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={val.placeholder}
                type="number"
                onChange={val.event.onChange}
                size={val.size}
            />
}
export const FieldTypePassword = (val)=>{
    return  <Input 
                prefix={<Icon type={val.icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={val.placeholder}
                type="password"
                onChange={val.event.onChange}
                size={val.size}
            />
}
export const FieldTypeTextArea = (val)=>{
    return  <TextArea  
                prefix={<Icon type={val.icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={val.placeholder}
                onChange={val.event.onChange}
                row={val.rows}
            />
}
export const FieldTypeSelect= (val)=>{
    return  <Select
                showSearch
                style={val.styles}
                placeholder={val.placeholder}
                optionFilterProp="children"
                onChange={val.event.onChange}
                onFocus={val.event.onFocus}
                onBlur={val.event.onBlur}
                size={val.fieldType.size}
                mode={val.fieldType.mode}
                defaultValue={val.fieldType.listOption['listOption'].filter(item=>val.defaultValue.includes(item.id)).map(item=> item.name).name}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
                {
                    val.fieldType.listOption['listOption'].map((item,ind)=>{
                        return <Option key={ind} value={item.name}>{item.name}</Option>
                    })
                }
            </Select>
}
export const FieldTypeSwitch = (val)=>{
    return  <Switch size={val.fieldType.size} defaultChecked />
}
export const FieldTypeCheckbox = (val)=>{
    return  <Checkbox  style={val.styles} onChange={val.event.onChange}/>
}
export const FieldTypeDatePicker=(val)=>{
    return <DatePicker style={{width : '100%'}} size={val.size} />
}
export const FieldTypeCheckboxInline = (val)=>{
    return  <Row type="flex" justify="center">
                {
                    val.fieldType.listCheckbox.map((val,ind)=>{
                        return (val.check===true) ? 
                                <Col key={ind}>
                                    <Checkbox checked={true} style={val.styles} onChange={val.event.onChange}>{val.label}</Checkbox>
                                </Col>
                                : 
                                <Col key={ind}>
                                    <Checkbox  style={val.styles} onChange={val.event.onChange}>{val.label}</Checkbox>
                                </Col>
                    })
                }
            </Row>
}