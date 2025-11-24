import states from "../constants/states.js";

const State = () => {
  return (
    <select name="state" id="state" required>
      {states.map((state) => (
        <option key={state.abbreviation} value={state.abbreviation}>
          {state.name}
        </option>
      ))}
    </select>
  );
};

export default State;
