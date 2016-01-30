/* jslint node: true, esnext: true */
"use strict";

import Component from './Component';
import Server from './Server';

export default class Environment extends Component {
  constructor(name, coordinates, json) {
    super(name, coordinates || {}, json);

    const servers = {};
    if (json !== undefined && json.servers !== undefined) {
      Object.keys(json.servers).forEach(n => {
        servers[n] = new Server(n);
      });
    }

    Object.defineProperty(this, 'servers', {
      value: servers
    });
  }

  get environment_id() {
    return this.name;
  }

}
