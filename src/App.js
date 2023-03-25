import "./styles.css";
import React from "react";

export default function App() {
  const [toggleNav, setToggleNav] = React.useState(true);
  const [counter, setCounter] = React.useState(0);

  const details = {
    images: [
      {
        name: "Pascie",
        img:
          "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=400",
        text: "I love using this platform, this is the best it could ever be."
      },

      {
        name: "Bob",
        img:
          "https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&w=400",
        text: "I love using this platform, this is the best it could ever be."
      },

      {
        name: "Christopher",
        img:
          "https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&w=400",
        text: "I love using this platform, this is the best it could ever be."
      },

      {
        name: "Kennedy",
        img:
          "https://images.pexels.com/photos/3445218/pexels-photo-3445218.jpeg?auto=compress&cs=tinysrgb&w=400",
        text: "I love using this platform, this is the best it could ever be."
      }
    ]
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="div">
          <button
            className="show"
            onClick={() => setToggleNav((prev) => !prev)}
          >
            {toggleNav ? "-" : "+"}
          </button>
          <h1>LOGO</h1>
        </div>
        {toggleNav ? (
          <ul class="menu-links">
            <li>Home</li>
            <li>Menu</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        ) : (
          ""
        )}
      </div>

      <h1>Testimonials</h1>

      <div className="testimonials">
        {counter !== 0 ? (
          <button onClick={() => setCounter((prev) => prev - 1)}>
            <img src="https://img.icons8.com/sf-black-filled/64/null/back.png" />
          </button>
        ) : (
          <button disabled>
            <img src="https://img.icons8.com/sf-black-filled/64/null/back.png" />
          </button>
        )}
        <div>
          <span className="image">
            <img src={details.images[counter].img} alt="image" />
          </span>
          <h3>{details.images[counter].name}</h3>
          <p>{details.images[counter].text}</p>
        </div>
        {counter < details.images.length - 1 ? (
          <button onClick={() => setCounter((prev) => prev + 1)}>
            <img src="https://img.icons8.com/sf-black-filled/64/null/back.png" />
          </button>
        ) : (
          <button disabled>
            <img src="https://img.icons8.com/sf-black-filled/64/null/back.png" />
          </button>
        )}
      </div>
    </div>
  );
}
