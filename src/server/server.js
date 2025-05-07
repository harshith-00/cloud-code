const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const runCode = require('./dockerRunner');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/run', async (req, res) => {
  const { language, code } = req.body;
  try {
    const output = await runCode(language, code);
    res.json({ output });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
