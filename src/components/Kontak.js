import React, { Component } from "react";
class table extends Component {
  render() {
    const prmData = this.props.data;
    return (
      <div>
        <p>
          <i class="fas fa-envelope"></i> {prmData.email}
        </p>
        <p>
          <i class="fas fa-map-marked-alt"></i> {prmData.alamat}
        </p>
        <p>
          <i class="fas fa-phone-alt"></i> {prmData.notel}
        </p>
      </div>
    );
  }
}

export default table;
