/* jslint node: true, esnext: true */
"use strict";

import fetch from 'fetch';
import Release from './Release';

/*
import {
  init as svn
}
from './svn';

function loadRelease(name) {
  console.log(`loadRelease: ${name}`);
  return Promise.all([
    fetch(`data/releases/${name}/dno.json`).then(r => r.json()).catch(r => {
      console.log(`${name} dno.json: ${r}`);
    }),
    fetch(`data/releases/${name}/dma.json`).then(r => r.json()).catch(r => {
      console.log(`${name} dma.json: ${r}`);
    })
  ]).then(rs => new Release(name, rs[0], rs[1])).catch(reject => {
    console.log(`fetching ${name} failed with ${reject}`);
  });
}
*/

let releases;

export function all() {
  if (releases) {
    return Promise.resolve(releases);
  }

  svn('data/releases', {
    credentials: {
      user: 'arlac77',
      password: 'start123'
    }
  }).then(svn => {
    svn.report('data/releases', 0, svn.attributes['svn-youngest-rev']).then(r => {
      console.log(`result: ${r}`);
    });
  }, e => {
    console.log(e);
  }).catch(e => console.log(e));

  return fetch('data/releases.json').then(response => response.json().then(
    json => {
      releases = json.releases.map(r => loadRelease(r));
      return releases;
    }));
}

export function find(name) {
  return all().then(releases => releases.find(r => r.name === name));
}
