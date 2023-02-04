const express = require('express')
const router = express.Router()
const {
  getAppointments,
  setAppointment,
  updateAppointment,
  deleteAppointment,
} = require('../controllers/appointmentController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getAppointments).post(protect, setAppointment)
router.route('/:id').patch(protect, updateAppointment).delete(protect, deleteAppointment)

module.exports = router
