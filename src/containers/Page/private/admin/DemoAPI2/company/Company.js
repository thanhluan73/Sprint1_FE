import React, { Component } from 'react';
import { withRouter,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Avatar ,Input,Row,Button,Col,Icon } from 'antd';
import MyTable from 'components/table/MyTable';
import PanelWrapper from "containers/Custom/Panel.style";

import {showNotification} from 'components/notification/Notification';
import {handleAPI} from 'actions/api';
import {loadObj,addObj,delObj,updateObj,findObj} from 'containers/Page/private/admin/DemoAPI2/api/ObjectParam';
import * as typeAPI from 'utils/const/CheckTypeAPIComponents';
import TableDataRoute from 'containers/Page/private/admin/DemoAPI2/TableDataRoute';
import Drawer from 'components/Drawer/Drawer';
import DataFormRoute from 'containers/Page/private/admin/DemoAPI2/DataFormRoute';
const {  Content,  } = Layout;
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
    checkCallAPI=(apiName,objData)=>{
        switch(apiName){
            case typeAPI.LOAD:
                return this.props.handleAPI(loadObj,{});  
            case typeAPI.ADD:
                showNotification("Add rồi","Đợi xíu đi","topRight","success");
                return this.props.handleAPI(addObj,objData);
            case typeAPI.DELETE:
                showNotification("Delete rồi","Đợi xíu đi","topRight","success");
                return this.props.handleAPI(delObj,objData);
            case typeAPI.UPDATE:
                showNotification("Update rồi","Đợi xíu đi","topRight","success");
                return this.props.handleAPI(updateObj,objData);
            case typeAPI.FIND:
                return this.props.handleAPI(findObj,objData);
            
            default :return this.props.handleAPI(loadObj);
        }

    }
    showDrawer = () => {  this.setState({  visible: true, }); };

    onClose = () => { this.setState({ visible: false, }); };
  
    showDrawerEdit = (txt) => {
        this.checkCallAPI(typeAPI.FIND,{id:txt});
        this.setState({ childrenDrawer: true, }); 
    };
  
    onCloseDrawerEdit = () => {  this.setState({ childrenDrawer: false,  }); };
  
    componentWillMount(){
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
   
    componentWillShow=()=>{
       return <TableDataRoute handleSubmit={this.handleSubmit} url={this.props.match.url}/>
    }
    componentWillShowEdit=()=>{
       return <DataFormRoute handleSubmit={this.handleSubmitEdit} handleDelete={this.handleDelete} url={this.props.match.url}/>
    }
    handleSubmit=(obj)=>{
       this.checkCallAPI(typeAPI.ADD,obj);
       this.onClose();
    }
    handleDelete=(id)=>{

       this.checkCallAPI(typeAPI.DELETE,{id:id});
       this.onClose();
       this.onCloseDrawerEdit();
    }
    handleSubmitEdit=(obj)=>{
        var object={
            id:{id:obj.id},
            data:obj
        }
       this.checkCallAPI(typeAPI.UPDATE,object);
       this.onCloseDrawerEdit();
    }
    render(){
        const {demo} = this.props;
        const demoCol =[
            {
                title: "id",
                dataIndex: "id",
                key:`ida`,
            },
           {
               title: "Name",
               dataIndex: "name",
               key:`fullName`,
           },
           {
               title: "Phone Number",
               dataIndex: "phone",
               key:`phoneNumber`,
           },
           {
               title: "Email",
               dataIndex: "email",
               key:`email`,
           },
           {
               title: "Size",
               dataIndex: "size",
               key:`size`,
           },
           
           {
               key:`idb`,
               dataIndex:"id",
               align:'center',
               render:(text)  => {
                   return (
                       <div className="button-table"> 
                        <Link to={`${this.props.url}/${text}/edit`}>
                            <Button style={{border:'none'}} disabled={isDisabled} onClick={()=>this.showDrawerEdit(text)}  icon="edit" />{'    '}
                        </Link>
                           <Button style={{border:'none'}} disabled={isDisabled} onClick={()=>this.handleDelete(text)}  icon="delete" />
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
              title:"Add company",
              width:420,
              height:'100%',
              maskStyle:{
                  color:'red'
              },
              style:{
              },
              className:"ok",
              zIndex:1,
              placement:"right",
              closable:this.state.visible,
              destroyOnClose:false,
            },
            onClose:this.onClose,
            visible:this.state.visible,
            hasButtonFooter:false,
            componentWillShow:this.componentWillShow
        }

        const listPropForDrawerEdit={
            styleProps:{
              title:"Edit company",
              width:420,
              height:'100%',
              maskStyle:{
                  color:'red'
              },
              style:{
              },
              className:"ok",
              zIndex:1,
              placement:"right",
              closable:this.state.childrenDrawer,
              destroyOnClose:false,
            },
            onClose:this.onCloseDrawerEdit,
            visible:this.state.childrenDrawer,
            hasButtonFooter:false,
            componentWillShow:this.componentWillShowEdit
        
        }

        return (
            <PanelWrapper className={this.state.fullScreenMode ? "full-screen-mode" : ""}>
                <div  style={{display:'flex', flexDirection:'row'}}>
                    <Content >
                        <Row type="flex" justify="space-between" className="row-button">
                            <Col >
                                <Link to={`${this.props.url}/add-new`}>
                                    <Button type="primary" onClick={this.showDrawer}>
                                        <Icon type="user-add" theme="outlined" />Add company 
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
                key={1}
                styleProps={listPropForDrawer.styleProps} 
                visible={listPropForDrawer.visible} 
                onClose={listPropForDrawer.onClose}
                hasButtonFooter={listPropForDrawer.hasButtonFooter}    
                componentWillShow={listPropForDrawer.componentWillShow}
            />
            <Drawer 
                key={2}
                styleProps={listPropForDrawerEdit.styleProps} 
                visible={listPropForDrawerEdit.visible} 
                onClose={listPropForDrawerEdit.onClose}
                hasButtonFooter={listPropForDrawerEdit.hasButtonFooter}    
                componentWillShow={listPropForDrawerEdit.componentWillShow}
            />
            </PanelWrapper>
            );
    }
}
const mapStateToProps = state => {
    return {
        demo: state.demo.demo,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleAPI:(objectParam,objectData)=>{
            dispatch(handleAPI(objectParam,objectData));
        }

    }
}
       

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Companys));