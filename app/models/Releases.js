/* jslint node: true, esnext: true */
"use strict";

import fetch from 'fetch';
import Release from './Release';

let releases;

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

export function all() {
  if (releases) {
    return Promise.resolve(releases);
  }

  return fetch('data/releases.json').then(response => response.json().then(
    json => {
      releases = json.releases.map(r => loadRelease(r));
      return releases;
    }));
}

export function find(name) {
  return all().then(releases => releases.find(r => r.name === name));
}
