import { useTextContext } from "../context/TextContext";

function Color() {
  const [state, dispatch] = useTextContext();

  const { text } = state;

  function handleChange(e) {
    const { name, value } = e.target;

    dispatch({ type: "set_value", payload: { name, value } });
  }

  return (
    <>
      <br />
      <label>Selectionnez un rendu : </label>
      <select
        onChange={handleChange}
        name="color"
        id="color"
        value={text.color}
      >
        <option value="">-- Select color --</option>
        <option value="palevioletred">palevioletred</option>
        <option value="tomato">tomato</option>
      </select>
      <br />
    </>
  );
}

export default Color;
