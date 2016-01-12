import Component from 'mqbase/models/Component';

export default class Environment extends Component {
  constructor(name, description) {
    super(name, description);
  }

  get servers() {
    return {};
  }
}
