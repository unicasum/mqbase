import Base from 'mqbase/models/Base';

export default class Component extends Base {
  constructor(name, json) {
    super(name, json.description);
  }
}
