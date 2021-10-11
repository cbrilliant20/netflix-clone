import React from "react"
import Featured from "../Components/Featured"
import Navbar from "../Components/Navbar"

const Home = () => {
  return (
    <div >
      <Navbar />
      <Featured type="movie" />
    </div>
  )
}

export default Home
