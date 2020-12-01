import React from 'react'
import ClashCardImage from './ClashCardImage'
import ClashCardItem from './ClashCardItem'
import ClashCardUnitStates from './ClashCardUnitStates'

const ClashCard = ({ hero }) => {
  return (
    <div class={`clash-card ${hero.name}`}>
      <ClashCardImage name={hero.name} image={hero.img} />
      <ClashCardItem
        name={hero.name}
        level={hero.level}
        description={hero.description}
      />
      <ClashCardUnitStates units={hero.units} name={hero.name} />
    </div>
  )
}

export default ClashCard
