const express = require('express');
const router = express.Router();

const scheduleData = [
  { day: 'Monday', hours: '1 - 2', subject: 'DAA', room: 'C101' },
  { day: 'Monday', hours: '2 - 3', subject: 'MSWD', room: 'C111' },
  { day: 'Monday', hours: '3 - 4', subject: 'MP', room: 'C017' },
  { day: 'Tuesday', hours: '3 - 4', subject: 'MP', room: 'C017' },
  { day: 'Wednesday', hours: '5 - 6', subject: 'AIML', room: 'R106' },
  { day: 'Thursday', hours: '7 - 8', subject: 'OS', room: 'C422' },
  { day: 'Friday', hours: '9 - 10', subject: 'MSWD', room: '105' },
  { day: 'Saturday', hours: '11 - 12', subject: 'YOGA', room: '106' }
];

router.get('/', (req, res) => {
  const day = req.query.day ? req.query.day.toLowerCase() : null;
  const filteredData = day
    ? scheduleData.filter(item => item.day.toLowerCase() === day)
    : scheduleData;
  res.json(filteredData);
});

module.exports = router;
