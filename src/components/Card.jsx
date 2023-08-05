import React from "react";

const Card = () => {
  return (
    <div>
      <div className="w-[500px] h-56 bg-purple-600 flex cursor-pointer">
        <div className="w-1/3 h-full">
          <img
            className="w-auto h-full"
            src="https://m.media-amazon.com/images/M/MV5BNGEyOGJiNWEtMTgwMi00ODU4LTlkMjItZWI4NjFmMzgxZGY2XkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_UX182_CR0,0,182,268_AL_.jpg"
            alt=""
          />
        </div>

        <div className="w-2/3 text-purple-100 ">
          <h1 className="text-2xl font-semibold mt-2">The Boys</h1>
          <p className="text-purple-200 mb-3 font-medium">2019</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos soluta
            distinctio, quas repellendus est laboriosam, quod quaerat autem, rem
            quia consequatur nihil sapiente eum similique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
