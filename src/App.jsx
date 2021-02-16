/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
const App = () => {
  const [num, setNum] = useState(0); //変数　関数　=useState(初期値)
  const [faceShowFlag, setfaceShowFlag] = useState(true);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    //割り込み処理的な感じ
    console.log("fefe");
    if (num % 3 === 0) {
      faceShowFlag && setfaceShowFlag(false);
    } else {
      faceShowFlag || setfaceShowFlag(true);
    }
  }, [num]); //numを監視する

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag || <p>U^ェ^U</p>}
    </>
  );
};

export default App; // これで他のファイルでも使えるようになる.グローバル
