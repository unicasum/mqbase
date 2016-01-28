import Ember from 'ember';

import Servers from '../models/Servers';

export default Ember.Route.extend({
  model(params) {
    return Servers.find(params.server_id);
  }
});
