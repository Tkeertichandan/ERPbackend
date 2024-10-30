const express = require('express');
const router = express.Router();

const timetableData = [
  { day: "MONDAY", subjects: [{ name: "MSWD", hours: 2, room: "C406" }, { name: "DAA", hours: 2, room: "M202" }, { name: "AIML", hours: 2, room: "C423" }, { name: "OS", hours: 2, room: "C624" }] },
  { day: "TUESDAY", subjects: [{ name: "MP", hours: 2, room: "C321B" }, { name: "OS", hours: 2, room: "C624" }, { name: "DAA", hours: 2, room: "C423" }, { name: "LINUX", hours: 2, room: "M122" }] },
  { day: "WEDNESDAY", subjects: [{ name: "MSWD", hours: 2, room: "C017" }, { name: "DAA", hours: 2, room: "L614" }, { name: "OS", hours: 2, room: "C318" }, { name: "AIML", hours: 2, room: "M002" }] },
  { day: "THURSDAY", subjects: [{ name: "SIL", hours: 2, room: "CAD LAB" }, { name: "OS", hours: 2, room: "C624" }, { name: "DAA", hours: 2, room: "C422" }, { name: "LINUX", hours: 2, room: "C418" }] },
  { day: "FRIDAY", subjects: [{ name: "MP", hours: 2, room: "C421" }, { name: "DAA", hours: 2, room: "M202" }, { name: "AIML", hours: 2, room: "C423" }, { name: "YOGA", hours: 2, room: "YOGA CENTER" }] },
  { day: "SATURDAY", subjects: [{ name: "LINUX", hours: 2, room: "C411" }, { name: "MSWD", hours: 2, room: "C011" }, { name: "OS", hours: 2, room: "C623" }, { name: "SIL", hours: 2, room: "CAD LAB" }] }
];

router.get('/', (req, res) => {
  res.json(timetableData);
});

module.exports = router;
