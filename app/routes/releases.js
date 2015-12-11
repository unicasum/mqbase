import Ember from 'ember';
import fetch from 'fetch';

export default Ember.Route.extend({

  model() {
    return fetch('data/releases.json').then(function (response) {
      return response.json().then(json => json.releases);
    });
    /*
    return [{
      "name": "R1",
      "description": "description 1"
    }, {
      "name": "R2",
      "description": "description 2"
    }];
    */
  }

});
