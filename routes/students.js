const express = require('express');
const router = express.Router();

const studentsData = [
  { id: '2300090230', name: 'K.SaiLaxmanRao', branch: 'CS & IT', status: 'Present' },
  { id: '2300033901', name: 'T.K.Chandan', branch: 'CSE', status: 'Absent' },
  { id: '2300030998', name: 'K.Puneeth Reddy', branch: 'CSE', status: 'Present' },
  { id: '2300030286', name: 'K.L.Prasad', branch: 'CSE', status: 'Absent' },
  { id: '2300040118', name: 'B.Shyamsundar', branch: 'CSE', status: 'Present' }
];

router.get('/', (req, res) => {
  res.json(studentsData);
});

router.post('/:id', (req, res) => {
  const { id } = req.params;
  const student = studentsData.find(s => s.id === id);
  if (student) {
    student.status = student.status === 'Present' ? 'Absent' : 'Present';
    res.json({ message: `Attendance updated for student ${id}`, student });
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
});

module.exports = router;
