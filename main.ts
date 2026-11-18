import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';
const root=fileURLToPath(new URL('.',import.meta.url));
const dest=process.env.MAKEFUN_OUTPUT_DIR||'/output';
mkdirSync(dest,{recursive:true});cpSync(join(root,'game'),join(dest,'game'),{recursive:true});mkdirSync(join(dest,'screenshots'),{recursive:true});if(existsSync(join(root,'screenshots')))cpSync(join(root,'screenshots'),join(dest,'screenshots'),{recursive:true});
writeFileSync(join(dest,'dossier.json'),buildDossier(dest,{text_max_bytes:163840,screenshots:{max:4,max_bytes:262144},game_max_files:993,game_max_bytes:50331648,game_path_max_bytes:1000}));
