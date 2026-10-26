import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const data=JSON.parse(read('data/knowledge.json'));
test('content has substantive chapters, glossary and FAQ',()=>{
 assert.ok(data.chapters.length>=14);assert.ok(data.terms.length>=50);assert.ok(data.faq.length>=10);
 for(const c of data.chapters){assert.ok(c.lead.length>15);assert.ok(c.points.length>=3);assert.ok(c.flow.length>=3);assert.ok(c.example&&c.trap);}
});
test('all chapter IDs are unique and references resolve',()=>{
 const ids=new Set(data.chapters.map(c=>c.id));assert.equal(ids.size,data.chapters.length);
 for(const c of data.chapters)for(const id of c.related)assert.ok(ids.has(id),id);
 for(const item of [...data.terms,...data.faq])assert.ok(ids.has(item.chapter),item.chapter);
});
test('generated JS exactly matches content JSON',()=>{
 const context={window:{}};vm.runInNewContext(read('data/knowledge.js'),context);
 assert.equal(JSON.stringify(context.window.SOFTWARE_ATLAS),JSON.stringify(data));
});
test('all static asset references exist and are relative',()=>{
 const html=read('index.html');const links=[...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(m=>m[1]);
 for(const link of links){if(link.startsWith('#'))continue;assert.ok(!link.startsWith('/')&&!/^https?:/.test(link));assert.ok(fs.existsSync(path.join(root,link)),link);}
});
test('public sources use HTTPS and do not expose private chats',()=>{
 for(const s of data.sources){const url=new URL(s.url);assert.equal(url.protocol,'https:');assert.ok(!url.hostname.includes('chatgpt.com'));}
 const content=JSON.stringify(data);assert.ok(!/Sentinel_|libfile_|chatgpt\.com\/c\/|192\.168\.|192\.50\.|jjangame@/.test(content));
});
test('critical distinctions are explicitly covered',()=>{
 const text=JSON.stringify(data);for(const term of ['管理後台','反組譯','RustDesk','127.0.0.1','位元組串流','快取不是備份','教學用簡化','資料庫交易'])assert.ok(text.includes(term),term);
});
test('no framework, external script, tracking, or network requests in app',()=>{
 const code=read('assets/app.js');assert.ok(!/fetch\(|XMLHttpRequest|eval\(|innerHTML\s*=/.test(code));assert.ok(!fs.existsSync(path.join(root,'.openai/hosting.json')));
});
test('HTML has accessible controls and mobile viewport',()=>{
 const html=read('index.html');assert.ok(html.includes('lang="zh-Hant"'));assert.ok(html.includes('name="viewport"'));assert.ok(html.includes('for="search"'));assert.ok(html.includes('aria-live="polite"'));assert.ok(html.includes('class="skip"'));
});
test('glossary IDs are unique and names have explanations',()=>{
 assert.equal(new Set(data.terms.map(t=>t.id)).size,data.terms.length);
 for(const t of data.terms)assert.ok(t.term&&t.aliases&&t.definition&&t.confusion);
});
test('readable Markdown deliverable exists and includes all chapters',()=>{
 const md=read('docs/KNOWLEDGE.md');for(const c of data.chapters)assert.ok(md.includes('## '+c.title));
});
