import React from "react";
import Sidebar from "react-sidebar";
// import User from 'containers/Page/404';
import User from 'containers/Page/test/list';
import {styleExpand} from './Expandbar.style';
const mql = window.matchMedia(`(min-width: 800px)`);

class Expandbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: true
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    return (
      <Sidebar
        sidebar={<div style={{marginTop:'80px',width:'300px'}}>
        <button onClick={()=>this.onSetSidebarOpen}>okokok</button>
        <h3>Chat with me</h3>
        </div>}
        open={this.state.sidebarOpen}
        // docked={true}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        pullRight={true}
        // touchHandleWidth={40}
        // dragToggleDistance={50}
        style={styleExpand}
      >
      </Sidebar>
    );
  }
}

export default Expandbar;