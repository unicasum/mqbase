import Component from 'mqbase/models/Component';

export default class Environment extends Component {
  constructor(name, coordinates, json) {
    super(name, coordinates, json);

    const servers = {};
    Object.keys(json.servers).forEach(n => {
      servers[n] = new Server(n);
    });

    Object.defineProperties(this, 'servers', {
      value: servers
    });
  }
}
