import React, { Component } from "react";

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csv: ""
    };
  }

  render() {
    return (
      <div>
        <button type="submit" className="btn btn-lg btn-primary btn-block">
          Download
        </button>
      </div>
    );
  }
}

export default TimeTable;
