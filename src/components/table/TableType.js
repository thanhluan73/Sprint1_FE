import 'antd/dist/antd.css';
import { Table } from 'antd';
import React, { Component } from 'react';

export default class extends Component{
    static  TableAntd =(dataSource,columns,obj) =>{
       return ( <div key={`table_antd`}>
        <Table 
            pagination={
                { 
                    pageSizeOptions: ['10', '20', '30', '40'] ,
                    showPageSizeOptions : SVGComponentTransferFunctionElement,
                    pageSize:5,
                    onChange:( pIndex)=>{
                        obj.onPageChange( pIndex);
                    },
                    current:obj.page
                }
            }
            onRow={(cylinder) =>({
                    onClick:()=>obj.getObject(cylinder)
                 }) 
            }
            dataSource={dataSource} 
            columns={columns}
            loading={obj.loadding['isFetchingCategory']}
            rowKey={`table_antd`}
            size="small"
        />
        </div>);
    }
   
}