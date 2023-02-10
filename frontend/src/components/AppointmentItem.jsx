import { useDispatch } from 'react-redux'
import { deleteAppointment } from '../features/appointment/appointmentSlice'
import {MdOutlineDeleteForever} from 'react-icons/md'
import {BiEdit} from 'react-icons/bi'
import { useState } from 'react'
import AppointmentEditForm from './AppointmentEditForm'


function AppointmentItem({ appointment }) {
  console.log("appointment in appointment item: ", appointment)
  const dispatch = useDispatch()
  const appointmentDate = appointment?.date?.substr(0,10);
  const timeSlot = appointment.time ? JSON.parse(appointment.time) : ''

  const [showModal, setShowModal] = useState(false);

  const changeModalState = (val) => {
    setShowModal(val)
  }

  return (
        <>
            {
              showModal?
              <AppointmentEditForm changeModalState={changeModalState} appointment={appointment} />:
              null
            }
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {appointment.name}
            </th>
            <td className="px-6 py-4">
              {appointmentDate}
            </td>
            <td className="px-6 py-4">
              {timeSlot.slot}
            </td>
            <td className="px-4 py-4 flex">
              <button onClick={() => dispatch(deleteAppointment(appointment._id))} className='px-2' >
                <MdOutlineDeleteForever className='text-red-500 text-2xl' />
                
              </button>
              <button onClick={() => changeModalState(true)} >
                <BiEdit className='text-green-700 text-xl'  />
              </button>
            </td>
        </>
      
  )
}

export default AppointmentItem
