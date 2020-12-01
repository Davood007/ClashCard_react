import React from 'react'

const ClashCardItem = ({ name, level, description }) => {
  return (
    <>
      <div className={`clash-card__level clash-card__level--${name}`}>
        Level {level}
      </div>
      <div className='clash-card__unit-name'>The {name}</div>
      <div className='clash-card__unit-description'>{description}</div>
    </>
  )
}

export default ClashCardItem
