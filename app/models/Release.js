import Base from 'mqbase/models/Base';
import Environment from 'mqbase/models/Environment';
import Component from 'mqbase/models/Component';

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

    console.log(`${this.name} ${JSON.stringify(dma.components)}`);

    Object.keys(dma.components).forEach(name => {
      const c = dma.components[name];
      if (c.type === 'environment') {
        environments[name] = components[name] = new Environment(name, c);
      } else {
        components[name] = new Component(name, c);
      }
    });

    console.log(`Environments: ${Object.keys(environments)}`);

    Object.defineProperty(this, 'components', {
      value: components
    });

    Object.defineProperty(this, 'environments', {
      value: environments
    });
  }

  get componentsArray() {
    return Object.keys(this.components).map(n => this.components[n]);
  }

  get environmentsArray() {
    return Object.keys(this.environments).map(n => this.environments[n]);
  }

  get release_id() {
    return this.name;
  }
}
