import React from 'react'

const ClashCardState = ({ state, value, noBorder }) => {
  const classes = ['one-third']
  if (noBorder) {
    classes.push('no-border')
  }

  return (
    <div className={classes.join(' ')}>
      <div className='stat'>{state}</div>
      <div className='stat-value'>{value}</div>
    </div>
  )
}

export default ClashCardState
