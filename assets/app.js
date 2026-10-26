(function () {
  'use strict';
  const data = window.SOFTWARE_ATLAS;
  if (!data) return;
  const $ = (selector) => document.querySelector(selector);
  function el(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  const chapterById = new Map(data.chapters.map((chapter) => [chapter.id, chapter]));
  function chapterLink(id, label) {
    const a = el('a', label || chapterById.get(id).title);
    a.href = '#chapter-' + id;
    a.addEventListener('click', () => {
      const target = document.getElementById('chapter-' + id);
      if (target) { target.open = true; target.scrollIntoView({ block: 'start' }); }
    });
    return a;
  }
  data.chapters.forEach((chapter, index) => {
    const item = el('li');
    item.append(chapterLink(chapter.id));
    $('#chapter-nav').append(item);
    const detail = el('details', undefined, 'chapter');
    detail.id = 'chapter-' + chapter.id;
    const summary = el('summary');
    const title = el('span', chapter.title, 'chapter-title');
    title.append(el('span', chapter.lead, 'chapter-lead'));
    summary.append(el('span', String(index + 1).padStart(2, '0'), 'chapter-number'), title);
    const body = el('div', undefined, 'chapter-body');
    const flow = el('ol', undefined, 'flow');
    flow.setAttribute('aria-label', '概念流程');
    chapter.flow.forEach((step) => flow.append(el('li', step)));
    const points = el('ul');
    chapter.points.forEach((point) => points.append(el('li', point)));
    const example = el('div', undefined, 'example');
    example.append(el('strong', '熟悉的對照'), el('span', chapter.example));
    const trap = el('div', undefined, 'trap');
    trap.append(el('strong', '不要混在一起'), el('span', chapter.trap));
    const related = el('p', undefined, 'related');
    related.append(el('span', '繼續閱讀：'));
    chapter.related.forEach((id) => related.append(chapterLink(id)));
    body.append(flow, points, example, trap, related);
    detail.append(summary, body);
    $('#chapters-list').append(detail);
  });
  $('#chapter-count').textContent = data.chapters.length + ' 個主題';
  $('#term-count').textContent = data.terms.length + ' 個名詞';
  const termNodes = data.terms.map((term) => {
    const card = el('article', undefined, 'term');
    card.id = term.id;
    card.append(el('h3', term.term), el('p', term.aliases, 'alias'), el('p', term.definition), el('p', '別混淆：' + term.confusion, 'confusion'), chapterLink(term.chapter, '閱讀相關主題 →'));
    $('#glossary-list').append(card);
    return { card, searchable: [term.term, term.aliases, term.definition, term.confusion].join(' ').toLocaleLowerCase() };
  });
  function search() {
    const query = $('#search').value.trim().toLocaleLowerCase();
    let count = 0;
    termNodes.forEach(({ card, searchable }) => {
      const match = query.split(/\s+/).every((part) => searchable.includes(part));
      card.hidden = !match;
      if (match) count++;
    });
    $('#search-status').textContent = query ? '找到 ' + count + ' 個名詞' : '共 ' + count + ' 個名詞，可搜尋中文、英文與說明。';
    $('#no-results').hidden = count !== 0;
  }
  $('#search').addEventListener('input', search);
  $('#clear').addEventListener('click', () => { $('#search').value = ''; search(); $('#search').focus(); });
  search();
  data.faq.forEach((faq) => {
    const detail = el('details', undefined, 'faq-item');
    const paragraph = el('p', faq.answer + ' ');
    paragraph.append(chapterLink(faq.chapter, '延伸閱讀 →'));
    detail.append(el('summary', faq.question), paragraph);
    $('#faq-list').append(detail);
  });
  data.sources.forEach((source) => {
    const li = el('li');
    const a = el('a', source.title);
    a.href = source.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    li.append(a, el('span', source.scope));
    $('#sources-list').append(li);
  });
  $('#updated').textContent = data.updated;
  $('#version').textContent = data.version;
  function revealHash() {
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch (_) { return; }
    const target = document.getElementById(id);
    if (target && target.classList.contains('chapter')) {
      target.open = true;
      target.scrollIntoView({ block: 'start' });
    }
  }
  window.addEventListener('hashchange', revealHash);
  revealHash();
  let printState = null;
  function preparePrint() {
    if (printState) return;
    printState = { details: [...document.querySelectorAll('details')].map((d) => [d, d.open]), cards: termNodes.map(({ card }) => [card, card.hidden]) };
    printState.details.forEach(([d]) => { d.open = true; });
    printState.cards.forEach(([card]) => { card.hidden = false; });
  }
  function restorePrint() {
    if (!printState) return;
    printState.details.forEach(([d, open]) => { d.open = open; });
    printState.cards.forEach(([card, hidden]) => { card.hidden = hidden; });
    printState = null;
  }
  window.addEventListener('beforeprint', preparePrint);
  window.addEventListener('afterprint', restorePrint);
  $('#print').addEventListener('click', () => { preparePrint(); window.print(); });
})();
