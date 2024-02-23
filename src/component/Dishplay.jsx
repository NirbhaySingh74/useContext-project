import { useName } from "./UseContext";

function Dishplay() {
  const { name } = useName();

  return (
    <div>
      <h2> {name}</h2>
    </div>
  );
}

export default Dishplay;
