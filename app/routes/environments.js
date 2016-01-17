/* jslint node: true, esnext: true */
"use strict";

import Ember from 'ember';
import fetch from 'fetch';


function makeEnvironment(json) {
  return {
    name: json.name,
    state: json.state,
    get environment_id() {
      return this.name;
    },
    get outdated() {
      return this.state === 'outdated';
    },
    get upToDate() {
      return this.state === 'up-to-date';
    }
  };
}

export default Ember.Route.extend({
  model() {
    return fetch('data/environments.json').then(response => response.json().then(json => json.environments.map(e =>
      makeEnvironment(e))));
  }
});
