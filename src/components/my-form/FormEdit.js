import React from 'react';
import { Form,Row,Col,Tooltip} from 'antd';
import {FieldTypeInputText,FieldTypeNumber,FieldTypePassword,FieldTypeDatePicker,FieldTypeCheckboxInline,FieldTypeTextArea,FieldTypeCheckbox,FieldTypeSelect,FieldTypeSwitch} from './FieldType';
import {ButtonTypeSubmit,ButtonTypeBack} from './ButtonType';
const FormItem = Form.Item;

const triggerTooltip="hover";
const placementTooltip="topLeft";
const overlayClassNameTooltip="numeric-input";
class FormByMe extends React.Component{
    state={
        loadding:false,

    }
    renderFormItem(val) {
        switch (val.fieldType.type){
            case "INPUT_TEXT":
                return FieldTypeInputText(val);
            case "INPUT_PASSWORD":
                return FieldTypePassword(val);
            case "NUMBER":
                return FieldTypeNumber(val);
            case "TEXT_AREA":
                return FieldTypeTextArea(val);
            case "SELECT":
                return FieldTypeSelect(val);
            case "SWITCH":
                return FieldTypeSwitch(val);
            case "DATE_PICKER":
                return FieldTypeDatePicker(val);
            case "CHECKBOX":
                return (val.fieldType.layout==='inline')?  FieldTypeCheckboxInline(val): FieldTypeCheckbox(val);
            default: return FieldTypeInputText(val);
        }
    }
    renderButtonForm(val) {
        switch (val.type){
            case "SUBMIT":
                return ButtonTypeSubmit(val);
            case "BACK":
                return ButtonTypeBack(val);
            default: return ButtonTypeSubmit(val);
        }
    }
    
    render(){
        var {layout,listButton,styles,listField,onSubmit} = this.props;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = layout === 'horizontal' ? {
            labelCol: { span: 10 },
            wrapperCol: { span: 14 },
          } : null;
          const buttonItemLayout = layout === 'horizontal' ? {
            wrapperCol: { span: 14, offset: 6 },
          } : null;

        return ( <Form layout={layout} style={styles}  onSubmit={(e)=>onSubmit(e,this.props)}>
                    {
                        listField.map((val,ind)=>{
                        return <FormItem
                                    key={ind}
                                    label={val.label}
                                    {...formItemLayout}
                                >
                                    <Tooltip
                                        trigger={triggerTooltip}
                                        title={val.description}
                                        placement={placementTooltip}
                                        overlayClassName={overlayClassNameTooltip}
                                    >
                                        {
                                            getFieldDecorator(`${val.id}`, 
                                            {
                                            initialValue:val.defaultValue,
                                            rules: [
                                                (val.typeValidation!==null)?
                                                (
                                                    {
                                                        type: val.typeValidation, message: val.messageValidation,
                                                    },
                                                    { 
                                                        required: val.required, message: val.message 
                                                    }
                                                )
                                                :
                                                { 
                                                    required: val.required, message: val.message 
                                                }
                                            ],
                                        })(
                                            this.renderFormItem(val,this.state.loadding)
                                        )
                                        }
                                    </Tooltip>
                                </FormItem>
                        })
                    }
                    <Row type="flex" justify="center">
                        {
                            listButton.map((val,ind)=>{
                                return  <Col key={ind} style={val.styles}>
                                            <FormItem 
                                                {...buttonItemLayout}
                                            >
                                                {this.renderButtonForm(val)}
                                            </FormItem>
                                        </Col>
                            })
                        }
                    </Row>
                   
                </Form>
        )
    }
}
export default Form.create()(FormByMe);