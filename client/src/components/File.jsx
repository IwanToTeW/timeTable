import React, { Component } from "react";

class File extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csv: ""
    };
  }

  onChange(e) {
    let files = e.target.files;

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = e => {
      console.warn("CSV data ", e.target.result);
    };
  }

  render() {
    return (
      <div onSubmit={this.onFormSubmit}>
        <h1> Upload the input file here...</h1>
        <input type="file" name="file" onChange={e => this.onChange(e)} />
      </div>
    );
  }
}

export default File;
