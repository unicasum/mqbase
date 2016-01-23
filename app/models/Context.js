/* jslint node: true, esnext: true */
"use strict";

export default class Context {
  constructor(config) {

    Object.defineProperty(this, 'config', {
      value: config
    });
  }
}
