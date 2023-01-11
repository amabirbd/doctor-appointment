import { useDispatch } from 'react-redux'
import { deleteAppointment } from '../features/appointment/appointmentSlice'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function AppointmentItem({ appointment }) {
  const dispatch = useDispatch()
  const appointmentDate = appointment.date.substr(0,10);
  const timeSlot = JSON.parse(appointment.time)

  return (
        <>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {appointment.name}
            </th>
            <td class="px-6 py-4">
              {appointmentDate}
            </td>
            <td class="px-6 py-4">
              {timeSlot.slot}
            </td>
            <td class="px-6 py-4">
              <button onClick={() => dispatch(deleteAppointment(appointment._id))} className='px-5' >
                <DeleteForeverIcon className='text-red-600' />
              </button>
            </td>
        </>
      
  )
}

export default AppointmentItem
