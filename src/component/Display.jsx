import { useTextContext } from "../context/TextContext";

function Display() {
  const [state, dispatch] = useTextContext();

  const { textList } = state;

  return (
    <>
      <ul>
        {textList.map((text, i) => (
          <li key={i} style={{ color: text.color, fontSize: text.fontSize }}>
            <span>{text.content}</span>
            <button
              onClick={() =>
                dispatch({ type: "delete_text", payload: text.id })
              }
              id={"delete-btn"}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Display;
