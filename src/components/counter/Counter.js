import {useReducer} from "react";
import {reducer} from "../../reducer/reducer";

export default function Counter() {
    const [{health}, dispatch] = useReducer(reducer, {health: 0});
  return (
    <div>
        <div>your health: {health}</div>
        <button onClick={() => dispatch({value: 10, act: '+'})}>heal +10</button>
        <button onClick={() => dispatch({value: 2, act: '-'})}>damage -2</button>
    </div>
  );
}