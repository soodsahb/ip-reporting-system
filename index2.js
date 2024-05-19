const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app2 = express();
app2.use(cors());

app2.use(express.json());

app2.post('/report', (req, res) => {
  const { ipAddress } = req.body;
  console.log('Reported IP address:', ipAddress);
  res.sendStatus(200);
});

app2.listen(3001, () => {
  console.log('Server 2 is running on port 3001');
});