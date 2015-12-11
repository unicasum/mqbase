import Ember from 'ember';
import fetch from 'fetch';

export default Ember.Route.extend({
  model() {
    return fetch('data/environments.json').then(function (response) {
      return response.json().then(json => json.environments);
    });

    /*
    return [{
      "name": "CIT1"
    },{
      "name": "SIT1"
    }, {
      "name": "PRD1"
    }];*/
  }
});
