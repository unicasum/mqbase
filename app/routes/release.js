import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [{
      "name": "R1",
      "description": "des1"
    }, {
      "name": "R2",
      "description": "des2"
    }];
  }

});
