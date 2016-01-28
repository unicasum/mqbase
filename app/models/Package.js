/* jslint node: true, esnext: true */
"use strict";

import DeployableUnit from './DeployableUnit';

export default class Package extends DeployableUnit {
  constructor(name, version) {
    super(name, {
      version: version
    });
  }
}
