const express = require('express');
const router = express.Router();

const facultyData = [
  { name: "V. Murali Mohan", designation: "Professor", department: "CSE-Honors" },
  { name: "Ch. Anil", designation: "Asst Professor", department: "CSE-Honors" },
  { name: "B. Ashokh", designation: "Professor", department: "CSE-Regulars" }
];

router.get('/', (req, res) => {
  res.json(facultyData);
});

module.exports = router;
