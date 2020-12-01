import React from 'react'
import ClashCardState from './ClashCardState'

const ClashCardUnitStates = ({ units = [], name }) => {
  const states =
    units &&
    units.map((state, index) => (
      <ClashCardState
        state={state.state}
        value={state.value}
        noBorder={index === units.length - 1}
      />
    ))
  return (
    <div
      className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}
    >
      {states}
    </div>
  )
}

export default ClashCardUnitStates
