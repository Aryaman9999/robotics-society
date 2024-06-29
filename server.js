const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

let data = {
  title: "How will joining robotics help students?",
  points: [
    "Robotics teaches essential teamwork skills.",
    "Students will be able to compete in robotics competitions held by our college or any other college and win prizes or scholarships.",
    "Students learn how to communicate across different technology platforms and gain experience in creating an effective message for various audiences."
  ]
};

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
