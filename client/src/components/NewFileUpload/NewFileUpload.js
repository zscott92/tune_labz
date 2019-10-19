import React, { Component } from "react";
import axios from "axios";

// import { Card, CardHeader, CardText, CardBody, Row, Col } from "reactstrap";

const endpoint = "api/upload/newsong/";

class NewFileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      selectedFile: null
    };
  }

  handleSelectedFile = e => {
    e.preventDefault();
    this.setState({
      description: e.target.value,
      selectedFile: e.target.files[0]
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpload = event => {
    event.preventDefault();
    // const formData = new FormData();
    // formData.append("file", file, file.name);
    const data = new FormData(event.target);
    data.append("file", this.state.selectedFile, this.state.description);

    axios
      .post(endpoint, data)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        alert("Oops some error happened, please try again");
      });
  };

  render() {
    const { description, selectedFile } = this.state;

    return (
      <div>
        {/* <className = "row"> */}
          {/* <Col xs="4">
            <Card> */}
              <label>
                Upload a new Document
              </label>
              {/* <CardBody>
                <CardText> */}
                  <form onSubmit={this.handleUpload}>
                    <div className="form-group">
                      <label htmlFor="description">Description:</label>
                      <input
                        type="text"
                        class="form-control"
                        name="description"
                        onChange={this.onChange}
                        placeholder="Description"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="file"
                        name=""
                        id=""
                        onChange={this.handleSelectedFile}
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Upload
                    </button>
                  </form>
                {/* </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row> */}
      </div>
    );
  }
}

export default NewFileUpload;