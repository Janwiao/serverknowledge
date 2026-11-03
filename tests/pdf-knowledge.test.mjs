import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const d=JSON.parse(fs.readFileSync(new URL('../data/knowledge.json',import.meta.url)));
test('PDF tools are searchable with unique entries and chapter links',()=>{
 for(const name of ['Adobe Acrobat Reader','Microsoft Edge','PDFgear','LibreOffice Draw','PDFsam Basic','Stirling PDF','PdfDing','DocuSeal']){
 const terms=d.terms.filter(t=>t.term===name);assert.equal(terms.length,1);assert.equal(terms[0].chapter,'pdf-tools');}
});
test('PDF editing and AI data-flow distinctions are explicit',()=>{
 const text=JSON.stringify(d.chapters.filter(c=>c.id.startsWith('pdf-')));
 for(const s of ['原文編輯','註記','OCR','專有軟體','open-core','Azure OpenAI','嵌入模型','預設關閉','5 位使用者','Codeberg'])assert.ok(text.includes(s),s);
 assert.ok(d.updated.includes('非全站重新查核'));
});
