const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app1 = express();
app1.use(cors());

app1.use((req, res, next) => {
  const ipAddress = req.ip;
  const url = req.originalUrl;
  const method = req.method.toLowerCase();

  if (!app1._router.stack.some(layer => layer.route && layer.route.path === url && layer.route.methods[method])) {
    
    axios.post('http://localhost:3001/report', { ipAddress })
      .then(() => {
        res.status(404).send('Route not found');
      })
      .catch((error) => {
        console.error('Error reporting IP address:', error);
        res.status(500).send('Internal Server Error');
      });
  } else {
    next();
  }
});


app1.get('/', (req, res) => {
  res.send('Welcome to Server 1');
});

app1.listen(3000, () => {
  console.log('Server 1 is running on port 3000');
});