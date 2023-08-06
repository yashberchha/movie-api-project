import React from "react";

const Card = (props) => {
  console.log('props', props);
  const { title, start_year, description, image_url} = props.item;
  return (
    <div>
      <div className="w-[500px] h-56 bg-purple-600 flex cursor-pointer">
        <div className="w-1/3 h-full">
          <img className="w-full h-full" src={image_url} alt="" />
        </div>

        <div className="w-2/3 text-purple-100 ">
          <h1 className="text-2xl font-semibold mt-2">{title}</h1>
          <p className="text-purple-200 mb-3 font-medium">{start_year}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
