const r=`
.tsr{
  --paper:#f6f7f9; --card:#ffffff; --ink:#161a21; --ink2:#333b49; --muted:#5b6474;
  --line:#e3e7ee; --line2:#eef1f6; --acc:#1f5a7a;
  --done:#2d6a4a; --red:#9c3b2c; --red-soft:#fbeeeb; --amber:#8a6420; --amber-soft:#fbf4e7;
  --grey-soft:#eff1f4; --chip:#f1f3f7;
  --serif:"Source Serif 4",Georgia,"Times New Roman",serif;
  --sans:"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  --mono:"IBM Plex Mono",ui-monospace,SFMono-Regular,Menlo,monospace;
  background:var(--paper); color:var(--ink); font-family:var(--sans); font-size:15px;
  line-height:1.6; padding-inline:20px; min-height:100%;
}
.dark .tsr{
  --paper:#11141a; --card:#171b22; --ink:#e7eaf0; --ink2:#ccd3de; --muted:#939cad;
  --line:#272d38; --line2:#1f242d; --acc:#74b6d6;
  --done:#6ec295; --red:#e2907e; --red-soft:#2c1d1a; --amber:#d2b273; --amber-soft:#2a2418;
  --grey-soft:#1e232b; --chip:#1e242d;
}
.tsr *{box-sizing:border-box}
.tsr .wrap{max-width:1020px;margin:0 auto;padding-block:24px 64px}
.tsr h1,.tsr h2,.tsr h3{font-family:var(--serif);text-wrap:balance;margin:0}
.tsr a{color:var(--acc)}
.tsr .back{display:inline-flex;align-items:center;gap:6px;background:none;border:0;padding:0;
  color:var(--muted);font:inherit;font-size:14px;cursor:pointer}
.tsr .back:hover{color:var(--ink)}

/* filters */
.tsr .filters{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:16px;
  padding-bottom:16px;border-bottom:1px solid var(--line)}
.tsr .fgroup{display:flex;flex-wrap:wrap;gap:4px}
.tsr .chip{font:600 14px/1.2 var(--sans);padding:6px 11px;border:1px solid var(--line);
  background:var(--card);color:var(--ink2);cursor:pointer}
.tsr .chip:hover{background:var(--chip)}
.tsr .chip.on{border-color:var(--ink);color:var(--ink);background:var(--chip)}
.tsr .sel{font:inherit;font-size:14px;padding:6px 10px;border:1px solid var(--line);
  background:var(--card);color:var(--ink)}
.tsr .run{display:inline-flex;align-items:center;gap:7px;font:600 14px/1.2 var(--sans);
  padding:7px 13px;border:1px solid var(--ink);background:var(--ink);color:var(--paper);cursor:pointer}
.tsr .run:disabled{opacity:.6;cursor:default}
.tsr .spin{animation:tsr-spin 1s linear infinite}
@keyframes tsr-spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.tsr .spin{animation:none}}
.tsr .empty{margin-top:28px;background:var(--card);border:1px solid var(--line);padding:22px;
  text-align:center;color:var(--muted);font-size:14px;max-width:70ch;margin-inline:auto}
.tsr .err{margin-top:20px;background:var(--red-soft);border-left:3px solid var(--red);
  padding:13px 16px;color:var(--red);font-size:14px}

/* masthead */
.tsr .mast{border-bottom:2px solid var(--ink);padding-bottom:18px;margin-top:26px}
.tsr .eyebrow{font-family:var(--mono);font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.tsr h1{font-size:clamp(26px,4.4vw,38px);font-weight:600;line-height:1.14;margin-top:10px}
.tsr .sub{color:var(--muted);margin:10px 0 0;max-width:64ch}
.tsr .stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1px;
  background:var(--line);border:1px solid var(--line);margin-top:24px}
.tsr .stat{background:var(--card);padding:13px 15px}
.tsr .stat b{font-family:var(--mono);font-size:25px;font-weight:500;display:block;line-height:1.15;
  font-variant-numeric:tabular-nums}
.tsr .stat span{font-size:12.5px;color:var(--muted);display:block;margin-top:2px}
.tsr .s-ok b{color:var(--done)} .tsr .s-bad b{color:var(--red)}
.tsr .s-warn b{color:var(--amber)} .tsr .s-n b{color:var(--acc)}

/* scope card */
.tsr .period{margin-top:26px;background:var(--card);border:1px solid var(--line);
  border-left:3px solid var(--acc);padding:16px 18px}
.tsr .period h2{font-size:16px;font-weight:600;font-family:var(--sans)}
.tsr .period dl{display:grid;grid-template-columns:auto 1fr;gap:6px 16px;margin:12px 0 0;font-size:13.5px}
.tsr .period dt{color:var(--muted);white-space:nowrap}
.tsr .period dd{margin:0;color:var(--ink2)}
.tsr .mono{font-family:var(--mono);font-variant-numeric:tabular-nums}

/* sections */
.tsr .sec{margin-top:42px;border-top:1px solid var(--line);padding-top:18px}
.tsr .sec.major{border-top:2px solid var(--ink)}
.tsr .sec h2{font-size:clamp(19px,2.8vw,24px);font-weight:600}
.tsr .sec>p{color:var(--ink2);max-width:72ch;margin:10px 0 0}
.tsr .verdict{display:inline-block;font-family:var(--mono);font-size:10px;letter-spacing:.1em;
  text-transform:uppercase;padding:3px 8px;border-radius:3px;margin-bottom:8px}
.tsr .v-ok{background:var(--grey-soft);color:var(--done)}
.tsr .v-bad{background:var(--red-soft);color:var(--red)}
.tsr .v-warn{background:var(--amber-soft);color:var(--amber)}
.tsr .hint{font-size:12.5px;color:var(--muted);margin:12px 0 0;max-width:72ch}

/* bars */
.tsr .bars{margin-top:16px;display:grid;gap:7px}
.tsr .bar{display:grid;grid-template-columns:170px minmax(0,1fr) 56px;gap:10px;align-items:center;font-size:13.5px}
.tsr .bar .lbl{color:var(--ink2);overflow-wrap:anywhere}
.tsr .bar .track{display:block;background:var(--line2);height:12px;width:100%}
.tsr .bar .fill{display:block;background:var(--acc);height:12px;border-radius:0 3px 3px 0}
.tsr .bar.low .fill{background:var(--red)} .tsr .bar.mid .fill{background:var(--amber)}
.tsr .bar .val{font-family:var(--mono);font-size:12.5px;color:var(--muted);text-align:right;
  font-variant-numeric:tabular-nums}

/* tables */
.tsr .tw{overflow-x:auto;margin-top:16px;border:1px solid var(--line);background:var(--card)}
.tsr table{border-collapse:collapse;width:100%;font-size:13.5px}
.tsr th,.tsr td{text-align:left;padding:7px 12px;border-bottom:1px solid var(--line2);vertical-align:top}
.tsr th{font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;
  color:var(--muted);font-weight:500;white-space:nowrap;background:var(--chip)}
.tsr th.n,.tsr td.n{text-align:right}
.tsr tr:last-child td{border-bottom:0}
.tsr td.n{font-family:var(--mono);font-variant-numeric:tabular-nums;white-space:nowrap}
.tsr td.muted{color:var(--muted)}
.tsr .hot{color:var(--red)}
.tsr code{font-family:var(--mono);font-size:12.5px;background:var(--chip);padding:1px 5px;border-radius:3px}

/* task lists — the name never truncates, only the trailing meta is terse */
.tsr .units{list-style:none;margin:14px 0 0;padding:0;border-top:1px solid var(--line2)}
.tsr .units li{display:flex;gap:9px;align-items:baseline;padding:6px 2px;border-bottom:1px solid var(--line2)}
.tsr .units .un{flex:1 1 auto;min-width:0;font-size:14px;overflow-wrap:anywhere}
.tsr .units .ud{flex:0 0 auto;font-family:var(--mono);font-size:11.5px;color:var(--muted);
  font-variant-numeric:tabular-nums;white-space:nowrap}
.tsr .k{flex:0 0 auto;font-family:var(--mono);font-size:12.5px;text-decoration:none;
  border-bottom:1px solid transparent}
.tsr .k:hover,.tsr .k:focus{border-bottom-color:var(--acc)}
.tsr .keys{display:flex;flex-wrap:wrap;gap:4px 10px}

.tsr .method{margin-top:48px;border-top:1px solid var(--line);padding-top:18px;font-size:13px;
  color:var(--muted);max-width:76ch}
.tsr .method h2{font-size:14px;color:var(--ink);margin-bottom:8px;font-family:var(--sans);font-weight:600}
.tsr .method p{margin:0 0 9px}
.tsr :focus-visible{outline:2px solid var(--acc);outline-offset:2px}
@media (max-width:620px){
  .tsr .bar{grid-template-columns:120px minmax(0,1fr) 46px;font-size:13px}
  .tsr .period dl{grid-template-columns:1fr;gap:2px 0}
  .tsr .period dt{margin-top:8px}
}
`;export{r as S};
