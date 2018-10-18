import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import './login.style.css';
import MyForm from 'components/my-form/MyForm.js';
import Chkb from './../../components/my-checkbox/Chkb';

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
      style:{
        marginTop : '-15px'
      },
      fieldType:{
          type:"INPUT_PASSWORD",
      }
  },
]
const styles={
  textAlign:'center',
  
}
class SignIn extends Component {
  state = {
    redirectToReferrer: false,
    btnLoadding:false,
  };
  handleSubmit = (e,props) => {
    e.preventDefault();
    this.props.history.push("/company");
    // this.setState({btnLoadding:true});
    // props.form.validateFields((err, values) => {
    //   if (!err) {
    //     var user={
    //         email:values.username,
    //         password:values.password
    //     }
    //     this.props.handleLogin(user);
    //   }
    // });
  }
  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }
  handleLogin = () => {
    // const { login, clearMenu } = this.props;
    // login();
    // clearMenu();
    this.props.history.push("/company");
  };
  render() {
    const listButton=[
      {
          name:"Submit",
          title:"Login",
          description:"Login to Homepage",
          loading:this.state.btnLoadding,
          events:{
              onSubmit: ()=>console.log("submit form login"),
          },
          styles:{
              color:'cyan',
              margin:'5px',
              position: 'absolute',
              right: '45px',
              marginTop: '-5px'
          },
          type:"SUBMIT",
          icon:"login",
          typeButon:"primary"
      },
      {
          name:"Submit",
          title:"Register new account",
          description:"Register new account",
          loading:this.state.btnLoadding,
          events:{
              onSubmit: ()=>console.log("submit form login"),
          },
          styles:{
              color:'red',
              margin: '5px',
              marginTop: '100px',
          },
          type:"SUBMIT",
          icon:"audit",
          typeButon:"danger"
      },
  ]
    const from = { pathname: "/dashboard" };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    } 
    return (
      <div className="SignInStyleWrapper">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
                <Link to="/dashboard">
                <h2>PROPTECH PLUS</h2>
                 {/* <IntlMessages id="page.signInTitle" /> */}
                </Link>   
            </div>
            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <MyForm
                    type="ADD" 
                    layout="vertical"
                    listField={listField}
                    styles={styles}
                    onSubmit={this.handleSubmit}
                    listButton={listButton}
                />
              </div>
              <div className="ChkbRemember">
                <Chkb></Chkb>
              </div>
              <div>
                <hr className="hr" />
                <Link to="/forgotpassword" className="fgPassword">
                    <b><p>Forgot password?</p></b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (SignIn);
