import { useTextContext } from "../context/TextContext";

function Font() {
  const [state, dispatch] = useTextContext();

  const { text } = state;

  function handleChange(e) {
    const { name, value } = e.target;

    dispatch({ type: "set_value", payload: { name, value } });
  }

  const fontSizes = [];

  for (let i = 15; i <= 20; i++) {
    fontSizes.push(
      <option key={i} value={`${i}px`}>
        {i}px
      </option>
    );
  }

  return (
    <>
      <br />
      <label>Taille du texte : </label>
      <select
        onChange={handleChange}
        name="fontSize"
        id="fontSize"
        value={text.fontSize}
      >
        <option value="">-- Select font size --</option>
        {fontSizes}
      </select>
      <br />
    </>
  );
}

export default Font;
