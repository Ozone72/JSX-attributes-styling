import React from "react";
import ReactDOM from "react-dom";

const image = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" spellCheck="false">
      My Favorite Foods
    </h1>
    <ul>
      <li>
        <img src={image} alt="100x100" className="sqr-img" />
      </li>
      <li>
        <img src={image} alt="100x100" className="sqr-img" />
      </li>
      <li>
        <img src={image} alt="100x100" className="sqr-img" />
      </li>
    </ul>
  </div>,
  document.getElementById("root")
);
