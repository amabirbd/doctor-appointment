import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Spinner from '../components/Spinner'
import AppointmentForm from '../components/AppointmentForm'
import AppointmentItem from '../components/AppointmentItem'
import { getAppointments } from '../features/appointment/appointmentSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { appointments, isLoading, isError, message } = useSelector(
    (state) => state.appointments
  )


  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getAppointments())

    
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Appointment Dashboard</p>
      </section>

      {/* <GoalForm /> */}
      <AppointmentForm />

      <h2 style={{ "textAlign": "center"}}>Appointments</h2>

      

      <section className='content'>
        <div style={{"display": "flex", "justifyContent": "space-between", "marginBottom": "20px"}}>
          <h3>Patient Name</h3>
          <h3>Action</h3>
        </div>
        {appointments.length > 0 ? (
          <div className='appointments'>
            {appointments.map((appointment) => (
              <AppointmentItem key={appointment._id} appointment={appointment} />
            ))}
          </div>
        ) : (
          <h3>You do not have any appointment</h3>
        )}
      </section>

      
    </>
  )
}

export default Dashboard
