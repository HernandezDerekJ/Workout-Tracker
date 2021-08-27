const router = require('express').Router();
const Workout = require("../models/Workout.js");
// path/api/...
router.get("/api/workouts", (req, res) => {
  Workout.aggregate([{
    $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
    },},},])
    .then((x) => {
        res.json(x);
    })
    .catch((err) => {
        res.json(err);
        console.log("API/Get");b
    })
})
//New workout
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((x) => {
        res.json(x);

    })
    .catch((err) => {
        res.json(err);
        console.log("API/Post");
    })
})
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
      req.params.id, 
      { $push: { exercises: req.body }}, 
      { new: true}
    )
  .then((x) => {
      res.json(x);
    })
  .catch((err) => {
      res.json(err);
      console.log("API/PUT");
    })
})
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([{
    $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
    }}}])
    .sort({ _id:-1})  
    .limit(7)
    .then((x) => {
        res.json(x);
    })
    .catch((err) => {
        res.json(err);
        console.log("API/Get");
    });
})

module.exports = router;
