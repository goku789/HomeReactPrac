import React from "react";

function Namelist() {
  const person = [
    {
      name: "Adesh",
      age: 30,
    },
    {
        name: "Payal",
        age: 30,
      },
      
  ];

  const name = person.map((person) => <h2>{person.age}</h2>);
  return <div>{name}</div>;
}

export default Namelist;
