/* jslint node: true, esnext: true */
"use strict";

import fetch from 'fetch';
import Server from './Server';

let servers = {};

export function find(name) {
  if (servers[name]) {
    return servers[name];
  }

  servers[name] = fetch(`data/servers/${name}/config.json`).then(r => new Server(name, r.json()));

  return servers[name];
}
