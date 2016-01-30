/* jslint node: true, esnext: true */
"use strict";

import fetch from 'fetch';
import Environment from './Environment';

let environments;

export function all() {
  if (environments) {
    return Promise.resolve(environments);
  }

  return fetch('data/environments.json').then(response => response.json().then(
    json => {
      environments = {};
      Object.keys(json).forEach(name => {
        console.log(`new ${name}`);
        return environments[name] = new Environment(name);
      });
      return environments;
    }));
}

export function find(name) {
  return all().then(e => {
    console.log(`find: ${name} -> ${e[name]}`);
    return e[name];
  });
}
