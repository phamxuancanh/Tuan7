const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoURI = 'mongodb://mongo:27017/mydb'; // Kết nối đến MongoDB container bằng tên dịch vụ
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello from Node.js and MongoDB!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
