import{r,j as t,B as l}from"./index-BAmVVlQP.js";import{A as p}from"./AppHeader-C6gHjaHT.js";import"./dropdown-menu-WmhoU4P0.js";import"./index-DzSN7mp-.js";import"./chevron-right-CUwPkqpF.js";import"./check-B8jgbwZc.js";import"./teamNews-DVZUX4q6.js";import"./video-BU3aw6bs.js";import"./format-2Pp4KpDY.js";import"./input-N0GOFbsx.js";import"./index-BoBPB4dx.js";import"./dialog-CndHUx6H.js";import"./accordion-DQ30i2h1.js";import"./chevron-down-CdePqSxX.js";import"./switch-DbdMQeV4.js";import"./users-DNQqz2WI.js";import"./settings-Q8b6pmfh.js";import"./log-out-m5g5-jIf.js";import"./search-CJ2oEB7n.js";import"./chevron-left-B3NFwftX.js";import"./menu-BCr1nUEy.js";import"./file-text-DnUVBGZi.js";const i=`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Сложность работы (story points, оценка ИИ) — H1 2026</title>
<style>
  :root{--ink:#0f1226;--muted:#6b7280;--line:#e6e8ef;--paper:#fff;--bg:#f4f5f9;
    --accent:#7c3aed;--accent2:#16a34a;--red:#dc2626;--redbg:#fef2f2;--green:#059669;--greenbg:#ecfdf5;
    --amber:#d97706;--amberbg:#fffbeb;--yellow:#ca8a04;--yellowbg:#fefce8;}
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Arial,sans-serif;line-height:1.5}
  .wrap{max-width:1240px;margin:0 auto;padding:40px 28px 80px}
  header.top{border-left:6px solid var(--accent);padding:6px 0 6px 22px;margin-bottom:8px}
  h1{font-size:31px;margin:0 0 6px;letter-spacing:-.4px}
  .sub{color:var(--muted);font-size:17px;margin:0}
  .meta{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0 22px}
  .chip{background:#fff;border:1px solid var(--line);border-radius:999px;padding:6px 14px;font-size:13px;color:#374151}
  .chip b{color:var(--ink)}
  h2{font-size:22px;margin:30px 0 10px}
  .card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:14px 16px;margin-bottom:14px;
    box-shadow:0 1px 2px rgba(16,18,38,.04);overflow-x:auto}
  table{border-collapse:collapse;width:100%;font-size:13.5px}
  th,td{padding:9px 8px;text-align:center;border-bottom:1px solid var(--line);white-space:nowrap}
  th:first-child,td:first-child{text-align:left;padding-left:6px}
  thead th{font-size:11px;text-transform:uppercase;letter-spacing:.3px;color:#6b7280;border-bottom:2px solid #e0e2ea;font-weight:700}
  tbody tr.med td{background:#fafbff;color:#8b90a0;font-style:italic;font-size:12.5px}
  tbody tr:hover:not(.med){background:#fafaff}
  .nm{font-weight:700}.role{color:var(--muted);font-size:11.5px;font-weight:400}
  .tm{display:inline-block;min-width:20px;font-weight:700;color:var(--accent);background:#f3eaff;border-radius:6px;padding:1px 6px;font-size:11px;margin-left:4px}
  .hi{font-weight:700}
  .c-red{color:var(--red);font-weight:700}.c-green{color:var(--green);font-weight:700}.c-amber{color:var(--amber);font-weight:700}
  td.sep{border-left:1px solid var(--line)}
  .summary{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin:8px 0 18px}
  .scard{border-radius:14px;padding:16px 18px;border:1px solid}
  .scard.red{background:var(--redbg);border-color:#fecaca}
  .scard.amber{background:var(--amberbg);border-color:#fde68a}
  .scard.green{background:var(--greenbg);border-color:#a7f3d0}
  .scard h3{margin:0 0 6px;font-size:15px}
  .scard p{margin:0;font-size:13px;color:#3f3f46}
  footer.note{margin-top:24px;padding:18px 20px;background:#fff;border:1px solid var(--line);border-radius:14px;font-size:13px;color:#52525b}
  footer.note b{color:var(--ink)}
  footer.note ul{margin:8px 0 0;padding-left:18px}
  footer.note li{margin-bottom:6px}
  @media print{body{background:#fff}.card,footer.note{box-shadow:none}}
  @media(max-width:780px){.summary{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="wrap">

<header class="top">
  <h1>Сложность работы в story points — оценка ИИ</h1>
  <p class="sub">ИИ проставил сложность каждой Jira-задаче разработчиков; суммировано по человеку и команде за первое полугодие 2026</p>
</header>

<div class="meta">
  <span class="chip">📅 Окно: <b>01.01 – 06.06.2026</b> (~5 мес.)</span>
  <span class="chip">👥 <b>40</b> разработчиков · 3 платформы</span>
  <span class="chip">🧮 Всего <b>9008</b> SP</span>
  <span class="chip">🤖 Источник SP: <b>ИИ-оценка</b> (GitLab dev-stats)</span>
  <span class="chip">🔗 Имена и команды — из <b>Roary</b> (employee_cache)</span>
</div>

<div class="summary">
  <div class="scard amber">
    <h3>⚠️ Это оценка, а не факт</h3>
    <p>Story points расставил ИИ. В Roary <b>нет</b> официальных SP по Jira, поэтому сверить «эталоном» не с чем — это единственная оценка сложности. Трактуйте как прикидку.</p>
  </div>
  <div class="scard amber">
    <h3>⚠️ Платформы не сравнивать между собой</h3>
    <p>У Android / iOS / Backend разные базовые масштабы сложности. Сравнивать SP корректно <b>внутри</b> одной платформы, не между ними.</p>
  </div>
  <div class="scard green">
    <h3>📊 Загрузка по командам</h3>
    <p>Лидеры по сумме SP: <b>Y (1903)</b>, <b>U (1808)</b>, <b>O (1269)</b>. Полная разбивка — в таблице ниже.</p>
  </div>
</div>

<h2>Сумма SP по командам (все платформы)</h2>
<div class="card">
<table>
  <thead><tr><th>Команда</th><th>Σ SP</th><th>Разработчиков</th><th>Доля</th><th style="text-align:left">&nbsp;</th></tr></thead>
  <tbody><tr><td><span class="tm">Y</span></td><td class="hi">1903</td><td>6</td><td>21%</td><td style="text-align:left;width:38%"><span style="display:inline-block;height:10px;border-radius:5px;background:var(--accent);width:100.0%"></span></td></tr><tr><td><span class="tm">U</span></td><td class="hi">1808</td><td>6</td><td>20%</td><td style="text-align:left;width:38%"><span style="display:inline-block;height:10px;border-radius:5px;background:var(--accent);width:95.0%"></span></td></tr><tr><td><span class="tm">O</span></td><td class="hi">1269</td><td>5</td><td>14%</td><td style="text-align:left;width:38%"><span style="display:inline-block;height:10px;border-radius:5px;background:var(--accent);width:66.7%"></span></td></tr><tr><td><span class="tm">I</span></td><td class="hi">1211</td><td>6</td><td>13%</td><td style="text-align:left;width:38%"><span style="display:inline-block;height:10px;border-radius:5px;background:var(--accent);width:63.6%"></span></td></tr><tr><td><span class="tm">P</span></td><td class="hi">1023</td><td>4</td><td>11%</td><td style="text-align:left;width:38%"><span style="display:inline-block;height:10px;border-radius:5px;background:var(--accent);width:53.8%"></span></td></tr><tr><td><span class="tm">S</span></td><td class="hi">798</td><td>3</td><td>9%</td><td style="text-align:left;width:38%"><span style="display:inline-block;height:10px;border-radius:5px;background:var(--accent);width:41.9%"></span></td></tr><tr><td><span class="tm">T</span></td><td class="hi">564</td><td>4</td><td>6%</td><td style="text-align:left;width:38%"><span style="display:inline-block;height:10px;border-radius:5px;background:var(--accent);width:29.6%"></span></td></tr><tr><td><span class="tm">A</span></td><td class="hi">304</td><td>3</td><td>3%</td><td style="text-align:left;width:38%"><span style="display:inline-block;height:10px;border-radius:5px;background:var(--accent);width:16.0%"></span></td></tr><tr><td><span class="tm">K</span></td><td class="hi">128</td><td>3</td><td>1%</td><td style="text-align:left;width:38%"><span style="display:inline-block;height:10px;border-radius:5px;background:var(--accent);width:6.7%"></span></td></tr></tbody>
</table>
</div>

<h2>🤖 Android (AOS) — 6 чел., 2121 SP</h2>
<div class="card"><table>
  <thead><tr><th>Сотрудник</th><th>feat</th><th>fix</th><th>fix_help</th><th>tech</th><th class="sep">всего SP</th></tr></thead>
  <tbody><tr><td><span class="nm">Taras Oryshhij</span><span class="tm">Y</span><br><span class="role">Android developer</span></td><td>288</td><td>26</td><td>18</td><td>147</td><td class="sep hi c-green">479</td></tr><tr><td><span class="nm">Anton Dobrohorskyi</span><span class="tm">P</span><br><span class="role">Android developer</span></td><td>254</td><td>49</td><td>35</td><td>39</td><td class="sep hi ">377</td></tr><tr><td><span class="nm">Oleksii Rudenko</span><span class="tm">U</span><br><span class="role">Android developer</span></td><td>248</td><td>68</td><td>1</td><td>33</td><td class="sep hi ">350</td></tr><tr><td><span class="nm">Danylo Demydenko</span><span class="tm">I</span><br><span class="role">Android developer</span></td><td>188</td><td>40</td><td>40</td><td>66</td><td class="sep hi ">334</td></tr><tr><td><span class="nm">Dmytro Sapunov</span><span class="tm">O</span><br><span class="role">Android developer</span></td><td>208</td><td>70</td><td>3</td><td>27</td><td class="sep hi ">308</td></tr><tr><td><span class="nm">Yevhenii Harahulia</span><span class="tm">T</span><br><span class="role">Android developer</span></td><td>156</td><td>97</td><td>1</td><td>19</td><td class="sep hi ">273</td></tr><tr class="med"><td>Медиана по платформе (6 чел.)</td><td></td><td></td><td></td><td></td><td class="sep">342</td></tr></tbody>
</table></div>

<h2>🍎 iOS — 12 чел., 3215 SP</h2>
<div class="card"><table>
  <thead><tr><th>Сотрудник</th><th>feat</th><th>fix</th><th>fix_help</th><th>tech</th><th class="sep">всего SP</th></tr></thead>
  <tbody><tr><td><span class="nm">Roman Shcherbakov</span><span class="tm">P</span><br><span class="role">iOS Developer</span></td><td>222</td><td>147</td><td>0</td><td>10</td><td class="sep hi c-green">379</td></tr><tr><td><span class="nm">Oleksandr Raievskyi</span><span class="tm">I</span><br><span class="role">iOS Developer</span></td><td>141</td><td>141</td><td>0</td><td>90</td><td class="sep hi c-green">372</td></tr><tr><td><span class="nm">An Tuan Khoanh</span><span class="tm">U</span><br><span class="role">iOS Developer</span></td><td>178</td><td>114</td><td>0</td><td>75</td><td class="sep hi c-green">367</td></tr><tr><td><span class="nm">Ihor Velykodnyi</span><span class="tm">U</span> <span title="в отчёте GitLab команда O" style="color:var(--amber);font-size:10px">⚑O</span><br><span class="role">iOS Developer</span></td><td>206</td><td>131</td><td>0</td><td>12</td><td class="sep hi c-green">349</td></tr><tr><td><span class="nm">Dmytro Mandych</span><span class="tm">O</span><br><span class="role">iOS Developer</span></td><td>167</td><td>92</td><td>0</td><td>74</td><td class="sep hi c-green">333</td></tr><tr><td><span class="nm">Mikita Dzidzenka</span><span class="tm">Y</span> <span title="команда в GitLab не указана" style="color:#9aa0ad;font-size:10px">⚑—</span><br><span class="role">iOS Lead</span></td><td>38</td><td>41</td><td>0</td><td>187</td><td class="sep hi ">266</td></tr><tr><td><span class="nm">Illia Margarit</span><span class="tm">T</span><br><span class="role">iOS Developer</span></td><td>164</td><td>72</td><td>0</td><td>18</td><td class="sep hi ">254</td></tr><tr><td><span class="nm">Mykyta Borysov</span><span class="tm">A</span><br><span class="role">iOS Developer</span></td><td>108</td><td>80</td><td>0</td><td>39</td><td class="sep hi ">227</td></tr><tr><td><span class="nm">Serhii Kobzin</span><span class="tm">Y</span><br><span class="role">iOS Developer · ⚠️ вне FF</span></td><td>135</td><td>38</td><td>0</td><td>17</td><td class="sep hi ">190</td></tr><tr><td><span class="nm">Pavlo Vasylchenko</span><span class="tm">O</span><br><span class="role">iOS Developer · ⚠️ вне FF</span></td><td>116</td><td>56</td><td>3</td><td>11</td><td class="sep hi ">186</td></tr><tr><td><span class="nm">Yevhen Hilko</span><span class="tm">Y</span><br><span class="role">iOS Developer · ⚠️ вне FF</span></td><td>42</td><td>74</td><td>2</td><td>56</td><td class="sep hi ">174</td></tr><tr><td><span class="nm">Dmytro Savytskyi</span><span class="tm">P</span><br><span class="role">iOS Developer</span></td><td>43</td><td>40</td><td>0</td><td>35</td><td class="sep hi c-amber">118</td></tr><tr class="med"><td>Медиана по платформе (12 чел.)</td><td></td><td></td><td></td><td></td><td class="sep">260</td></tr></tbody>
</table></div>

<h2>⚙️ Backend — 22 чел., 3672 SP</h2>
<div class="card"><table>
  <thead><tr><th>Сотрудник</th><th>feat</th><th>fix</th><th>fix_help</th><th>tech</th><th class="sep">всего SP</th></tr></thead>
  <tbody><tr><td><span class="nm">Yakiv Medviediev</span><span class="tm">Y</span><br><span class="role">Java developer</span></td><td>177</td><td>115</td><td>0</td><td>148</td><td class="sep hi c-green">440</td></tr><tr><td><span class="nm">Serhii Mykytiuk</span><span class="tm">S</span><br><span class="role">Java developer</span></td><td>0</td><td>97</td><td>0</td><td>340</td><td class="sep hi c-green">437</td></tr><tr><td><span class="nm">Yevhen Kysilov</span><span class="tm">O</span><br><span class="role">Technical coordinator Team O</span></td><td>318</td><td>52</td><td>0</td><td>16</td><td class="sep hi c-green">386</td></tr><tr><td><span class="nm">Anatolii Kondratiev</span><span class="tm">Y</span><br><span class="role">Java developer</span></td><td>134</td><td>120</td><td>0</td><td>100</td><td class="sep hi c-green">354</td></tr><tr><td><span class="nm">Oleksandr Volkov</span><span class="tm">U</span><br><span class="role">Technical coordinator Team U</span></td><td>283</td><td>36</td><td>0</td><td>34</td><td class="sep hi c-green">353</td></tr><tr><td><span class="nm">Oleksandr Denysenko</span><span class="tm">S</span><br><span class="role">Java developer</span></td><td>0</td><td>3</td><td>0</td><td>248</td><td class="sep hi c-green">251</td></tr><tr><td><span class="nm">Serhii Shevchenko</span><span class="tm">I</span><br><span class="role">Java developer</span></td><td>200</td><td>17</td><td>0</td><td>21</td><td class="sep hi c-green">238</td></tr><tr><td><span class="nm">Roman Klishch</span><span class="tm">U</span><br><span class="role">Java developer</span></td><td>167</td><td>26</td><td>0</td><td>24</td><td class="sep hi c-green">217</td></tr><tr><td><span class="nm">Danyil Muntian</span><span class="tm">I</span><br><span class="role">Java developer</span></td><td>132</td><td>42</td><td>0</td><td>24</td><td class="sep hi c-green">198</td></tr><tr><td><span class="nm">Vladyslav Pelykh</span><span class="tm">U</span><br><span class="role">Java developer</span></td><td>108</td><td>24</td><td>0</td><td>40</td><td class="sep hi c-green">172</td></tr><tr><td><span class="nm">Oleh Svidunov</span><span class="tm">P</span><br><span class="role">Technical coordinator Team P</span></td><td>131</td><td>18</td><td>0</td><td>0</td><td class="sep hi c-green">149</td></tr><tr><td><span class="nm">Yuliia Kulish</span><span class="tm">S</span><br><span class="role">Java developer</span></td><td>5</td><td>25</td><td>0</td><td>80</td><td class="sep hi ">110</td></tr><tr><td><span class="nm">Vitalii Gusiev</span><span class="tm">K</span><br><span class="role">Technical coordinator Team K</span></td><td>14</td><td>26</td><td>0</td><td>38</td><td class="sep hi ">78</td></tr><tr><td><span class="nm">Dmytro Dumanskyi</span><span class="tm">I</span><br><span class="role">Technical coordinator Team I</span></td><td>41</td><td>19</td><td>0</td><td>8</td><td class="sep hi c-amber">68</td></tr><tr><td><span class="nm">Serhii Yurchenko</span><span class="tm">A</span><br><span class="role">Technical coordinator Team A</span></td><td>35</td><td>9</td><td>0</td><td>12</td><td class="sep hi c-amber">56</td></tr><tr><td><span class="nm">Vladislav Datsiuk</span><span class="tm">O</span><br><span class="role">Corezoid developer</span></td><td>46</td><td>7</td><td>0</td><td>3</td><td class="sep hi c-amber">56</td></tr><tr><td><span class="nm">Oleksandr Koziienko</span><span class="tm">K</span><br><span class="role">Golang developer</span></td><td>25</td><td>2</td><td>0</td><td>23</td><td class="sep hi c-amber">50</td></tr><tr><td><span class="nm">Bohdan Starushenko</span><span class="tm">T</span><br><span class="role">Technical coordinator Team T</span></td><td>21</td><td>2</td><td>0</td><td>0</td><td class="sep hi c-amber">23</td></tr><tr><td><span class="nm">Dmytro Kuzmenko</span><span class="tm">A</span><br><span class="role">Java developer</span></td><td>5</td><td>2</td><td>0</td><td>14</td><td class="sep hi c-amber">21</td></tr><tr><td><span class="nm">Vitalii Kletsko</span><span class="tm">T</span><br><span class="role">Java developer</span></td><td>13</td><td>1</td><td>0</td><td>0</td><td class="sep hi c-amber">14</td></tr><tr><td><span class="nm">Valeriy Pryimak</span><span class="tm">I</span><br><span class="role">Corezoid developer</span></td><td>1</td><td>0</td><td>0</td><td>0</td><td class="sep hi c-amber">1</td></tr><tr><td><span class="nm">Oleksandr Veremeev</span><span class="tm">K</span><br><span class="role">Golang developer</span></td><td>0</td><td>0</td><td>0</td><td>0</td><td class="sep hi c-amber">0</td></tr><tr class="med"><td>Медиана по платформе (22 чел.)</td><td></td><td></td><td></td><td></td><td class="sep">130</td></tr></tbody>
</table></div>

<footer class="note">
  <p><b>Как читать.</b> <b>feat</b> — новая функциональность, <b>fix</b> — багфиксы, <b>fix_help</b> — помощь с чужими багами, <b>tech</b> — техдолг/рефакторинг. «Всего SP» — сумма за полугодие. Цвет суммы — относительно медианы <i>своей</i> платформы: <span class="c-green">зелёный</span> ≥ +15% к медиане, <span class="c-amber">жёлтый</span> заметно ниже медианы.</p>
  <p style="margin-top:10px"><b>Важные оговорки:</b></p>
  <ul>
    <li><b>Это ИИ-оценка сложности, не измеренный факт.</b> В Roary нет официальных story points по Jira (есть только <code>days_estimate</code> во внутреннем модуле задач — это другое). Сверять не с чем.</li>
    <li><b>Платформы между собой несравнимы</b> — разные базовые масштабы SP.</li>
    <li><b>fix_help посчитан только для Android.</b> На iOS и Backend он везде 0 — категория считается неединообразно.</li>
    <li><b>Профили feat=0 / много tech</b> (Serhii Mykytiuk 0/340, Oleksandr Denysenko 0/248) — это либо реальная инфраструктурная работа, либо особенность разметки. Проверьте глазами.</li>
    <li><b>Это 5-месячный «общий котёл», не по спринтам.</b> Считаются только коммиты в три репозитория (aos / ios / backend).</li>
    <li><b>3 уже уволившихся</b> (Yevhen Hilko, Pavlo Vasylchenko, Serhii Kobzin, помечены «вне FF») всё ещё в цифрах — работали в начале периода.</li>
    <li><b>⚑ у имени</b> — команда в GitLab-конфиге не совпадает с Roary (Roary — HR-истина). Например, Ihor Velykodnyi: GitLab=O, Roary=U; Mikita Dzidzenka: GitLab не указан, Roary=Y.</li>
  </ul>
  <p style="margin-top:10px;color:#9aa0ad"><b>Источники.</b> Story points — артефакты GitLab dev-stats (<code>mobile-apps/reports</code>, джобы aos/ios/backend_dev_report), оценка ИИ, период 01.01–06.06.2026. Имена, должности, команды и статус — Roary <code>employee_cache</code> по рабочему e-mail. Сформировано 08.06.2026.</p>
</footer>

</div>
</body>
</html>
`,o=`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jira в 7 командах — единый стандарт</title>
<style>
  :root{
    --bg:#0f1226; --panel:#171a35; --ink:#0b0d1a; --paper:#ffffff;
    --muted:#6b7280; --line:#e5e7eb;
    --accent:#4f46e5; --accent2:#7c3aed;
    --bad:#dc2626; --bad-bg:#fef2f2; --good:#059669; --good-bg:#ecfdf5;
    --warn:#d97706; --warn-bg:#fffbeb;
  }
  *{box-sizing:border-box}
  html,body{margin:0;height:100%;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Arial,sans-serif;background:#05060f;color:var(--ink)}
  #deck{height:100vh;width:100vw;overflow:hidden;position:relative}
  .slide{
    position:absolute;inset:0;display:none;flex-direction:column;
    padding:64px 88px 80px;background:var(--paper);
    animation:fade .35s ease;
  }
  .slide.active{display:flex}
  @keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
  h1{font-size:54px;line-height:1.08;margin:0 0 18px;letter-spacing:-.5px}
  h2{font-size:38px;margin:0 0 6px;letter-spacing:-.4px}
  h2 .num{color:var(--accent);font-variant-numeric:tabular-nums}
  .kicker{font-size:15px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--accent);margin:0 0 14px}
  .sub{font-size:20px;color:var(--muted);margin:0 0 26px;max-width:1000px;line-height:1.45}
  p{font-size:20px;line-height:1.5}
  ul{font-size:21px;line-height:1.6;padding-left:26px;max-width:1100px}
  li{margin:9px 0}
  b{font-weight:700}
  .big{font-size:34px;line-height:1.35;max-width:1150px;font-weight:600}
  .accentbar{width:64px;height:6px;border-radius:6px;background:linear-gradient(90deg,var(--accent),var(--accent2));margin:0 0 28px}
  /* tables */
  table{border-collapse:collapse;width:100%;font-size:18px;margin-top:8px}
  th,td{padding:9px 12px;text-align:center;border-bottom:1px solid var(--line)}
  th:first-child,td:first-child{text-align:left;font-weight:600;white-space:nowrap}
  thead th{background:#f3f4f6;font-size:15px;text-transform:uppercase;letter-spacing:.5px;color:#374151;border-bottom:2px solid #d1d5db}
  tbody tr:hover{background:#fafafe}
  .bad{background:var(--bad-bg);color:var(--bad);font-weight:700;border-radius:6px}
  .good{background:var(--good-bg);color:var(--good);font-weight:700}
  .warn{background:var(--warn-bg);color:var(--warn);font-weight:700}
  .note{font-size:16px;color:var(--muted);margin-top:14px}
  /* cards */
  .grid{display:grid;gap:16px;margin-top:10px}
  .g2{grid-template-columns:1fr 1fr}.g3{grid-template-columns:repeat(3,1fr)}
  .card{background:#f7f7fb;border:1px solid var(--line);border-radius:14px;padding:20px 22px}
  .card h3{margin:0 0 8px;font-size:21px}
  .card.bad{background:var(--bad-bg);border-color:#fecaca;color:inherit}
  .card.good{background:var(--good-bg);border-color:#bbf7d0;color:inherit}
  .tag{display:inline-block;font-weight:800;font-size:13px;padding:3px 9px;border-radius:999px;background:#ede9fe;color:var(--accent2);letter-spacing:.5px}
  .flow{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:18px 0;font-size:17px}
  .step{background:#eef2ff;border:1px solid #c7d2fe;color:#3730a3;padding:8px 13px;border-radius:9px;font-weight:600}
  .arr{color:#a5b4fc;font-weight:800}
  .pill{display:inline-block;padding:4px 11px;border-radius:999px;font-weight:700;font-size:15px}
  /* title slide */
  .title-slide{background:radial-gradient(1200px 700px at 78% -10%,#312e81 0%,#1e1b4b 42%,#0f1226 100%);color:#fff}
  .title-slide h1{font-size:64px;max-width:1150px}
  .title-slide .sub{color:#c7d2fe;font-size:24px}
  .title-slide .kicker{color:#a5b4fc}
  .title-slide .accentbar{background:linear-gradient(90deg,#818cf8,#c4b5fd)}
  .meta{position:absolute;bottom:64px;left:88px;color:#a5b4fc;font-size:16px}
  .closing{background:radial-gradient(1200px 700px at 50% 120%,#312e81 0%,#1e1b4b 50%,#0f1226 100%);color:#fff;justify-content:center;align-items:flex-start}
  .closing h1{color:#fff}.closing .sub{color:#c7d2fe}
  /* footer / nav */
  .foot{position:absolute;left:0;right:0;bottom:0;height:8px;background:#eef0f4}
  .bar{height:100%;background:linear-gradient(90deg,var(--accent),var(--accent2));width:0;transition:width .3s}
  .pager{position:absolute;bottom:22px;right:40px;font-size:14px;color:var(--muted);font-variant-numeric:tabular-nums}
  .title-slide .pager,.closing .pager{color:#a5b4fc}
  .hint{position:absolute;bottom:22px;left:40px;font-size:13px;color:#cbd0da}
  .title-slide .hint,.closing .hint{color:#6d74a8}
  .lead{font-size:23px;font-weight:600;color:#111827;margin:2px 0 16px}
  .twocol{display:grid;grid-template-columns:1fr 1fr;gap:34px}
  .stat{font-size:60px;font-weight:800;color:var(--accent);line-height:1;font-variant-numeric:tabular-nums}
  .stat.bad{color:var(--bad)} .stat.good{color:var(--good)}
  .statlbl{font-size:18px;color:var(--muted);margin-top:6px}
  @media print{
    html,body{height:auto;background:#fff}
    #deck{height:auto;overflow:visible}
    .slide{display:flex!important;position:relative;inset:auto;height:100vh;page-break-after:always;animation:none;border-bottom:1px solid #eee}
    .hint{display:none}
  }
</style>
</head>
<body>
<div id="deck">

<!-- 1 TITLE -->
<section class="slide title-slide active">
  <div class="kicker">Fintech Farm · Анализ процессов разработки</div>
  <div class="accentbar"></div>
  <h1>Jira в 7 командах:<br>один процесс — семь практик</h1>
  <p class="sub">Где команды A · P · S · U · I · Y · O ведут задачи по-разному — и как привести их к единому логичному стандарту.</p>
  <div class="meta">На основе фактических данных Jira · последние 2 закрытых спринта · ~3 000 задач · июнь 2026</div>
</section>

<!-- 2 GOAL + METHOD -->
<section class="slide">
  <div class="kicker">Зачем это</div>
  <h2>Цель и как считали</h2>
  <div class="accentbar"></div>
  <div class="twocol">
    <div>
      <p class="lead">Цель</p>
      <p>Найти, где 7 команд ведут Jira по-разному, и свести к <b>одному логичному стандарту</b> — чтобы процесс был предсказуем, а метрики команд можно было сравнивать.</p>
      <p class="lead" style="margin-top:24px">Что анализировали</p>
      <ul style="font-size:19px">
        <li><b>7 команд:</b> A, P, S, U, I, Y, O</li>
        <li>Последние <b>2 закрытых спринта</b> (116–117; у S — недельные 165–166)</li>
        <li><b>~3 000 задач</b>, реальная история статусов, исполнителей, лейблов, типов</li>
      </ul>
    </div>
    <div class="card">
      <h3>Честность сравнения</h3>
      <p style="font-size:18px">Все цифры — в <b>долях/процентах</b>, а не в штуках: спринты разного размера (175–265 задач), иначе крупные команды «выглядели бы лучше» просто по объёму.</p>
      <p style="font-size:18px;margin-bottom:0">Источник — фактическая история переходов в Jira (board 94), а не самооценка команд.</p>
    </div>
  </div>
</section>

<!-- 3 MAIN TAKEAWAY -->
<section class="slide">
  <div class="kicker">Главный вывод</div>
  <h2>Процесс у вас <span style="color:var(--accent)">уже один</span>. Расходятся — практики.</h2>
  <div class="accentbar"></div>
  <p class="big">Все 7 команд идут по <b>одному и тому же workflow</b> в Jira. Проблема не в том, что у них разные процессы — а в том, что каждая команда проходит этот путь <b>разными кусками</b> и <b>называет этапы по-разному</b>.</p>
  <div class="grid g3" style="margin-top:34px">
    <div class="card bad"><h3>«Готово» ≠ «готово»</h3><p style="font-size:17px;margin:0">Минимум 4 разных значения слова «сделано» между командами.</p></div>
    <div class="card bad"><h3>Метрики несравнимы</h3><p style="font-size:17px;margin:0">Velocity и throughput команд сейчас нельзя поставить рядом.</p></div>
    <div class="card bad"><h3>Поля-пустышки</h3><p style="font-size:17px;margin:0">Приоритет и story points заполнены формально или не заполнены.</p></div>
  </div>
</section>

<!-- 4 MAP OF DIVERGENCE -->
<section class="slide">
  <div class="kicker">Карта расхождений</div>
  <h2>7 точек, где команды разошлись</h2>
  <div class="accentbar"></div>
  <table>
    <thead><tr><th>Измерение</th><th>В чём расхождение</th></tr></thead>
    <tbody>
      <tr><td>Ритм спринтов</td><td style="text-align:left">S — недельные спринты, остальные шесть — двухнедельные</td></tr>
      <tr><td>Декомпозиция</td><td style="text-align:left">A/P/Y дробят в подзадачи (65–74%), S работает плоско (2%)</td></tr>
      <tr><td>Планирование</td><td style="text-align:left">S заводит 96% задач до спринта, P — лишь 47% (реактивно)</td></tr>
      <tr><td>Типы багов</td><td style="text-align:left">Один баг = 3 разных типа: <b>Bugs</b> / <b>Bug</b> / <b>Prod bug</b></td></tr>
      <tr><td>Лейблы / платформа</td><td style="text-align:left">Платформа пишется в Components (I/O/P) <i>или</i> в Labels (A/U/Y)</td></tr>
      <tr><td>Статусы</td><td style="text-align:left">Разный вход и <b>5 разных «концов»</b> на один и тот же путь</td></tr>
      <tr><td>Оценка и приоритет</td><td style="text-align:left">SP ведёт по сути только U; 87% задач — дефолтный приоритет Medium</td></tr>
    </tbody>
  </table>
  <p class="note">Дальше — каждый пункт с цифрами.</p>
</section>

<!-- 5 CADENCE -->
<section class="slide">
  <div class="kicker">Расхождение 1 · Ритм</div>
  <h2>Разный такт спринтов</h2>
  <div class="accentbar"></div>
  <div class="twocol">
    <div>
      <div class="stat">6 / 1</div><div class="statlbl">команд на 2-недельных спринтах против 1 на недельных</div>
      <p style="margin-top:26px">A, I, O, P, U, Y работают <b>двухнедельными</b> спринтами. <b>S — недельными</b>.</p>
      <p>Из-за этого у S вообще другая нумерация (спринт 166 против 117 у остальных), и метрики «за спринт» с другими командами впрямую не сопоставимы.</p>
    </div>
    <div class="card warn">
      <h3>Вопрос к стандарту</h3>
      <p style="margin-bottom:0">Оставляем ли S на недельном такте как исключение — или приводим всех к единому ритму? Без этого нельзя сравнивать «скорость» команд.</p>
    </div>
  </div>
</section>

<!-- 6 CREATION -->
<section class="slide">
  <div class="kicker">Расхождение 2 · Как заводят задачи</div>
  <h2>Декомпозиция и планирование — у каждого своё</h2>
  <div class="accentbar"></div>
  <table>
    <thead><tr><th>Метрика</th><th>A</th><th>I</th><th>O</th><th>P</th><th>S</th><th>U</th><th>Y</th></tr></thead>
    <tbody>
      <tr><td>% подзадач (дробление)</td><td class="warn">74</td><td>40</td><td>43</td><td>66</td><td class="bad">2</td><td>49</td><td>65</td></tr>
      <tr><td>% Story как осн. тип</td><td>4</td><td>2</td><td class="bad">0</td><td>5</td><td class="good">26</td><td>3</td><td>5</td></tr>
      <tr><td>Создано <b>до</b> старта спринта</td><td>66</td><td>76</td><td>61</td><td class="bad">47</td><td class="good">96</td><td>65</td><td>71</td></tr>
    </tbody>
  </table>
  <div class="grid g3" style="margin-top:22px">
    <div class="card"><h3>Два стиля дробления</h3><p style="font-size:16px;margin:0">A/P/Y бьют всё на подзадачи (65–74%). <b>S почти не дробит (2%)</b> — работает плоскими Task и Story.</p></div>
    <div class="card bad"><h3>P планирует реактивно</h3><p style="font-size:16px;margin:0"><b>53% задач у P</b> появляются уже <i>внутри</i> спринта. У S наоборот — 96% заведено заранее.</p></div>
    <div class="card"><h3>Story — только у S</h3><p style="font-size:16px;margin:0">S ведёт пользовательские истории (26%). У O их нет вообще (0%).</p></div>
  </div>
</section>

<!-- 7 BUG TYPES -->
<section class="slide">
  <div class="kicker">Расхождение 3 · Типы задач</div>
  <h2>Один баг — три разных типа</h2>
  <div class="accentbar"></div>
  <p class="sub">В Jira одновременно живут три типа задачи для одной и той же сущности «баг»:</p>
  <div class="grid g3">
    <div class="card bad"><span class="tag" style="background:#fee2e2;color:#b91c1c">Bugs</span><h3 style="margin-top:10px">мн. число, нестандартный</h3><p style="font-size:17px;margin:0">Массово у <b>A</b> и <b>U</b></p></div>
    <div class="card"><span class="tag">Bug</span><h3 style="margin-top:10px">ед. число</h3><p style="font-size:17px;margin:0">У I, P, S, U</p></div>
    <div class="card warn"><span class="tag" style="background:#fef3c7;color:#b45309">Prod bug</span><h3 style="margin-top:10px">отдельный тип</h3><p style="font-size:17px;margin:0">Чаще у <b>Y</b></p></div>
  </div>
  <p style="margin-top:26px;font-size:22px">→ Нельзя посчитать «сколько багов у команды» одним запросом. Это <b>первый и самый простой кандидат на унификацию</b>: оставить один тип <b>Bug</b>.</p>
</section>

<!-- 8 LABELS -->
<section class="slide">
  <div class="kicker">Расхождение 4 · Лейблы и компоненты</div>
  <h2>Один и тот же атрибут — в разных полях</h2>
  <div class="accentbar"></div>
  <ul>
    <li><b>Платформа в двух местах.</b> I, O, P кладут платформу (backend / ios / aos / corezoid) в поле <b>Components</b> (17–19%). A, U, Y — в <b>Labels</b>. → сводную аналитику по платформам собрать невозможно.</li>
    <li><b>AI-работа.</b> Семейство <b>ai-shift</b> — фактически стандарт у I, O, P, U. У <b>S — ноль</b>, у Y — слабо. QA-лейблы (claude-qa) массово у U.</li>
    <li><b>S живёт в своей вселенной.</b> Её топ-лейблы — это <b>номера спринтов</b> (165, 159, 163…) и <b>готовность</b> (taskready / tasknotready). Платформенных лейблов у S нет вообще.</li>
  </ul>
  <div class="card warn" style="margin-top:18px"><p style="margin:0">Один и тот же лейбл у разных команд означает разное. Нужен общий обязательный минимум + единое поле для платформы.</p></div>
</section>

<!-- 9 STATUSES OVERVIEW -->
<section class="slide">
  <div class="kicker">Расхождение 5 · Статусы</div>
  <h2><span class="num">34</span> статуса на один и тот же путь</h2>
  <div class="accentbar"></div>
  <p class="sub">За 2 спринта команды использовали 34 разных статуса. Но под ними — <b>один общий happy-path</b>, который каждая команда проходит лишь частично:</p>
  <div class="flow">
    <span class="step">New / Backlog</span><span class="arr">→</span>
    <span class="step">Requirements &amp; Design</span><span class="arr">→</span>
    <span class="step">Ready for Dev</span><span class="arr">→</span>
    <span class="step">In Progress</span><span class="arr">→</span>
    <span class="step">Additional review</span><span class="arr">→</span>
    <span class="step">In Testing</span><span class="arr">→</span>
    <span class="step">Verified on DEV</span><span class="arr">→</span>
    <span class="step">Ready for Prod</span><span class="arr">→</span>
    <span class="step">Released on Prod</span>
  </div>
  <p style="font-size:22px">Расхождение — в том, <b>где команда входит</b> (New у A/P/Y vs Requirements/Ready-for-Dev у S/I/O), <b>насколько глубоко идёт</b> (S — полный SDLC, A/Y — облегчённо) и <b>чем заканчивает</b> (см. следующий слайд).</p>
</section>

<!-- 10 DONE PROBLEM (killer) -->
<section class="slide">
  <div class="kicker">Расхождение 5 · Ключевая проблема</div>
  <h2>«Готово» означает <span style="color:var(--bad)">минимум 4 разных</span> вещи</h2>
  <div class="accentbar"></div>
  <div class="twocol">
    <div>
      <p>Терминальных статусов — <b>пять</b>, и они сосуществуют <b>даже внутри одной команды</b>:</p>
      <table style="font-size:17px">
        <thead><tr><th>«Конечный» статус</th><th>Задач</th></tr></thead>
        <tbody>
          <tr><td>Done</td><td>1369</td></tr>
          <tr><td>Completed</td><td>739</td></tr>
          <tr><td class="warn">Ready for Prod <span style="font-weight:400">(не выкачено!)</span></td><td>264</td></tr>
          <tr><td>Released on Prod</td><td>136</td></tr>
          <tr><td>Closed</td><td>78</td></tr>
        </tbody>
      </table>
    </div>
    <div>
      <div class="card bad"><h3>Пример: команда U</h3><p style="margin:0">237 задач в <b>Done</b> + 144 в <b>Completed</b> — два «готово» в одной команде одновременно.</p></div>
      <div class="card warn" style="margin-top:14px"><h3>I / O / U</h3><p style="margin:0">60–80 задач заканчивают спринт в <b>Ready for Prod</b> — сделано, но <b>не в проде</b>. Это «готово» или нет?</p></div>
      <p style="font-size:21px;margin-top:18px"><b>→ Сравнить «сколько сделано» между командами сейчас математически невозможно.</b></p>
    </div>
  </div>
</section>

<!-- 11 STORY POINTS -->
<section class="slide">
  <div class="kicker">Расхождение 6 · Оценка</div>
  <h2>Story points ведёт по сути <span style="color:var(--accent)">одна команда</span></h2>
  <div class="accentbar"></div>
  <table>
    <thead><tr><th>Метрика</th><th>A</th><th>I</th><th>O</th><th>P</th><th>S</th><th>U</th><th>Y</th></tr></thead>
    <tbody>
      <tr><td>% задач с оценкой (не-сабтаски)</td><td class="bad">7</td><td>12</td><td class="bad">4</td><td class="bad">1</td><td>9</td><td class="good">61</td><td>22</td></tr>
    </tbody>
  </table>
  <div class="grid g3" style="margin-top:24px">
    <div class="card good"><h3>Только U оценивает</h3><p style="font-size:17px;margin:0">61% задач, честный Fibonacci (1, 2, 3, 5, 8). Только по U можно считать velocity.</p></div>
    <div class="card bad"><h3>P не оценивает вовсе</h3><p style="font-size:17px;margin:0">1 задача из 100. У большинства покрытие &lt;25%.</p></div>
    <div class="card warn"><h3>Разные шкалы</h3><p style="font-size:17px;margin:0">U — story points; S — дробные дни/часы (1.5, 3.5, 5.5). Несравнимо даже между ними.</p></div>
  </div>
  <p style="margin-top:22px;font-size:22px">→ <b>Прогноз и сравнение скорости команд невозможны.</b> Либо вводим единую шкалу для всех, либо честно убираем SP.</p>
</section>

<!-- 12 PRIORITY -->
<section class="slide">
  <div class="kicker">Расхождение 6 · Приоритет</div>
  <h2>Приоритет заполнен на 100% — и при этом <span style="color:var(--bad)">пустой</span></h2>
  <div class="accentbar"></div>
  <div class="twocol">
    <div>
      <div class="stat bad">87%</div><div class="statlbl">всех задач — дефолтный <b>Medium</b> (Jira ставит его сам, его не трогают)</div>
      <p style="margin-top:24px">High использован <b>20 раз на 3 000 задач</b>. Когда всё-таки эскалируют — прыгают сразу в <b>Highest / Blocker</b>, минуя промежуточные уровни. Low/Lowest почти не используются.</p>
    </div>
    <div class="card bad">
      <h3>Что это значит</h3>
      <p>Реальной приоритизации в Jira нет ни у одной команды — поле проставлено формально.</p>
      <p style="margin-bottom:0">→ Либо задаём <b>чёткие критерии</b> для каждого уровня и обязываем ставить осознанно, либо <b>убираем приоритет</b> и приоритизируем порядком в беклоге (как по факту и происходит).</p>
    </div>
  </div>
</section>

<!-- 13 ASSIGNEES -->
<section class="slide">
  <div class="kicker">Расхождение 7 · Исполнители</div>
  <h2>Дисциплина назначения тоже разная</h2>
  <div class="accentbar"></div>
  <table>
    <thead><tr><th>Метрика</th><th>A</th><th>I</th><th>O</th><th>P</th><th>S</th><th>U</th><th>Y</th></tr></thead>
    <tbody>
      <tr><td>% задач <b>без исполнителя</b></td><td class="bad">13</td><td class="bad">13</td><td>4</td><td>1</td><td>1</td><td>2</td><td class="bad">11</td></tr>
      <tr><td>Смен исполнителя на задачу</td><td>~1</td><td>~1</td><td>~2</td><td>~1</td><td class="warn">~4</td><td>~1</td><td>~1</td></tr>
    </tbody>
  </table>
  <div class="grid g2" style="margin-top:24px">
    <div class="card bad"><h3>A · I · Y</h3><p style="margin:0">11–13% задач (в т.ч. в работе) висят <b>без исполнителя</b> — против 1–2% у P/S/U.</p></div>
    <div class="card"><h3>S</h3><p style="margin:0">Задача проходит через <b>~4 рук</b> (аналитик → разработчик → QA → релиз). Логично для полного SDLC, но это другой операционный паттерн.</p></div>
  </div>
</section>

<!-- 14 TEAM PORTRAITS -->
<section class="slide">
  <div class="kicker">Резюме по командам</div>
  <h2>Каждая команда — одной строкой</h2>
  <div class="accentbar"></div>
  <table style="font-size:17px">
    <tbody>
      <tr><td>A</td><td style="text-align:left">Лёгкий процесс, всё в подзадачах, баги как «Bugs», платформа в лейблах, 13% без исполнителя</td></tr>
      <tr><td>I</td><td style="text-align:left">Много Task, лейблы + Components, активный ai-shift, средний SDLC</td></tr>
      <tr><td>O</td><td style="text-align:left">Самая дисциплинированная по лейблам (96%), без Story, закрывает в Released on Prod</td></tr>
      <tr><td>P</td><td style="text-align:left">Реактивная (53% задач заводятся по ходу), глубокое дробление, почти не оценивает</td></tr>
      <tr><td>S</td><td style="text-align:left"><b>Аутлайер по всем осям:</b> недельные спринты, Story без подзадач, полный SDLC, свои лейблы, 25% reopen</td></tr>
      <tr><td>U</td><td style="text-align:left">Самый большой объём, единственная реально оценивает (Fibonacci), claude-qa, баги как «Bugs»</td></tr>
      <tr><td>Y</td><td style="text-align:left">Лёгкий процесс как у A, баги как «Prod bug», свой лейбл teamy, 11% без исполнителя</td></tr>
    </tbody>
  </table>
</section>

<!-- 15 PROPOSAL: STATUSES -->
<section class="slide">
  <div class="kicker">Предложение · Ядро стандарта</div>
  <h2><span class="num">34</span> статуса → <span class="num" style="color:var(--good)">11</span></h2>
  <div class="accentbar"></div>
  <p class="sub">Один workflow для всех. Лёгкие этапы можно <i>пропускать</i>, но называть их обязаны одинаково.</p>
  <table style="font-size:16px">
    <thead><tr><th>Канонический статус</th><th>Сюда схлопываем</th></tr></thead>
    <tbody>
      <tr><td>1. To Do</td><td style="text-align:left">New, Backlog, Task Preparation</td></tr>
      <tr><td>2. Analysis &amp; Design</td><td style="text-align:left">Requirements &amp; Design, Requirements analysis, Grooming &amp; Decomposition</td></tr>
      <tr><td>3. Ready for Dev</td><td style="text-align:left">Ready for Development</td></tr>
      <tr><td>4. In Progress</td><td style="text-align:left">In Progress, In Progress (with AI), Refactoring (with AI)</td></tr>
      <tr><td>5. In Review</td><td style="text-align:left">Additional review, Self-testing (with AI)</td></tr>
      <tr><td>6. In Testing</td><td style="text-align:left">Ready for Testing, In Testing, Verified on DEV</td></tr>
      <tr><td>7. Ready for Release</td><td style="text-align:left">Ready for Prod, Deployed on Stage, Verified on Stage</td></tr>
      <tr><td class="good">8. Done <span style="font-weight:400">(= в проде, единое определение)</span></td><td style="text-align:left">Released on Prod, Completed, Done, Closed, Accepted by business</td></tr>
      <tr><td>Флаги</td><td style="text-align:left">Blocked (← Paused), Reopened, Rejected</td></tr>
    </tbody>
  </table>
  <p class="note">Статусы поддержки (L3 Investigation, 3Ln Analysis…) — выносим в отдельный support-workflow, не мешаем в продуктовый. AI-этапы → <b>лейбл</b>, а не статус (статус = стадия, лейбл = как делали).</p>
</section>

<!-- 16 PROPOSAL: OTHER RULES -->
<section class="slide">
  <div class="kicker">Предложение · Остальные правила</div>
  <h2>Помимо статусов</h2>
  <div class="accentbar"></div>
  <div class="grid g2">
    <div class="card"><h3>Типы задач</h3><p style="font-size:17px;margin:0">Один набор: Story / Task / Bug / Sub-task. Убить дубли <b>Bugs</b> и <b>Prod bug</b> (→ лейбл prod).</p></div>
    <div class="card"><h3>Платформа</h3><p style="font-size:17px;margin:0">В <b>одном</b> поле для всех (рекомендую Components), не вперемешку с Labels.</p></div>
    <div class="card"><h3>Лейблы</h3><p style="font-size:17px;margin:0">Общий обязательный минимум (ai-shift, платформа). Запрет «мусора» вроде номеров спринта — он уже есть в поле Sprint.</p></div>
    <div class="card"><h3>Декомпозиция</h3><p style="font-size:17px;margin:0">Единое правило: что бьём на подзадачи, а что нет (сейчас от 2% до 74%).</p></div>
    <div class="card"><h3>Story points</h3><p style="font-size:17px;margin:0">Единая шкала (Fibonacci) на Story/Task как гейт перед спринтом — <b>или</b> убрать SP совсем.</p></div>
    <div class="card"><h3>Назначение</h3><p style="font-size:17px;margin:0">Задача «в работе» не висит без исполнителя (закрыть разрыв 11–13% у A/I/Y).</p></div>
  </div>
</section>

<!-- 17 DECISIONS -->
<section class="slide">
  <div class="kicker">Что нужно решить</div>
  <h2>5 развилок — от них зависит смысл всех метрик</h2>
  <div class="accentbar"></div>
  <ul style="font-size:20px">
    <li><b>1. Что считаем «Done»?</b> Строго «в проде» (как S/O) — или «разработка+QA готовы», а релиз отдельным флагом (как A/Y)? <i>Рекомендация: «в проде» — сделано = приносит ценность.</i></li>
    <li><b>2. Обязательный костяк статусов?</b> Минимум для всех: To Do → In Progress → In Review → In Testing → Done. Аналитика, Ready-for-Dev, Ready-for-Release — опционально, но под едиными именами.</li>
    <li><b>3. Правило sprint-scope.</b> Планировать объём заранее (как S, 96%) или допускать «вливание» по ходу (как P, 53%)?</li>
    <li><b>4. Story points — единая шкала или убрать?</b> Fibonacci для всех как гейт — либо отказ от SP.</li>
    <li><b>5. Приоритет — осмыслить или убрать?</b> Чёткие критерии Blocker/Highest/…/Low — либо приоритизация порядком беклога.</li>
  </ul>
</section>

<!-- 18 ROLLOUT -->
<section class="slide">
  <div class="kicker">Как внедрять</div>
  <h2>Поэтапно, без боли</h2>
  <div class="accentbar"></div>
  <div class="grid g2">
    <div class="card good"><h3>Шаг 1 — быстрые победы</h3><p style="font-size:17px;margin:0">Схлопнуть очевидные синонимы: <b>5 терминалов → 1 «Done»</b>, 3 входа → «To Do», 3 типа багов → «Bug». 80% пользы при минимуме споров.</p></div>
    <div class="card"><h3>Шаг 2 — почистить</h3><p style="font-size:17px;margin:0">Убрать <b>(with AI)</b>-статусы (→ лейбл), вынести L3/support в отдельный workflow, свести платформу в одно поле.</p></div>
    <div class="card"><h3>Шаг 3 — договорённости</h3><p style="font-size:17px;margin:0">Принять 5 решений (Done, костяк, scope, SP, приоритет) и зафиксировать как правило для всех команд.</p></div>
    <div class="card good"><h3>Результат</h3><p style="font-size:17px;margin:0">Метрики (sprint-timeline и др.) становятся <b>сравнимыми между командами</b>. Виден реальный velocity и throughput.</p></div>
  </div>
  <p class="note">Технически статусы не удаляются, а маппятся на оставшиеся и прячутся из схемы — делается админом Jira на уровне workflow scheme.</p>
</section>

<!-- 19 CLOSING -->
<section class="slide closing">
  <div class="kicker">Итог</div>
  <div class="accentbar"></div>
  <h1 style="font-size:46px;max-width:1100px">Стандартизация — это не новый процесс,<br>а схлопывание синонимов и одно определение «готово».</h1>
  <p class="sub" style="max-width:1000px">У вас уже один workflow. Нужно лишь убрать дубли, договориться о 5 вещах — и команды станут сравнимыми.</p>
  <p style="color:#a5b4fc;font-size:18px">Следующий шаг по желанию: расчёт «до/после» — сколько задач каждой команды попадёт в каждый из 11 канон-статусов, чтобы оценить масштаб миграции.</p>
</section>

</div>

<div class="foot"><div class="bar" id="bar"></div></div>
<div class="pager" id="pager">1 / 19</div>
<div class="hint">← → или пробел — листать · F — на весь экран · P / Ctrl+P — печать в PDF</div>

<script>
  const slides=[...document.querySelectorAll('.slide')];
  let i=0;
  function show(n){
    i=Math.max(0,Math.min(slides.length-1,n));
    slides.forEach((s,k)=>s.classList.toggle('active',k===i));
    document.getElementById('bar').style.width=((i+1)/slides.length*100)+'%';
    document.getElementById('pager').textContent=(i+1)+' / '+slides.length;
    document.querySelector('.pager').className='pager';
  }
  function next(){show(i+1)} function prev(){show(i-1)}
  document.addEventListener('keydown',e=>{
    if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();next()}
    else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();prev()}
    else if(e.key==='Home')show(0)
    else if(e.key==='End')show(slides.length-1)
    else if(e.key==='f'||e.key==='F'){if(!document.fullscreenElement)document.documentElement.requestFullscreen();else document.exitFullscreen()}
  });
  document.getElementById('deck').addEventListener('click',e=>{
    if(e.clientX < window.innerWidth*0.28) prev(); else next();
  });
  show(0);
<\/script>
</body>
</html>
`,c=`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Team Y — загрузка: Jira + календарь</title>
<style>
  :root{
    --ink:#0f1226;--muted:#6b7280;--line:#e6e8ef;--paper:#fff;--bg:#f4f5f9;
    --accent:#4f46e5;--accent2:#7c3aed;
    --red:#dc2626;--redbg:#fef2f2;--green:#059669;--greenbg:#ecfdf5;
    --amber:#d97706;--amberbg:#fffbeb;--yellow:#ca8a04;--yellowbg:#fefce8;
  }
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Arial,sans-serif;line-height:1.5}
  .wrap{max-width:1180px;margin:0 auto;padding:40px 28px 80px}
  header.top{border-left:6px solid var(--accent);padding:6px 0 6px 22px;margin-bottom:8px}
  h1{font-size:34px;margin:0 0 6px;letter-spacing:-.4px}
  .sub{color:var(--muted);font-size:17px;margin:0}
  .meta{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0 26px}
  .chip{background:#fff;border:1px solid var(--line);border-radius:999px;padding:6px 14px;font-size:13px;color:#374151}
  .chip b{color:var(--ink)}
  h2{font-size:22px;margin:34px 0 4px;display:flex;align-items:center;gap:10px}
  h2 .cnt{font-size:14px;color:var(--muted);font-weight:500}
  .disc-note{color:var(--muted);font-size:14px;margin:0 0 12px}
  .card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:18px 20px;margin-bottom:14px;
    box-shadow:0 1px 2px rgba(16,18,38,.04)}
  table{border-collapse:collapse;width:100%;font-size:14px}
  th,td{padding:9px 10px;text-align:center;border-bottom:1px solid var(--line);white-space:nowrap}
  th:first-child,td:first-child{text-align:left}
  thead th{font-size:11px;text-transform:uppercase;letter-spacing:.4px;color:#6b7280;border-bottom:2px solid #e0e2ea;font-weight:700}
  .grp{font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:#9aa0ad;font-weight:700}
  tbody tr.med td{background:#fafbff;color:#8b90a0;font-style:italic;font-size:12.5px}
  .nm{font-weight:700}.role{color:var(--muted);font-size:12px;font-weight:400}
  .hi{font-weight:700}
  .c-red{color:var(--red);font-weight:700}.c-green{color:var(--green);font-weight:700}
  .c-amber{color:var(--amber);font-weight:700}
  td.sep{border-left:1px solid var(--line)}
  .v{display:inline-block;padding:3px 9px;border-radius:8px;font-weight:700;font-size:12px}
  .v.red{background:var(--redbg);color:var(--red)}
  .v.amber{background:var(--amberbg);color:var(--amber)}
  .v.yellow{background:var(--yellowbg);color:var(--yellow)}
  .v.green{background:var(--greenbg);color:var(--green)}
  .summary{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin:8px 0 10px}
  .scard{border-radius:14px;padding:16px 18px;border:1px solid}
  .scard.red{background:var(--redbg);border-color:#fecaca}
  .scard.amber{background:var(--amberbg);border-color:#fde68a}
  .scard.yellow{background:var(--yellowbg);border-color:#fde68a}
  .scard h3{margin:0 0 6px;font-size:16px}
  .scard p{margin:0;font-size:13.5px;color:#3f3f46}
  .lead-note{font-size:13.5px;color:#475569;margin:6px 0 0}
  footer.note{margin-top:30px;padding:18px 20px;background:#fff;border:1px solid var(--line);border-radius:14px;font-size:13px;color:#52525b}
  footer.note b{color:var(--ink)}
  .legend{display:flex;gap:16px;flex-wrap:wrap;font-size:12.5px;color:#52525b;margin-top:10px}
  .legend span{display:inline-flex;align-items:center;gap:5px}
  .dot{width:10px;height:10px;border-radius:3px;display:inline-block}
  @media print{body{background:#fff}.wrap{max-width:none}.card,footer.note{box-shadow:none}}
  @media(max-width:760px){.summary{grid-template-columns:1fr}th,td{padding:7px 6px;font-size:12.5px}}
</style>
</head>
<body>
<div class="wrap">

<header class="top">
  <h1>Team Y — загрузка сотрудников</h1>
  <p class="sub">Сводный отчёт: данные Jira (выработка по задачам) + Календарь (участие в звонках и время речи)</p>
</header>

<div class="meta">
  <span class="chip">📅 Окно: <b>≈ 4 недели</b> (Jira: спринты 116–117, 04.05–01.06 · Календарь: последние 28 дней)</span>
  <span class="chip">👥 Скиллы: <b>iOS · AOS · Corezoid · Java · QA</b></span>
  <span class="chip">⚖️ Сравнение с <b>тем же скиллом во всех 7 командах</b></span>
  <span class="chip">🔗 Идентичность — по каноническому маппингу <b>/jira-mappings</b></span>
</div>

<!-- SUMMARY -->
<h2>Кратко: на кого посмотреть</h2>
<div class="summary">
  <div class="scard red">
    <h3>🔴 Yevhen Hilko — iOS</h3>
    <p>Низко <b>и в Jira, и в календаре</b>. Движение задач в 55% дней (вёл 8, закрыл 6 против 19–65 у коллег-iOS). Звонки: пришёл на <b>13 из 58</b> приглашений (22% против медианы 44%), речи 0.4ч. Не отсутствовал по болезни/отпуску. Главный кандидат на разговор.</p>
  </div>
  <div class="scard amber">
    <h3>⚠️ Mikita Dzidzenka — iOS Lead</h3>
    <p>Минимум по Jira (15% дней, 2 задачи), <b>но топ по встречам</b>: 4.9ч речи, ср. реплика 10 мин — больше всех. Время уходит в координацию/коммуникацию, а не в тикеты. Это лидский паттерн — не безделье, но стоит сверить, тот ли это баланс.</p>
  </div>
  <div class="scard yellow">
    <h3>🟡 Nataliia Skyba — QA</h3>
    <p>Самая лёгкая из трёх QA команды по Jira (вела 26, закрыла 20 против 62–84 у коллег), календарь — в норме. Слабый сигнал «приглядеться», не тревога.</p>
  </div>
</div>
<p class="lead-note">Остальные — Taras (AOS), Kobzin (iOS), Medviediev и Kondratiev (Java), Kolesnichenko и Miachin (QA) — загружены нормально или сильно. Подробности ниже.</p>

<!-- iOS -->
<h2>📱 iOS <span class="cnt">3 чел. · медиана пира: движение 75% · звонков 28 · речь 0.8ч · участие 44%</span></h2>
<div class="card">
<table>
  <thead><tr>
    <th>Сотрудник</th>
    <th colspan="3" class="grp">Jira</th>
    <th colspan="4" class="grp">Календарь</th>
    <th>Вердикт</th>
  </tr><tr>
    <th></th>
    <th>% дней с движением</th><th>вёл</th><th>закрыл</th>
    <th class="sep">звонков / приглаш.</th><th>участие</th><th>часы речи</th><th>ср. реплика</th>
    <th></th>
  </tr></thead>
  <tbody>
    <tr><td><span class="nm">Serhii Kobzin</span><br><span class="role">iOS Developer</span></td>
      <td class="c-green">85%</td><td>42</td><td>39</td>
      <td class="sep">27 / 36</td><td class="c-green">75%</td><td>0.8ч</td><td>115с</td>
      <td><span class="v green">Загружен</span></td></tr>
    <tr><td><span class="nm">Yevhen Hilko</span><br><span class="role">iOS Developer</span></td>
      <td class="c-red">55%</td><td class="c-red">8</td><td class="c-red">6</td>
      <td class="sep c-red">13 / 58</td><td class="c-red">22%</td><td class="c-red">0.4ч</td><td>109с</td>
      <td><span class="v red">Низко везде</span></td></tr>
    <tr><td><span class="nm">Mikita Dzidzenka</span><br><span class="role">iOS Lead</span></td>
      <td class="c-red">15%</td><td>2</td><td>2</td>
      <td class="sep">31 / 61</td><td>51%</td><td class="c-green">4.9ч</td><td class="hi">609с</td>
      <td><span class="v amber">Лид: митинги</span></td></tr>
    <tr class="med"><td>медиана iOS (7 команд)</td><td>75%</td><td>~24</td><td>~21</td><td class="sep">28</td><td>44%</td><td>0.8ч</td><td>—</td><td></td></tr>
  </tbody>
</table>
</div>

<!-- AOS -->
<h2>🤖 AOS / Android <span class="cnt">1 чел. · медиана пира: движение 80% · звонков 28 · речь 0.8ч · участие 34%</span></h2>
<p class="disc-note">В Team Y нет сотрудника с должностью «Android developer» — Android закрывает Head of Mobile. <b>Важно:</b> его данные исправлены после находки расщеплённого аккаунта (Jira-почта <code>@corezoid.com</code> → канонически он же); ранее его выработка ошибочно показывалась нулём.</p>
<div class="card">
<table>
  <thead><tr>
    <th>Сотрудник</th><th colspan="3" class="grp">Jira</th><th colspan="4" class="grp">Календарь</th><th>Вердикт</th>
  </tr><tr>
    <th></th><th>% дней</th><th>вёл</th><th>закрыл</th>
    <th class="sep">звонков / приглаш.</th><th>участие</th><th>часы речи</th><th>ср. реплика</th><th></th>
  </tr></thead>
  <tbody>
    <tr><td><span class="nm">Taras Oryshhij</span><br><span class="role">Head of Mobile / Tech Coordinator</span></td>
      <td class="c-green">90%</td><td class="hi">51</td><td class="hi c-green">51</td>
      <td class="sep">67 / 189</td><td>34%</td><td class="c-green">6.0ч</td><td>418с</td>
      <td><span class="v green">Топ-перформер</span></td></tr>
    <tr class="med"><td>медиана AOS (7 команд)</td><td>80%</td><td>~13</td><td>~12</td><td class="sep">28</td><td>34%</td><td>0.8ч</td><td>—</td><td></td></tr>
  </tbody>
</table>
</div>

<!-- Corezoid -->
<h2>⚙️ Corezoid <span class="cnt">0 чел. в Team Y</span></h2>
<p class="disc-note">В Team Y нет Corezoid-разработчиков (есть в командах A, I, O, P, S, U). Оценивать некого.</p>

<!-- Java -->
<h2>☕ Java <span class="cnt">2 чел. · медиана пира: движение 75% · звонков 25 · речь 0.6ч · участие 35%</span></h2>
<div class="card">
<table>
  <thead><tr>
    <th>Сотрудник</th><th colspan="3" class="grp">Jira</th><th colspan="4" class="grp">Календарь</th><th>Вердикт</th>
  </tr><tr>
    <th></th><th>% дней</th><th>вёл</th><th>закрыл</th>
    <th class="sep">звонков / приглаш.</th><th>участие</th><th>часы речи</th><th>ср. реплика</th><th></th>
  </tr></thead>
  <tbody>
    <tr><td><span class="nm">Yakiv Medviediev</span><br><span class="role">Java developer</span></td>
      <td class="c-green">90%</td><td>19</td><td>14</td>
      <td class="sep">25 / 77</td><td>33%</td><td>1.1ч</td><td>170с</td>
      <td><span class="v green">Загружен (топ)</span></td></tr>
    <tr><td><span class="nm">Anatolii Kondratiev</span><br><span class="role">Java developer</span></td>
      <td>75%</td><td>23</td><td>13</td>
      <td class="sep">32 / 72</td><td>43%</td><td class="c-green">1.9ч</td><td>253с</td>
      <td><span class="v green">Загружен</span></td></tr>
    <tr class="med"><td>медиана Java (7 команд)</td><td>75%</td><td>~21</td><td>~13</td><td class="sep">25</td><td>35%</td><td>0.6ч</td><td>—</td><td></td></tr>
  </tbody>
</table>
</div>

<!-- QA -->
<h2>🧪 QA <span class="cnt">3 чел. · медиана пира: движение 90% · звонков 31 · речь 0.5ч · участие 46%</span></h2>
<div class="card">
<table>
  <thead><tr>
    <th>Сотрудник</th><th colspan="3" class="grp">Jira</th><th colspan="4" class="grp">Календарь</th><th>Вердикт</th>
  </tr><tr>
    <th></th><th>% дней</th><th>вёл</th><th>закрыл</th>
    <th class="sep">звонков / приглаш.</th><th>участие</th><th>часы речи</th><th>ср. реплика</th><th></th>
  </tr></thead>
  <tbody>
    <tr><td><span class="nm">Andrii Kolesnichenko</span><br><span class="role">Manual QA</span></td>
      <td class="c-green">95%</td><td class="hi">84</td><td class="hi">83</td>
      <td class="sep">33 / 62</td><td>53%</td><td>0.2ч</td><td>22с</td>
      <td><span class="v green">Сильный</span></td></tr>
    <tr><td><span class="nm">Ievgenii Miachin</span><br><span class="role">Manual QA</span></td>
      <td>85%</td><td>62</td><td>49</td>
      <td class="sep">35 / 63</td><td class="c-green">56%</td><td>0.7ч</td><td>76с</td>
      <td><span class="v green">Загружен</span></td></tr>
    <tr><td><span class="nm">Nataliia Skyba</span><br><span class="role">Manual QA</span></td>
      <td>80%</td><td class="c-amber">26</td><td class="c-amber">20</td>
      <td class="sep">30 / 68</td><td>44%</td><td>0.6ч</td><td>84с</td>
      <td><span class="v yellow">Легче коллег</span></td></tr>
    <tr class="med"><td>медиана QA (7 команд)</td><td>90%</td><td>~66</td><td>~66</td><td class="sep">31</td><td>46%</td><td>0.5ч</td><td>—</td><td></td></tr>
  </tbody>
</table>
</div>

<footer class="note">
  <p><b>Как читать.</b> Ведущий сигнал нагрузки по Jira — <b>«% рабочих дней с движением задач»</b> (не зависит от того, как команда дробит задачи, и от роли). «Вёл/закрыл» — вспомогательно. Календарь — из профиля сотрудника (участие в звонках и время речи за 28 дней). Цвет: <span class="legend" style="display:inline-flex"><span><span class="dot" style="background:var(--green)"></span>выше/в норме</span> <span><span class="dot" style="background:var(--amber)"></span>заметно ниже</span> <span><span class="dot" style="background:var(--red)"></span>низко</span></span></p>
  <p style="margin-top:10px"><b>Оговорки.</b> Это «низкая активность в Jira/календаре», а не «человек бездельничает» — система не видит код-ревью, менторство, инциденты, парную работу. Для <b>лидов</b> (Dzidzenka, Oryshhij) низкая/смещённая в митинги картина ожидаема — это их роль. «Участие» (join rate) низкое у всех в абсолюте, потому что людей зовут на гораздо больше встреч, чем они посещают, — поэтому сравниваем с медианой по скиллу, а не с 100%. Низкое участие <b>и</b> низкий Jira вместе (Hilko) — самый надёжный сигнал.</p>
  <p style="margin-top:10px;color:#9aa0ad">Источники: Jira board 94 (история статусов 2 спринтов), participation_stats_cache (профиль, 28 дней). Идентичность сведена через jira_employee_mappings (канонический сотрудник). Сформировано 06.06.2026.</p>
</footer>

</div>
</body>
</html>
`,b=`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Скилл iOS — загрузка по 7 командам: Jira + календарь</title>
<style>
  :root{
    --ink:#0f1226;--muted:#6b7280;--line:#e6e8ef;--paper:#fff;--bg:#f4f5f9;
    --accent:#4f46e5;--accent2:#7c3aed;
    --red:#dc2626;--redbg:#fef2f2;--green:#059669;--greenbg:#ecfdf5;
    --amber:#d97706;--amberbg:#fffbeb;--yellow:#ca8a04;--yellowbg:#fefce8;
  }
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Arial,sans-serif;line-height:1.5}
  .wrap{max-width:1240px;margin:0 auto;padding:40px 28px 80px}
  header.top{border-left:6px solid var(--accent);padding:6px 0 6px 22px;margin-bottom:8px}
  h1{font-size:33px;margin:0 0 6px;letter-spacing:-.4px}
  .sub{color:var(--muted);font-size:17px;margin:0}
  .meta{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0 26px}
  .chip{background:#fff;border:1px solid var(--line);border-radius:999px;padding:6px 14px;font-size:13px;color:#374151}
  .chip b{color:var(--ink)}
  h2{font-size:22px;margin:30px 0 10px}
  .card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:14px 16px;margin-bottom:14px;
    box-shadow:0 1px 2px rgba(16,18,38,.04);overflow-x:auto}
  table{border-collapse:collapse;width:100%;font-size:13.5px}
  th,td{padding:9px 8px;text-align:center;border-bottom:1px solid var(--line);white-space:nowrap}
  th:first-child,td:first-child{text-align:left;padding-left:6px}
  thead th{font-size:11px;text-transform:uppercase;letter-spacing:.3px;color:#6b7280;border-bottom:2px solid #e0e2ea;font-weight:700}
  .grp{font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:#9aa0ad;font-weight:700;border-bottom:none}
  tbody tr.med td{background:#fafbff;color:#8b90a0;font-style:italic;font-size:12.5px}
  tbody tr:hover:not(.med){background:#fafaff}
  .nm{font-weight:700}.role{color:var(--muted);font-size:11.5px;font-weight:400}
  .tm{display:inline-block;min-width:20px;font-weight:700;color:#4f46e5;background:#eef2ff;border-radius:6px;padding:1px 6px;font-size:11px;margin-left:4px}
  .hi{font-weight:700}
  .c-red{color:var(--red);font-weight:700}.c-green{color:var(--green);font-weight:700}.c-amber{color:var(--amber);font-weight:700}
  td.sep{border-left:1px solid var(--line)}
  .v{display:inline-block;padding:3px 9px;border-radius:8px;font-weight:700;font-size:11.5px}
  .v.red{background:var(--redbg);color:var(--red)}.v.amber{background:var(--amberbg);color:var(--amber)}
  .v.yellow{background:var(--yellowbg);color:var(--yellow)}.v.green{background:var(--greenbg);color:var(--green)}
  .summary{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin:8px 0 14px}
  .scard{border-radius:14px;padding:16px 18px;border:1px solid}
  .scard.red{background:var(--redbg);border-color:#fecaca}
  .scard.amber{background:var(--amberbg);border-color:#fde68a}
  .scard h3{margin:0 0 6px;font-size:16px}
  .scard p{margin:0;font-size:13px;color:#3f3f46}
  footer.note{margin-top:24px;padding:18px 20px;background:#fff;border:1px solid var(--line);border-radius:14px;font-size:13px;color:#52525b}
  footer.note b{color:var(--ink)}
  .legend{display:inline-flex;gap:14px;flex-wrap:wrap}
  .legend span{display:inline-flex;align-items:center;gap:5px}
  .dot{width:10px;height:10px;border-radius:3px;display:inline-block}
  @media print{body{background:#fff}.card,footer.note{box-shadow:none}}
  @media(max-width:780px){.summary{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="wrap">

<header class="top">
  <h1>Скилл iOS — загрузка по всем 7 командам</h1>
  <p class="sub">Сводный отчёт по 11 iOS-разработчикам: данные Jira (выработка) + Календарь (звонки и речь)</p>
</header>

<div class="meta">
  <span class="chip">📅 Окно: <b>≈ 4 недели</b> (Jira: 2 закрытых спринта · Календарь: 28 дней)</span>
  <span class="chip">👥 Все iOS из команд <b>A · I · O · P · U · Y</b> (в S iOS нет)</span>
  <span class="chip">⚖️ Каждый сравнивается с <b>медианой по iOS</b></span>
  <span class="chip">🔗 Идентичность — канонически (<b>/jira-mappings</b>)</span>
</div>

<h2>Кратко: на кого посмотреть</h2>
<div class="summary">
  <div class="scard red">
    <h3>🔴 Dmytro Savytskyi — Team P</h3>
    <p>Самая низкая выработка из всех iOS: <b>0 веденных / 0 закрытых</b> задач, движение лишь в 50% дней. Звонков мало (приглашён всего на 9). Возможно, недавно вышел/частичная занятость — <b>уточнить контекст</b>, но по факту вклад в спринт минимальный.</p>
  </div>
  <div class="scard red">
    <h3>🔴 Yevhen Hilko — Team Y</h3>
    <p>Низко <b>и в Jira, и в календаре</b>: 55% дней, вёл 8 / закрыл 6; пришёл на <b>13 из 58</b> звонков (участие 22% против медианы 44%), речи 0.4ч. Без отпуска/больничного.</p>
  </div>
  <div class="scard amber">
    <h3>⚠️ Mikita Dzidzenka — Team Y (iOS Lead)</h3>
    <p>Минимум по Jira (15%, 2 задачи), <b>но больше всех говорит</b> (4.9ч, ср. реплика 10 мин). Лидская работа в митингах, а не в тикетах — ожидаемо для роли, но стоит сверить баланс.</p>
  </div>
</div>

<h2>📱 Все iOS-разработчики (сортировка по выработке)</h2>
<div class="card">
<table>
  <thead>
    <tr>
      <th rowspan="2">Сотрудник</th>
      <th colspan="3" class="grp">Jira (выработка)</th>
      <th colspan="5" class="grp">Календарь (вовлечённость)</th>
      <th rowspan="2">Вердикт</th>
    </tr>
    <tr>
      <th>% дней с движ.</th><th>вёл</th><th>закрыл</th>
      <th class="sep">звонков</th><th>участие</th><th>часы речи</th><th>ср. реплика</th><th>опозд.</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="nm">Dmytro Mandych</span><span class="tm">O</span><br><span class="role">iOS Developer</span></td>
      <td class="c-green">85%</td><td class="hi">65</td><td class="hi c-green">57</td>
      <td class="sep">42</td><td>57%</td><td class="c-green">4.3ч</td><td>383с</td><td>19%</td>
      <td><span class="v green">Топ all-round</span></td></tr>
    <tr><td><span class="nm">Serhii Kobzin</span><span class="tm">Y</span><br><span class="role">iOS Developer</span></td>
      <td class="c-green">85%</td><td>42</td><td>39</td>
      <td class="sep">27</td><td class="c-green">75%</td><td>0.8ч</td><td>115с</td><td class="c-green">0%</td>
      <td><span class="v green">Сильный</span></td></tr>
    <tr><td><span class="nm">An Tuan Khoanh</span><span class="tm">U</span><br><span class="role">iOS Developer</span></td>
      <td class="c-green">85%</td><td>38</td><td>16</td>
      <td class="sep">35</td><td>52%</td><td>2.3ч</td><td>265с</td><td>26%</td>
      <td><span class="v green">Загружен</span></td></tr>
    <tr><td><span class="nm">Pavlo Vasylchenko</span><span class="tm">O</span><br><span class="role">iOS Developer</span></td>
      <td class="c-green">85%</td><td>32</td><td class="c-amber">13</td>
      <td class="sep">24</td><td>38%</td><td>0.5ч</td><td>81с</td><td>21%</td>
      <td><span class="v green">Загружен*</span></td></tr>
    <tr><td><span class="nm">Oleksandr Raievskyi</span><span class="tm">I</span><br><span class="role">iOS Developer</span></td>
      <td>75%</td><td>24</td><td>23</td>
      <td class="sep">31</td><td>44%</td><td>0.6ч</td><td>77с</td><td class="c-green">0%</td>
      <td><span class="v green">Норма</span></td></tr>
    <tr><td><span class="nm">Roman Shcherbakov</span><span class="tm">P</span><br><span class="role">iOS Developer</span></td>
      <td>75%</td><td>22</td><td>21</td>
      <td class="sep">22</td><td>43%</td><td>0.8ч</td><td>136с</td><td>18%</td>
      <td><span class="v green">Норма</span></td></tr>
    <tr><td><span class="nm">Mykyta Borysov</span><span class="tm">A</span><br><span class="role">iOS Developer</span></td>
      <td>75%</td><td>19</td><td>19</td>
      <td class="sep">36</td><td>52%</td><td>1.8ч</td><td>180с</td><td>13%</td>
      <td><span class="v green">Норма</span></td></tr>
    <tr><td><span class="nm">Ihor Velykodnyi</span><span class="tm">U</span><br><span class="role">iOS Developer</span></td>
      <td>70%</td><td>42</td><td>25</td>
      <td class="sep">28</td><td>37%</td><td>1.2ч</td><td>170с</td><td class="c-red">29%</td>
      <td><span class="v green">Норма**</span></td></tr>
    <tr><td><span class="nm">Yevhen Hilko</span><span class="tm">Y</span><br><span class="role">iOS Developer</span></td>
      <td class="c-red">55%</td><td class="c-red">8</td><td class="c-red">6</td>
      <td class="sep c-red">13</td><td class="c-red">22%</td><td class="c-red">0.4ч</td><td>109с</td><td>8%</td>
      <td><span class="v red">Низко везде</span></td></tr>
    <tr><td><span class="nm">Dmytro Savytskyi</span><span class="tm">P</span><br><span class="role">iOS Developer</span></td>
      <td class="c-red">50%</td><td class="c-red">0</td><td class="c-red">0</td>
      <td class="sep c-red">13</td><td>44%</td><td class="c-red">0.4ч</td><td>196с</td><td>23%</td>
      <td><span class="v red">0 выработки*</span></td></tr>
    <tr><td><span class="nm">Mikita Dzidzenka</span><span class="tm">Y</span><br><span class="role">iOS Lead</span></td>
      <td class="c-red">15%</td><td class="c-red">2</td><td class="c-red">2</td>
      <td class="sep">31</td><td>51%</td><td class="c-green">4.9ч</td><td class="hi">609с</td><td>10%</td>
      <td><span class="v amber">Лид: митинги</span></td></tr>
    <tr class="med"><td>Медиана по iOS (11 чел.)</td>
      <td>75%</td><td>24</td><td>19</td>
      <td class="sep">28</td><td>44%</td><td>0.8ч</td><td>—</td><td>~18%</td><td></td></tr>
  </tbody>
</table>
</div>

<footer class="note">
  <p><b>Пояснения к флагам.</b><br>
  <b>*Pavlo Vasylchenko</b> — движение в 85% дней, но закрыл лишь 13 из 32 (много начатого/незавершённого). Не недозагрузка, а возможное застревание — стоит глянуть, что висит.<br>
  <b>*Dmytro Savytskyi</b> — 0 веденных/закрытых при 50% «движения» означает, что он трогал чужие задачи транзитом, но своих почти не держал; приглашён всего на 9 встреч → вероятно недавно в команде. Проверить статус перед выводами.<br>
  <b>**Ihor Velykodnyi</b> — по нагрузке норма (42 вёл, 25 закрыл), но <b>опаздывает на 29% звонков</b> — самый высокий показатель; отдельный мелкий сигнал по дисциплине.</p>
  <p style="margin-top:10px"><b>Метод.</b> Ведущий сигнал — «% рабочих дней с движением задач» (не зависит от дробления). «Вёл/закрыл» и календарь — контекст. Цвет — относительно медианы по iOS:
    <span class="legend"><span><span class="dot" style="background:var(--green)"></span>в норме/выше</span> <span><span class="dot" style="background:var(--amber)"></span>заметно ниже</span> <span><span class="dot" style="background:var(--red)"></span>низко</span></span></p>
  <p style="margin-top:10px"><b>Оговорки.</b> Это «низкая активность в Jira/календаре», а не «безделье» — не видно код-ревью, менторства, инцидентов, парной работы. Для <b>лида</b> (Dzidzenka) смещение в митинги ожидаемо. «Участие» в абсолюте низкое у всех (зовут на больше встреч, чем реально нужно) — поэтому сравниваем с медианой, а не со 100%.</p>
  <p style="margin-top:10px;color:#9aa0ad">Вне отчёта: <b>Illia Margarit</b> (Team T) — iOS-разработчик, но Team T не входит в 7 команд и не ведёт спринты на board 94, данных по выработке нет. Источники: Jira board 94, participation_stats_cache (28 дней). Сформировано 06.06.2026.</p>
</footer>

</div>
</body>
</html>
`,h=`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Скилл Android / AOS — загрузка по 7 командам: Jira + календарь</title>
<style>
  :root{
    --ink:#0f1226;--muted:#6b7280;--line:#e6e8ef;--paper:#fff;--bg:#f4f5f9;
    --accent:#16a34a;--accent2:#7c3aed;
    --red:#dc2626;--redbg:#fef2f2;--green:#059669;--greenbg:#ecfdf5;
    --amber:#d97706;--amberbg:#fffbeb;--yellow:#ca8a04;--yellowbg:#fefce8;
  }
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Arial,sans-serif;line-height:1.5}
  .wrap{max-width:1240px;margin:0 auto;padding:40px 28px 80px}
  header.top{border-left:6px solid var(--accent);padding:6px 0 6px 22px;margin-bottom:8px}
  h1{font-size:33px;margin:0 0 6px;letter-spacing:-.4px}
  .sub{color:var(--muted);font-size:17px;margin:0}
  .meta{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0 26px}
  .chip{background:#fff;border:1px solid var(--line);border-radius:999px;padding:6px 14px;font-size:13px;color:#374151}
  .chip b{color:var(--ink)}
  h2{font-size:22px;margin:30px 0 10px}
  .card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:14px 16px;margin-bottom:14px;
    box-shadow:0 1px 2px rgba(16,18,38,.04);overflow-x:auto}
  table{border-collapse:collapse;width:100%;font-size:13.5px}
  th,td{padding:9px 8px;text-align:center;border-bottom:1px solid var(--line);white-space:nowrap}
  th:first-child,td:first-child{text-align:left;padding-left:6px}
  thead th{font-size:11px;text-transform:uppercase;letter-spacing:.3px;color:#6b7280;border-bottom:2px solid #e0e2ea;font-weight:700}
  .grp{font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:#9aa0ad;font-weight:700;border-bottom:none}
  tbody tr.med td{background:#fafbff;color:#8b90a0;font-style:italic;font-size:12.5px}
  tbody tr:hover:not(.med){background:#fafaff}
  .nm{font-weight:700}.role{color:var(--muted);font-size:11.5px;font-weight:400}
  .tm{display:inline-block;min-width:20px;font-weight:700;color:#16a34a;background:#ecfdf3;border-radius:6px;padding:1px 6px;font-size:11px;margin-left:4px}
  .hi{font-weight:700}
  .c-red{color:var(--red);font-weight:700}.c-green{color:var(--green);font-weight:700}.c-amber{color:var(--amber);font-weight:700}
  td.sep{border-left:1px solid var(--line)}
  .v{display:inline-block;padding:3px 9px;border-radius:8px;font-weight:700;font-size:11.5px}
  .v.red{background:var(--redbg);color:var(--red)}.v.amber{background:var(--amberbg);color:var(--amber)}
  .v.yellow{background:var(--yellowbg);color:var(--yellow)}.v.green{background:var(--greenbg);color:var(--green)}
  .summary{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin:8px 0 14px}
  .scard{border-radius:14px;padding:16px 18px;border:1px solid}
  .scard.red{background:var(--redbg);border-color:#fecaca}
  .scard.amber{background:var(--amberbg);border-color:#fde68a}
  .scard.green{background:var(--greenbg);border-color:#a7f3d0}
  .scard.yellow{background:var(--yellowbg);border-color:#fde68a}
  .scard h3{margin:0 0 6px;font-size:16px}
  .scard p{margin:0;font-size:13px;color:#3f3f46}
  footer.note{margin-top:24px;padding:18px 20px;background:#fff;border:1px solid var(--line);border-radius:14px;font-size:13px;color:#52525b}
  footer.note b{color:var(--ink)}
  .legend{display:inline-flex;gap:14px;flex-wrap:wrap}
  .legend span{display:inline-flex;align-items:center;gap:5px}
  .dot{width:10px;height:10px;border-radius:3px;display:inline-block}
  @media print{body{background:#fff}.card,footer.note{box-shadow:none}}
  @media(max-width:780px){.summary{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="wrap">

<header class="top">
  <h1>Скилл Android / AOS — загрузка по всем 7 командам</h1>
  <p class="sub">Сводный отчёт по Android-разработчикам: данные Jira (выработка) + Календарь (звонки и речь)</p>
</header>

<div class="meta">
  <span class="chip">📅 Окно: <b>≈ 4 недели</b> (Jira: 2 закрытых спринта 116–117 · Календарь: 28 дней)</span>
  <span class="chip">👥 Android из команд <b>I · O · P · U · Y</b> (в A, S — нет)</span>
  <span class="chip">⚖️ Каждый сравнивается с <b>медианой по Android</b></span>
  <span class="chip">🔗 Идентичность — канонически (<b>/jira-mappings</b>)</span>
</div>

<h2>Кратко: на кого посмотреть</h2>
<div class="summary">
  <div class="scard green">
    <h3>🟢 Anton Dobrohorskyi — Team P</h3>
    <p>Самая высокая выработка из всех Android: движение задач в <b>95%</b> рабочих дней, вёл 67 / закрыл 54. Календарь в норме (28 звонков, речь 0.8ч). Эталон загрузки.</p>
  </div>
  <div class="scard amber">
    <h3>⚠️ Taras Oryshhij — Team Y (Head of Mobile)</h3>
    <p>И сильная выработка (90%, 61/56), <b>и</b> топ по митингам — речь <b>6.0ч</b>, средняя реплика 7 мин, 67 звонков. Это лидский/координаторский паттерн — ожидаемо для роли, отдельно ранжировать как «разработчика» не стоит.</p>
  </div>
  <div class="scard yellow">
    <h3>🟡 Dmytro Sapunov — Team O</h3>
    <p>Самый лёгкий по Jira: движение в <b>70%</b> дней, вёл 26 / <b>закрыл лишь 11</b> (много начатого, мало доведённого). Звонки в норме (29, участие 48%), но речи почти нет (0.2ч). Слабый сигнал «приглядеться», не тревога.</p>
  </div>
</div>

<h2>🤖 Все Android-разработчики (сортировка по выработке)</h2>
<div class="card">
<table>
  <thead>
    <tr>
      <th rowspan="2">Сотрудник</th>
      <th colspan="3" class="grp">Jira (выработка)</th>
      <th colspan="5" class="grp">Календарь (вовлечённость)</th>
      <th rowspan="2">Вердикт</th>
    </tr>
    <tr>
      <th>% дней с движ.</th><th>вёл</th><th>закрыл</th>
      <th class="sep">звонков</th><th>участие</th><th>часы речи</th><th>ср. реплика</th><th>опозд.</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="nm">Anton Dobrohorskyi</span><span class="tm">P</span><br><span class="role">Android Developer</span></td>
      <td class="c-green">95%</td><td class="hi">67</td><td class="hi c-green">54</td>
      <td class="sep">28</td><td class="c-green">53%</td><td>0.8ч</td><td>109с</td><td>25%</td>
      <td><span class="v green">Топ all-round</span></td></tr>
    <tr><td><span class="nm">Taras Oryshhij</span><span class="tm">Y</span><br><span class="role">Head of Mobile / Tech Coordinator</span></td>
      <td class="c-green">90%</td><td class="hi">61</td><td class="hi c-green">56</td>
      <td class="sep">67</td><td>34%</td><td class="c-green">6.0ч</td><td class="hi">418с</td><td>18%</td>
      <td><span class="v amber">Лид: топ + митинги</span></td></tr>
    <tr><td><span class="nm">Oleksii Rudenko</span><span class="tm">U</span><br><span class="role">Android Developer</span></td>
      <td class="c-green">80%</td><td class="hi">64</td><td class="hi c-green">53</td>
      <td class="sep">20</td><td>31%</td><td class="c-green">1.1ч</td><td>228с</td><td>25%</td>
      <td><span class="v green">Сильный</span></td></tr>
    <tr><td><span class="nm">Danylo Demydenko</span><span class="tm">I</span><br><span class="role">Android Developer</span></td>
      <td>75%</td><td>39</td><td>29</td>
      <td class="sep">26</td><td class="c-amber">6%</td><td class="c-amber">0.2ч</td><td>37с</td><td class="c-green">12%</td>
      <td><span class="v green">Норма (тих в звонках)</span></td></tr>
    <tr><td><span class="nm">Dmytro Sapunov</span><span class="tm">O</span><br><span class="role">Android Developer</span></td>
      <td class="c-amber">70%</td><td class="c-amber">26</td><td class="c-amber">11</td>
      <td class="sep">29</td><td>48%</td><td class="c-amber">0.2ч</td><td>33с</td><td>14%</td>
      <td><span class="v yellow">Легче коллег</span></td></tr>
    <tr class="med"><td>Медиана по Android (5 чел., 7 команд)</td>
      <td>80%</td><td>61</td><td>53</td>
      <td class="sep">28</td><td>34%</td><td>0.8ч</td><td>—</td><td>~18%</td><td></td></tr>
  </tbody>
</table>
</div>

<footer class="note">
  <p><b>Пояснения к флагам.</b><br>
  <b>Dmytro Sapunov</b> — закрыл лишь 11 из 26 веденных при 70% движения: возможное «застревание» (много открытого, мало доведённого) — стоит глянуть, что висит. Не явная недозагрузка.<br>
  <b>Danylo Demydenko</b> — по Jira норма (75%, 39/29), но в звонках почти не участвует (участие 6%, речь 0.2ч). Низкое участие при нормальном Jira — слабый сигнал, не повод для вывода о загрузке.<br>
  <b>Taras Oryshhij</b> — Head of Mobile: совмещает выработку и координацию. Смещение в митинги (6ч речи) — это роль, а не «вместо работы».</p>
  <p style="margin-top:10px"><b>Метод.</b> Ведущий сигнал — «% рабочих дней с движением задач» (не зависит от дробления). «Вёл/закрыл» (по владению задачей в окне) и календарь — контекст; они индикативны и зависят от среза. Цвет — относительно медианы по Android:
    <span class="legend"><span><span class="dot" style="background:var(--green)"></span>в норме/выше</span> <span><span class="dot" style="background:var(--amber)"></span>заметно ниже</span> <span><span class="dot" style="background:var(--red)"></span>низко</span></span></p>
  <p style="margin-top:10px"><b>Оговорки.</b> Это «низкая активность в Jira/календаре», а не «безделье» — не видно код-ревью, менторства, инцидентов, парной работы. По Android <b>никто не попал в красную зону</b>: все ведут задачи в ≥70% дней. «Участие» в абсолюте низкое у всех (зовут на больше встреч, чем нужно) — сравниваем с медианой, а не со 100%.</p>
  <p style="margin-top:10px;color:#9aa0ad">Вне отчёта: <b>Yevhenii Harahulia</b> (Team T) — Android-разработчик, но Team T не входит в 7 команд (в медиану не включён). Его данные за то же окно: движение 85%, вёл 45 / закрыл 37; звонков 29, участие 49%, речь 0.6ч — нормальная загрузка. Источники: Jira board 94 (история статусов спринтов 116–117), participation_stats_cache (28 дней). Сформировано 06.06.2026.</p>
</footer>

</div>
</body>
</html>
`,g=`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Скилл Java — загрузка по 7 командам: Jira + календарь</title>
<style>
  :root{
    --ink:#0f1226;--muted:#6b7280;--line:#e6e8ef;--paper:#fff;--bg:#f4f5f9;
    --accent:#b45309;--accent2:#7c3aed;
    --red:#dc2626;--redbg:#fef2f2;--green:#059669;--greenbg:#ecfdf5;
    --amber:#d97706;--amberbg:#fffbeb;--yellow:#ca8a04;--yellowbg:#fefce8;
  }
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Arial,sans-serif;line-height:1.5}
  .wrap{max-width:1240px;margin:0 auto;padding:40px 28px 80px}
  header.top{border-left:6px solid var(--accent);padding:6px 0 6px 22px;margin-bottom:8px}
  h1{font-size:33px;margin:0 0 6px;letter-spacing:-.4px}
  .sub{color:var(--muted);font-size:17px;margin:0}
  .meta{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0 26px}
  .chip{background:#fff;border:1px solid var(--line);border-radius:999px;padding:6px 14px;font-size:13px;color:#374151}
  .chip b{color:var(--ink)}
  h2{font-size:22px;margin:30px 0 10px}
  .card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:14px 16px;margin-bottom:14px;
    box-shadow:0 1px 2px rgba(16,18,38,.04);overflow-x:auto}
  table{border-collapse:collapse;width:100%;font-size:13.5px}
  th,td{padding:9px 8px;text-align:center;border-bottom:1px solid var(--line);white-space:nowrap}
  th:first-child,td:first-child{text-align:left;padding-left:6px}
  thead th{font-size:11px;text-transform:uppercase;letter-spacing:.3px;color:#6b7280;border-bottom:2px solid #e0e2ea;font-weight:700}
  .grp{font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:#9aa0ad;font-weight:700;border-bottom:none}
  tbody tr.med td{background:#fafbff;color:#8b90a0;font-style:italic;font-size:12.5px}
  tbody tr:hover:not(.med){background:#fafaff}
  .nm{font-weight:700}.role{color:var(--muted);font-size:11.5px;font-weight:400}
  .tm{display:inline-block;min-width:20px;font-weight:700;color:#b45309;background:#fef3e2;border-radius:6px;padding:1px 6px;font-size:11px;margin-left:4px}
  .hi{font-weight:700}
  .c-red{color:var(--red);font-weight:700}.c-green{color:var(--green);font-weight:700}.c-amber{color:var(--amber);font-weight:700}
  td.sep{border-left:1px solid var(--line)}
  .v{display:inline-block;padding:3px 9px;border-radius:8px;font-weight:700;font-size:11.5px}
  .v.red{background:var(--redbg);color:var(--red)}.v.amber{background:var(--amberbg);color:var(--amber)}
  .v.yellow{background:var(--yellowbg);color:var(--yellow)}.v.green{background:var(--greenbg);color:var(--green)}
  .summary{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin:8px 0 14px}
  .scard{border-radius:14px;padding:16px 18px;border:1px solid}
  .scard.red{background:var(--redbg);border-color:#fecaca}
  .scard.amber{background:var(--amberbg);border-color:#fde68a}
  .scard.green{background:var(--greenbg);border-color:#a7f3d0}
  .scard.yellow{background:var(--yellowbg);border-color:#fde68a}
  .scard h3{margin:0 0 6px;font-size:16px}
  .scard p{margin:0;font-size:13px;color:#3f3f46}
  .disc-note{color:var(--muted);font-size:13.5px;margin:0 0 12px;padding:10px 14px;background:#fffdf7;border:1px solid #fde68a;border-radius:10px}
  footer.note{margin-top:24px;padding:18px 20px;background:#fff;border:1px solid var(--line);border-radius:14px;font-size:13px;color:#52525b}
  footer.note b{color:var(--ink)}
  .legend{display:inline-flex;gap:14px;flex-wrap:wrap}
  .legend span{display:inline-flex;align-items:center;gap:5px}
  .dot{width:10px;height:10px;border-radius:3px;display:inline-block}
  @media print{body{background:#fff}.card,footer.note{box-shadow:none}}
  @media(max-width:780px){.summary{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="wrap">

<header class="top">
  <h1>Скилл Java — загрузка по всем 7 командам</h1>
  <p class="sub">Сводный отчёт по 10 Java-разработчикам: данные Jira (выработка) + Календарь (звонки и речь)</p>
</header>

<div class="meta">
  <span class="chip">📅 Окно: <b>≈ 4 недели</b> (Jira: 2 закрытых спринта 116–117 · Календарь: 28 дней)</span>
  <span class="chip">👥 Java из команд <b>A · I · S · U · Y</b> (в O, P — нет)</span>
  <span class="chip">⚖️ Каждый сравнивается с <b>медианой по Java</b></span>
  <span class="chip">🔗 Идентичность — канонически (<b>/jira-mappings</b>)</span>
</div>

<h2>Кратко: на кого посмотреть</h2>
<div class="summary">
  <div class="scard red">
    <h3>🔴 Yuliia Kulish — Team S</h3>
    <p>Низко <b>везде</b>: движение задач лишь в <b>20%</b> дней (вёл 9 / закрыл 2 — минимум по Java), пришла на <b>9 из 59</b> звонков (участие 15%), речи 0.0ч. Единственный устойчивый сигнал «недозагрузки» в скилле — <b>уточнить контекст</b> (отпуск/онбординг/частичная занятость).</p>
  </div>
  <div class="scard green">
    <h3>🟢 Yakiv Medviediev / Anatolii Kondratiev — Team Y</h3>
    <p>Топ скилла. Medviediev — движение 90% (49/38), Kondratiev — высокая выработка (45 вёл / 38 закрыл) + активный календарь (1.9ч речи). Эталон загрузки.</p>
  </div>
  <div class="scard amber">
    <h3>⚠️ Дисциплина: Klishch / Pelykh — Team U</h3>
    <p>По нагрузке норма, но <b>опаздывают на 36–38%</b> звонков — самые высокие показатели в скилле. Отдельный мелкий сигнал по дисциплине, не по загрузке.</p>
  </div>
</div>

<p class="disc-note"><b>⚠️ Оговорка по Team S.</b> У трёх Java-разработчиков Team S (Denysenko, Mykytiuk, Kulish) в карточке сотрудника <b>пустой список скиллов</b> — данные кадрового кэша по Team S неполные. Но, в отличие от Corezoid-скилла, по Jira они <b>реально ведут задачи</b>: Denysenko и Mykytiuk показывают нормальное движение (75%). Поэтому они включены в скилл и медиану на общих основаниях; красный флаг — только Kulish (20%).</p>

<h2>☕ Все Java-разработчики (сортировка по выработке)</h2>
<div class="card">
<table>
  <thead>
    <tr>
      <th rowspan="2">Сотрудник</th>
      <th colspan="3" class="grp">Jira (выработка)</th>
      <th colspan="5" class="grp">Календарь (вовлечённость)</th>
      <th rowspan="2">Вердикт</th>
    </tr>
    <tr>
      <th>% дней с движ.</th><th>вёл</th><th>закрыл</th>
      <th class="sep">звонков</th><th>участие</th><th>часы речи</th><th>ср. реплика</th><th>опозд.</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="nm">Yakiv Medviediev</span><span class="tm">Y</span><br><span class="role">Java Developer</span></td>
      <td class="c-green">90%</td><td class="hi">49</td><td class="hi c-green">38</td>
      <td class="sep">25</td><td>33%</td><td class="c-green">1.1ч</td><td>170с</td><td>20%</td>
      <td><span class="v green">Топ all-round</span></td></tr>
    <tr><td><span class="nm">Anatolii Kondratiev</span><span class="tm">Y</span><br><span class="role">Java Developer</span></td>
      <td>75%</td><td class="hi">45</td><td class="hi c-green">38</td>
      <td class="sep">32</td><td class="c-green">43%</td><td class="c-green">1.9ч</td><td class="hi">253с</td><td class="c-green">9%</td>
      <td><span class="v green">Сильный</span></td></tr>
    <tr><td><span class="nm">Danyil Muntian</span><span class="tm">I</span><br><span class="role">Java Developer</span></td>
      <td>75%</td><td>24</td><td>17</td>
      <td class="sep">27</td><td>41%</td><td>0.4ч</td><td>69с</td><td class="c-green">0%</td>
      <td><span class="v green">Норма</span></td></tr>
    <tr><td><span class="nm">Oleksandr Denysenko</span><span class="tm">S</span><br><span class="role">Java Developer</span></td>
      <td>75%</td><td>23</td><td class="c-amber">12</td>
      <td class="sep c-amber">9</td><td class="c-red">15%</td><td class="c-amber">0.1ч</td><td>72с</td><td>22%</td>
      <td><span class="v green">Норма по Jira*</span></td></tr>
    <tr><td><span class="nm">Vladyslav Pelykh</span><span class="tm">U</span><br><span class="role">Java Developer</span></td>
      <td>75%</td><td>20</td><td class="c-amber">9</td>
      <td class="sep">25</td><td>37%</td><td class="c-amber">0.2ч</td><td>41с</td><td class="c-red">36%</td>
      <td><span class="v green">Норма (опозд.↑)</span></td></tr>
    <tr><td><span class="nm">Serhii Mykytiuk</span><span class="tm">S</span><br><span class="role">Java Developer</span></td>
      <td>75%</td><td class="c-amber">16</td><td class="c-amber">6</td>
      <td class="sep">13</td><td>25%</td><td class="c-amber">0.2ч</td><td>88с</td><td>15%</td>
      <td><span class="v green">Норма по Jira*</span></td></tr>
    <tr><td><span class="nm">Serhii Shevchenko</span><span class="tm">I</span><br><span class="role">Java Developer</span></td>
      <td class="c-amber">70%</td><td>34</td><td>18</td>
      <td class="sep">33</td><td>40%</td><td>0.8ч</td><td>93с</td><td>15%</td>
      <td><span class="v green">Норма</span></td></tr>
    <tr><td><span class="nm">Roman Klishch</span><span class="tm">U</span><br><span class="role">Java Developer</span></td>
      <td class="c-amber">70%</td><td>29</td><td>13</td>
      <td class="sep">24</td><td>30%</td><td>0.9ч</td><td>157с</td><td class="c-red">38%</td>
      <td><span class="v green">Норма (опозд.↑)</span></td></tr>
    <tr><td><span class="nm">Dmytro Kuzmenko</span><span class="tm">A</span><br><span class="role">Java Developer</span></td>
      <td class="c-amber">70%</td><td>22</td><td>19</td>
      <td class="sep">31</td><td class="c-green">48%</td><td class="c-green">1.5ч</td><td>193с</td><td>13%</td>
      <td><span class="v green">Норма</span></td></tr>
    <tr><td><span class="nm">Yuliia Kulish</span><span class="tm">S</span><br><span class="role">Java Developer</span></td>
      <td class="c-red">20%</td><td class="c-red">9</td><td class="c-red">2</td>
      <td class="sep c-red">9</td><td class="c-red">15%</td><td class="c-red">0.0ч</td><td>43с</td><td class="c-green">0%</td>
      <td><span class="v red">Низко везде</span></td></tr>
    <tr class="med"><td>Медиана по Java (10 чел., 7 команд)</td>
      <td>75%</td><td>~23</td><td>~15</td>
      <td class="sep">25</td><td>35%</td><td>0.6ч</td><td>—</td><td>~15%</td><td></td></tr>
  </tbody>
</table>
</div>

<footer class="note">
  <p><b>Пояснения к флагам.</b><br>
  <b>*Denysenko / Mykytiuk (Team S)</b> — по Jira ведут задачи нормально (75% движения), но в звонках почти не участвуют (Denysenko 9/59, Mykytiuk 13/53; речь 0.1–0.2ч). Низкий календарь при нормальном Jira — слабый сигнал, не вывод о загрузке. Закрытых меньше веденных (12 из 23, 6 из 16) — стоит глянуть, что в работе.<br>
  <b>Klishch / Pelykh (Team U)</b> — нагрузка в норме, но опоздания 36–38% — самые высокие; мелкий сигнал по дисциплине.<br>
  <b>Kulish (Team S)</b> — единственная с низким сигналом по всем осям сразу (Jira + календарь). Проверить статус перед выводами.</p>
  <p style="margin-top:10px"><b>Метод.</b> Ведущий сигнал — «% рабочих дней с движением задач» (не зависит от дробления). «Вёл/закрыл» (по владению задачей в окне) и календарь — контекст; они индикативны и зависят от среза. Цвет — относительно медианы по Java:
    <span class="legend"><span><span class="dot" style="background:var(--green)"></span>в норме/выше</span> <span><span class="dot" style="background:var(--amber)"></span>заметно ниже</span> <span><span class="dot" style="background:var(--red)"></span>низко</span></span></p>
  <p style="margin-top:10px"><b>Оговорки.</b> Это «низкая активность в Jira/календаре», а не «безделье» — не видно код-ревью, менторства, инцидентов, парной работы. «Участие» в абсолюте низкое у всех (зовут на больше встреч, чем нужно) — сравниваем с медианой, а не со 100%. Низкое участие <b>и</b> низкий Jira вместе (Kulish) — самый надёжный сигнал.</p>
  <p style="margin-top:10px;color:#9aa0ad">Вне отчёта: <b>Vitalii Kletsko</b> (Team T) — Java-разработчик, но Team T не входит в 7 команд (в медиану не включён). Его данные за то же окно: движение 50%, вёл 28 / закрыл 22; звонков 28, участие 47%, речь 0.8ч. Источники: Jira board 94 (история статусов спринтов 116–117), participation_stats_cache (28 дней). Сформировано 06.06.2026.</p>
</footer>

</div>
</body>
</html>
`,m=`<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Скилл Corezoid — загрузка по 7 командам: Jira + календарь</title>
<style>
  :root{
    --ink:#0f1226;--muted:#6b7280;--line:#e6e8ef;--paper:#fff;--bg:#f4f5f9;
    --accent:#0891b2;--accent2:#0e7490;
    --red:#dc2626;--redbg:#fef2f2;--green:#059669;--greenbg:#ecfdf5;
    --amber:#d97706;--amberbg:#fffbeb;--yellow:#ca8a04;--yellowbg:#fefce8;
    --info:#0369a1;--infobg:#f0f9ff;
  }
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Arial,sans-serif;line-height:1.5}
  .wrap{max-width:1240px;margin:0 auto;padding:40px 28px 80px}
  header.top{border-left:6px solid var(--accent);padding:6px 0 6px 22px;margin-bottom:8px}
  h1{font-size:33px;margin:0 0 6px;letter-spacing:-.4px}
  .sub{color:var(--muted);font-size:17px;margin:0}
  .meta{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0 24px}
  .chip{background:#fff;border:1px solid var(--line);border-radius:999px;padding:6px 14px;font-size:13px;color:#374151}
  .chip b{color:var(--ink)}
  h2{font-size:22px;margin:30px 0 6px}
  .disc-note{color:var(--muted);font-size:14px;margin:0 0 12px}
  .card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:14px 16px;margin-bottom:14px;
    box-shadow:0 1px 2px rgba(16,18,38,.04);overflow-x:auto}
  table{border-collapse:collapse;width:100%;font-size:13.5px}
  th,td{padding:9px 8px;text-align:center;border-bottom:1px solid var(--line);white-space:nowrap}
  th:first-child,td:first-child{text-align:left;padding-left:6px}
  thead th{font-size:11px;text-transform:uppercase;letter-spacing:.3px;color:#6b7280;border-bottom:2px solid #e0e2ea;font-weight:700}
  .grp{font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:#9aa0ad;font-weight:700;border-bottom:none}
  tbody tr.med td{background:#f8fcfd;color:#7a8a90;font-style:italic;font-size:12.5px}
  tbody tr:hover:not(.med){background:#fafdff}
  .nm{font-weight:700}.role{color:var(--muted);font-size:11.5px;font-weight:400}
  .tm{display:inline-block;min-width:20px;font-weight:700;color:#0e7490;background:#ecfeff;border-radius:6px;padding:1px 6px;font-size:11px;margin-left:4px}
  .hi{font-weight:700}
  .c-red{color:var(--red);font-weight:700}.c-green{color:var(--green);font-weight:700}.c-amber{color:var(--amber);font-weight:700}
  td.sep{border-left:1px solid var(--line)}
  .v{display:inline-block;padding:3px 9px;border-radius:8px;font-weight:700;font-size:11.5px}
  .v.red{background:var(--redbg);color:var(--red)}.v.amber{background:var(--amberbg);color:var(--amber)}
  .v.yellow{background:var(--yellowbg);color:var(--yellow)}.v.green{background:var(--greenbg);color:var(--green)}
  .v.gray{background:#f1f5f9;color:#64748b}
  .summary{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:14px;margin:8px 0 14px}
  .scard{border-radius:14px;padding:16px 18px;border:1px solid}
  .scard.info{background:var(--infobg);border-color:#bae6fd}
  .scard.amber{background:var(--amberbg);border-color:#fde68a}
  .scard h3{margin:0 0 6px;font-size:16px}
  .scard p{margin:0;font-size:13px;color:#3f3f46}
  .callout{background:var(--infobg);border:1px solid #bae6fd;border-left:5px solid var(--info);border-radius:12px;padding:16px 18px;margin:6px 0 14px;font-size:14px}
  .callout b{color:var(--ink)}
  footer.note{margin-top:24px;padding:18px 20px;background:#fff;border:1px solid var(--line);border-radius:14px;font-size:13px;color:#52525b}
  footer.note b{color:var(--ink)}
  .legend{display:inline-flex;gap:14px;flex-wrap:wrap}
  .legend span{display:inline-flex;align-items:center;gap:5px}
  .dot{width:10px;height:10px;border-radius:3px;display:inline-block}
  @media print{body{background:#fff}.card,footer.note{box-shadow:none}}
  @media(max-width:780px){.summary{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="wrap">

<header class="top">
  <h1>Скилл Corezoid — загрузка по 7 командам</h1>
  <p class="sub">Данные Jira (выработка) + Календарь (звонки и речь). Внимание: данные по Team S ненадёжны — см. ниже.</p>
</header>

<div class="meta">
  <span class="chip">📅 Окно: <b>≈ 4 недели</b> (Jira: 2 спринта · Календарь: 28 дней)</span>
  <span class="chip">👥 Corezoid-разработчики команд <b>A · I · O · P · U</b> (+ Team S — отдельно)</span>
  <span class="chip">⚖️ Сравнение с <b>медианой по Corezoid</b></span>
  <span class="chip">🔗 Идентичность — канонически (<b>/jira-mappings</b>)</span>
</div>

<h2>Кратко</h2>
<div class="summary">
  <div class="scard info">
    <h3>🔎 Главное: Team S нельзя оценить по Jira</h3>
    <p>5 человек с должностью «Corezoid developer» в Team S <b>почти не ведут спринтовых задач</b>, а реальную Corezoid-работу (проект CORE) в S делают люди с <b>другими должностями</b> (Front-end, тех-координатор, BA). То есть должности в Team S ≠ фактическая работа. Их загрузку по Jira мерить нельзя — нужна сверка оргструктуры.</p>
  </div>
  <div class="scard amber">
    <h3>🟡 Vladyslav Samokysh — Team U</h3>
    <p>Самое низкое движение среди «чистых» Corezoid (40% дней), закрыл 13. Но 22 задачи вёл и активен в звонках (2.2ч) — умеренный сигнал, не провал.</p>
  </div>
  <div class="scard amber">
    <h3>🟡 Anastasiia Bahatyr — Team P</h3>
    <p>Ниже по выработке (60% дней, закрыла 7) и низкое участие в звонках (25%, медиана 38%). Стоит приглядеться.</p>
  </div>
</div>

<h2>⚙️ Corezoid-разработчики A · I · O · P · U <span style="font-size:14px;color:var(--muted);font-weight:500">— 8 чел., данные надёжны</span></h2>
<div class="card">
<table>
  <thead>
    <tr>
      <th rowspan="2">Сотрудник</th>
      <th colspan="3" class="grp">Jira (выработка)</th>
      <th colspan="5" class="grp">Календарь (вовлечённость)</th>
      <th rowspan="2">Вердикт</th>
    </tr>
    <tr>
      <th>% дней с движ.</th><th>вёл</th><th>закрыл</th>
      <th class="sep">звонков</th><th>участие</th><th>часы речи</th><th>ср. реплика</th><th>опозд.</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="nm">Valeriy Pryimak</span><span class="tm">I</span></td>
      <td class="c-green">85%</td><td class="hi">76</td><td class="hi c-green">50</td>
      <td class="sep">33</td><td>33%</td><td>2.4ч</td><td>307с</td><td class="c-green">9%</td>
      <td><span class="v green">Топ all-round</span></td></tr>
    <tr><td><span class="nm">Mykyta Lobachov</span><span class="tm">P</span></td>
      <td class="c-green">90%</td><td>41</td><td>34</td>
      <td class="sep">18</td><td>39%</td><td>1.0ч</td><td>168с</td><td>22%</td>
      <td><span class="v green">Высокая выработка</span></td></tr>
    <tr><td><span class="nm">Vladislav Datsiuk</span><span class="tm">O</span></td>
      <td>80%</td><td>51</td><td>39</td>
      <td class="sep">32</td><td class="c-green">46%</td><td>1.9ч</td><td>270с</td><td>16%</td>
      <td><span class="v green">Сильный</span></td></tr>
    <tr><td><span class="nm">Denis Khalitov</span><span class="tm">A</span></td>
      <td class="c-green">85%</td><td>38</td><td>28</td>
      <td class="sep">33</td><td>37%</td><td>1.3ч</td><td>164с</td><td>18%</td>
      <td><span class="v green">Загружен</span></td></tr>
    <tr><td><span class="nm">Anton Leonov</span><span class="tm">U</span></td>
      <td>80%</td><td>26</td><td>24</td>
      <td class="sep">34</td><td>43%</td><td class="c-green">3.3ч</td><td>413с</td><td class="c-red">47%</td>
      <td><span class="v green">Загружен**</span></td></tr>
    <tr><td><span class="nm">Bogdan Liabogov</span><span class="tm">I</span></td>
      <td class="c-amber">55%</td><td>29</td><td>22</td>
      <td class="sep">28</td><td class="c-green">55%</td><td>0.5ч</td><td>79с</td><td class="c-green">0%</td>
      <td><span class="v yellow">Пограничный</span></td></tr>
    <tr><td><span class="nm">Anastasiia Bahatyr</span><span class="tm">P</span></td>
      <td class="c-amber">60%</td><td class="c-amber">11</td><td class="c-amber">7</td>
      <td class="sep">19</td><td class="c-red">25%</td><td>0.6ч</td><td>144с</td><td>16%</td>
      <td><span class="v amber">Легче коллег</span></td></tr>
    <tr><td><span class="nm">Vladyslav Samokysh</span><span class="tm">U</span></td>
      <td class="c-red">40%</td><td>22</td><td class="c-amber">13</td>
      <td class="sep">28</td><td>38%</td><td>2.2ч</td><td>322с</td><td>29%</td>
      <td><span class="v amber">Низкое движение</span></td></tr>
    <tr class="med"><td>Медиана по Corezoid (8 чел.)</td>
      <td>80%</td><td>34</td><td>26</td>
      <td class="sep">30</td><td>38%</td><td>1.6ч</td><td>—</td><td>~18%</td><td></td></tr>
  </tbody>
</table>
</div>

<h2>⚠️ Team S — «Corezoid developer» по должности</h2>
<div class="callout">
  <b>Эти данные не отражают загрузку.</b> Указанные 5 человек числятся «Corezoid developer» в Team S, но в спринтах board 94 у них почти нет задач. Реальную Corezoid-работу (проект CORE) в Team S за эти 2 спринта вели <b>Vladyslav Linevych</b> и <b>Artem Dubovyk</b> (Front-end developer), <b>Serhii Timokhin</b> (тех-координатор), <b>Yevhen Lymar</b> (бизнес-аналитик), <b>Daniel Harunjen</b> (Head of AI) — то есть люди с другими должностями. Вывод: <b>оргструктура/должности Team S в системе не совпадают с фактической работой</b> (у всех пятерых ещё и пустое поле skills). Ранжировать их по Jira нельзя — нужна сверка ролей. Календарь показан как единственный доступный сигнал активности.
</div>
<div class="card">
<table>
  <thead><tr>
    <th>Сотрудник (Team S)</th><th class="grp">Jira</th>
    <th colspan="4" class="grp">Календарь (28 дней)</th><th>Статус</th>
  </tr><tr>
    <th></th><th>задач в спринте</th>
    <th class="sep">звонков</th><th>часы речи</th><th>ср. реплика</th><th>участие</th><th></th>
  </tr></thead>
  <tbody>
    <tr><td><span class="nm">Heorhii Holubiev</span></td><td class="c-red">~0 (1 задача)</td>
      <td class="sep">46</td><td class="hi c-green">7.4ч</td><td>607с</td><td>37%</td>
      <td><span class="v gray">Очень активен в звонках</span></td></tr>
    <tr><td><span class="nm">Yevhen Makarov</span></td><td class="c-red">0</td>
      <td class="sep">40</td><td>2.6ч</td><td>245с</td><td>51%</td>
      <td><span class="v gray">Активен в звонках</span></td></tr>
    <tr><td><span class="nm">Yevhenii Rovenskyi</span></td><td class="c-red">2 (Paused)</td>
      <td class="sep">16</td><td>0.5ч</td><td>215с</td><td>19%</td>
      <td><span class="v gray">Нет данных Jira</span></td></tr>
    <tr><td><span class="nm">Roman Zozulia</span></td><td class="c-red">0</td>
      <td class="sep">9</td><td>0.0ч</td><td>46с</td><td>18%</td>
      <td><span class="v gray">Нет данных Jira</span></td></tr>
    <tr><td><span class="nm">Tetiana Bidnenko</span></td><td class="c-red">0</td>
      <td class="sep">7</td><td>0.0ч</td><td>5с</td><td>15%</td>
      <td><span class="v gray">Нет данных Jira</span></td></tr>
  </tbody>
</table>
</div>

<footer class="note">
  <p><b>Метод.</b> Ведущий сигнал — «% рабочих дней с движением задач» (не зависит от дробления). «Вёл/закрыл» и календарь — контекст. Цвет — относительно медианы по Corezoid:
    <span class="legend"><span><span class="dot" style="background:var(--green)"></span>в норме/выше</span> <span><span class="dot" style="background:var(--amber)"></span>заметно ниже</span> <span><span class="dot" style="background:var(--red)"></span>низко</span></span></p>
  <p style="margin-top:10px"><b>**Anton Leonov (U)</b> — по нагрузке норма (вёл 26, закрыл 24, речи 3.3ч), но опаздывает на <b>47% звонков</b> — самый высокий показатель среди Corezoid; отдельный мелкий сигнал по дисциплине.</p>
  <p style="margin-top:10px"><b>Оговорки.</b> «Низкая активность в Jira/календаре» ≠ «безделье»: не видно код-ревью, поддержки, инцидентов, парной работы. Низкое «участие» в абсолюте — норма (зовут на больше встреч, чем нужно), поэтому сравниваем с медианой. <b>Самый важный вывод этого отчёта — не по конкретному человеку, а по данным Team S:</b> там роли в системе не соответствуют фактической работе, и это стоит починить до любых выводов о загрузке.</p>
  <p style="margin-top:10px;color:#9aa0ad">Источники: Jira board 94 (2 спринта), participation_stats_cache (28 дней). Идентичность — jira_employee_mappings (канонический сотрудник). Сформировано 06.06.2026.</p>
</footer>

</div>
</body>
</html>
`,a=[{slug:"sp-complexity",title:"Сложность (story points, ИИ) — H1 2026",html:i},{slug:"team-y",title:"Team Y — загрузка",html:c},{slug:"ios",title:"Скилл iOS — загрузка",html:b},{slug:"android",title:"Скилл Android — загрузка",html:h},{slug:"java",title:"Скилл Java — загрузка",html:g},{slug:"corezoid",title:"Скилл Corezoid — загрузка",html:m},{slug:"standardization",title:"Стандартизация Jira (презентация)",html:o}];function L(){const[n,e]=r.useState(0);return t.jsxs("div",{className:"min-h-screen flex flex-col bg-background",children:[t.jsx(p,{}),t.jsxs("div",{className:"px-4 sm:px-6 pt-4 pb-2 border-b",children:[t.jsx("h1",{className:"text-xl font-semibold mb-1",children:"Аналитические отчёты"}),t.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Загрузка команд по данным Jira + календаря. Данные чувствительные — доступно только администраторам. Чтобы поделиться, откройте отчёт и сохраните в PDF (Cmd/Ctrl+P)."}),t.jsx("div",{className:"flex flex-wrap gap-2",children:a.map((d,s)=>t.jsx(l,{size:"sm",variant:s===n?"default":"outline",onClick:()=>e(s),children:d.title},d.slug))})]}),t.jsx("iframe",{title:a[n].title,srcDoc:a[n].html,className:"flex-1 w-full border-0",sandbox:"allow-scripts allow-popups allow-same-origin"},a[n].slug)]})}export{L as default};
