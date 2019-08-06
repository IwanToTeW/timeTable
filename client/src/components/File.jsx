import React, { Component } from "react";

class File extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csv: ""
    };
  }

  // onSubmit(e) {
  //   let files = e.target.files;

  //   let reader = new FileReader();
  //   reader.readAsDataURL(files[0]);

  //   reader.onload = e => {
  //     console.warn("Proceeded data ", e.target.result);
  //   };
  // }

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
      <div className="container">
        <div onSubmit={this.onFormSubmit}>
          <h1> Upload the input file here...</h1>
          <input type="file" name="file" onChange={e => this.onChange(e)} />
        </div>
        <div>
          <form noValidate onSubmit={this.onSubmit}>
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Proceed
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default File;
