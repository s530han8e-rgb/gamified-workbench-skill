import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(new URL('..',import.meta.url).pathname),errors=[];
function visit(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
 if(entry.name==='.git')continue;const file=path.join(dir,entry.name),rel=path.relative(root,file);
 if(entry.isDirectory()){if(/^(data|archives|backups|private)$/.test(entry.name))errors.push('Private directory: '+rel);visit(file);continue}
 const bytes=fs.readFileSync(file);
 if(/\.(md|mjs|html|css|json|ya?ml)$/.test(file)){
  const text=bytes.toString();if(/\p{Script=Han}/u.test(text))errors.push('Non-English release text: '+rel);if(/\/Users\/[A-Za-z0-9_-]+\/|origin_thread["']?\s*[:=]\s*["'][0-9a-f-]{20,}|(?:sk|ghp)_[A-Za-z0-9]{20,}/.test(text))errors.push('Private identifier pattern: '+rel);
  if(file.endsWith('.md'))for(const match of text.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)){const target=match[1].split('#')[0];if(!target||/^[a-z]+:|^\//i.test(target))continue;if(!fs.existsSync(path.resolve(path.dirname(file),decodeURIComponent(target))))errors.push('Missing link: '+rel+' -> '+target)}
 }
 if(/\.jpg$/.test(file)&&(bytes.includes(Buffer.from('Exif\0\0'))||bytes.includes(Buffer.from('http://ns.adobe.com/xap'))))errors.push('Review metadata: '+rel);
}}
visit(root);if(errors.length){console.error(errors.join('\n'));process.exit(1)}console.log('Release checks passed: local links, public-package boundaries and JPEG metadata.');
