import{K as J,a as K,P as Q,a1 as Z,r as z,y as W,j as e,s as R}from"./index-BAmVVlQP.js";import{A as V}from"./arrow-left-BnLe67x7.js";import{R as X}from"./refresh-cw-_by0B0ID.js";const Y=`
.trs{
  --paper:#f6f7f9; --card:#ffffff; --ink:#161a21; --ink2:#333b49; --muted:#5b6474;
  --line:#e3e7ee; --line2:#eef1f6; --acc:#1f5a7a; --acc-soft:#e9f0f5;
  --done:#2d6a4a; --test:#1f5a7a; --red:#9c3b2c; --red-soft:#fbeeeb;
  --amber:#8a6420; --amber-soft:#fbf4e7; --grey:#5f6875; --grey-soft:#eff1f4; --chip:#f1f3f7;
  --serif:"Source Serif 4",Georgia,"Times New Roman",serif;
  --sans:"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  --mono:"IBM Plex Mono",ui-monospace,SFMono-Regular,Menlo,monospace;
  background:var(--paper); color:var(--ink); font-family:var(--sans); font-size:15px;
  line-height:1.6; padding-inline:20px; min-height:100%;
}
.dark .trs{
  --paper:#11141a; --card:#171b22; --ink:#e7eaf0; --ink2:#ccd3de; --muted:#939cad;
  --line:#272d38; --line2:#1f242d; --acc:#74b6d6; --acc-soft:#16303d;
  --done:#6ec295; --test:#74b6d6; --red:#e2907e; --red-soft:#2c1d1a;
  --amber:#d2b273; --amber-soft:#2a2418; --grey:#98a1b2; --grey-soft:#1e232b; --chip:#1e242d;
}
.trs *{box-sizing:border-box}
.trs .wrap{max-width:1020px;margin:0 auto;padding-block:24px 72px}
.trs h1,.trs h2,.trs h3{font-family:var(--serif);text-wrap:balance;margin:0}
.trs a{color:var(--acc)}
.trs .back{display:inline-flex;align-items:center;gap:6px;background:none;border:0;padding:0;
  color:var(--muted);font:inherit;font-size:14px;cursor:pointer}
.trs .back:hover{color:var(--ink)}

/* filters */
.trs .filters{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:16px;
  padding-bottom:16px;border-bottom:1px solid var(--line)}
.trs .fgroup{display:flex;flex-wrap:wrap;gap:4px}
.trs .chip{font:600 14px/1.2 var(--sans);padding:6px 11px;border:1px solid var(--line);
  background:var(--card);color:var(--ink2);cursor:pointer}
.trs .chip:hover{background:var(--chip)}
.trs .chip.on{border-color:var(--ink);color:var(--ink);background:var(--chip)}
.trs .sel{font:inherit;font-size:14px;padding:6px 10px;border:1px solid var(--line);
  background:var(--card);color:var(--ink);max-width:100%}
.trs .run{display:inline-flex;align-items:center;gap:7px;font:600 14px/1.2 var(--sans);
  padding:7px 13px;border:1px solid var(--ink);background:var(--ink);color:var(--paper);cursor:pointer}
.trs .run:disabled{opacity:.6;cursor:default}
.trs .spin{animation:trs-spin 1s linear infinite}
@keyframes trs-spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.trs .spin{animation:none}}
.trs .steps{margin-top:10px;font-family:var(--mono);font-size:11.5px;color:var(--muted);
  display:flex;flex-wrap:wrap;gap:4px 14px}
.trs .steps b{font-weight:500;color:var(--ink2)}
.trs .empty{margin:28px auto 0;background:var(--card);border:1px solid var(--line);padding:22px;
  text-align:center;color:var(--muted);font-size:14px;max-width:70ch}
.trs .err{margin-top:20px;background:var(--red-soft);border-left:3px solid var(--red);
  padding:13px 16px;color:var(--red);font-size:14px}
.trs .warn{margin-top:16px;background:var(--amber-soft);border-left:3px solid var(--amber);
  padding:11px 14px;color:var(--ink2);font-size:13px}

/* masthead */
.trs .mast{border-bottom:2px solid var(--ink);padding-bottom:18px;margin-top:26px}
.trs .eyebrow{font-family:var(--mono);font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.trs h1{font-size:clamp(26px,4.6vw,40px);font-weight:600;line-height:1.13;margin-top:10px}
.trs .sub{color:var(--muted);margin:10px 0 0;max-width:62ch}
.trs .stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:1px;
  background:var(--line);border:1px solid var(--line);margin-top:24px}
.trs .stat{background:var(--card);padding:13px 15px}
.trs .stat b{font-family:var(--mono);font-size:25px;font-weight:500;display:block;line-height:1.15;
  font-variant-numeric:tabular-nums}
.trs .stat span{font-size:12.5px;color:var(--muted);display:block;margin-top:2px}
.trs .s-done b{color:var(--done)} .trs .s-wip b{color:var(--test)} .trs .s-blk b{color:var(--red)}
.trs .s-can b{color:var(--grey)} .trs .s-new b{color:var(--amber)}
.trs .legend{margin-top:20px;display:flex;flex-wrap:wrap;gap:6px 16px;font-size:12.5px;color:var(--muted)}

/* tabs */
.trs .tabs{display:flex;flex-wrap:wrap;gap:6px;margin-top:26px;border-bottom:1px solid var(--line);
  position:sticky;top:0;background:var(--paper);z-index:5;padding-top:10px}
.trs .tab{appearance:none;background:none;border:0;border-bottom:2px solid transparent;
  font:600 14px/1.3 var(--sans);color:var(--muted);padding:10px 12px;cursor:pointer;
  display:flex;align-items:baseline;gap:7px}
.trs .tab .tn{font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;text-transform:uppercase}
.trs .tab:hover{color:var(--ink)}
.trs .tab[aria-selected="true"]{color:var(--ink);border-bottom-color:var(--acc)}
.trs .tab[aria-selected="true"] .tn{color:var(--acc)}

/* part header + themes */
.trs .part{margin-top:28px}
.trs .part-h h2{font-size:clamp(22px,3.4vw,29px);font-weight:600}
.trs .part-h p{color:var(--muted);max-width:66ch;margin:10px 0 0}
.trs .hint{font-size:12.5px;color:var(--muted);margin:6px 0 0;max-width:68ch}
.trs .theme{margin-top:32px;padding-top:18px;border-top:1px solid var(--line)}
.trs .theme h3{font-size:20px;font-weight:600}
.trs .tgrid{display:grid;grid-template-columns:minmax(0,1fr) 216px;gap:26px;align-items:start;margin-top:10px}
.trs .prose{min-width:0}
.trs .prose p{margin:0 0 11px;color:var(--ink2)}
.trs .prose p:last-child{margin-bottom:0}
.trs .credits{background:var(--card);border:1px solid var(--line);padding:12px 14px;font-size:13px}
.trs .clbl{font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;
  color:var(--muted);margin-bottom:6px}
.trs .credits .row{display:flex;justify-content:space-between;align-items:baseline;gap:10px;padding:2px 0}
.trs .credits .row span{min-width:0;overflow-wrap:anywhere}
.trs .credits .row b{font-family:var(--mono);font-weight:500;font-size:12px;color:var(--muted);
  font-variant-numeric:tabular-nums;flex:0 0 auto}
.trs .bugs{margin-top:14px;border-top:1px solid var(--line2);padding-top:10px;font-size:13px;color:var(--muted)}
.trs .bugtag{display:inline-block;font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;
  text-transform:uppercase;color:var(--red);background:var(--red-soft);border-radius:3px;
  padding:2px 6px;margin-right:8px;vertical-align:1px}

/* task cards — one business task with its description and its pieces in one block */
.trs .tasks{list-style:none;margin:14px 0 0;padding:0;border-top:1px solid var(--line2)}
.trs .task{padding:9px 2px 12px;border-bottom:1px solid var(--line2)}
/* the duration sits in its own column, so it lines up whatever the name's length and
   never wraps onto a second line */
.trs .task .th{position:relative;display:grid;grid-template-columns:auto minmax(0,1fr) 104px;
  gap:9px;align-items:baseline;outline:none}
.trs .task .th .un{min-width:0;font-size:15px;font-weight:600;overflow-wrap:anywhere}
.trs .task .th .ud{font-family:var(--mono);font-size:11.5px;color:var(--muted);text-align:right;
  white-space:nowrap;font-variant-numeric:tabular-nums}
.trs .task:hover,.trs .task:focus-within{background:var(--chip)}
.trs .task .bugtag{margin-left:8px;margin-right:0}
.trs .desc{margin:5px 0 0 27px;color:var(--ink2);font-size:14px;max-width:72ch}
.trs .desc.hint{color:var(--muted);font-size:12.5px;font-style:italic}
.trs .bits{list-style:none;margin:8px 0 0 27px;padding:0;display:flex;flex-direction:column;gap:3px}
.trs .bit{display:grid;grid-template-columns:auto minmax(0,1fr) 104px;gap:9px;align-items:baseline;
  font-size:12.5px;color:var(--muted)}
.trs .btag{flex:0 0 auto;font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;
  padding:1px 5px;border-radius:3px;background:var(--acc-soft);color:var(--acc)}
.trs .btag.j{background:var(--grey-soft);color:var(--grey)}
.trs .btitle{min-width:0;color:var(--ink2);text-decoration:none;overflow-wrap:anywhere;
  border-bottom:1px solid transparent}
.trs .btitle:hover,.trs .btitle:focus{color:var(--acc);border-bottom-color:var(--acc)}
.trs .buglist .u{align-items:baseline}
.trs .buglist .ud{flex:0 0 104px;text-align:right}
.trs .bage{font-family:var(--mono);font-size:11px;white-space:nowrap;text-align:right;
  font-variant-numeric:tabular-nums}
.trs .bits-none{margin:8px 0 0 27px;font-size:12px;color:var(--muted);font-style:italic}

/* unit lists — the identifying name never truncates; the hover card holds the stages */
.trs .units{list-style:none;margin:14px 0 0;padding:0;border-top:1px solid var(--line2)}
.trs .units .u{position:relative;display:flex;gap:9px;align-items:baseline;padding:6px 2px;
  border-bottom:1px solid var(--line2);outline:none}
.trs .units .u:hover,.trs .units .u:focus{background:var(--chip)}
.trs .u .fl{flex:0 0 auto}
.trs .u .un{flex:1 1 auto;min-width:0;font-size:14px;overflow-wrap:anywhere}
.trs .un a{color:inherit;text-decoration:none;border-bottom:1px solid transparent}
.trs .un a:hover,.trs .un a:focus{color:var(--acc);border-bottom-color:var(--acc)}
.trs .u .ud{flex:0 0 auto;font-family:var(--mono);font-size:11.5px;color:var(--muted);
  font-variant-numeric:tabular-nums;white-space:nowrap}
.trs .u .ud.na{font-style:italic}
.trs .wi{color:var(--amber);font-size:12.5px}
.trs .tip{position:absolute;left:0;top:calc(100% - 3px);z-index:30;display:none;width:min(430px,88vw);
  background:var(--card);border:1px solid var(--line);box-shadow:0 10px 28px rgba(16,20,28,.16);padding:11px 13px}
.trs .u:hover .tip,.trs .u:focus .tip,.trs .u:focus-within .tip,
.trs .th:hover .tip,.trs .th:focus .tip,.trs .th:focus-within .tip{display:block}
.trs .tip-h{font-family:var(--mono);font-size:11px;color:var(--muted);margin-bottom:9px;line-height:1.5}
.trs .tip .tr{display:grid;grid-template-columns:158px 1fr 42px;gap:9px;align-items:center;
  font-size:12.5px;padding:2px 0;color:var(--ink2)}
.trs .tip .tr i{display:block;height:8px;background:var(--acc);opacity:.32;border-left:2px solid var(--acc);min-width:2px}
.trs .tip .tr.hot i{background:var(--amber);opacity:.45;border-left-color:var(--amber)}
.trs .tip .tr.hot b,.trs .tip .tr.hot span{color:var(--amber)}
.trs .tip .tr.q{color:var(--muted);opacity:.75;margin-top:4px;padding-top:5px;border-top:1px dashed var(--line)}
.trs .tip .tr b{font-family:var(--mono);font-weight:500;font-size:11.5px;text-align:right;
  color:var(--muted);font-variant-numeric:tabular-nums}
.trs .tip-f{margin-top:9px;padding-top:7px;border-top:1px solid var(--line2);font-size:11.5px;color:var(--muted)}

/* intake + stuck blocks */
.trs .att{margin-top:22px;border:1px solid var(--line);border-left:3px solid var(--grey);
  background:var(--card);padding:16px 18px}
.trs .att.a-red{border-left-color:var(--red)} .trs .att.a-amber{border-left-color:var(--amber)}
.trs .att-h{display:flex;flex-wrap:wrap;align-items:baseline;gap:10px}
.trs .att-h h3{font-size:18px;font-weight:600;flex:1 1 auto}
.trs .att-n{font-family:var(--mono);font-size:12px;padding:2px 8px;border-radius:3px;
  background:var(--grey-soft);color:var(--grey);white-space:nowrap}
.trs .att-l{margin:9px 0 0;color:var(--ink2);font-size:14.5px;max-width:74ch}
.trs .method{margin-top:44px;border-top:1px solid var(--line);padding-top:18px;font-size:13px;
  color:var(--muted);max-width:76ch}
.trs .method h2{font-size:14px;color:var(--ink);margin-bottom:8px;font-family:var(--sans);font-weight:600}
.trs .method p{margin:0 0 9px}
.trs :focus-visible{outline:2px solid var(--acc);outline-offset:2px}
@media (max-width:760px){.trs .tgrid{grid-template-columns:1fr;gap:16px}}
@media print{.trs .tabs{display:none}.trs .tip{display:none!important}}
`,ee=["U","T","O","P","I","A"],L=Date.UTC(2026,7,7),_=14*24*60*60*1e3;function re(t){const o=Math.floor((Date.now()-L)/_),m=L+o*_;return Array.from({length:t},(l,x)=>new Date(m-x*_).toISOString().slice(0,10))}const te=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];function w(t){const o=new Date(`${t}T00:00:00Z`);return`${o.getUTCDate()} ${te[o.getUTCMonth()]}`}const q=t=>`${w(new Date(Date.parse(`${t}T00:00:00Z`)-_).toISOString().slice(0,10))} – ${w(t)}`,y={core:"🦁",az:"🇦🇿",vn:"🇻🇳",in:"🇮🇳",kg:"🇰🇬",uz:"🇺🇿",ma:"🇲🇦"},se={core:"Core — все рынки",az:"Leobank · Азербайджан",vn:"Liobank · Вьетнам",in:"Roarbank · Индия",kg:"Simbank · Кыргызстан",uz:"Tez · Узбекистан",ma:"Credit+ · Марокко"},ae=new Set(["ждёт начала тестирования","заблокировано","в очереди","готово к релизу"]),F=(t,o,m,l)=>{const x=t%10,g=t%100;return x===1&&g!==11?o:x>=2&&x<=4&&(g<10||g>=20)?m:l},N=t=>t===0?"меньше дня":`${t} ${F(t,"день","дня","дней")}`,ne=t=>t===0?"заведён в этот период":`${N(t)} назад`,ie=t=>{var o;return(o=t.keys)!=null&&o.length?`https://jira.fintech-farm.com/browse/${t.keys[0]}`:t.href};function oe({u:t,name:o,desc:m}){var h;const l=t.stages.filter(([,a])=>a>0),x=Math.max(1,...l.map(([,a])=>a)),g=t.work>30;return e.jsxs("li",{className:"task",children:[e.jsxs("div",{className:"th",tabIndex:0,children:[e.jsx("span",{className:"fl",children:y[t.market]??"🦁"}),e.jsxs("span",{className:"un",children:[e.jsx("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",children:o}),t.is_bug&&e.jsx("span",{className:"bugtag",children:"баг"})]}),e.jsxs("span",{className:"ud",children:[N(t.work),g&&e.jsx("span",{className:"wi",children:" ⚠"})]}),e.jsxs("div",{className:"tip",children:[e.jsxs("div",{className:"tip-h",children:["Заведена ",w(t.created),t.closed?` · сдана ${w(t.closed)}`:""," · в работе ",N(t.work)]}),l.map(([a,u])=>e.jsxs("div",{className:`tr${ae.has(a)?" hot":""}`,children:[e.jsx("span",{children:a}),e.jsx("i",{style:{width:`${Math.round(u/x*100)}%`}}),e.jsxs("b",{children:[u," д"]})]},a)),t.queue>0&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"tr q",children:[e.jsx("span",{children:"в очереди"}),e.jsx("i",{style:{width:0}}),e.jsxs("b",{children:[t.queue," д"]})]}),e.jsx("div",{className:"tip-f",children:"Время в очереди в срок задачи не входит."})]}),t.rows>1&&e.jsxs("div",{className:"tip-f",children:[t.rows," ",F(t.rows,"задача","задачи","задач")," в трекере ·"," ",t.status_mix.map(([a,u])=>`${u} ${a}`).join(" · ")]}),t.block_reason&&e.jsxs("div",{className:"tip-f",children:["Стоит: ",t.block_reason]})]})]}),e.jsx("p",{className:`desc${m?"":" hint"}`,children:m??"Описание ещё не написано — нажмите Regenerate."}),(h=t.items)!=null&&h.length?e.jsx("ul",{className:"bits",children:t.items.map(a=>e.jsxs("li",{className:"bit",children:[e.jsx("span",{className:`btag${a.kind==="jira"?" j":""}`,children:a.kind==="cr"?"CR":"Jira"}),e.jsx("a",{className:"btitle",href:ie(a),target:"_blank",rel:"noopener noreferrer",children:a.title}),e.jsx("span",{className:"bage",children:ne(a.age)})]},`${a.kind}:${a.id}`))}):e.jsx("p",{className:"bits-none",children:"В этом периоде ни один CR и ни один тикет этой задачи не двигался."})]})}function le({units:t}){const o=new Map;for(const l of t)l.qa&&o.set(l.qa,(o.get(l.qa)??0)+1);const m=[...o].sort((l,x)=>x[1]-l[1]);return m.length?e.jsxs("aside",{className:"credits",children:[e.jsx("div",{className:"clbl",children:"Проверка и приёмка"}),m.map(([l,x])=>e.jsxs("div",{className:"row",children:[e.jsx("span",{children:l}),e.jsx("b",{children:x})]},l))]}):null}function me(){var E,O;const t=J(),o=K(),m=Q(),l=Z(),x=l.isAdmin||l.hasAll||l.block==="hq",g=z.useMemo(()=>re(12),[]),h=(t.teamCode??"P").toUpperCase(),a=t.periodEnd&&/^\d{4}-\d{2}-\d{2}$/.test(t.periodEnd)?t.periodEnd:g[0],[u,G]=z.useState(1),[b,k]=z.useState({step:null,error:null});z.useEffect(()=>{const r="trs-fonts";if(document.getElementById(r))return;const s=document.createElement("link");s.id=r,s.rel="stylesheet",s.href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap",document.head.appendChild(s)},[]);const $=W({queryKey:["team-sprint-report",h,a],queryFn:async()=>{const{data:r}=await R.from("roadmap_teams").select("id, code, name").eq("code",h).maybeSingle();if(!(r!=null&&r.id))return{report:null,history:[]};const{data:s}=await R.from("team_sprint_reports").select("id, period_start, period_end, generated_at, data, themes, prose").eq("team_id",r.id).order("period_end",{ascending:!1}).limit(20),i=s??[];return{report:i.find(d=>String(d.period_end)===a)??null,history:i.map(d=>String(d.period_end))}}}),p=(E=$.data)==null?void 0:E.report,n=p==null?void 0:p.data,v=p==null?void 0:p.themes,f=p==null?void 0:p.prose;async function S(r,s){const{data:i,error:d}=await R.functions.invoke("team-sprint-report",{body:{stage:r,...s}});let c=(d==null?void 0:d.message)??(i==null?void 0:i.error)??null;if(d&&d.context instanceof Response)try{const j=await d.context.clone().json();j!=null&&j.error&&(c=String(j.error))}catch{}if(c)throw new Error(c);return i}async function D(){if(!b.step)try{k({step:"reading Jira",error:null});const r=await S("data",{teamCode:h,periodEnd:a});await m.invalidateQueries({queryKey:["team-sprint-report",h,a]}),k({step:"grouping into themes",error:null}),await S("themes",{reportId:r.reportId}),await m.invalidateQueries({queryKey:["team-sprint-report",h,a]}),k({step:"writing the text",error:null}),await S("prose",{reportId:r.reportId}),await m.invalidateQueries({queryKey:["team-sprint-report",h,a]}),k({step:null,error:null})}catch(r){k({step:null,error:r.message})}}if(!x)return e.jsx("div",{className:"p-8 text-sm text-muted-foreground",children:"This report is available to HQ only."});const P=r=>{const s=new Map(((n==null?void 0:n.units)??[]).map(i=>[i.uid,i]));return r.map(i=>s.get(i)).filter(i=>!!i)},T=r=>{var s;return((s=v==null?void 0:v.names)==null?void 0:s[r.uid])??r.title},U=r=>((v==null?void 0:v.list)??[]).filter(s=>s.part===r),C=((n==null?void 0:n.units)??[]).filter(r=>r.part===4).sort((r,s)=>s.total-r.total),M=r=>{var s;return!!((s=f==null?void 0:f.tech)!=null&&s[r.uid])},B=r=>r.filter(s=>!s.is_bug&&!M(s));function I({title:r,units:s}){return s.length?e.jsxs("section",{className:"theme",children:[e.jsx("h3",{children:r}),e.jsxs("div",{className:"tgrid",children:[e.jsx("div",{className:"prose",children:e.jsx("ul",{className:"tasks",children:s.map(i=>{var d;return e.jsx(oe,{u:i,name:T(i),desc:(d=f==null?void 0:f.descriptions)==null?void 0:d[i.uid]},i.uid)})})}),e.jsx(le,{units:s})]})]}):null}function H({units:r}){return r.length?e.jsxs("section",{className:"theme",children:[e.jsx("h3",{children:"Баги"}),e.jsx("ul",{className:"units buglist",children:r.map(s=>e.jsxs("li",{className:"u",children:[e.jsx("span",{className:"fl",children:y[s.market]??"🦁"}),e.jsx("span",{className:"un",children:e.jsx("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",children:T(s)})}),e.jsx("span",{className:"ud",children:N(s.work)})]},s.uid))})]}):null}function A({part:r}){const s=((n==null?void 0:n.units)??[]).filter(c=>c.part===r),i=s.filter(c=>!c.is_bug&&M(c)),d=s.filter(c=>c.is_bug).sort((c,j)=>j.work-c.work);return e.jsxs(e.Fragment,{children:[U(r).map(c=>e.jsx(I,{title:c.theme_title,units:B(P(c.unit_keys))},`${r}:${c.theme_title}`)),e.jsx(I,{title:"Технические задачи",units:i}),e.jsx(H,{units:d})]})}return e.jsxs("div",{className:"trs",children:[e.jsx("style",{children:Y}),e.jsxs("div",{className:"wrap",children:[e.jsxs("button",{className:"back",onClick:()=>o("/roadmap"),children:[e.jsx(V,{className:"h-4 w-4"})," Back to roadmap"]}),e.jsxs("div",{className:"filters",children:[e.jsx("div",{className:"fgroup",role:"group","aria-label":"Team",children:ee.map(r=>e.jsx("button",{type:"button",className:`chip${r===h?" on":""}`,"aria-pressed":r===h,onClick:()=>o(`/team-sprint/${r}/${a}`),children:r},r))}),e.jsx("select",{id:"trs-period","aria-label":"Two-week period",className:"sel",value:a,onChange:r=>o(`/team-sprint/${h}/${r.target.value}`),children:g.map(r=>{var s,i;return e.jsxs("option",{value:r,children:[q(r),(i=(s=$.data)==null?void 0:s.history)!=null&&i.includes(r)?"":" — not generated"]},r)})}),e.jsxs("button",{type:"button",className:"run",onClick:D,disabled:!!b.step,children:[e.jsx(X,{className:`h-3.5 w-3.5${b.step?" spin":""}`}),b.step?"Generating…":p?"Regenerate":"Generate report"]})]}),b.step&&e.jsxs("div",{className:"steps",children:[e.jsx("span",{children:e.jsx("b",{children:b.step})}),e.jsx("span",{children:"three steps: Jira → themes → text, about two minutes in total"})]}),b.error&&e.jsxs("div",{className:"err",children:["Generation failed: ",b.error]}),$.isLoading?e.jsx("div",{className:"empty",children:"Loading…"}):n?e.jsxs(e.Fragment,{children:[e.jsxs("header",{className:"mast",children:[e.jsxs("div",{className:"eyebrow",children:[n.team.name," · Fintech Farm · ",q(a)]}),e.jsx("h1",{children:"Что команда сделала и над чем работает"}),e.jsx("p",{className:"sub",children:"Отчёт за две недели: поставленная ценность, незавершённая работа, новые задачи и причины остановок."}),e.jsxs("div",{className:"stats",children:[e.jsxs("div",{className:"stat s-done",children:[e.jsx("b",{children:n.counts.rows_done}),e.jsx("span",{children:"выполнено"})]}),e.jsxs("div",{className:"stat s-wip",children:[e.jsx("b",{children:n.counts.rows_inflight??n.counts.inflight}),e.jsx("span",{children:"в работе, не закончено"})]}),e.jsxs("div",{className:"stat s-new",children:[e.jsx("b",{children:n.counts.intake}),e.jsx("span",{children:"новых CR пришло на доску"})]}),e.jsxs("div",{className:"stat s-blk",children:[e.jsx("b",{children:n.counts.rows_stuck??n.counts.stuck}),e.jsx("span",{children:"застряло вне частей 1–3"})]}),e.jsxs("div",{className:"stat s-can",children:[e.jsx("b",{children:n.counts.rows_cancelled??n.counts.cancelled}),e.jsx("span",{children:"отменено"})]})]}),e.jsxs("p",{className:"hint",children:["Плитки считают строки трекера. Ниже по частям они свёрнуты в бизнес-задачи:"," ",n.counts.done," сделано, ",n.counts.inflight," в работе, ",n.counts.stuck," застряло."]}),e.jsx("div",{className:"legend",children:Object.entries(se).map(([r,s])=>e.jsxs("span",{children:[y[r]," ",s]},r))})]}),!v&&e.jsx("div",{className:"warn",children:"Данные собраны, но темы и текст ещё не сгенерированы — нажмите Regenerate."}),(O=f==null?void 0:f.failed)!=null&&O.length?e.jsxs("div",{className:"warn",children:["Описания не дописаны для ",f.failed.length," групп задач: ",f.failed.join("; ")]}):null,Object.keys(n.unmapped_statuses??{}).length?e.jsxs("div",{className:"warn",children:["Статусы без стадии (считаются как «в работе»):"," ",Object.entries(n.unmapped_statuses).map(([r,s])=>`${r} ×${s}`).join(", ")]}):null,e.jsx("div",{className:"tabs",role:"tablist",children:[[1,"Часть 1","Что сделала"],[2,"Часть 2","Над чем работает"],[3,"Часть 3","Новые задачи"],[4,"Часть 4","Застрявшие задачи"]].map(([r,s,i])=>e.jsxs("button",{className:"tab",role:"tab","aria-selected":u===r,onClick:()=>G(r),children:[e.jsx("span",{className:"tn",children:s}),i]},r))}),u===1&&e.jsxs("section",{className:"part",children:[e.jsx("div",{className:"part-h",children:e.jsx("h2",{children:"Что команда сделала"})}),e.jsx(A,{part:1})]}),u===2&&e.jsxs("section",{className:"part",children:[e.jsx("div",{className:"part-h",children:e.jsx("h2",{children:"Над чем команда работает"})}),e.jsx(A,{part:2})]}),u===3&&e.jsxs("section",{className:"part",children:[e.jsx("div",{className:"part-h",children:e.jsx("h2",{children:"Новые задачи"})}),e.jsx("ul",{className:"units",children:n.intake.map(r=>e.jsxs("li",{className:"u",children:[e.jsx("span",{className:"fl",children:y[r.market]??"🦁"}),e.jsx("span",{className:"un",children:r.short_id?e.jsx("a",{href:`https://roary.fintech-farm.com/cr/${r.short_id}`,target:"_blank",rel:"noopener noreferrer",children:r.title}):r.title}),e.jsx("span",{className:"ud",children:r.created?w(r.created):""})]},`${r.short_id}-${r.created}`))}),!n.intake.length&&e.jsx("p",{className:"hint",children:"За период новых запросов на доску не поступало."})]}),u===4&&e.jsxs("section",{className:"part",children:[e.jsx("div",{className:"part-h",children:e.jsx("h2",{children:"Застрявшие задачи"})}),e.jsx("ul",{className:"units",children:C.slice(0,80).map(r=>e.jsxs("li",{className:"u",tabIndex:0,children:[e.jsx("span",{className:"fl",children:y[r.market]??"🦁"}),e.jsx("span",{className:"un",children:e.jsx("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",children:T(r)})}),e.jsxs("span",{className:"ud",children:[N(r.total)," с момента заведения"]}),e.jsxs("div",{className:"tip",children:[e.jsxs("div",{className:"tip-h",children:["Заведена ",w(r.created)," · ",r.status_mix.map(([s,i])=>`${i} ${s}`).join(" · ")]}),r.block_reason&&e.jsxs("div",{className:"tip-f",children:["Стоит: ",r.block_reason]})]})]},r.uid))}),C.length>80&&e.jsxs("p",{className:"hint",children:["Показаны 80 самых давних из ",C.length,"."]})]}),e.jsxs("footer",{className:"method",children:[e.jsx("h2",{children:"Как читать отчёт"}),e.jsx("p",{children:"Единица отчёта — бизнес-задача, а не строка трекера: одна понятная вещь лежит в Jira как iOS, Android и бэкенд по отдельности, и сворачивается по доске Roadmap. Стадия задачи в момент времени — стадия её самой отстающей начатой части, поэтому время разбивается на непересекающиеся отрезки, а их сумма равна сроку задачи."}),e.jsxs("p",{children:["Считано по истории статусов в Jira, ",n.scope.non_epics," строк трекера в периоде (",n.scope.team_field.join(" + "),"). Группировка по направлениям и описания задач написаны ИИ по этим данным; числа, списки задач и их состав — детерминированные.",p!=null&&p.generated_at?` Сгенерировано ${new Date(p.generated_at).toLocaleString("ru-RU")}.`:""]})]})]}):e.jsxs("div",{className:"empty",children:["No report for ",q(a)," yet. Press ",e.jsx("b",{children:"Generate report"})," — it reads the period from Jira, groups the work into business themes and writes the text. The result is stored, so this URL becomes a link you can send."]})]})]})}export{me as default};
