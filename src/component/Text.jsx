import { useTextContext } from "../context/TextContext";

function Text() {
  const [state, dispatch] = useTextContext();

  const { text } = state;

  function handleChange(e) {
    const { name, value } = e.target;

    dispatch({ type: "set_value", payload: { name, value } });
  }

  return (
    <>
      <label>Saisir le texte : </label>
      <input
        onChange={handleChange}
        type="text"
        value={text.content}
        name={"content"}
      />
      <br />
    </>
  );
}

export default Text;
