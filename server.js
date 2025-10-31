const express = require('express');
const app = express();

app.get('/status', (req, res) => {
  res.status(200).json({ message: 'Server running fine' });
});

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}

module.exports = app;
