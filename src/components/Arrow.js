import React from 'react'

const Arrow = ({ direction, clicked }) => {
  return (
    <div className='arrow-wrapper' onClick={clicked}>
      <div className='round'>
        <div id='cta'>
          <span className={`arrow ${direction}`}></span>
        </div>
      </div>
    </div>
  )
}

export default Arrow
