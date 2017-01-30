var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  showForm: function(){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.SHOW_FORM
    });
  },
  addWorkOut: function(workout){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_WORKOUT,
      workout: workout
    });
  },
  receiveWorkOuts: function(workouts){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_WORKOUTS,
      workouts: workouts
    });
  }
}

module.exports = AppActions;
