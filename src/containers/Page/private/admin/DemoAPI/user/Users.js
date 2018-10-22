import React, { Component } from 'react';
import { withRouter,Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Avatar ,Menu, Breadcrumb,Input,Row,Button,Col,Icon } from 'antd';
import MyTable from 'components/table/MyTable';
import UserInfo from 'pages/manager/user/UserInfo';
import MyForm from 'components/my-form/MyForm';
import PanelWrapper from "containers/Custom/Panel.style";

import {showNotification} from 'components/notification/Notification';
import {ACCESS_TOKEN} from 'settings/sessionStorage';
import {handleAPI} from 'actions/api';
import {loadObj,addObj} from '../api/ObjectParam';
import * as typeAPI from 'utils/const/CheckTypeAPIComponents';
// import DataFormRoute from '../DataFormRoute';
import DataForm from '../DataForm';
import TableDataRoute from '../TableDataRoute';
import Drawer from 'components/Drawer/Drawer';
const { Header, Content, Footer } = Layout;
const Search = Input.Search;   
class Companys extends Component{
    constructor(props){
        super(props)

        this.state={
            iSearch:"ALL",
            pageSize:5,
            pageIndex:1,
            listPageVisit:[1],
            listPageVisitFilter:[1],
            userSelected:null,
            fullScreenMode: false,
            visible: false, childrenDrawer: false ,
            dataAPI:{}
        }
    }
    checkCallAPI=(apiName)=>{
        switch(apiName){
            case typeAPI.LOAD:
                return this.props.handleAPI(loadObj);
            case typeAPI.ADD:
                return this.props.handleAPI(addObj,this.state.dataAPI);

            default :return this.props.handleAPI(loadObj);
        }

    }
    showDrawer = () => {  this.setState({  visible: true, }); };

    onClose = () => { this.setState({ visible: false, }); };
  
    showChildrenDrawer = () => { this.setState({ childrenDrawer: true, }); };
  
    onChildrenDrawerClose = () => {  this.setState({ childrenDrawer: false,  }); };
  
    componentWillMount(){
        var {pageSize,pageIndex,iSearch} = this.state;
        this.checkCallAPI(typeAPI.LOAD);
    }
    onPageChange=(pageInd)=>{
        // var { fetchingAllOrgan,searchOrgan } = this.props;
        var stringFilter = this.state.iSearch;
        if(stringFilter===''||stringFilter==="ALL"){
            var pageVisit = this.state.listPageVisit;
            this.setState({
            pageIndex:pageInd,
            listPageVisitFilter:[],
        },
            function(){
                var isPageVisit= this.state.listPageVisit.includes(pageInd);
                if(isPageVisit===false){
                    pageVisit.push(pageInd);
                    this.setState({listPageVisit:pageVisit, });
                    // fetchingAllOrgan(
                    //     this.state.pageSize,
                    //     this.state.pageIndex,
                    //     "ALL"
                    // );
                    
                }
            });
        }else{
            this.setState({pageIndex:pageInd+1,listPageVisit:[]},
                function(){
                    var pageVisit = this.state.listPageVisitFilter;
                    var isPageVisit= this.state.listPageVisitFilter.includes(pageInd);
                    if(isPageVisit===false){
                        pageVisit.push(pageInd);
                        this.setState({listPageVisitFilter:pageVisit, });
                        // searchOrgan(
                        //     this.state.pageSize,
                        //     this.state.pageIndex,
                        //     stringFilter
                        // );
                    }

                });
            }
    } 
    getUser=(obj)=>{
        this.setState({userSelected:obj});
        this.props.getUser(obj);
    }
    handleFullScreenMode=()=> {
        this.setState(() => {
            return {
                fullScreenMode: !this.state.fullScreenMode
            };
        });
    }
    // handleSubmit = (e,props) => {
    //     showNotification("Add rồi","Đợi xíu đi","topRight","success");
    //     e.preventDefault();
    //     this.setState({btnLoadding:true});
    //     const {pageIndex,pageSize,iSearch,organSelected} = this.state;
    //     var accesstoken = sessionStorage.getItem(ACCESS_TOKEN);
    //     this.setState({listPageVisit:[1]});
    //     props.form.validateFields((err, val) => {
    //         console.log(val,err);
    //       if (!err) { 
    //         // this.props.updateOrgan(organSelected.idOrganization,val,pageIndex,pageSize,iSearch,accesstoken);
    //         this.setState({btnLoadding:false,visible:false});
    //         console.log(val);
    //         // this.checkCallAPI(typeAPI.ADD);
    //       }
    //     });
        
    //   }
    componentWillShow=()=>{
       return <TableDataRoute handleSubmit={this.handleSubmit} url={this.props.match.url}/>

    }
    handleSubmit=(obj)=>{
        console.log(obj);
        this.setState({dataAPI:obj});
        this.checkCallAPI(typeAPI.ADD);
    }
    render(){
        const {demo} = this.props;
        const demoCol =[
            {
                title: "id",
                dataIndex: "id",
                key:`id`,
            },
           {
               title: "Full Name",
               dataIndex: "fullName",
               key:`fullName`,
           },
           {
               title: "Avatar",
               dataIndex: "avatar",
               key:`avatar`,
               render: (txt) => <Avatar size='small' src={`${txt}`} />
           },
           {
               title: "Address",
               dataIndex: "address",
               key:`address`,
           },
           {
               title: "Phone Number",
               dataIndex: "phoneNumber",
               key:`phoneNumber`,
           },
           {
               title: "Email",
               dataIndex: "email",
               key:`email`,
           },
           
           {
            //    title: "Edit", 
               key:`id`,
               dataIndex:"id",
               align:'center',
               render:(text)  => {
                   return (
                       <div className="button-table"> 
                           <Button style={{border:'none'}} disabled={isDisabled} onClick={this.showModalEdit}  icon="edit" />{'    '}
                           <Button style={{border:'none'}} disabled={isDisabled} onClick={this.showModalEdit}  icon="delete" />
                       </div>
                       )
               }
           },
        ]
        var isDisabled = false;
        var objSetting={
            loadding:false,
            defaultFilterMethod:this.defaultFilterMethod,
            defaultPageSize:5,
            onPageChange:this.onPageChange,
            onPageSizeChange:this.onPageSizeChange,
            className: "-striped -highlight",
            page:this.state.pageIndex,
            pageSize:this.state.pageSize,
            getObject:this.getUser
        }
        const ButtonGroup = Button.Group;
        const listPropForDrawer={
            styleProps:{
              title:"Add user",
              width:420,
              height:'100%',
            //   mask:false,
            //   maskClosable:false,
              maskStyle:{
                  color:'red'
              },
              style:{
                //   backgroundColor:'cyan'
              },
              className:"ok",
              zIndex:1,
              placement:"right",
              closable:this.state.visible,
              destroyOnClose:false,
            //   getContainer:(text)=>console.log(text),
            },
            onClose:this.onClose,
            visible:this.state.visible,
            hasButtonFooter:false,
            componentWillShow:this.componentWillShow
        }
        return (
            <PanelWrapper className={this.state.fullScreenMode ? "full-screen-mode" : ""}>
                <div  style={{display:'flex', flexDirection:'row'}}>
                    <Content >
                        <Row type="flex" justify="space-between" className="row-button">
                            <Col >
                                <Link to={`${this.props.url}/add-new`}>
                                    <Button type="primary" onClick={this.showDrawer}>
                                        <Icon type="user-add" theme="outlined" />Add User 
                                    </Button>
                                </Link>
                                           
                                {' '}
                                <Button type="default" onClick={this.showModal}>
                                    <Icon type="filter" theme="outlined" />Filter 
                                </Button>{' '}
                                <Button type="default" onClick={this.showModal}>
                                    <Icon type="sort-ascending"/>Sort  
                                </Button>{' '}
                            </Col>
                            <Col>
                                <ButtonGroup className="form-header__control">
                                    <Button icon={this.state.fullScreenMode ? "shrink" : "arrows-alt"} className="form-header__control" onClick={this.handleFullScreenMode} />
                                </ButtonGroup>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Search
                                placeholder="Input search text"
                                onSearch={val=>this.searchHandle(val)}
                                style={{ width: '100%' }}
                            />
                        </Row>
                        <br/>
                        <Row>
                            <MyTable styleTable="TABLE_ANTD" data={demo} col={demoCol} ObjSetting={objSetting}/>
                        </Row>
                    </Content>
                </div>
            <Drawer 
                // title={listPropForDrawer.styleProps.title}
                styleProps={listPropForDrawer.styleProps} 
                visible={listPropForDrawer.visible} 
                onClose={listPropForDrawer.onClose}
                hasButtonFooter={listPropForDrawer.hasButtonFooter}    
                componentWillShow={listPropForDrawer.componentWillShow}
            />
            </PanelWrapper>
            );
    }
}
const mapStateToProps = state => {
    return {
        demo: state.demo,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleAPI:(objectParam)=>{
            dispatch(handleAPI(objectParam));
        }

    }
}
       

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Companys));