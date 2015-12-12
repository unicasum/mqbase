import Ember from 'ember';
import fetch from 'fetch';


function makeRelease(json) {
  return {
    name: json.name,
    state: json.state,
    description: json.description,
    get release_id() {
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
    return fetch('data/releases.json').then(response => response.json().then(json => json.releases.map(e =>
      makeRelease(e))));
  }
});
