const express = require('express')

const app = express()

app.use(
    express.urlencoded({
      extended: true,
    })
  );
  
  app.use(express.json());


const port = process.env.PORT||3000

app.get('/', (req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    console.log(ip) 


  res.send('Hello World~~!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
