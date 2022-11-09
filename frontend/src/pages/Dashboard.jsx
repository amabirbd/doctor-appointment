import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import AppointmentForm from '../components/AppointmentForm'
import AppointmentItem from '../components/AppointmentItem'

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

      <AppointmentForm />

      <section className='content'>
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
