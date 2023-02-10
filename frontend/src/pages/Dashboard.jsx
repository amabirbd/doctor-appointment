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

  console.log("appointments: ", appointments)

  useEffect(() => {
    if (isError) {
      // console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getAppointments())

    
  }, [user, dispatch, isError, message, navigate])

  if (isLoading && !appointments) {
    return <Spinner />
  }

  return (
    <>
      <section className='text-3xl text-orange-500 m-5'>
        <h1>Create Appointment</h1>
        
      </section>

      {/* <GoalForm /> */}
      <AppointmentForm />

      <h2 className='text-3xl text-orange-500 m-10'>Appointments</h2>

      
    <div class=" overflow-x-auto">
        <table class="flex justify-center w-full text-sm text-left text-gray-500 dark:text-gray-400">
            
            <tbody>
            {appointments && appointments.length > 0 ? (
              <div className='appointments'>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                          Patient name
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Date
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Time Slot
                      </th>
                      <th scope="col" class="px-6 py-3">
                          action
                      </th>
                  </tr>
                </thead>
                {appointments.map((appointment) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <AppointmentItem key={appointment._id} appointment={appointment} />
                </tr>
                ))}
              </div>
            ) : (
              <h3 className='mb-10 p-10'>You do not have any appointment</h3>
            )}
                
            </tbody>
        </table>
    </div>


      {/* <section className='width-5/6'>
        <div className='flex mb-5 justify-between'>
          <p className='font-bold'>Patient Name</p>
          <p className='font-bold'>date</p>
          <p className='font-bold'>time</p>
          <p className='font-bold'>Action</p>
        </div>
        {appointments.length > 0 ? (
          <div className='appointments'>
            {appointments.map((appointment) => (
              <AppointmentItem key={appointment._id} appointment={appointment} />
            ))}
          </div>
        ) : (
          <h3 className='mb-10 p-10'>You do not have any appointment</h3>
        )}
      </section> */}

      
    </>
  )
}

export default Dashboard
