import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('releases');
  this.route('release', {
    path: '/release/:release_id'
  });

  this.route('environments');
  this.route('environment', {
    path: '/environments/:environment_id'
  });
});

export default Router;
