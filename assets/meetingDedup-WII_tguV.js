function m(e){return e.replace(/<br\s*\/?>/gi,`
`).replace(/<\/p>/gi,`

`).replace(/<\/div>/gi,`
`).replace(/<\/tr>/gi,`
`).replace(/<\/td>/gi,`
`).replace(/<\/li>/gi,`
`).replace(/<li[^>]*>/gi,"• ").replace(/<[^>]*>/g,"").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&#39;/gi,"'").replace(/&quot;/gi,'"').replace(/\n{3,}/g,`

`).trim()}function p(e){return e.replace(/[?#].*$/,"").toLowerCase().replace(/\/+$/,"")}const u=60*60*1e3;function f(e){if(!e.start_time)return null;const n=new Date(e.start_time).getTime();if(Number.isNaN(n))return null;const r=e.end_time?new Date(e.end_time).getTime():n+u;return{start:n,end:Number.isNaN(r)?n+u:r}}function d(e,n){const r=f(e),t=f(n);return!r||!t?!1:r.start<t.end&&r.end>t.start}function g(e){return(e.summary?2:0)+(e.bot_id?1:0)}function _(e){const n=new Map;for(const t of e){if(!t.meeting_url||t.meeting_url.startsWith("calendar://")||!t.start_time)continue;const o=p(t.meeting_url),i=n.get(o);i?i.push(t):n.set(o,[t])}const r=new Set;for(const t of n.values()){if(t.length<2)continue;const o=[];for(const i of t){const s=o.find(c=>c.some(a=>d(a,i)));s?s.push(i):o.push([i])}for(const i of o){if(i.length<2)continue;const s=i.reduce((c,a)=>{const l=g(a)-g(c);return l>0?a:l<0?c:(a.created_at??"")<(c.created_at??"")?a:c});for(const c of i)c.id!==s.id&&r.add(c.id)}}return r.size===0?e:e.filter(t=>!r.has(t.id))}export{_ as d,m as h};
