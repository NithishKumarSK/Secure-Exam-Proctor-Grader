import express from 'express';
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('Teacher API is working');
});

export default router;
