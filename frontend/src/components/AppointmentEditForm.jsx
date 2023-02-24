import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateAppointment } from '../features/appointment/appointmentSlice';
import timeslots from '../../src/timeSlot.json'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function AppointmentEditForm({changeModalState, appointment}) {
  console.log("appointment in appointmment edit form: ", appointment);

  // const [formData, setFormData] = useState({
  //   name: appointment.name,
  //   email: appointment.email,
  //   date: '',
  //   timeSlot: appointment.timeSlot,
  // })

  const [formData, setFormData] = useState({
    name: appointment.name,
    email: appointment.email,
    date: '',
    timeSlot: '',
  })

  const { name, email, date, timeSlot } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

    useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    // dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(formData)
  //   dispatch(updateAppointment(formData))
  //   changeModalState(false)
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted")
    console.log(formData)
    console.log(appointment._id)
    dispatch(updateAppointment(appointment._id, formData))
    changeModalState(false)
  }
  
  return (
    <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Edit appointment</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => changeModalState(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  
                <form >
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      name='name'
                      value={name}
                      placeholder='Enter patient name'
                      onChange={onChange}
                    />
                  </div>
                  <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    value={email? email: ''}
                    placeholder='Enter your email'
                    onChange={onChange}
                  />
                  </div>
                
                  <div className='form-group'>
                    <input
                      type='date'
                      className='form-control'
                      id='date'
                      name='date'
                      value={date}
                      placeholder='Confirm password'
                      onChange={onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label for="timeslot">Choose a time slot:</label>
                      <select name="timeSlot" id="timeSlot" onChange={onChange} value={timeSlot} >
                        {
                          timeslots.map((slot) => (
                            <option value={JSON.stringify(slot)} key={slot.id}>{slot.slot}</option>

                          ))
                        }
                      </select>
                  </div>
                  </form>
                  
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      onClick={() => changeModalState(false)}
                    >
                      Close
                    </button>
                    <button
                      className="text-white bg-orange-500 active:bg-orange-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      onClick={(e)=> handleSubmit(e)}
                      
                    >
                      Submit
                    </button>
                </div>
              </div>
            </div>
          </div>
        </>
  )
}

export default AppointmentEditForm