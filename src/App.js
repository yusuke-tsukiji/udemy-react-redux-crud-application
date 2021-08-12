import React from "react";

function App() {
  const greeting = "Hello!!";
  const dom = <h1 className="foo">{greeting}</h1>;
  // return (
  //   <React.Fragment>
  //     <label htmlFor="bar">bar</label>
  //     <input id="bar" type="text" onChange={() => {console.log("Hi!!")}}></input>
  //   </React.Fragment>
  // )

  const Cat = () => {
    return <div>Meow!!</div>
  }

  return (
    <React.Fragment>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
    </React.Fragment>
  )
}

export default App;
