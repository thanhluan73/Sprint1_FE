import React, { Component } from 'react';
import { withRouter,Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb,Input,Row,Button,Col,Icon } from 'antd';
import MyForm from 'components/my-form/MyForm';
const listField=[
    {
        id:"username",
        label:"Username:",
        description:"Email của bạn vào là ok!",
        icon:"user",
        placeholder:"Enter your email...",
        required:true,
        message:'Vui lòng nhập username',
        typeValidation:"email",
        messageValidation:'Không phải định dạng email',
        defaultValue:"sa@gmail.com",
        event:{
            onClick:()=>console.log("event onClick "),
            onChange:()=>console.log("event onChange "),
        },
        fieldType:{
            type:"INPUT_TEXT",
        }
    },
    {
        id:"password", 
        label:"Password:", 
        description:"Password mà bạn đã đăng ký cho tài khoản này.",
        icon:"lock",
        placeholder:"Enter your password...",
        required:true,
        message:'Vui lòng nhập password',
        defaultValue:"Pass123$",
        event:{
            onClick:()=>console.log("event onClick "),
            onChange:()=>console.log("event onChange "),
        },
        fieldType:{
            type:"INPUT_PASSWORD",
        }
    },
  ]
const styles={
textAlign:'center'
}
const { Header, Content, Footer } = Layout;
const Search = Input.Search;   
class CompanyInfo extends Component{
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
   
    getCompanys=()=>{

    }
    render(){
        const listButton=[
            // {
            //     name:"Submit",
            //     title:"Submit",
            //     description:"Submit data from your form",
            //     loading:this.state.btnLoadding,
            //     events:{
            //         onSubmit: ()=>console.log("submit form login"),
            //     },
            //     styles:{
            //         color:'cyan',
            //         margin:'5px'
            //     },
            //     type:"SUBMIT",
            //     icon:"save",
            //     typeButon:"primary"
            // },
            // {
            //     name:"Back",
            //     title:"Back",
            //     description:"Back",
            //     // link:this.props.router.location.pathname,
            //     onClick:()=>console.log("back"),
            //     events:()=>console.log("event form"),
            //     styles:{
            //         color:'red',
            //         margin:'5px'
            //     },
            //     type:"BACK",
            //     icon:"rollback",
            //     typeButon:"primary"
            // },
        ]
          
       return (
            <div>
                <Content style={{ width :'50%' }}>
                    <Row type="flex" justify="space-between" className="row-button">
                        <Col >
                            <Button type="default" onClick={this.showModal}>
                                <Icon type="edit" theme="outlined" />
                            </Button>{'  '}
                            <Button type="default" onClick={this.showModal}>
                                <Icon type="save" theme="outlined" />
                            </Button>
                        </Col>
                    </Row>
                    <br/>
                    <Row>

                        <MyForm
                            type="ADD" 
                            layout="horizontal"
                            listField={listField}
                            styles={styles}
                            onSubmit={this.handleSubmit}
                            listButton={listButton}
                        />
                    </Row>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompanyInfo));