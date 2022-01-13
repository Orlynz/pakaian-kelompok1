import React, { Component } from "react";
class table extends Component {
  render() {
    const prmData = this.props.data;
    return <div>{prmData.nama}</div>;
  }
}

export default table;
