import React from 'react';
import Progress from './Progress';
import eve from '../assets/eve.png';
import eveActivated from '../assets/eve-active.png';
import walle from '../assets/wall-e.png';
import walleActivated from '../assets/wall-e-active.png';
import third from '../assets/third.jpg';

function Third({
  prevStep,
  navButton,
  push,
  radioChange,
  checkboxChange,
  values,
  step,
}) {
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div id='container'>
      <div className='one'>
        <img src={third} alt='second img' className='backImg' />
      </div>
      <div className='two'>
        <div className='header'>
          <Progress step={step} navButton={navButton} />
        </div>
        <hr />
        <div>
          <div className='page-name'>
            <p>Step3/3</p>
            <h2>CheckBox</h2>
          </div>
          <form
            className='form'
            onSubmit={(e) => {
              e.preventDefault();
              push();
            }}
          >
            <div className='form-control'>
              <label className='gender'>
                <input
                  type='radio'
                  name='mode'
                  value={values.gender}
                  checked={values.gender === 'male'}
                  onChange={() => {
                    radioChange(1);
                  }}
                />
                {values.gender === 'male' ? (
                  <img alt='wall-e' src={walleActivated} />
                ) : (
                  <img alt='wall-e' src={walle} />
                )}
              </label>
              <label className='gender'>
                <input
                  type='radio'
                  name='mode'
                  value={values.gender}
                  onChange={() => {
                    radioChange(2);
                  }}
                  checked={values.gender === 'female'}
                />
                {values.gender === 'female' ? (
                  <img alt='eve' src={eveActivated} />
                ) : (
                  <img alt='eve' src={eve} id='eve' />
                )}
              </label>
            </div>
            <div className='add-options'>
              <label>
                <input
                  type='checkbox'
                  value={values.addOption1}
                  checked={values.addOption1}
                  onChange={() => {
                    checkboxChange(1);
                  }}
                />
                <span className='checkmark'>✔</span>
                <p>I want to add this option.</p>
              </label>
            </div>
            <div className='add-options'>
              <label>
                <input
                  type='checkbox'
                  value={values.addOption2}
                  checked={values.addOption2}
                  onChange={() => {
                    checkboxChange(2);
                  }}
                />
                <span className='checkmark'>✔</span>
                <p>Let me click on this checkbox and choose some cool stuff.</p>
              </label>
            </div>
            <div className='form-control'>
              <hr id='bottom_line' style={{ marginTop: '15px' }} />
              <button className='button' type='submit'>
                Submit
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
}

export default Third;
