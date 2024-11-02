const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

let assignments = [
  { id: 1, course: 'Math', dueDate: '2024-11-01', time: '10:00 AM' }
];

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default-secret-key');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

router.get('/', (req, res) => {
  res.json(assignments);
});

router.post('/submit', verifyToken, (req, res) => {
  const { course, dueDate, time } = req.body;
  const newAssignment = { id: assignments.length + 1, course, dueDate, time };
  assignments.push(newAssignment);
  res.json({ message: 'Assignment submitted successfully!', assignment: newAssignment });
});

module.exports = router;
