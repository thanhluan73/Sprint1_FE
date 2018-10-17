import React, { Component } from 'react';
import { withRouter,Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb,Input,Row,Button,Col,Icon } from 'antd';
import MyTable from 'components/table/MyTable';
import CompanyInfo from 'pages/manager/company/CompanyInfo';
const { Header, Content, Footer } = Layout;
const Search = Input.Search;   
class Companys extends Component{
    state={
        iSearch:"ALL",
        pageSize:5,
        pageIndex:1,
        listPageVisit:[1],
        listPageVisitFilter:[1],
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
    getCompanys=()=>{

    }
    render(){
        // var {organs} = this.props;
        const organs = [
            {
                id: '1',
                name: 'Proptech Plus',
                size: 32,
            }, 
            {
                id: '2',
                name: 'FPT',
                size: 42,
            },
            {
                id: '3',
                name: 'Microsoft',
                size: 32,
            }, 
            {
                id: '4',
                name: 'IBM',
                size: 42,
            },
            {
                id: '5',
                name: 'Apple',
                size: 32,
            }, 
            {
                id: '6',
                name: 'Google',
                size: 42,
            },
            {
                id: '7',
                name: 'Viettel',
                size: 32,
            }, 
            {
                id: '8',
                name: 'Lazada',
                size: 42,
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
            getObject:this.getCompanys
        }
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
                           <Button disabled={isDisabled} onClick={this.showModalEdit} type="primary" shape="circle" icon="edit" />{'    '}
                           <Button disabled={isDisabled} onClick={this.showModalEdit} type="primary" shape="circle" icon="delete" />
                       </div>
                       )
               }
           },
           
        ];
        return (
            <div style={{display:'flex', flexDirection:'row'}}>
                <Content style={{ width :'40%' }}>
                    <Row type="flex" justify="space-between" className="row-button">
                        <Col >
                            <Button type="primary" onClick={this.showModal}>
                                <Icon type="user-add" theme="outlined" />Add Companys 
                            </Button>
                        </Col>
                        <Col>
                            <Button type="default" onClick={this.showModal}>
                                <Icon type="filter" theme="outlined" />Filter 
                            </Button>
                        </Col>
                        <Col>
                            <Button type="default" onClick={this.showModal}>
                                <Icon type="sort" theme="outlined" />Sort  
                            </Button>
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
                <Content style={{ paddingLeft:'5px',width:'100%'}}>
                   <CompanyInfo/>
                </Content>
            </div>
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