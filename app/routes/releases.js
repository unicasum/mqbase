import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return [{
      "name": "R1",
      "description": "description 1"
    }, {
      "name": "R2",
      "description": "description 2"
    }];
  }

});
