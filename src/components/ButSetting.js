import React, { Component } from "react";
import { Button } from "react-bootstrap";
class table extends Component {
  render() {
    const prmData = this.props.data;
    return (
      <div>
        <Button
          variant="outline-dark"
          style={{
            padding: "5px",
            borderRadius: "10px",
            float: "right",
          }}
          onClick={() => this.props.update(prmData)}
        >
          <strong>Edit</strong>
        </Button>
      </div>
    );
  }
}

export default table;
