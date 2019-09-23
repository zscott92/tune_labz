import React, { Compontent } from react;

module.exports = class Search extends React.Component {
  constructor(props) {
      
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() { 
      const {dispatch, params} = this.props;
      const {accessToken, refreshToken} = params;
      dispatch(setTokens({accessToken, refreshToken}));
      dispatch(getMyInfo());
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
  }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Search track:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }