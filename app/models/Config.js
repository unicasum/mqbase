import fetch from 'fetch';

fetch(`data/config.json`).then(r => r.json()).then(cfg => {
  console.log(`config: ${JSON.stringify(cfg)}`);
});