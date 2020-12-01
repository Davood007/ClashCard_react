import React, { useState, useEffect } from 'react'
import Arrow from './Arrow'
import ClashCard from './ClashCard'
import './style.css'

const Slider = () => {
  const [heros, setHeros] = useState([])
  const [curser, setCurser] = useState(0)
  useEffect(() => {
    fetch('http://localhost:3000/heroes')
      .then((response) => response.json())
      .then((data) => setHeros(data))
  }, [])
  const nextSlider = () => {
    const current = curser + 1 < heros.length - 1 ? curser + 1 : 0
    setCurser(current)
  }

  const prevSlider = () => {
    const current = curser - 1 < 0 ? heros.length - 1 : curser - 1
    setCurser(current)
  }
  return (
    <div className='slide-container'>
      <div className='wrapper'>
        {!heros.length ? (
          <p>Loading ...</p>
        ) : (
          <>
            <Arrow direction='prev' clicked={prevSlider} />
            <ClashCard hero={heros[curser]} />
            <Arrow direction='next' clicked={nextSlider} />
          </>
        )}
      </div>
    </div>
  )
}

export default Slider
