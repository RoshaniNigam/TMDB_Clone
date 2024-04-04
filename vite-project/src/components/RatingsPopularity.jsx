import React from "react";

function RatingsPopularity({vote , popularity , revenue}) {
  return (
    <>
      <div class="gap-3 sm:gap-10 flex group justify-evenly">
        <div class="font-black flex flex-col">
          <span class="text-yellow-500 text-sm sm:text-xl">IMDB SCORE</span>
          <span class="text-base sm:text-3xl ml-8 flex gap-x-1 items-center group-hover:text-yellow-600">
            {vote} &#11088;
           
          </span>
        </div>

        <div class="font-black flex flex-col">
          <span class="text-red-500 text-sm sm:text-xl">POPULARITY</span>
          <span class="text-base sm:text-3xl ml-1 flex gap-x-1 items-center group-hover:text-yellow-600">
            {popularity} &#128293;
           
          </span>
        </div>

        <div class="font-black flex flex-col">
          <span class="text-blue-500 text-sm sm:text-xl">BOX OFFICE</span>
          <span class="text-base sm:text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
            {revenue} M &#128176;
           
          </span>
        </div>
      </div>
    </>
  );
}

export default RatingsPopularity;
