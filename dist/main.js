!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=[];function c(e){localStorage.setItem("myTodo",JSON.stringify(e))}function r(){const e=localStorage.getItem("myTodo",null,2);return JSON.parse(e)}function d(){return null!=r()}function l(){window.location.reload()}function i(){const e=document.getElementById("title").value,t=document.getElementById("description").value,n=document.getElementById("date").value,o=document.getElementById("select-project").value;return[e,t,n,document.getElementById("priority").value,o]}function a(e,t,n,o,c){return""!==e&&""!==t&&""!==n&&""!==c&&""!==o}function u(){const[e,t,n,u,s]=i();if(a(e,t,n)){document.querySelector(".bg-modal").style.display="none",function(e){if(d()){const t=r();t.push(e),c(t)}else o.push(e),c(o);l()}(function(e,t,n,o,c,r=!1){return{title:e,description:t,date:n,done:r,priority:o,projectId:c}}(e,t,n,u,s))}}function s(e){document.querySelector(`.delete-${e}`).addEventListener("click",(function(){const e=this.getAttribute("data-id");document.querySelector(`.todo-${e}`).style.display="none",function(e){if(d()){const t=r();t.splice(e,1),c(t)}l()}(e)}))}function m(e){document.querySelector(`.edit-${e}`).addEventListener("click",(function(){const t=this.getAttribute("data-id"),n=document.querySelector(".general-button");n.removeEventListener("click",u),n.removeAttribute("id"),n.setAttribute("id","edit"),n.innerHTML="Update",function(e){document.getElementById("title").value=e.title,document.getElementById("description").value=e.description,document.getElementById("date").value=e.date,document.getElementById("select-project").value=e.projectId,document.getElementById("priority").value=e.priority,document.querySelector(".bg-modal").style.display="flex"}(function(e){return r()[e]}(t)),document.getElementById("edit").addEventListener("click",()=>{!function(e){const[t,n,o,d]=i();if(a(t,n,o,d)){const i=r(),a=i[e];a.title=t,a.description=n,a.date=o,a.priority=d,i[e]=a,c(i),l()}}(e)})}))}function p(e){document.querySelectorAll(`.text-${e}`).forEach(e=>{e.classList.add("lineThrough")});const t=r();t[e].done=!0,c(t)}function y(e){document.querySelector(`.done-${e}`).addEventListener("click",(function(){const t=this.getAttribute("data-done");!1===JSON.parse(t)?(p(e),this.setAttribute("data-done","true")):(!function(e){document.querySelectorAll(`.text-${e}`).forEach(e=>{e.classList.remove("lineThrough")});const t=r();t[e].done=!1,c(t)}(e),this.setAttribute("data-done","false"))}))}var f=()=>({setProject:e=>{localStorage.setItem("project",JSON.stringify(e))},getProject:()=>{const e=localStorage.getItem("project");return JSON.parse(e)}});const g=[{name:"Food"},{name:"Clothing"},{name:" Shelter"}],b=e=>{const t=(e=>({name:e}))(e),n=f();if(null!==f().getProject()){const e=n.getProject();e.push(t),n.setProject(e)}else g.push(t),n.setProject(g)};!function(e){const t=document.querySelector(".project-node"),n=f().getProject(),o=document.createElement("OL");o.setAttribute("class","project"),n.forEach((e,t)=>{const n=document.createElement("LI");n.innerHTML=`<a href="#" class="project-${t}" data-id="${t}">${e.name}</a>`,o.appendChild(n)}),t.appendChild(o)}();var E=e=>{(e=>{""===e?document.querySelector(".error-message").innerHTML="Name cannot be blank":b(e)})(e)};document.getElementById("task-button").addEventListener("click",()=>{document.querySelector(".task-modal").style.display="flex";const e=document.createElement("SELECT");e.setAttribute("class","custom-select"),e.setAttribute("id","select-project"),f().getProject().forEach((t,n)=>{const o=document.createElement("OPTION");o.setAttribute("value",`${n}`),o.innerHTML=`${t.name}`,e.appendChild(o)}),document.querySelector(".projects-select").appendChild(e)}),document.querySelector(".close").addEventListener("click",()=>{document.querySelector(".bg-modal").style.display="none"}),document.addEventListener("DOMContentLoaded",()=>{document.getElementById("add").addEventListener("click",u)}),document.querySelector(".add-project").addEventListener("click",()=>{document.querySelector(".project-modal").style.display="flex"});document.querySelector(".project-button").addEventListener("click",()=>{const e=document.querySelector("#project-name").value;E(e),window.location.reload()});document.querySelectorAll("li").forEach(e=>{e.firstChild.addEventListener("click",(function(){const e=this.getAttribute("data-id");document.querySelector("tbody").innerHTML="",document.addEventListener("DOMContentLoaded",function(e){r().forEach((t,n)=>{if(t.projectId===e){const e=document.createElement("TR");e.setAttribute("class",`todo-${n}`),e.innerHTML=`\n        <td data-column="title" class="text-${n}">${t.title}</td>\n        <td data-column="description" class="text-${n}">${t.description}</td>\n        <td data-column="date" class="text-${n}">${t.date}</td>\n        <td data-column="date" class="text-${n}">${t.priority}</td>\n        <td data-column="date" class="text-${n}">${t.projectId}</td>\n        <td data-column="edit"><a data-id=${n} class="btn btn-primary edit-${n}">Edit</a></td>\n        <td data-column="delete"><a data-id="${n}" class="btn btn-danger delete-${n}">Delete</a></td>\n        <td data-column="done"><a data-id="${n}" data-done="${t.done}" class="btn btn-primary done-${n} done">Done</a></td>\n      `,document.querySelector("tbody").appendChild(e),y(n),s(n),m(n)}})}(e)),document.querySelectorAll(".done").forEach(e=>{const t=e.getAttribute("data-done"),n=e.getAttribute("data-id");!0===JSON.parse(t)&&p(n)})}))})}]);