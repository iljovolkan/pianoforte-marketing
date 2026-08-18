const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Статичните HTML страници (index/about/projects/summer-school/blog/contact)
app.use(express.static(path.join(__dirname, 'public')));

// Fallback — ако некој отвори непостоечка патека, врати ja почетната страница
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`PianoForte marketing site running on port ${PORT}`);
});
