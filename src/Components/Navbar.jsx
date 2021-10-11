import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import React from "react"
import { useState } from "react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }
  // Check if Scroll is Working
  // console.log(isScrolled)

  return (
    <div
      class={
        isScrolled
          ? "fixed top-0 w-full z-999 bg-primary"
          : "fixed top-0 w-full z-999 bg-gradient"
      }
    >
      <div class="text-white h-24 flex items-center justify-between container">
        {/* Left */}
        <div class="flex items-center justify-between">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
            alt=""
            class="h-10"
          />
          <span class="mx-2 cursor-pointer">Homepage</span>
          <span class="mx-2 cursor-pointer">Series</span>
          <span class="mx-2 cursor-pointer">Movies</span>
          <span class="mx-2 cursor-pointer">New and Popular</span>
          <span class="mx-2 cursor-pointer">My List</span>
        </div>

        {/* Right */}
        <div class="flex items-center">
          <Search className=" mx-2 cursor-pointer" />
          <span class="mx-2 cursor-pointer">KID</span>
          <Notifications className=" mx-2 cursor-pointer" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            class="w-6 h-6 cursor-pointer rounded-md object-cover mx-2"
          />
          {/* Profile */}
          <div class="group relative">
            <ArrowDropDown className=" mx-2 cursor-pointer block" />
            <div class="group-hover:flex hidden absolute  flex-col bg-primary rounded-md">
              <span class="p-2 cursor-pointer">Settings</span>
              <span class="p-2 cursor-pointer">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
