var AppActions = require('../actions/AppActions');

module.exports = {
  addWorkOut: function(workout){
    console.log('Saving Workout...');
    var workouts = JSON.parse(localStorage.getItem('workouts'));
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  },
  getWorkOuts: function(){
    var workouts = JSON.parse(localStorage.getItem('workouts'));
    AppActions.receiveWorkOuts(workouts);
  }
}
