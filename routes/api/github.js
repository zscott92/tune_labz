const express = require('express')
const app = express()

const axios = require('axios')

const clientID = process.env.GITHUB_ID
const clientSecret = process.env.GITHUB_SECRET_ID


app.get('/home', (req, res) => {

  // The req.query object has the query params that were sent to this route.
  const requestToken = req.query.code
  
  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    headers: {
         accept: 'application/json'
    }
    
  }).then((response) => {
    
    const accessToken = response.data.access_token
    console.log(response.data)
    
    // redirect the user to the home page, along with the access token
    res.redirect(`/home.html?access_token=${accessToken}`)
  })
})

app.use(express.static(__dirname + '/public'))
app.listen(4000,()=>{
    console.log("Server listening on port : 4000")
})