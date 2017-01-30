var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var AppAPI = require('./utils/AppAPI');
var StartData = require('./StartData');

if(localStorage.getItem('workouts') == null){
  StartData.init();
}

ReactDOM.render(<App />, document.getElementById('main'));
