export default class Login extends Component {
    render() {
      const { errorMsg } = this.props.params;
      return (
        <div className="error">
          <h2>An Error Occured</h2>
          <p>{errorMsg}</p>
        </div>
      );
    }
    componentDidMount() {
        const {dispatch, params} = this.props;
        const {accessToken, refreshToken} = params;
        dispatch(setTokens({accessToken, refreshToken}));
        dispatch(getMyInfo());
      }
  }