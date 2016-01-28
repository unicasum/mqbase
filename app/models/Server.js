/* jslint node: true, esnext: true */
"use strict";

import Base from './Base';
import Package from './Package';

export default class Server extends Base {
  constructor(name, json) {
    super(name);

    const packages = {};

    if (json.packages) {
      json.packages.forEach(e => {
        packages[e.name] = new Package(e.name, e.version);
      });
    }

    Object.defineProperty(this, 'packages', {
      value: packages
    });
  }
}
