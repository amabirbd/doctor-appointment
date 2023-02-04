import axios from 'axios'

const API_URL = 'http://localhost:5000/api/appointments/'

// Create new appointment
const createAppointment = async (appointmentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, appointmentData, config)

  return response.data
}

// Get user appointments
const getAppointments = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// update appointment
const updateAppointment = async (appointmentId, appointmentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  console.log(API_URL + appointmentId, appointmentData, config)

  const response = await axios.put(API_URL + appointmentId, appointmentData, config)

  return response.data
}

// Delete user appointment
const deleteAppointment = async (appointmentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + appointmentId, config)

  return response.data
}

const appointmentService = {
  createAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment,
}

export default appointmentService
