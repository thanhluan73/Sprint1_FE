import React from 'react';
import MyForm from 'components/MyForm/MyForm';
import {styles,listButton,listField} from './data/Organ';
import {styles as styleCustomer,listButton as buttonCustomer,listField as fieldCustomer} from './data/Customer';
import {styles as styleCustomerEdit,listButton as buttonCustomerEdit,listField as fieldCustomerEdit} from './data/Customer-edit'
import { Collapse } from 'antd';
const Panel = Collapse.Panel;
export default class extends React.Component{
    render(){
        return <div>
        <Collapse >
            <Panel header="Form add" key="1">
                <Collapse defaultActiveKey="1">
                    <Panel header="Form organ" key="11">
                        <MyForm 
                            type="ADD" 
                            layout="vertical" 
                            // layout="inline" 
                            // layout="horizontal" 
                            listField={listField}
                            styles={styles}
                            event={()=>console.log("a")}
                            listButton={listButton}
                        />
                    </Panel>
                    <Panel header="Form group" key="22">
                        <MyForm 
                            type="ADD" 
                            layout="horizontal" 
                            listField={listField}
                            styles={styles}
                            event={()=>console.log("a")}
                            listButton={listButton}
                        />
                    </Panel>
                </Collapse>
            </Panel>
            <Panel header="Select option" key="2">
                <MyForm 
                    type="ADD" 
                    layout="horizontal" 
                    listField={fieldCustomer}
                    styles={styleCustomer}
                    event={()=>console.log("a")}
                    listButton={buttonCustomer}
                />
            </Panel>
            <Panel header="Select option" key="3">
                <MyForm 
                    type="EDIT" 
                    layout="horizontal" 
                    listField={fieldCustomerEdit}
                    styles={styleCustomerEdit}
                    event={()=>console.log("a")}
                    listButton={buttonCustomerEdit}
                />
            </Panel>
        </Collapse>
            </div>
    }
}