import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      "name": "CIT1"
    },{
      "name": "SIT1"
    }, {
      "name": "PRD1"
    }];
  }
});
