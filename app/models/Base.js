export default class Base {
  constructor(name, description) {
    //console.log(`Base ${name} ${description}`);
    Object.defineProperty(this, 'name', {
      configurable: true,
      value: name
    });

    Object.defineProperty(this, 'description', {
      configurable: true,
      value: description
    });

    Object.defineProperty(this,
      'state', {
        configurable: true,
        value: "outdated"
      });
  }

  get outdated() {
    return this.state === 'outdated';
  }

  get upToDate() {
    return this.state === 'up-to-date';
  }

  toString() {
    return this.name;
  }
}
