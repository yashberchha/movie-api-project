import Options from "./Options";
import result from "../apis/genre";

export default function Menu({ visible, setVisible, setGenre }) {
  const rawData = result.results;
  let data = [];
  rawData.forEach((element) => {
    data.push(element.genre);
  });

  data.sort();

  return (
    <div className="flex flex-col transition duration-300 ease-linear">
      <div className="w-full h-auto flex justify-center bg-purple-500">
        <div className="flex w-4/5 justify-center py-5">
          <div className="font-semibold text-4xl text-white">Genre</div>
        </div>
      </div>
      <Options
        data={data}
        visible={visible}
        setVisible={setVisible}
        setGenre={setGenre}
      />
    </div>
  );
}
