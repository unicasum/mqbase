import Ember from 'ember';
import fetch from 'fetch';

export default Ember.Route.extend({
  model() {
    return fetch('data/comp1/application1.properties').then(response => response.text().then(text => {
      return text.split(/\n/).map(line => {
        const x = line.split(/=\s*/);
        return {
          key: x[0],
          value: x[1]
        };
      });
    }));
  }
});
