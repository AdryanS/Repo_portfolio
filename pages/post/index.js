import React, { useState } from "react";

function post() {
  let [tema, setTema] = useState(false);

  let temaDark = () => {
    setTema(!tema);
  };
  return (
    <h1>hello</h1>
  );
}

export default post;
