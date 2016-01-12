import Component from 'mqbase/models/Component';

export default class Environment extends Component {
  constructor(name, coordinates, json) {
    super(name, coordinates, json);
  }

  get servers() {
    return {};
  }
}
