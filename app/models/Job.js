/* jslint node: true, esnext: true */
"use strict";

export default class Job {
  constructor() {
    super();

    this._actions = [];
  }

  get actions() {
    return this._actions;
  }
}
