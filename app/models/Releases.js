import fetch from 'fetch';
import Release from 'mqbase/models/Release';

let releases;

function loadRelease(name) {
  //console.log(`loadRelease: ${name}`);
  return Promise.all([
    fetch(`data/releases/${name}/dno.json`).then(r => r.json()),
    fetch(`data/releases/${name}/dma.json`).then(r => r.json())
  ]).then(rs => {
    const dno = rs[0];
    const dma = rs[1];

    console.log(`dno/dma ${name} ${JSON.stringify(dno)}, ${JSON.stringify(dma)}`);
    return new Release(name, dno, dma);
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
