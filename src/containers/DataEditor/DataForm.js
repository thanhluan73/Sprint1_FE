import React from 'react';
import { connect } from "react-redux";

import DataFormWrapper from './DataForm.style';
import { Form, Button } from 'antd';
import FormItem from 'components/formItem/FormItem';

const ButtonGroup = Button.Group;

class DataForm extends React.Component {
    state = {
        editable: this.props.url.split("/")[this.props.url.split('/').length - 1] === "edit",
        create: this.props.url.split("/")[this.props.url.split('/').length - 1] === "add-new",
        columns: this.props.columns,
        dataItem: this.props.dataItem,
        fullScreenMode: false
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...this.state, dataItem: nextProps.dataItem })
    }

    handleFullScreenMode = () => {
        this.setState(({ fullScreenMode }) => {
            return {
                fullScreenMode: !fullScreenMode
            };
        });
        this.props.handleFullScreenMode(!this.state.fullScreenMode);
    }

    handleEditable = (enable) => {
        this.setState(
            {
                ...this.state,
                editable: enable
            }
        );
        if (!enable) {
            this.props.handleSubmit()
        }
    }

    handleDelete = () => {
        this.props.handleDelete(this.state.dataItem.id)
    }

    render() {
        const formitemlayout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };

        return (
            <DataFormWrapper>
                {/* View {this.props.id}
                <p>
                    {this.props.basePath}
                </p> */}

                {/* control goup */}
                {this.state.editable || this.state.create ?
                    (
                        // editable
                        <div>
                            <Form onSubmit={this.handleSubmit}>
                                <div className="form-header">
                                    <Button icon="save" className="form-header__control" type="primary" onClick={() => this.handleEditable(false)}>Save</Button>
                                    <ButtonGroup className="form-header__control">
                                        <Button icon={this.state.fullScreenMode ? "shrink" : "arrows-alt"} className="form-header__control" onClick={this.handleFullScreenMode} />
                                    </ButtonGroup>
                                </div>
                                <div className="form-body">
                                    {this.state.columns.map((item) => {
                                        const field = item.key;
                                        const formItem = item.formItem;
                                        const FormItemName = formItem.name;

                                        if (this.state.create && (field === 'email' || field === 'type' || field === 'bodyContent')) {

                                            if (field === 'bodyContent') {
                                                return <FormItemName
                                                    key={field}
                                                    formitemlayout={formitemlayout}
                                                    dataField={{
                                                        label: item.label,
                                                        value: this.state.dataItem.content ? this.state.dataItem.content : ""
                                                    }}
                                                    config={formItem}
                                                    action={formItem.action}
                                                />
                                            } else {
                                                return <FormItemName
                                                    key={field}
                                                    formitemlayout={formitemlayout}
                                                    dataField={{
                                                        label: item.label,
                                                        value: this.state.dataItem[field]
                                                    }}
                                                    config={formItem}
                                                    action={formItem.action}
                                                />
                                            }

                                        }
                                        else if (!(field === 'id' || field === 'email' || field === 'type' || field === 'birthDay' || field === 'createDate' || field === 'updateDate')) {
                                            
                                            if (FormItemName === "ReadOnly") {
                                                return <FormItem.PlainText
                                                    key={field}
                                                    formitemlayout={formitemlayout}
                                                    dataField={{
                                                        label: item.label,
                                                        value: this.state.dataItem[field]
                                                    }} />
                                            } else if (field === "bodyContent") {
                                                return <FormItemName
                                                    key={field}
                                                    formitemlayout={formitemlayout}
                                                    dataField={{
                                                        label: item.label,
                                                        value: this.state.dataItem.content ? this.state.dataItem.content : ""
                                                    }}
                                                    config={formItem}
                                                    action={formItem.action}
                                                    readOnly={false}
                                                />
                                            } else if (field === 'tag') {
                                                console.log('tags ====================================');
                                                console.log(this.state.dataItem.tags);
                                                console.log('====================================');
                                                let value = []
                                                if (this.state.dataItem.tags) {
                                                    value = this.state.dataItem.tags.map(item => {
                                                        return JSON.stringify(item)
                                                    })
                                                }
                                                return <FormItemName
                                                    key={field}
                                                    formitemlayout={formitemlayout}
                                                    dataField={{
                                                        label: item.label,
                                                        value: value
                                                    }}
                                                    config={formItem}
                                                    action={formItem.action}
                                                />
                                            } else {
                                                console.log('edit table====================================');
                                                console.log(field);
                                                console.log(this.state.dataItem[field]);
                                                console.log('====================================');
                                                return <FormItemName
                                                    key={field}
                                                    formitemlayout={formitemlayout}
                                                    dataField={{
                                                        label: item.label,
                                                        value: this.state.dataItem[field]
                                                    }}
                                                    config={formItem}
                                                    action={formItem.action}
                                                />
                                            }
                                        }
                                        return <div key={field}></div>
                                    })}
                                </div>
                            </Form>
                        </div>
                    ) :
                    (
                        // readonly
                        <div className='readonly'>
                            <div className="form-header">
                                <ButtonGroup className="form-header__control">
                                    <Button icon="edit" onClick={() => this.handleEditable(true)} />
                                    <Button icon="delete" type="danger" onClick={() => this.handleDelete()} />
                                </ButtonGroup>
                                <ButtonGroup className="form-header__control">
                                    <Button icon={this.state.fullScreenMode ? "shrink" : "arrows-alt"} className="form-header__control" onClick={this.handleFullScreenMode} />
                                    {/* <Button icon="close" className="form-header__control" /> */}
                                </ButtonGroup>
                            </div>
                            <div className="form-body">
                                <Form>
                                    {this.state.columns.map((item) => {
                                        const field = item.key;
                                        const formItem = item.formItem;
                                        const FormItemName = formItem.name;
                                        if (field === 'active') {
                                            return <FormItemName
                                                key={field}
                                                formitemlayout={formitemlayout}
                                                dataField={{
                                                    label: item.label,
                                                    value: this.state.dataItem[field]
                                                }}
                                                config={formItem}
                                                action={formItem.action}
                                                disabled={true}
                                            />
                                        } else if (field === 'tag') {
                                            let value = ''
                                            if (this.state.dataItem.tags) {

                                                value = this.state.dataItem.tags.map(item => {
                                                    return item.name
                                                })
                                            }
                                            return (
                                                <FormItem.PlainText
                                                    key={field}

                                                    formitemlayout={formitemlayout}
                                                    dataField={{
                                                        label: item.label,
                                                        value: value.toString()
                                                    }} />
                                            );
                                        } else if (field === 'bodyContent') {
                                            return <FormItemName
                                                key={field}
                                                formitemlayout={formitemlayout}
                                                dataField={{
                                                    label: item.label,
                                                    value: this.state.dataItem.content
                                                }}
                                                config={formItem}
                                                action={formItem.action}
                                                readOnly={true}
                                            />
                                        }
                                        return (
                                            <FormItem.PlainText
                                                key={field}

                                                formitemlayout={formitemlayout}
                                                dataField={{
                                                    label: item.label,
                                                    value: this.state.dataItem[field]
                                                }} />
                                        );
                                    })}
                                </Form>
                            </div>
                        </div>
                    )
                }
            </DataFormWrapper>
        );
    }
}


export default connect(
    state => ({
    }),
    {}
)(DataForm);