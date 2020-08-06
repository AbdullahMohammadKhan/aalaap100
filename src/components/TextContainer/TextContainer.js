import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>
        আ লা প {/* Realtime Chat Application{" "} */}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        {/* Created with React, Express, Node and Socket.IO{" "} */}
        চলুন, রুমে আলাপ জমাই...
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
      <h2>
        {/* Try it out right now!{" "} */}যে কারো সাথে রুমের নাম শেয়ার করে দিন
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h2>
    </div>
    {users ? (
      <div>
        <h1>যারা এই মুহুর্তে রুমে আলাপে আছে:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
