import { useDispatch } from 'react-redux'
import { deleteAppointment } from '../features/appointment/appointmentSlice'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function AppointmentItem({ appointment }) {
  const dispatch = useDispatch()

  console.log("appointment: ", appointment)

  return (
    <div className='appointment'>

      
      <h2>{appointment.name}</h2>
      <div style={{ "display": "flex"}}>
        <div>{new Date(appointment.date).toLocaleString('en-US')}</div>
        <button onClick={() => dispatch(deleteAppointment(appointment._id))} className='close' style={{"margin": "5px"}} >
          <DeleteForeverIcon style={{"color": "red"}} />
      </button>
      </div>
      
    </div>
  )
}

export default AppointmentItem
