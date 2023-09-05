import React from 'react'
import './AllButton.css'

export const AllButton = ({resetBoard,resetScores}) => {
  return (
    <div className='allButton'>
      <button className='resetButton' onClick={resetBoard}> Reset Game </button>
      <button className='resetButton' onClick={resetScores}> Reset Score</button>
    </div>
  )
}
