import React, { Component} from 'react';
import {Breadcrumb,Icon} from 'antd';
import TopbarWrapper from "containers/Topbar/topbar.style";
export default class extends Component{
    render(){
        return(
            <TopbarWrapper>
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <Icon type="user" />
                        <span>Application List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Application
                    </Breadcrumb.Item>
                </Breadcrumb>
            </TopbarWrapper>
        );
    }
}