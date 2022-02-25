const express = require('express');

const path = require('path');

const PORT = process.env.PORT || 4005;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build/index.html'));
      });

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });