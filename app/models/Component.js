/* jslint node: true, esnext: true */
"use strict";

import Base from './Base';

export default class Component extends Base {
  constructor(name, coordinates, json) {
    super(name, json ? json.description : undefined);

    Object.defineProperty(this, 'coordinates', {
      value: coordinates
    });
  }

  get version() {
    return this.coordinates.version;
  }

  get component_id() {
    return this.name;
  }
}
