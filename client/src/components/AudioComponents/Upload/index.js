
import React, { Component } from 'react';
import Wrapper from "../../DomComponents/Wrapper";
const axios = require('axios');

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
    this.handleChange = this.handleChange.bind(this);
  }

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }
  onClickHandler = (selectedFile) => {
    const data = new FormData()
    data.append('file', this.state.selectedFile)
    axios({
      method: 'post',
      url: 'api/songs/:id',
      data: [this.state.selectedFile],
    })
      .then(res => {
        console.log("Congrats File Uploaded")
      })
  }

  render() {
    return (
      <Wrapper>
        <label>
          Upload Audio File
          <input type="file" name="file" onChange={this.onChangeHandler} />
          <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Submit</button>
        </label>
        <input type="submit" value="Submit" />
      </Wrapper>
    );
  }
}
export default Upload;


