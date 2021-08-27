const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchemea = new Schema({
  date: {
    type: Date,
    unique: true,
    default:() => new Date()
  },
  exercises: [
      {
        type: {
            type: String,
            required: 'Required Input',
            trim: true,
          },
          name: {
            type: String,
            required: 'Required Input',
            trim: true,
          },
          duration: {
            type: Number,
            required: 'Required Input',
          },
          weight: {
            type: Number,
            required: 'Required Input',
          },
          reps: {
            type: Number,
            required: 'Required Input',
          },
          sets: {
            type: Number,
            required: 'Required Input',
          },

      }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchemea);

module.exports = Workout;

/*
    day: new Date(new Date().setDate(new Date().getDate() - 9)),
    exercises: [
      {
        type: 'resistance',
        name: 'Bicep Curl',
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4,
*/