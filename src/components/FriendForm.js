import React from 'react'

export default function FriendForm(props) {
  const {
    values,
    onSubmit,
    onInputChange,
    onCheckboxChange,
    disabled,
    errors,
  } = props

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Friend</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <button disabled={disabled}>submit</button>

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username&nbsp;
          <input
            value={values.username}
            onChange={onInputChange}
            name='username'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role
          <select
            onChange={onInputChange}
            value={values.role}
            name='role'
          >
            <option value=''>- Select an option -</option>
            <option value='Student'>Student</option>
            <option value='Alumni'>Alumni</option>
            <option value='Instructor'>Instructor</option>
            <option value='TL'>Team Lead</option>
          </select>
        </label>

        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        <label>Single
          <input
            checked={values.civil === 'Single'}
            value='Single'
            onChange={onInputChange}
            name='civil'
            type='radio'
          />
        </label>

        <label>Married
          <input
            checked={values.civil === 'Married'}
            value='Married'
            onChange={onInputChange}
            name='civil'
            type='radio'
          />
        </label>
      </div>

      <div className='form-group checkboxes'>
        <h4>Hobbies</h4>

        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        <label>Hiking
          <input
            name='hiking'
            type="checkbox"
            onChange={onCheckboxChange}
            checked={values.hobbies.hiking}
          />
        </label>

        <label>Reading
          <input
            name='reading'
            type="checkbox"
            onChange={onCheckboxChange}
            checked={values.hobbies.reading}
          />
        </label>

        <label>Coding
          <input
            name='coding'
            type="checkbox"
            onChange={onCheckboxChange}
            checked={values.hobbies.coding}
          />
        </label>
      </div>
    </form>
  )
}