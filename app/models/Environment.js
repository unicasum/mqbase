import Component from 'mqbase/models/Component';

export default class Environment extends Component {
  constructor(name, json) {
    super(name, json);
  }

  get servers() {
    return {};
  }
}
