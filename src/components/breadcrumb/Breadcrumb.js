import React, { Component} from 'react';
import {Breadcrumb,Icon} from 'antd';
import TopbarWrapper from "containers/Topbar/topbar.style";
import { connect } from 'react-redux';
import options  from 'containers/Sidebar/options';
import {updateIndex} from 'settings/settings_key_antd';
import IntlMessages from 'components/utility/intlMessages';
class MyBreadcrumb extends Component{

    findNameMenuWithKey=(options,keys)=>{
        return options.find((element)=> {
            if(element.children!==undefined){
               return element.children.find((e)=>{
                    if(e.key===keys) {
                        return e;
                    } else return null;
                })
            }
            if(element.key===keys){
                return(element)
            }
            else return null;
           
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
        var result;
        result = item.map((val, index) => {
            if(index===3){
                return (
                    <Breadcrumb.Item key={`${updateIndex()}i`} href={`${this.createURL(index)}`}>
                        <Icon type="home" />
                    </Breadcrumb.Item>
                );
            }else if(index===4){
                var name=this.findNameMenuWithKey(options,val);
                return (
                    <Breadcrumb.Item key={`index${updateIndex()}`} href={`${this.createURL(index)}`}>
                        <IntlMessages id={name.label}/>
                    </Breadcrumb.Item>
                );
            }else if(index>4){
                let name=this.findNameMenuWithKey(this.props.menuOption,val);
                if(name!==undefined){
                    return (
                        <Breadcrumb.Item key={`index${updateIndex()}`} href={`${this.createURL(index)}`}>
                            <IntlMessages id={name.label}/>
                        </Breadcrumb.Item>
                    );
                }else{
                return(<Breadcrumb.Item key={`${updateIndex()}2`}></Breadcrumb.Item>);
                }
            } else return <Breadcrumb.Item key={`${updateIndex()}2`}></Breadcrumb.Item>;
        });
        return result;
    }
    render(){
        return(
            <TopbarWrapper>
                <Breadcrumb>
                    {
                       (this.createBreadcrumbItem()!==undefined)?
                        this.createBreadcrumbItem():
                        <Breadcrumb.Item key={`id${updateIndex()}`}>
                            Application
                        </Breadcrumb.Item>
                       
                    }
                </Breadcrumb>
            </TopbarWrapper>
        );
    }
}

export default connect(
    state => ({
      auth: state.Auth,
      height: state.App.height,
      pathLocate: state.router.location.pathname
    }),
    {   }
  )(MyBreadcrumb);
  