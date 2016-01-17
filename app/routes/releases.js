/* jslint node: true, esnext: true */
"use strict";

import Ember from 'ember';
import Releases from '../models/Releases';

export default Ember.Route.extend({
  model() {
    return Releases.all();
  }
});
