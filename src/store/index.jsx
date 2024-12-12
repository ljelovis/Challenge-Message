import { useReducer } from "react";

let id = 0;

const initialState = {
  text: {
    id: id++,
    content: "",
    color: "",
    fontSize: "",
  },
  textList: [],
};

function textReducer(state, action) {
  switch (action.type) {
    case "set_value":
      return {
        ...state,
        text: {
          ...state.text,
          [action.payload.name]: action.payload.value,
        },
      };
    case "add_text":
      return state.text.content !== "" &&
        state.text.color !== "" &&
        state.text.fontSize !== ""
        ? {
            ...state,
            text: {
              id: id++,
              content: "",
              color: "",
              fontSize: "",
            },
            textList: state.textList.concat([state.text]),
          }
        : state;
    case "delete_text":
      return {
        ...state,
        textList: state.textList.filter((text) => text.id !== action.payload),
      };
    default:
      return state;
  }
}

export function useTextReducer() {
  return useReducer(textReducer, initialState);
}
