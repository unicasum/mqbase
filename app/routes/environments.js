import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      "name": "CIT1"
    }, {
      "name": "PRD1"
    }];
  }
});
