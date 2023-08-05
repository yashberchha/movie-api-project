import getSeriesByGenre from "../apis/getByGenre";

export default function Options({ data, visible, setVisible }) {
  const handleTasks = async (e) => {
    setVisible(!visible);
    const genre = e.target.textContent;
    const promise = await getSeriesByGenre(genre);
    console.log(promise);
  };

  return (
    <div className="w-full h-full bg-purple-500 text-white flex justify-center">
      <div className="w-3/5 py-5 flex flex-wrap list-none text-center">
        {data.map((genre, key) => {
          return (
            <li
              key={key}
              className="w-6 basis-1/4 cursor-pointer text-xl py-4 
              hover:bg-purple-100 hover:text-purple-500 transition duration-300
              "
              onClick={handleTasks}
            >
              {genre}
            </li>
          );
        })}
      </div>
    </div>
  );
}
