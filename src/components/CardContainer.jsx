import React, { useEffect, useState } from "react";
import Card from "./Card";
import getSeriesByGenre from "../apis/getByGenre";
import getByImdbid from "../apis/getByImdb";

const CardContainer = ({ genre }) => {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  /// fetching imdb ids
  const fetchId = async (genre) => {
    try {
      let result = await getSeriesByGenre(genre);
      setData(result.results.slice(0, 9));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchId(genre);
  }, [genre]);

  // console.log(data.length);
  let temp = [];
  const fetchDetails = async (imdb_id) => {
    try {
      let result = await getByImdbid(imdb_id);
      temp.push(result.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    data.forEach((item) => {
      fetchDetails(item.imdb_id);
    });
    setList(temp);
  }, [data]);

  return (
    <div>
      <div className="w-full h-auto bg-purple-200 flex flex-wrap justify-center gap-8">
        {list.map((item, key) => {
          return <Card key={key} item={item}></Card>;
        })}
      </div>
    </div>
  );
};

export default CardContainer;
