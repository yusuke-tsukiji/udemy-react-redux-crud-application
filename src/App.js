import React from "react";
import PropTypes from 'prop-types';

function App() {

  const profiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 5},
    { name: "NoName"}
  ]

  const User = (props) => {
    return <div>Hi! I am {props.name}, and {props.age} years old!</div>
  }

  User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
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
