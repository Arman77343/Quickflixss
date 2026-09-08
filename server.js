const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Quickflix is running!');
});

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    service: 'QuickFlix API',
    mode: 'demo'
  });
});

app.get('/api/content', (req, res) => {
  res.json([
    { id: 1, title: 'Premium Video', category: 'Movies', price: 25 },
    { id: 2, title: 'Series Pack', category: 'Series', price: 49 },
    { id: 3, title: 'Cartoon Pack', category: 'Cartoons', price: 29 }
  ]);
});

app.post('/api/orders', (req, res) => {
  res.status(201).json({
    ok: true,
    mode: 'demo',
    orderId: 'QF-DEMO-' + Date.now()
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`QuickFlix API running on port ${PORT}`);
});
