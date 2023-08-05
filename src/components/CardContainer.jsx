import React, { useEffect, useState } from "react";
import Card from "./Card";
import getSeriesByGenre from "../apis/getByGenre";

const CardContainer = ({ genre }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let result;
    const asyncCall = async () => {
      result = await getSeriesByGenre(genre);
      setData(result);
    };
    asyncCall();
  }, [genre]);

  console.log(genre, data.results);
  return (
    <div>
      <div className="w-full h-auto bg-purple-200 flex flex-wrap justify-center gap-8">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default CardContainer;
