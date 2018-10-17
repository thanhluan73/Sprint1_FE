import React, { Component } from 'react';
import { withRouter,Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb,Input,Row,Button,Col,Upload, Icon, Modal } from 'antd';
import MyForm from 'components/my-form/MyForm';
const styles={
textAlign:'center'
}
const listOption=[
    {
        id:"1",
        name:"Admin",
        description:"Admin",
        postID:"80000"
    },
    {
        id:"21",
        name:"Member",
        description:"Member",
        postID:"80000"
    },
]

const { Header, Content, Footer } = Layout;
const Search = Input.Search;   
class UserInfo extends Component{
    state={
        iSearch:"ALL",
        pageSize:5,
        pageIndex:1,
        listPageVisit:[1], 
        listPageVisitFilter:[1],

        previewVisible: false,
        previewImage: '',
        fileList: [{
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
    }

    componentWillMount(){
    }
   
    getCompanys=()=>{

    }
    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
      this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
      });
    }
  
    handleChange = ({ fileList }) => this.setState({ fileList })
  
   
    render(){
        const { previewVisible, previewImage, fileList} = this.state;
        var {userInfo} =this.props;
        var listField=[
            {
                id:"username",
                label:"Company name:",
                description:"Email của bạn vào là ok!",
                icon:"user",
                placeholder:"Enter your email...",
                required:true,
                message:'Vui lòng nhập username',
                typeValidation:"email",
                messageValidation:'Không phải định dạng email',
                defaultValue:userInfo.name,
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
                label:"Size:", 
                description:"Password mà bạn đã đăng ký cho tài khoản này.",
                icon:"lock",
                placeholder:"Enter your password...",
                required:true,
                message:'Vui lòng nhập password',
                defaultValue:userInfo.size,
                event:{
                    onClick:()=>console.log("event onClick "),
                    onChange:()=>console.log("event onChange "),
                },
                fieldType:{
                    type:"INPUT_NUMBER",
                },
                
            },
            {
                id:"role", 
                label:"Role:", 
                description:"Password mà bạn đã đăng ký cho tài khoản này.",
                icon:"lock",
                placeholder:"Enter your password...",
                required:true,
                message:'Vui lòng nhập password',
                // defaultValue:userInfo.size,
                event:{
                    onClick:()=>console.log("event onClick "),
                    onChange:()=>console.log("event onChange "),
                },
                fieldType:{
                    type:"SELECT",
                    listOption:{listOption},
                    mode:'multiple',
                    size:'default',
                },
                
            }
          ]
        
        const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
        );
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
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <Content style={{ width :'40%' ,textAlign:'center'}}>
                            <div className="clearfix">
                                <Upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    listType="picture-card"
                                    // fileList={fileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange}
                                    >
                                    {fileList.length >= 3 ? null : uploadButton}
                                </Upload>
                                    <p>{userInfo.name}</p>
                                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </div>
                        </Content>
                        <Content style={{ width :'100%' }}>
                            <MyForm
                                type="ADD" 
                                layout="horizontal"
                                listField={listField}
                                styles={styles}
                                onSubmit={this.handleSubmit}
                                listButton={listButton}
                            />
                        </Content>
                    </div>
                       
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserInfo));