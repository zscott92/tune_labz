import React, { Component } from "react";

export function retrieveSongs() {
        this.state = {
            songData: [],
        }

    retrieve = () => {
        const id = this.param.songData.id;
        const { data } = await Axios.get(`/api/songs/${id}`)
        this.setState({ todoItem: data })
    }
}
