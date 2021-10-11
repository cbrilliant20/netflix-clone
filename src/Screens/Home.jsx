import React from "react"
import Navbar from "../Components/Navbar"

const Home = () => {
  return (
    <div class=" bg-primary">
      <Navbar />
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        class="w-full cursor-pointer object-cover"
      />
    </div>
  )
}

export default Home
