import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const d=JSON.parse(fs.readFileSync(new URL('../data/knowledge.json',import.meta.url)));
test('sync and collaboration explain independent concepts',()=>{
 const text=JSON.stringify(d.chapters.filter(c=>c.id.startsWith('cloud-')));
 for(const s of ['雙向同步','快取','獨立備份','冷收藏','即時共編','.git','Git LFS','離職交接','pCloud','Google','Microsoft','Dropbox','Synology'])assert.ok(text.includes(s),s);
 assert.ok(d.updated.includes('非全站重新查核'));
});
test('new terms and source links are present without duplicate definitions',()=>{
 for(const name of ['pCloud Drive','pCloud Sync','鏡像同步','串流與隨選下載','同步衝突','Google Drive 電腦版','OneDrive','SharePoint 文件庫','Dropbox','Synology Drive'])assert.equal(d.terms.filter(t=>t.term===name).length,1,name);
 assert.equal(new Set(d.sources.map(s=>s.url)).size,d.sources.length);
 assert.ok(d.sources.some(s=>s.url==='https://help.pcloud.com/article/team-collaboration'));
});

test('HTML loads the matching content version',()=>{
 const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
 assert.ok(html.includes('src="data/knowledge.js?v='+d.version+'"'));
});
