import React from 'react'
import InfoBar from './InfoBar'
import MoviePicker from './MoviePicker'

const App = () => {
  return (
    <div className="flex j-center i-center h-screen bg-darkgray text-white f-col">
      <MoviePicker/>
      <InfoBar/>
    </div>
  )
}

export default App