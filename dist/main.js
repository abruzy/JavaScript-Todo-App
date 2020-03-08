!(function (e) { const t = {}; function n(o) { if (t[o]) return t[o].exports; const c = t[o] = { i: o, l: !1, exports: {} }; return e[o].call(c.exports, c, c.exports, n), c.l = !0, c.exports; }n.m = e, n.c = t, n.d = function (e, t, o) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o }); }, n.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; const o = Object.create(null); if (n.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (const c in e)n.d(o, c, ((t) => e[t]).bind(null, c)); return o; }, n.n = function (e) { const t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return n.d(t, 'a', t), t; }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n.p = '', n(n.s = 0); }([function (e, t, n) {
  n.r(t); const o = () => { const e = [{ name: 'Food' }, { name: 'Clothing' }, { name: ' Shelter' }]; const t = e => { localStorage.setItem('project', JSON.stringify(e)); }; return { setProject: t, getProject: () => { const n = localStorage.getItem('project'); return n === null && (t(e), window.location.reload()), JSON.parse(n); }, todoProjects: e }; }; const c = e => { const t = (e => ({ name: e }))(e); const n = o(); if (o().getProject() !== null) { const e = n.getProject(); e.push(t), n.setProject(e); } else { const e = o().todoProjects; e.push(t), n.setProject(e); } }; const r = e => { (e => { e === '' ? document.querySelector('.error-message').innerHTML = 'Name cannot be blank' : c(e); })(e); }; const d = []; function l(e) { localStorage.setItem('myTodo', JSON.stringify(e)); } function i() { const e = localStorage.getItem('myTodo', null, 2); return JSON.parse(e); } function a() { return i() != null; } function u() { window.location.reload(); } function s(e, t, n, o, c) { return e !== '' && t !== '' && n !== '' && c !== '' && o !== ''; } function m() { const e = document.getElementById('title').value; const t = document.getElementById('description').value; const n = document.getElementById('date').value; const o = document.getElementById('select-project').value; return [e, t, n, document.getElementById('priority').value, o]; } function p() {
    const [e, t, n, o, c] = m(); if (s(e, t, n)) {
      document.querySelector('.bg-modal').style.display = 'none', (function (e) { if (a()) { const t = i(); t.push(e), l(t); } else d.push(e), l(d); u(); }(function (e, t, n, o, c, r = !1) {
        return {
          title: e, description: t, date: n, done: r, priority: o, projectId: c,
        };
      }(e, t, n, o, c)));
    }
  } function y(e) { document.querySelector(`.delete-${e}`).addEventListener('click', (function () { const e = this.getAttribute('data-id'); document.querySelector(`.todo-${e}`).style.display = 'none', (function (e) { if (a()) { const t = i(); t.splice(e, 1), l(t); }u(); }(e)); })); } function f(e) { document.querySelector(`.edit-${e}`).addEventListener('click', (function () { const t = this.getAttribute('data-id'); const n = document.querySelector('.general-button'); n.removeEventListener('click', p), n.removeAttribute('id'), n.setAttribute('id', 'edit'), n.innerHTML = 'Update'; const c = (function (e) { return i()[e]; }(t)); (() => { const e = document.createElement('SELECT'); e.setAttribute('class', 'custom-select'), e.setAttribute('id', 'select-project'), o().getProject().forEach((t, n) => { const o = document.createElement('OPTION'); o.setAttribute('value', `${n}`), o.innerHTML = `${t.name}`, e.appendChild(o); }), document.querySelector('.projects-select').appendChild(e); })(), (function (e) { document.getElementById('title').value = e.title, document.getElementById('description').value = e.description, document.getElementById('date').value = e.date, document.getElementById('priority').value = e.priority, document.getElementById('select-project').value = e.projectId, document.querySelector('.bg-modal').style.display = 'flex'; }(c)), document.getElementById('edit').addEventListener('click', () => { !(function (e) { const [t, n, o, c] = m(); if (s(t, n, o, c)) { const r = i(); const d = r[e]; d.title = t, d.description = n, d.date = o, d.priority = c, r[e] = d, l(r), u(); } }(e)); }); })); } function g(e) { document.querySelectorAll(`.text-${e}`).forEach(e => { e.classList.add('lineThrough'); }); const t = i(); t[e].done = !0, l(t); } function b(e) { document.querySelector(`.done-${e}`).addEventListener('click', (function () { const t = this.getAttribute('data-done'); !1 === JSON.parse(t) ? (g(e), this.setAttribute('data-done', 'true')) : (!(function (e) { document.querySelectorAll(`.text-${e}`).forEach(e => { e.classList.remove('lineThrough'); }); const t = i(); t[e].done = !1, l(t); }(e)), this.setAttribute('data-done', 'false')); })); }document.getElementById('task-button').addEventListener('click', () => { (() => { const e = document.createElement('SELECT'); e.setAttribute('class', 'custom-select'), e.setAttribute('id', 'select-project'), o().getProject().forEach((t, n) => { const o = document.createElement('OPTION'); o.setAttribute('value', `${n}`), o.innerHTML = `${t.name}`, e.appendChild(o); }), document.querySelector('.projects-select').appendChild(e); })(), document.querySelector('.task-modal').style.display = 'flex'; }), document.querySelector('.close').addEventListener('click', () => { document.querySelector('.bg-modal').style.display = 'none'; }), document.addEventListener('DOMContentLoaded', () => { document.getElementById('add').addEventListener('click', p); }), document.querySelector('.add-project').addEventListener('click', () => { document.querySelector('.project-modal').style.display = 'flex'; }); document.querySelector('.project-button').addEventListener('click', () => { const e = document.querySelector('#project-name').value; r(e), window.location.reload(); }); !(function () { const e = document.querySelector('.project-node'); const t = o().getProject(); const n = document.createElement('OL'); n.setAttribute('class', 'project'), t.forEach((e, t) => { const o = document.createElement('LI'); o.innerHTML = `<a href="#" class="project-${t}" data-id="${t}">${e.name}</a>`, n.appendChild(o); }), e.appendChild(n); }()), document.querySelectorAll('li').forEach(e => { e.firstChild.addEventListener('click', (function () { const e = this.getAttribute('data-id'); document.querySelector('tbody').innerHTML = '', document.addEventListener('DOMContentLoaded', (function (e) { const t = i(); t === null ? document.querySelector('.project-error').innerHTML = 'There are no task in this project' : t.forEach((t, n) => { if (t.projectId === e) { const e = document.createElement('TR'); e.setAttribute('class', `todo-${n}`), e.innerHTML = `\n        <td data-column="title" class="text-${n}">${t.title}</td>\n        <td data-column="description" class="text-${n}">${t.description}</td>\n        <td data-column="date" class="text-${n}">${t.date}</td>\n        <td data-column="date" class="text-${n}">${t.priority}</td>\n        <td data-column="date" class="text-${n}">${t.projectId}</td>\n        <td data-column="edit"><a data-id=${n} class="btn btn-primary edit-${n}">Edit</a></td>\n        <td data-column="delete"><a data-id="${n}" class="btn btn-danger delete-${n}">Delete</a></td>\n        <td data-column="done"><a data-id="${n}" data-done="${t.done}" class="btn btn-primary done-${n} done">Done</a></td>\n      `, document.querySelector('tbody').appendChild(e), b(n), y(n), f(n); } }); }(e))), document.querySelectorAll('.done').forEach(e => { const t = e.getAttribute('data-done'); const n = e.getAttribute('data-id'); !0 === JSON.parse(t) && g(n); }); })); });
}]));