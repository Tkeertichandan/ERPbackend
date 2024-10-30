const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const assignmentsRoutes = require('./routes/assignments');
const attendanceRoutes = require('./routes/attendance');
const coursesRoutes = require('./routes/courses');
const facultyRoutes = require('./routes/faculty');
const feedbackRoutes = require('./routes/feedback');
const timetableRoutes = require('./routes/timetable');
const scheduleRoutes = require('./routes/schedule');
const studentsRoutes = require('./routes/students');

app.use('/assignments', assignmentsRoutes);
app.use('/attendance', attendanceRoutes);
app.use('/courses', coursesRoutes);
app.use('/faculty', facultyRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/timetable', timetableRoutes);
app.use('/schedule', scheduleRoutes);
app.use('/students', studentsRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
