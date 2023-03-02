import React, { useContext } from "react";
import { Songs } from "../Context";

export default function () {
    const {song} =  useContext(Songs)
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-cyan-500 font-bold">Now playing</h2>
      <h2 className="text-neutral-400 text-2xl">{song.name}</h2>
      <div className="w-[240px] m-auto mt-10">
        <img className="w-full"
          src={song.links.images[0].url}
          alt="avatar"
        />
      </div>
      <div className="flex justify-evenly items-center mt-10">
        <img className="w-[70px] rounded-full"
          src="https://yt3.googleusercontent.com/jv0cWtC1YrGZ64thmUlFmhsRUr3lgx1xQZ2O5rIKcqBcjocqNk0sBTjIEJVhjB5I5eA3Q7Bpng=s900-c-k-c0x00ffffff-no-rj"
          alt="avatar"
        />
        <span className="text-xl">{song.author}</span>
      </div>
    </div>
  );
}
