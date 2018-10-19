import React, { Component } from 'react';
import { withRouter,Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb,Input,Row,Button,Col,Icon } from 'antd';
import MyTable from 'components/table/MyTable';
import UserInfo from 'pages/manager/user/UserInfo';

import PanelWrapper from "containers/Custom/Panel.style";
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
        }
    }
    componentWillMount(){
        // this.props.fetchingCompany();
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
    render(){
        // var {organs} = this.props;
        const organs = [
            {
                id: '1',
                name: 'Phong Nguyen',
                size: 32,
                Role: 'Admin',
                Phone: '0908888888',
                Address: 'XLHN',
                Birthday: '24/11/95'
            }, 
            {
                id: '2',
                name: 'Thinh Nguyen',
                size: 42,
                Role: 'Admin',
                Phone: '0908888888',
                Address: 'XLHN',
                Birthday: '24/11/95'
            },
            {
                id: '3',
                name: 'Thanh Luan',
                size: 32,
                Role: 'Admin',
                Phone: '0908888888',
                Address: 'XLHN',
                Birthday: '24/11/95'
            }, 
            {
                id: '4',
                name: 'Tu Nguyen',
                size: 42,
                Role: 'Admin',
                Phone: '0908888888',
                Address: 'XLHN',
                Birthday: '24/11/95'
            },
            {
                id: '5',
                name: 'Tuan Ho',
                size: 32,
                Role: 'Admin',
                Phone: '0908888888',
                Address: 'XLHN',
                Birthday: '24/11/95'
            }, 
            {
                id: '6',
                name: 'Lan Anh',
                size: 42,
                Role: 'Admin',
                Phone: '0908888888',
                Address: 'XLHN',
                Birthday: '24/11/95'
            },
            {
                id: '7',
                name: 'Luong Do',
                size: 32,
                Role: 'Admin',
                Phone: '0908888888',
                Address: 'XLHN',
                Birthday: '24/11/95'
            }, 
            {
                id: '8',
                name: 'An Mai',
                size: 42,
                Role: 'Admin',
                Phone: '0908888888',
                Address: 'XLHN',
                Birthday: '24/11/95'
            },
        ];
          
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
        var  organCol=[
            {
                title: "id",
                dataIndex: "id",
                key:`id`,
            },
           {
               title: "Name",
               dataIndex: "name",
               key:`name`,
           },
           {
               title: "Size",
               dataIndex: "size",
               key:`size`,
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
           
        ];
        return (
            <PanelWrapper className={this.state.fullScreenMode ? "full-screen-mode" : ""}>
                <div  style={{display:'flex', flexDirection:'row'}}>
                    <Content >
                        <Row type="flex" justify="start" className="row-button">
                            <Col >
                                <Button type="primary" onClick={this.showModal}>
                                    <Icon type="user-add" theme="outlined" />Add User 
                                </Button>{' '}
                                <Button type="default" onClick={this.showModal}>
                                    <Icon type="filter" theme="outlined" />Filter 
                                </Button>{' '}
                                <Button type="default" onClick={this.showModal}>
                                    <Icon type="sort-ascending"/>Sort  
                                </Button>{' '}
                                <ButtonGroup className="form-header__control">
                                    <Button icon={this.state.fullScreenMode ? "shrink" : "arrows-alt"} className="form-header__control" onClick={this.handleFullScreenMode} />
                                </ButtonGroup>
                            </Col>
                            <Col>
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
                            <MyTable styleTable="TABLE_ANTD" data={organs} col={organCol} ObjSetting={objSetting}/>
                        </Row>
                    </Content>
                    {/* <Content style={{paddingLeft:'5px'}}>
                    {
                        (this.state.userSelected!==null)?
                            <UserInfo userInfo={this.state.userSelected}/>
                            // <div>{this.state.companySelected.name}</div>
                        :(<div></div>)
                    }
                    </Content> */}
                </div>
            </PanelWrapper>
            );
    }
}
const mapStateToProps = state => {
    return {
        company: state.company,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogout:(user)=>{
           
        }

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Companys));