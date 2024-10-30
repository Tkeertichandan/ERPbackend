const express = require('express');
const router = express.Router();

let assignments = [
  { id: 1, course: 'Math', dueDate: '2024-11-01', time: '10:00 AM' }
];

router.get('/', (req, res) => {
  res.json(assignments);
});

router.post('/submit', (req, res) => {
  const { course, dueDate, time } = req.body;
  const newAssignment = { id: assignments.length + 1, course, dueDate, time };
  assignments.push(newAssignment);
  res.json({ message: 'Assignment submitted successfully!', assignment: newAssignment });
});

module.exports = router;
