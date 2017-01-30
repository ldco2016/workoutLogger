var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI');

var CHANGE_EVENT = 'change';

var _workouts = [];
var _showForm = false;

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  showForm: function(){
    _showForm = true;
  },
  getWorkOuts: function(){
    return _workouts;
  },
  getShowForm: function(){
    return _showForm;
  },
  addWorkOut: function(workout){
    _workouts.push(workout);
  },
  addChangeListener: function(callback){
    this.on('change', callback);
  },
  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;

  switch (action.actionType) {
    case AppConstants.SHOW_FORM:
      AppStore.showForm();
      AppStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.ADD_WORKOUT:
      AppStore.addWorkOut(action.workout);
      AppAPI.addWorkOut(action.workout);
      AppStore.emit(CHANGE_EVENT);
      break;
  }

  return true;
});

module.exports = AppStore;
