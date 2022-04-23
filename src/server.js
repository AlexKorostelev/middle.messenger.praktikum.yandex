require('dotenv').config();

const fallback = require('express-history-api-fallback');
const express = require('express');

const app = express();
const root = './dist';
const PORT = process.env.PORT || 3000;
app.use(express.static(root));
app.use(fallback('index.html', { root }));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${PORT}!`);
});
