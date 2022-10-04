import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setheading] = useState("");

  //lists for event from the input field using the onChange attribute
  function handleChange(event) {
    //listen to event, target the field or tag responsible and then capture its value
    setName(event.target.value);
  }
  //sets the heading name to the name variable after inputing it in the input field
  function handleClick(event) {
    setheading(name);
    //this prevent the form from refreshing which is its default behavior
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
