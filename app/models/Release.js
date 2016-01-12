import Base from 'mqbase/models/Base';
import Environment from 'mqbase/models/Environment';

export default class Release extends Base {
  constructor(name, description, dno, dma) {
    super(name, description);

    const components = {};

    console.log(`${this.name} ${JSON.stringify(dma.components)}`);

    Object.keys(dma.components).forEach(name => {
      console.log(`comp: ${this.name} ${name}`);
      components[name] = new Component(name);
    });

    Object.defineProperty(this, 'components', {
      value: components
    });

    Object.defineProperty(this, 'environments', {
      value: [
        new Environment("E1"),
        new Environment("E2"),
        new Environment("E3")
      ]
    });
  }

  get release_id() {
    return this.name;
  }
}
