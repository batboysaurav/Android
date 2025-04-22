const express = require('express');
const app = express();

app.get('/models', (req, res) => {
  req.json([
    {name: 'Aisha'},
    {name: 'Priya'}
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});