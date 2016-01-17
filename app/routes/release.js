/* jslint node: true, esnext: true */
"use strict";

import Ember from 'ember';
import Releases from 'mqbase/models/Releases';


export default Ember.Route.extend({
  model(params) {
    //console.log(`Release: ${params.release_id}`);
    return Releases.find(params.release_id);
  }
});
