import React,{ Component } from "react";
import TableType from './TableType';
export default class extends Component{
    render(){
            let {styleTable,data,col,ObjSetting} = this.props;
        return(<div>
            {
               [0].map(()=>{
                switch (styleTable){
                    case 'TABLE_ANTD': 
                        return TableType.TableAntd(data,col,ObjSetting);
                    default : return TableType.TableReact(data,col,ObjSetting);
               }
               })
            }
        </div>)
    }
}
