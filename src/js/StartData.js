module.exports = {
  init: function(){
    localStorage.clear();
    localStorage.setItem('workouts', JSON.stringify([
      {
        id: 1,
        type: 'Jogging',
        minutes: 20,
        miles: 2,
        date: new Date()
      },
      {
        id: 2,
        type: 'Yoga',
        minutes: 40,
        miles: '',
        date: new Date()
      }
    ]));
  }
}
