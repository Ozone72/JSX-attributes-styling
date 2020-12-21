import React from "react";
import ReactDOM from "react-dom";

const image = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" spellCheck="false">
      My Favorite Foods
    </h1>
    <ul>
      <img src={image} alt="100x100" className="sqr-img" />
      <img src={image} alt="100x100" className="sqr-img" />
      <img src={image} alt="100x100" className="sqr-img" />
    </ul>
  </div>,
  document.getElementById("root")
);
