/* jslint node: true, esnext: true */
"use strict";

import Base from './Base';

export default class Server extends Base {
  constructor(name, json) {
    super(name);

    if (json.packages) {
      json.packages.forEach(name => {
        console.log(`package: ${name}`);
      });
    }
  }
}
