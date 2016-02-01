/* jslint node: true, esnext: true */
"use strict";

import Base from './Base';
import Environments from './Environments';
import Component from './Component';

/*
const typeToFactory = {
  'environment' : Environment,
  'default' : Component
};
*/

export default class Release extends Base {
  constructor(name, dno, dma) {
    super(name, dno.description);

    const environments = {};
    const components = {};

    Object.keys(dma.components).forEach(name => {
      const coordinates = dno.components ? dno.components[name].coordinates : undefined;

      const c = dma.components[name];
      if (c.type === 'environment') {
        environments[name] = components[name] = Environments.create(name, coordinates, c);
      } else {
        components[name] = new Component(name, coordinates, c);
      }
    });

    Object.defineProperty(this, 'components', {
      value: components
    });

    Object.defineProperty(this, 'environments', {
      value: environments
    });
  }

  get release_id() {
    return this.name;
  }
}
