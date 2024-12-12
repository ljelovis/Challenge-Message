import Text from "./Text";
import Color from "./Color";
import Font from "./Font";
import { useTextContext } from "../context/TextContext";

function Form() {
  const [_, dispatch] = useTextContext();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "add_text" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Text />
      <Color />
      <Font />
      <br />
      <button role={"button"}>Valider</button>
    </form>
  );
}

export default Form;
