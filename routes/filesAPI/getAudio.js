import axios from 'axios';

      onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("/api/song/:id", data, { 
            url: data
        })
          
        .then(res => { // then print response status
            console.log(res.statusText)
         })
        }