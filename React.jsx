
/////////////////////////////// USING FOR EACH ///////////////////
///does not work  {within jsx}
const Overview = (props) => {
  const { tasks } = props;
  let resArray = [];
  tasks.forEach((task) => {
    resArray.push(<li>{task.text}</li>);
  })

  return (
    <ul>
      {resArray}
    </ul>
  );
}

/////////////////////////////// USING MAP ////////////////////////
// WORKS {WITHIN JSX}.                
import React from "react";

const Overview = (props) => {
  const { tasks } = props;
  return (
    <ul>
      {tasks.map((task)=> {
        return <li>{task.text}</li>
      })}
    </ul>
  );
}
