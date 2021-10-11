import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import React from "react"

const Featured = ({ type }) => {
  return (
    <div class="h-4/5 relative ">
      {type && (
        <div class="absolute top-6 left-3  text-white flex items-center justify-center">
          <span class="text-4xl font-semibold">
            {type === "movie" ? "Movies" : "Series"}
          </span>
          <select
            name="genre"
            id="genre"
            class="cursor-pointer bg-primary border border-white mx-2 p-2 rounded-md text-lg"
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        class="w-full h-full object-cover"
      />
      {/* Info */}
      <div class="w-1/3 absolute left-4 bottom-6 text-white flex flex-col ">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
          class="w"
        />
        {/* Description */}
        <span class="mx-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          itaque possimus rerum ex rem voluptatum voluptates assumenda at quam
          blanditiis?
        </span>
        {/* Buttons */}
        <div class="flex">
          <button class="py-1 px-2 rounded-md flex items-center justify-center bg-white text-primary text-2xl mx-1 cursor-pointer ">
            <PlayArrow />
            <span class="mx-1">Play</span>
          </button>
          <button class="py-1 px-2 rounded-md flex items-center justify-center bg-gray-400 text-white text-2xl mx-1 cursor-pointer ">
            <InfoOutlined />
            <span class="mx-1">Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
