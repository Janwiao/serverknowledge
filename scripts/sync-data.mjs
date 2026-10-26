import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'data/knowledge.json'), 'utf8'));
fs.writeFileSync(path.join(root, 'data/knowledge.js'), '/* Generated from knowledge.json; run node scripts/sync-data.mjs after edits. */\nwindow.SOFTWARE_ATLAS = ' + JSON.stringify(data, null, 2) + ';\n');
const lines = ['# ' + data.title, '', data.subtitle, '', `版本：${data.version}｜整理日期：${data.updated}（台灣時間）`, '', '這是可持續補充的概念地圖，不是完整百科。LINE、Facebook 等案例為教學簡化，非廠商私有架構宣稱。', ''];
for (const c of data.chapters) {
  lines.push('## ' + c.title, '', c.lead, '', c.flow.join(' → '), '', ...c.points.map(p => '- ' + p), '', '**熟悉的對照：** ' + c.example, '', '**不要混淆：** ' + c.trap, '');
}
lines.push('## 名詞查閱', '');
for (const t of data.terms) lines.push('### ' + t.term + '（' + t.aliases + '）', '', t.definition, '', '別混淆：' + t.confusion, '');
lines.push('## 常見疑問', '');
for (const f of data.faq) lines.push('### ' + f.question, '', f.answer, '');
lines.push('## 參考來源', '');
for (const s of data.sources) lines.push('- [' + s.title + '](' + s.url + ')：' + s.scope);
fs.mkdirSync(path.join(root, 'docs'), {recursive:true});
fs.writeFileSync(path.join(root, 'docs/KNOWLEDGE.md'), lines.join('\n') + '\n');
console.log('Synced knowledge.js and docs/KNOWLEDGE.md');
