const express = require('express');
const router = express.Router();

let attendance = { status: 'Present', color: 'green' };

router.get('/', (req, res) => {
  res.json(attendance);
});

router.post('/toggle', (req, res) => {
  attendance.status = attendance.status === 'Present' ? 'Absent' : 'Present';
  attendance.color = attendance.status === 'Present' ? 'green' : 'red';
  res.json(attendance);
});

module.exports = router;
