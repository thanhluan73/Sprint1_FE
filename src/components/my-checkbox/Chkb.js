import React, { Component } from 'react';
import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

class Chkb extends Component {
  render() {
    return (
        <Checkbox onChange={onChange}>Remember me</Checkbox>
    );
  }
}

export default Chkb;