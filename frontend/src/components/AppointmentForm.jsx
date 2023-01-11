import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createAppointment } from '../features/appointment/appointmentSlice'
import timeslots from '../../src/timeSlot.json'

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
      dispatch(createAppointment(formData))
  }

  console.log("formdata: ", formData)
  console.log("timeslots: ", timeslots)

  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
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
              value={email}
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
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
  )
}

export default AppointmentForm
