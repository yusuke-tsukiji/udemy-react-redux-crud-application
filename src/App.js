import React from "react";

function App() {

  const profiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 5},
    { name: "NoName"}
  ]

  const User = (props) => {
    return <div>Hi! I am {props.name}, and {props.age} years old!</div>
  }

  User.defaultProps = {
    age: 1
  }

  return (
    <React.Fragment>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </React.Fragment>
  )
}

export default App;
