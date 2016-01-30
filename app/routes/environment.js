/* jslint node: true, esnext: true */
"use strict";

import Ember from 'ember';
import Environments from '../models/Environments';


export default Ember.Route.extend({
  model(params) {
    return Environments.find(params.environment_id);
  }
});
