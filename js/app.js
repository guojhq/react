/*Hello World!*/
import React from 'react';
import Hello from './hello.js';

var App = React.createClass({
  render(){
    return (
        <div>
            <Hello name="guojh" />
            <h2>dsad2132</h2>
        </div>
    );
  }
});

React.render(
  <App />,
  document.body
  )
