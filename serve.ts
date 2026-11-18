import { createReadStream, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=resolve(fileURLToPath(new URL('./game',import.meta.url)));
const a=process.argv.slice(2),k=a.indexOf('--port'),p=k<0?8080:Number(a[k+1]);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml'};
createServer((req,res)=>{let name;try{name=decodeURIComponent(new URL(req.url||'/', 'http://localhost').pathname);}catch{res.writeHead(400).end('bad path');return;}if(name.endsWith('/'))name+='index.html';const file=resolve(join(root,normalize(name)));if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403).end('forbidden');return;}let length;try{const s=statSync(file);if(!s.isFile())throw Error();length=s.size;}catch{res.writeHead(404).end('missing');return;}res.writeHead(200,{'content-type':types[extname(file)]||'application/octet-stream','content-length':length,'cache-control':'no-store'});createReadStream(file).pipe(res);}).listen(Number.isInteger(p)&&p>0&&p<65536?p:8080,'127.0.0.1',()=>console.log('Solmar is serving on port '+(Number.isInteger(p)&&p>0&&p<65536?p:8080)));
