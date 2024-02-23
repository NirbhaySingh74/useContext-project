import { useName } from "./UseContext";

function Body() {
  const { name, setName } = useName();

  return (
    <div>
      <input
        type="text"
        value={name}
        className="p-1 m-2 bg-red-300"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Body;
