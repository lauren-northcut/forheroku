const express = require('express');
const path = require('path');

 var filePath = 'client/build/index.html';
 var resolvedPath = path.resolve(filePath);

const PORT = process.env.PORT || 4005;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/', function(_, res) {
  
  res.sendFile(path.join(__dirname, 'client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })

 console.log(resolvedPath);
 return res.sendFile(resolvedPath);
})


  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });