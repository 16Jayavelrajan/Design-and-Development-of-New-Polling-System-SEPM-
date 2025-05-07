const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/electivePollingDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('✅ MongoDB connected');
});

app.use('/api', require('./routes/api'));

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
