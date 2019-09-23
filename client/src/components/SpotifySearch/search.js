import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();

class SpotifySearch extends React.Component {
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

spotifyApi.getAudioAnalysisForTrack('')
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });

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
            Choose track:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }