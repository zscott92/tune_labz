// import React, { Component } from "react";
// import API from "../utils/API";
// import { Tree } from "../components/SongTree";
// import ReactDOM from 'react-dom'

// class SongFeed extends Component {
//     constructor(props) {
//         super(props);
//         let state = {
//             this:state.Tree = []
//         };
//     };
    
//     componentDidMount() {
//         this.loadSongs();
//     }
//     loadSongs = () => {
//         API.getSongs()
//             .then(res =>
//                 this.setState({ songs: res.data, song_name: "", song_pic_url: "", song_genres: "" })
//             )
//             .catch(err => console.log(err));
//     };

//     render() {
//         return (
//             // <Nav>
//             <div className="container-fluid">
//                 <Tree />
//             </div>
//             // </Nav>
//         );
//     }
// }

// export default Community;