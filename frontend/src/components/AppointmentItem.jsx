import { useDispatch } from 'react-redux'
import { deleteAppointment } from '../features/appointment/appointmentSlice'

function AppointmentItem({ appointment }) {
  const dispatch = useDispatch()

  return (
    <div className='appointment'>
      
      <h2>{appointment.name}</h2>
      <div>
        <div>{new Date(appointment.date).toLocaleString('en-US')}</div>
        <button onClick={() => dispatch(deleteAppointment(appointment._id))} className='close'>
        X
      </button>
      </div>
      
    </div>
  )
}

export default AppointmentItem
