const express = require('express');
const router = express.Router();

const courses = [
  {
    courseCode: "23CS06EF",
    courseName: "MSWD",
    courseStructure: "0-0-4-6",
    courseCredits: 4
  },
  {
    courseCode: "23CS2205A",
    courseName: "DAA",
    courseStructure: "2-4-6-4",
    courseCredits: 7
  },
  {
    courseCode: "23SDCS11R",
    courseName: "Linux Administration",
    courseStructure: "4-2-1-2",
    courseCredits: 2
  },
  {
    courseCode: "23MT2004",
    courseName: "MP",
    courseStructure: "2-4-0-6",
    courseCredits: 4
  }
];

router.get('/', (req, res) => {
  res.json(courses);
});

module.exports = router;
