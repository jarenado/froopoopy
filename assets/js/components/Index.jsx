// React components
import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user;
}

/*const user = {
 *  firstName: 'Carlos',
 *  lastName: 'Arenado'
 *};
 **/
function getGreeting(user) {
  var name = user;
  if (name) {
    return <h1 className="username"> Hello, {formatName(name)}! </h1>
  } 
  return <h1 classname="username">Hello, you!</h1>
}

function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

const element = <Welcome name="Carlos Jr" />;

ReactDOM.render(
  <Welcome name="Jose Jr" />,
  document.getElementById('app')
);
