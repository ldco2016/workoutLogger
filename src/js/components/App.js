var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm');
var Workouts = require('./Workouts');

function getAppState(){
  return {
    showForm: AppStore.getShowForm(),
    workouts: AppStore.getWorkOuts()
  }
}

// React component adding event listener to the DOM when it first mounts and removing event listener when
// component unmounts from the DOM, so irrelevant processing does not occur.
// Understanding how and when these hooks fire is key to building stable components and will enable
// you to control the rendering process (improving performance).
var App = React.createClass({
  // Initialization stage of React lifecycle
  getInitialState: function(){
    return getAppState();
  },

  // when the component is added to the DOM - Initialization stage of React lifecycle
  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },

  // when the component is removed from the DOM - Destruction stage of React lifecycle
  componentUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },

  onShowFormClick: function(e){
    e.preventDefault();
    AppActions.showForm();
  },

  render: function(){
    console.log(this.state.workouts);
    if(this.state.showForm){
      var form = <AddForm />
    } else {
      var form = '';
    }
    return (
      <div>
        <h1 className="text-center page-header">WorkoutLogger</h1>
        <a onClick={this.onShowFormClick} href="#" className="btn btn-primary btn-block">Add Workout</a>
        <br />
        {form}
        <br />
        <Workouts workouts={this.state.workouts} />
        <br />
      </div>
    );
  },

  // Update view state when change is received
  _onChange: function(){
    this.setState(getAppState());
  }
});

module.exports = App;
