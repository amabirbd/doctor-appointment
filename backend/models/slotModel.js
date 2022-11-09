const mongoose = require('mongoose')

const slotSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Slot', slotSchema)
