import {  Button,Row,Col,Divider } from 'antd';
import React,{Component} from 'react';
import Drawer from 'components/Drawer/Drawer';

export default class App extends Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {  this.setState({  visible: true, }); };

  onClose = () => { this.setState({ visible: false, }); };

  showChildrenDrawer = () => { this.setState({ childrenDrawer: true, }); };

  onChildrenDrawerClose = () => {  this.setState({ childrenDrawer: false,  }); };

  componentWillShow=()=>{
    const pStyle = {
        fontSize: 16,
        color: 'rgba(0,0,0,0.85)',
        lineHeight: '24px',
        display: 'block',
        marginBottom: 16,
    };
    const listPropForDrawer={
        styleProps:{
          title:"Demo children",
          width:420,
          height:'100%',
        //   mask:false,
        //   maskClosable:false,
          maskStyle:{
              color:'red'
          },
          style:{
              backgroundColor:'yellow'
          },
          className:"ok",
          zIndex:1,
          placement:"right",
          closable:false,
          destroyOnClose:true,
        //   getContainer:(text)=>console.log(text),
        },
        onClose:this.onChildrenDrawerClose,
        visible:this.state.childrenDrawer,
        hasButtonFooter:false,
        componentWillShow:()=>{return <div>Nguyen Le Phong</div>}
    } 
    const DescriptionItem = ({ title, content }) => (
        <div
          style={{
            fontSize: 14,
            lineHeight: '22px',
            marginBottom: 7,
            color: 'rgba(0,0,0,0.65)',
          }}
        >
          <p
            style={{
              marginRight: 8,
              display: 'inline-block',
              color: 'rgba(0,0,0,0.85)',
            }}
          >
            {title}:
          </p>
          {content}
        </div>
    );
      return(<div>
        <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
        <p style={pStyle}>Personal</p>
        <Button onClick={this.showChildrenDrawer}>
            Info children
        </Button>
        <Drawer
            styleProps={listPropForDrawer.styleProps} 
            visible={listPropForDrawer.visible} 
            onClose={listPropForDrawer.onClose}
            hasButtonFooter={listPropForDrawer.hasButtonFooter}    
            componentWillShow={listPropForDrawer.componentWillShow}
        />
        <Row>
            <Col span={12}>
                <DescriptionItem title="Full Name" content="Lily" />{' '}
            </Col>
            <Col span={12}>
                <DescriptionItem title="Account" content="AntDesign@example.com" />
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <DescriptionItem title="City" content="HangZhou" />
            </Col>
            <Col span={12}>
                <DescriptionItem title="Country" content="China🇨🇳" />
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <DescriptionItem title="Birthday" content="February 2,1900" />
            </Col>
            <Col span={12}>
                <DescriptionItem title="Website" content="-" />
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <DescriptionItem
                title="Message"
                content="Make things as simple as possible but no simpler."
                />
            </Col>
        </Row>
        <Divider />
        <p style={pStyle}>Company</p>
        <Row>
            <Col span={12}>
                <DescriptionItem title="Position" content="Programmer" />
            </Col>
            <Col span={12}>
                <DescriptionItem title="Responsibilities" content="Coding" />
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <DescriptionItem title="Department" content="AFX" />
            </Col>
            <Col span={12}>
                <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <DescriptionItem
                title="Skills"
                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                />
            </Col>
        </Row>
        <Divider />
        <p style={pStyle}>Contacts</p>
        <Row>
            <Col span={12}>
                <DescriptionItem title="Email" content="AntDesign@example.com" />
            </Col>
            <Col span={12}>
                <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <DescriptionItem
                title="Github"
                content={(
                    <a href="http://github.com/ant-design/ant-design/">
                    github.com/ant-design/ant-design/
                    </a>
                )}
                />
            </Col>
        </Row>
      </div>)
  }

  render() {
    const listPropForDrawer={
        styleProps:{
          title:"Demo thôi nghen",
          width:720,
          height:'100%',
        //   mask:false,
        //   maskClosable:false,
          maskStyle:{
              color:'red'
          },
          style:{
              backgroundColor:'cyan'
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
      <div>
        Bạn sẳn sàng trước khi nhấn nút chưa???
        <Button type="success+" onClick={this.showDrawer}>Click vào chổ này</Button>
        <Drawer 
            styleProps={listPropForDrawer.styleProps} 
            visible={listPropForDrawer.visible} 
            onClose={listPropForDrawer.onClose}
            hasButtonFooter={listPropForDrawer.hasButtonFooter}    
            componentWillShow={listPropForDrawer.componentWillShow}
        />
      </div>
    );
  }
}
