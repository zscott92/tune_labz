
import React from 'react';
import Wrapper from '../Wrapper';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
    this.handleChange = this.handleChange.bind(this);
  }
                
  handleChange = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    })
  }
  onClickHandler = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile)
  }

  render() {
    return (
      <Wrapper>
        <label>
          Upload Audio File
          <input type="file" name="file" onChange={this.handleChange} />
          <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
        </label>
        <input type="submit" value="Submit" />
        </Wrapper>
        );
  }
}
export default Upload;


