import React from 'react';
import FormAdd from './FormAdd';
import FormEdit from './FormEdit';
import FormInfo from './FormInfo';
export default class extends React.Component{
    render(){
        var {type} = this.props;
        return (type==="ADD")?<FormAdd {...this.props}/>:(type==="EDIT")?<FormEdit {...this.props}/>:<FormInfo {...this.props}/>
    }
}