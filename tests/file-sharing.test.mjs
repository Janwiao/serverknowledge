import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const d=JSON.parse(fs.readFileSync(new URL('../data/knowledge.json',import.meta.url)));
test('eight transfer services are searchable and cross-linked',()=>{
 for(const name of ['Transfer.it','SwissTransfer','WeTransfer','Smash','Filemail','TransferNow','pCloud Transfer','Wormhole']){
 const t=d.terms.filter(x=>x.term===name);assert.equal(t.length,1);assert.equal(t[0].chapter,'file-transfer-services');
 }
});
test('time-limited rules and verification limits remain explicit',()=>{
 const text=JSON.stringify(d.chapters.filter(x=>x.id.startsWith('file-')));
 for(const s of ['2026-11-03','2027-03-01','每筆 100 次','每個滾動 30 天','第 12 天','超過 5GB','台灣本次未實測','未核實','非 E2EE','2TB','3 天'])assert.ok(text.includes(s),s);
 assert.ok(d.updated.includes('非全站重新查核'));
});
