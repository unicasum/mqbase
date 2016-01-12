import Ember from 'ember';
import Releases from 'mqbase/models/Releases';

export default Ember.Route.extend({
  model() {
    return Releases.all();
  }
});
