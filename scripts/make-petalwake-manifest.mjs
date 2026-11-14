import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';

const root = path.resolve('public/petalwake');
const realRoot = fs.realpathSync(root);
if (fs.lstatSync(root).isSymbolicLink()) throw Error('Bundle root is a symlink: ' + root);
const inside = (rel) => {
  if (typeof rel !== 'string' || rel.includes('\0') || path.isAbsolute(rel)) return false;
  const resolved = path.resolve(root, rel);
  return resolved === root || resolved.startsWith(root + path.sep);
};

const files = [];
const walk = dir => {
  for (const entry of fs.readdirSync(dir, {withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))) {
    if (entry.name === '.DS_Store') continue;
    const full = path.join(dir, entry.name);
    const stat = fs.lstatSync(full);
    if (stat.isSymbolicLink()) throw Error('Refusing symlink in bundle: ' + full);
    if (stat.isDirectory()) walk(full);
    else if (stat.isFile()) {
      const rel = path.relative(root, full).replaceAll('\\','/');
      if (!inside(rel)) throw Error('Bundle path escapes root: ' + rel);
      if (rel === 'manifest.json') continue;
      let license = 'Petalwake MIT (code/baked asset)';
      if (rel === 'assets/models/dafeiyu.glb') license = 'Dafeiyu.glb - Rodin/Hyper3D (authorized first-party model)';
      else if (rel === 'assets/models/dafeiyu.json') license = 'Dafeiyu.glb metadata - Rodin/Hyper3D';
      else if (rel === 'assets/places/models/east_whale.glb') license = 'Meshy-generated Petalwake asset; verify account plan terms';
      else if (rel.startsWith('assets/models/') || rel.startsWith('assets/places/models/')) license = 'Meshy-generated Petalwake asset; verify account plan terms';
      else if (rel.startsWith('assets/textures/') || rel.startsWith('assets/town/tex/')) license = 'fal patina output; verify fal/model terms';
      else if (rel.startsWith('vendor/')) license = 'three.js MIT (see vendor/three/LICENSE)';
      else if (rel.startsWith('src/') || rel.startsWith('assets/town/') || rel.startsWith('assets/terrain/') || rel.startsWith('assets/shore/')) license = 'Petalwake MIT (code/baked asset)';
      files.push({path: rel, bytes: stat.size, sha256: createHash('sha256').update(fs.readFileSync(full)).digest('hex'), license});
    }
  }
};
walk(root);
const manifest = {
  format: 1,
  project: 'Petalwake',
  source: 'https://github.com/jjcm/petalwake/tree/25443cef0eba802052d9ef24c94ba3c4157b6f2e',
  provenance: [
    {group:'src/, index.html, vendor/', channel:'Petalwake source / three.js', terms:'MIT; retain LICENSE and three.js notice'},
    {group:'assets/models/, assets/places/models/', channel:'Meshy image-to-3D', terms:'Meshy plan at generation time; paid = private ownership, free = CC BY 4.0 attribution; verify account record'},
    {group:'assets/textures/, assets/town/tex/', channel:'fal patina', terms:'fal does not warrant output ownership; each model terms apply; confirm before commercial redistribution'},
    {group:'assets/town/, assets/terrain/, assets/shore/', channel:'Petalwake bake/code', terms:'Petalwake MIT; generated material references may inherit the rows above'},
    {group:'assets/models/dafeiyu.glb', channel:'Hyper3D Rodin', terms:'Rodin output use not restricted, but no copyright/third-party-right warranty'},
  ],
  files,
};
fs.writeFileSync(path.join(root, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Wrote ${files.length} files, ${files.reduce((n,f)=>n+f.bytes,0)} bytes`);
