import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
// adding props

const Person = ({img, name, job, children}) => {
  // using template litrals
  const url = `https://randomuser.me/api/portraits/thumb/women/${img}.jpg`;
  return (
    <article className = "person">
      <img src={url} alt="me"></img>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

// now create a component
const PersonList = () => {
  return (
    <section className = "person-list">
      <Person img="35" name="spider" job="web developer"></Person>
      <Person img="22" name="revaly" job="doctor"></Person>
      <Person img="57" name="esther" job="lawyer">
        <p> this is esther she is a renowned lawyer in ghana with phd in law at university of ghana. </p>
      </Person>
    </section>
  );
};


ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));