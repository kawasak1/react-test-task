import React from 'react';
import Progress from './Progress';
import first from '../assets/first.jpg';

const First = ({
  nextStep,
  handleChange,
  navButton,
  validateEmail,
  values,
  step,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const current = new Date().toISOString().split('T')[0];

  return (
    <div id='container'>
      <div className='one'>
        <img src={first} alt='first img' className='backImg' />
      </div>
      <div className='two'>
        <div className='header'>
          <Progress step={step} navButton={navButton} />
        </div>
        <hr />
        <div>
          <div className='page-name'>
            <p>Step1/3</p>
            <h2>Sign Up</h2>
          </div>
          <form className='form'>
            <div className='form-control-left'>
              <label htmlFor='#'>First Name</label>
              <input
                type='text'
                value={values.firstName}
                onChange={handleChange('firstName')}
              />
            </div>
            <div className='form-control-right'>
              <label htmlFor='#'>Last Name</label>
              <input
                style={{ cursor: 'pointer' }}
                type='text'
                value={values.lastName}
                onChange={handleChange('lastName')}
              />
            </div>
            <div className='form-control-left'>
              <label htmlFor='#'>Date of Birth</label>
              <input
                data-date-format='MM / DD / YYYY'
                type='date'
                value={values.dateOfBirth}
                max={current}
                onChange={handleChange('dateOfBirth')}
              />
            </div>
            <div className='form-control-right'>
              <label
                htmlFor='#'
                className={`${
                  values.isInvalidEmail || values.isEmailTaken ? 'error' : ''
                }`}
              >
                Email Address
              </label>
              <input
                type='text'
                required
                className={`${
                  values.isInvalidEmail || values.isEmailTaken ? 'error' : ''
                }`}
                value={values.email}
                onChange={handleChange('email')}
                onBlur={(e) => {
                  validateEmail(e.target.value, 'onBlur');
                }}
              />
              {values.isInvalidEmail && (
                <span className='error'>Please enter valid email address</span>
              )}
              {values.isEmailTaken && (
                <span className='error'>Email is already taken</span>
              )}
            </div>
            <div className='form-control' style={{ width: '100%' }}>
              <label htmlFor='#'>Address</label>
              <input
                style={{ cursor: 'pointer' }}
                type='text'
                value={values.address}
                onChange={handleChange('address')}
              />
            </div>
            <div className='form-control'>
              <hr id='bottom_line' />
              <button className='button' onClick={Continue}>
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default First;
