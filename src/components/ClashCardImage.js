import React from 'react'

const ClashCardImage = ({ name, image }) => {
  return (
    <div className={`clash-card__image clash-card__image--${name}`}>
      <img src={image} alt={name} />
    </div>
  )
}

export default ClashCardImage
