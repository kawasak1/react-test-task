import React from 'react';
import Progress from './Progress';
import second from '../assets/second.jpg';

const Second = ({
  nextStep,
  prevStep,
  navButton,
  radioChange,
  handleChange,
  values,
  step,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div id='container'>
      <div className='one'>
        <img src={second} alt='second img' className='backImg' />
      </div>
      <div className='two'>
        <div className='header'>
          <Progress step={step} navButton={navButton} />
        </div>
        <hr />
        <div>
          <div className='page-name'>
            <p>Step2/3</p>
            <h2>Message</h2>
          </div>
          <form className='form'>
            <div className='form-control'>
              <label htmlFor='#'>Message</label>
              <textarea
                id='message'
                cols='30'
                rows='8'
                maxLength='504'
                value={values.message}
                onChange={handleChange('message')}
              ></textarea>
            </div>
            <div className='options'>
              <label>
                <input
                  type='radio'
                  name='mode'
                  value={values.messageChoice}
                  checked={values.messageChoice === 'one'}
                  onChange={() => {
                    radioChange(3);
                  }}
                />
                <span className='checkmark'>✔</span>
                <p>The number one choice</p>
              </label>
              <label>
                <input
                  type='radio'
                  name='mode'
                  value={values.messageChoice}
                  checked={values.messageChoice === 'two'}
                  onChange={() => {
                    radioChange(4);
                  }}
                />
                <span className='checkmark'>✔</span>
                <p>The number two choice</p>
              </label>
            </div>
            <div className='form-control'>
              <hr id='bottom_line' />
              <button className='button' onClick={Continue}>
                Next Step
              </button>
              <button className='button' id='back' onClick={Previous}>
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Second;
