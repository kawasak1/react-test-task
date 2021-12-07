import React from 'react';

const Progress = ({ step, navButton }) => {
  return (
    <React.Fragment>
      <div className='steps'>
        <div
          className={`${
            step >= 1
              ? `${step === 1 ? 'step-active' : 'step-visited'}`
              : 'step'
          }`}
        >
          <button
            onClick={() => {
              navButton(1);
            }}
          >
            <div className='visited-tick'>✔</div>
            <div className='numeration'>1</div>
            <div className='page-label'>Sign Up</div>
          </button>
        </div>
        <div
          className={`${
            step >= 2
              ? `${step === 2 ? 'step-active' : 'step-visited'}`
              : 'step'
          }`}
        >
          <button
            onClick={() => {
              navButton(2);
            }}
          >
            <div className='visited-tick'>✔</div>
            <div className='numeration'>2</div>
            <div className='page-label'>Message</div>
          </button>
        </div>
        <div className={`${step >= 3 ? 'step-active' : 'step'}`}>
          <button
            onClick={() => {
              navButton(3);
            }}
          >
            <div className='visited-tick'>✔</div>
            <div className='numeration'>3</div>
            <div className='page-label'>Checkbox</div>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Progress;
