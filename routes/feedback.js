const express = require('express');
const router = express.Router();

const feedbackData = [
  { Fname: "Viswanath", Cname: "Mathematics", CkSkills: "Excellent", Remarks: "Great understanding of concepts" },
  { Fname: "Kalayan", Cname: "Physics", CkSkills: "Good", Remarks: "Needs improvement in problem-solving" },
  { Fname: "Samba", Cname: "Chemistry", CkSkills: "Average", Remarks: "Active participation in class" }
];

router.get('/', (req, res) => {
  res.json(feedbackData);
});

module.exports = router;
