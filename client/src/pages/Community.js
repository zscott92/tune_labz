import React, { Component } from "react";


class Community extends Component {
    state = {
        song_name: [],
        song_desc: "",
        song_pic_url: "",
        song_genres: []
    };

    componentDidMount() {
        this.loadSongs();
    }

    loadSongs = () => {
        API.getSongs()
            .then(res =>
                this.setState({ songs: res.data, song_name: "", song_pic_url: "", song_genres: "" })
            )
            .catch(err => console.log(err));
    };
}