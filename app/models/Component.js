/* jslint node: true, esnext: true */
"use strict";

import Base from './Base';

export default class Component extends Base {
  constructor(name, coordinates, json) {
    super(name, json.description);

    Object.defineProperty(this, 'coordinates', {
      value: coordinates
    });
  }
}
