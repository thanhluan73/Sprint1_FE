import { Drawer, Button } from 'antd';
import React,{Component} from 'react';
import * as styles from './drawer.css';
export default class App extends Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

  render() {
    var {styleProps,visible,onClose,hasButtonFooter,componentWillShow} = this.props;
    return (
        <Drawer
          title={styleProps.title}
          width={styleProps.width}
          height={styleProps.height}
          mask={styleProps.mask}
          maskClosable={styleProps.maskClosable}
          maskStyle={styleProps.maskStyle}
          style={styleProps.style}
          className={styleProps.className}
          zIndex={styleProps.zIndex}
          placement={styleProps.placement}
          closable={styleProps.closable}
          onClose={onClose}
          visible={visible}
          destroyOnClose={styleProps.destroyOnClose}
          getContainer={styleProps.getContainer}

        >
            {componentWillShow()}
          
          <div  style={styles.divFooter} >
            {
                (hasButtonFooter)?
                styleProps.listButtonFooter.map((val,ind)=>{
                    switch (val.type){
                        case 'SUBMIT': 
                            return <Button onClick={val.event.onClick} type={val.buttonTypeColor}>{val.name}</Button>
                        case 'CANCEL': 
                            return <Button onClick={val.event.onClick} type={val.buttonTypeColor}>{val.name}</Button>
                        case 'NEXT': 
                            return <Button onClick={val.event.onClick} type={val.buttonTypeColor}>{val.name}</Button>
                        case 'PREV': 
                            return <Button onClick={val.event.onClick} type={val.buttonTypeColor}>{val.name}</Button>
                        
                        default :return <Button onClick={onClose} >Close</Button>
                    }
                })
                :
                    <div>
                        <Button  style={{  marginRight: 8, }}  onClick={onClose} >  Cancel  </Button>
                        <Button onClick={onClose} type="primary"> Submit </Button>
                    </div>
            }
          </div>
        </Drawer>
    );
  }
}
