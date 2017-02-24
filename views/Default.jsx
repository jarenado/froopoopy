// Default layout template
var React = require('react');

var Default = React.createClass({

  render: function() {

    return(
      <html>
      <head>

        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <title>ListoVino</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
	<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css"></link>
	<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>

      </head>
      <body style={{fontFamily: ['Varela Round', 'sans-serif']}}>
        <div id="app" ></div>
        <script src="js/bundle.js"></script>
      </body>
      </html>
    );
  }
});

module.exports = Default;
