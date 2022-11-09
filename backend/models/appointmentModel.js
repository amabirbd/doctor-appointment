const mongoose = require('mongoose')


const appointmentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: [true, "enter name"],
    },
    email: {
      type: String,
      required: false,
    },
    date: {
        type: Date,
        // default: Date.now(),
      },
    time: {
        type: String,
        required: false,
      },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Appointment', appointmentSchema)