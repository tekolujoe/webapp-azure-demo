const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello from Azure Node.js App!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
