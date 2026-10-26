import{h as s,s as p}from"./index-BAmVVlQP.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=s("Link2Off",[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);async function m(n,r){const t=n.filter(e=>e.trim().split(/\s+/).length>=2);if(t.length===0)return{};const{data:a}=await p.from("speaker_mappings").select("speaker_name, participant_email").in("speaker_name",t).eq("confirmed",!0).neq("meeting_id",r).not("participant_email","is",null);if(!a||a.length===0)return{};const i={};for(const e of a)e.participant_email&&(i[e.speaker_name]=e.participant_email);return i}export{l as L,m as l};
