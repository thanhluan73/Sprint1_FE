import React, { Component} from 'react';
import {Breadcrumb,Icon} from 'antd';
import TopbarWrapper from "containers/Topbar/topbar.style";
import { connect } from 'react-redux';
import options  from 'containers/Sidebar/options';

import IntlMessages from 'components/utility/intlMessages';
class MyBreadcrumb extends Component{

    findNameMenuWithKey=(options,keys)=>{
        return options.find((element)=> {
            if(element.children!==undefined){
               return element.children.find((e)=>{
                    if(e.key===keys) {
                        return e;
                    } 
                })
            }else{
                if(element.key===keys)return(element);
                return null;
            }
        });
    }
    createURL =(ind)=>{
        var item = window.location.href.split("/");
        var url=`/`;
        var i;
        for(i =0;i<item.length;i++){
            if(i<=ind&&i>=3)
            url+= item[i]+'/'; 
        };
        return url.substring(0,url.length-1);
    }
    createBreadcrumbItem = ()=>{
        var item = window.location.href.split("/");
        var i=0;
        var result;
        result = item.map((val, index) => {
            if(index===3){
                return (
                    <Breadcrumb.Item href={`${this.createURL(index)}`}>
                        <Icon type="home" />
                    </Breadcrumb.Item>
                );
            }else if(index===4){
                var name=this.findNameMenuWithKey(options,val);
                return (
                    <Breadcrumb.Item href={`${this.createURL(index)}`}>
                        <IntlMessages id={name.label}/>
                    </Breadcrumb.Item>
                );
            }else if(index>4){
                var name=this.findNameMenuWithKey(this.props.menuOption,val);
                return (
                    <Breadcrumb.Item href={`${this.createURL(index)}`}>
                        <IntlMessages id={name.label}/>
                    </Breadcrumb.Item>
                );
            } 
        });
        return result;
    }
    render(){
        return(
            <TopbarWrapper>
                <Breadcrumb>
                    {/* <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <Icon type="user" />
                        <span>Application List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Application
                    </Breadcrumb.Item> */}
                    {
                       (this.createBreadcrumbItem()!==undefined)?
                        this.createBreadcrumbItem():
                        <Breadcrumb.Item>
                            Application
                        </Breadcrumb.Item>
                       
                    }
                </Breadcrumb>
            </TopbarWrapper>
        );
    }
}

export default connect(
    state => (console.log(state),{
      auth: state.Auth,
      height: state.App.height,
      pathLocate: state.router.location.pathname
    }),
    {   }
  )(MyBreadcrumb);
  