import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ]);

  const [completeTodos, setCompleteTodos] = useState(["うううう", "ええええ"]);

  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    // alert(todoText);
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText]; //今のincompleteTodosをコピー + todoText
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    // alert(index);
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1); //してしたindexから何個消すか。
    setIncompleteTodos(newTodos);
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODO"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                {/* key={todo} 変更前と後のdiffをみるのでkeyを設定しなければならない */}
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>

        <ul>
          {completeTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>いいいい</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
