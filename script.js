const COUNTRY_CODES = {
  "México":                "mx",
  "África do Sul":         "za",
  "Coreia do Sul":         "kr",
  "República Tcheca":      "cz",
  "Canadá":                "ca",
  "Bósnia e Herzegovina":  "ba",
  "Catar":                 "qa",
  "Suíça":                 "ch",
  "Brasil":                "br",
  "Marrocos":              "ma",
  "Haiti":                 "ht",
  "Escócia":               "gb-sct",
  "Estados Unidos":        "us",
  "Paraguai":              "py",
  "Austrália":             "au",
  "Turquia":               "tr",
  "Alemanha":              "de",
  "Curaçao":               "cw",
  "Costa do Marfim":       "ci",
  "Equador":               "ec",
  "Países Baixos":         "nl",
  "Japão":                 "jp",
  "Suécia":                "se",
  "Tunísia":               "tn",
  "Bélgica":               "be",
  "Egito":                 "eg",
  "Irã":                   "ir",
  "Nova Zelândia":         "nz",
  "Espanha":               "es",
  "Cabo Verde":            "cv",
  "Arábia Saudita":        "sa",
  "Uruguai":               "uy",
  "França":                "fr",
  "Senegal":               "sn",
  "Iraque":                "iq",
  "Noruega":               "no",
  "Argentina":             "ar",
  "Argélia":               "dz",
  "Áustria":               "at",
  "Jordânia":              "jo",
  "Portugal":              "pt",
  "RD Congo":              "cd",
  "Uzbequistão":           "uz",
  "Colômbia":              "co",
  "Inglaterra":            "gb-eng",
  "Croácia":               "hr",
  "Gana":                  "gh",
  "Panamá":                "pa",
};

function flag(team) {
  const code = COUNTRY_CODES[team];
  if (!code) return "";
  return `<img class="team-flag" src="https://flagcdn.com/24x18/${code}.png" alt="${team}">`;
}

const DEFAULT_MATCHES = {
A:[
  {t1:"México",          t2:"África do Sul",       date:"Qui 11/06", time:"16h00",  city:"Cidade do México"},
  {t1:"Coreia do Sul",   t2:"República Tcheca",    date:"Qui 11/06", time:"23h00",  city:"Guadalajara"},
  {t1:"República Tcheca",t2:"África do Sul",       date:"Qui 18/06", time:"13h00",  city:"Atlanta"},
  {t1:"México",          t2:"Coreia do Sul",       date:"Qui 18/06", time:"22h00",  city:"Guadalajara"},
  {t1:"República Tcheca",t2:"México",              date:"Qua 24/06", time:"22h00",  city:"Cidade do México"},
  {t1:"África do Sul",   t2:"Coreia do Sul",       date:"Qua 24/06", time:"22h00",  city:"Monterrey"}
],
B:[
  {t1:"Canadá",               t2:"Bósnia e Herzegovina", date:"Sex 12/06", time:"16h00", city:"Toronto"},
  {t1:"Catar",                t2:"Suíça",                date:"Sáb 13/06", time:"16h00", city:"Santa Clara"},
  {t1:"Suíça",                t2:"Bósnia e Herzegovina", date:"Qui 18/06", time:"16h00", city:"Los Angeles"},
  {t1:"Canadá",               t2:"Catar",                date:"Qui 18/06", time:"19h00", city:"Vancouver"},
  {t1:"Suíça",                t2:"Canadá",               date:"Qua 24/06", time:"16h00", city:"Vancouver"},
  {t1:"Bósnia e Herzegovina", t2:"Catar",                date:"Qua 24/06", time:"16h00", city:"Seattle"}
],
C:[
  {t1:"Brasil",  t2:"Marrocos", date:"Sáb 13/06", time:"19h00", city:"Nova York/NJ"},
  {t1:"Haiti",   t2:"Escócia",  date:"Sáb 13/06", time:"22h00", city:"Boston"},
  {t1:"Escócia", t2:"Marrocos", date:"Sex 19/06", time:"19h00", city:"Boston"},
  {t1:"Brasil",  t2:"Haiti",    date:"Sex 19/06", time:"21h30", city:"Filadélfia"},
  {t1:"Escócia", t2:"Brasil",   date:"Qua 24/06", time:"19h00", city:"Miami"},
  {t1:"Marrocos",t2:"Haiti",    date:"Qua 24/06", time:"19h00", city:"Atlanta"}
],
D:[
  {t1:"Estados Unidos",t2:"Paraguai",       date:"Sex 12/06", time:"22h00",  city:"Los Angeles"},
  {t1:"Austrália",     t2:"Turquia",        date:"Dom 14/06", time:"01h00*", city:"Vancouver"},
  {t1:"Turquia",       t2:"Paraguai",       date:"Sex 19/06", time:"00h00*", city:"Santa Clara"},
  {t1:"Estados Unidos",t2:"Austrália",      date:"Sex 19/06", time:"16h00",  city:"Seattle"},
  {t1:"Turquia",       t2:"Estados Unidos", date:"Qui 25/06", time:"23h00",  city:"Los Angeles"},
  {t1:"Paraguai",      t2:"Austrália",      date:"Qui 25/06", time:"23h00",  city:"Santa Clara"}
],
E:[
  {t1:"Alemanha",       t2:"Curaçao",        date:"Dom 14/06", time:"14h00", city:"Houston"},
  {t1:"Costa do Marfim",t2:"Equador",        date:"Dom 14/06", time:"20h00", city:"Filadélfia"},
  {t1:"Alemanha",       t2:"Costa do Marfim",date:"Sáb 20/06", time:"17h00", city:"Toronto"},
  {t1:"Equador",        t2:"Curaçao",        date:"Sáb 20/06", time:"21h00", city:"Kansas City"},
  {t1:"Equador",        t2:"Alemanha",       date:"Qui 25/06", time:"17h00", city:"Nova York/NJ"},
  {t1:"Curaçao",        t2:"Costa do Marfim",date:"Qui 25/06", time:"17h00", city:"Filadélfia"}
],
F:[
  {t1:"Países Baixos",t2:"Japão",         date:"Dom 14/06", time:"17h00", city:"Dallas"},
  {t1:"Suécia",       t2:"Tunísia",       date:"Dom 14/06", time:"23h00", city:"Monterrey"},
  {t1:"Países Baixos",t2:"Suécia",        date:"Sáb 20/06", time:"14h00", city:"Houston"},
  {t1:"Tunísia",      t2:"Japão",         date:"Sáb 20/06", time:"23h00", city:"Monterrey"},
  {t1:"Japão",        t2:"Suécia",        date:"Qui 25/06", time:"20h00", city:"Dallas"},
  {t1:"Tunísia",      t2:"Países Baixos", date:"Qui 25/06", time:"20h00", city:"Kansas City"}
],
G:[
  {t1:"Bélgica",      t2:"Egito",         date:"Seg 15/06", time:"16h00",  city:"Seattle"},
  {t1:"Irã",          t2:"Nova Zelândia", date:"Seg 15/06", time:"22h00",  city:"Los Angeles"},
  {t1:"Bélgica",      t2:"Irã",           date:"Dom 21/06", time:"16h00",  city:"Los Angeles"},
  {t1:"Nova Zelândia",t2:"Egito",         date:"Dom 21/06", time:"22h00",  city:"Vancouver"},
  {t1:"Egito",        t2:"Irã",           date:"Sex 26/06", time:"00h00*", city:"Seattle"},
  {t1:"Nova Zelândia",t2:"Bélgica",       date:"Sex 26/06", time:"00h00*", city:"Vancouver"}
],
H:[
  {t1:"Espanha",       t2:"Cabo Verde",    date:"Seg 15/06", time:"13h00", city:"Atlanta"},
  {t1:"Arábia Saudita",t2:"Uruguai",       date:"Seg 15/06", time:"19h00", city:"Miami"},
  {t1:"Espanha",       t2:"Arábia Saudita",date:"Dom 21/06", time:"13h00", city:"Atlanta"},
  {t1:"Uruguai",       t2:"Cabo Verde",    date:"Dom 21/06", time:"19h00", city:"Miami"},
  {t1:"Cabo Verde",    t2:"Arábia Saudita",date:"Sex 26/06", time:"21h00", city:"Houston"},
  {t1:"Uruguai",       t2:"Espanha",       date:"Sex 26/06", time:"21h00", city:"Guadalajara"}
],
I:[
  {t1:"França",  t2:"Senegal", date:"Ter 16/06", time:"16h00", city:"Nova York/NJ"},
  {t1:"Iraque",  t2:"Noruega", date:"Ter 16/06", time:"19h00", city:"Boston"},
  {t1:"França",  t2:"Iraque",  date:"Seg 22/06", time:"18h00", city:"Filadélfia"},
  {t1:"Noruega", t2:"Senegal", date:"Seg 22/06", time:"21h00", city:"Nova York/NJ"},
  {t1:"Noruega", t2:"França",  date:"Sex 26/06", time:"16h00", city:"Boston"},
  {t1:"Senegal", t2:"Iraque",  date:"Sex 26/06", time:"16h00", city:"Toronto"}
],
J:[
  {t1:"Argentina",t2:"Argélia",  date:"Ter 16/06", time:"22h00",  city:"Kansas City"},
  {t1:"Áustria",  t2:"Jordânia", date:"Qua 17/06", time:"01h00*", city:"Santa Clara"},
  {t1:"Argentina",t2:"Áustria",  date:"Seg 22/06", time:"14h00",  city:"Dallas"},
  {t1:"Jordânia", t2:"Argélia",  date:"Ter 23/06", time:"00h00*", city:"Santa Clara"},
  {t1:"Argélia",  t2:"Áustria",  date:"Sáb 27/06", time:"23h00",  city:"Kansas City"},
  {t1:"Jordânia", t2:"Argentina",date:"Sáb 27/06", time:"23h00",  city:"Dallas"}
],
K:[
  {t1:"Portugal",    t2:"RD Congo",    date:"Qua 17/06", time:"14h00", city:"Houston"},
  {t1:"Uzbequistão", t2:"Colômbia",    date:"Qua 17/06", time:"21h00", city:"Cidade do México"},
  {t1:"Portugal",    t2:"Uzbequistão", date:"Ter 23/06", time:"14h00", city:"Houston"},
  {t1:"Colômbia",    t2:"RD Congo",    date:"Ter 23/06", time:"23h00", city:"Guadalajara"},
  {t1:"Colômbia",    t2:"Portugal",    date:"Sáb 27/06", time:"20h30", city:"Miami"},
  {t1:"RD Congo",    t2:"Uzbequistão", date:"Sáb 27/06", time:"20h30", city:"Atlanta"}
],
L:[
  {t1:"Inglaterra",t2:"Croácia",   date:"Qua 17/06", time:"17h00", city:"Dallas"},
  {t1:"Gana",      t2:"Panamá",    date:"Qua 17/06", time:"20h00", city:"Toronto"},
  {t1:"Inglaterra",t2:"Gana",      date:"Ter 23/06", time:"17h00", city:"Boston"},
  {t1:"Panamá",    t2:"Croácia",   date:"Ter 23/06", time:"20h00", city:"Toronto"},
  {t1:"Panamá",    t2:"Inglaterra",date:"Sáb 27/06", time:"18h00", city:"Nova York/NJ"},
  {t1:"Croácia",   t2:"Gana",      date:"Sáb 27/06", time:"18h00", city:"Filadélfia"}
]
};

const KO_INFO = {
  "32":[
    {date:"Dom 28/06", time:"22h00", city:"Los Angeles"},
    {date:"Seg 29/06", time:"16h00", city:"Boston"},
    {date:"Seg 29/06", time:"16h00", city:"Monterrey"},
    {date:"Seg 29/06", time:"19h00", city:"Houston"},
    {date:"Ter 30/06", time:"17h00", city:"Nova York/NJ"},
    {date:"Ter 30/06", time:"19h00", city:"Dallas"},
    {date:"Ter 30/06", time:"22h00", city:"Cidade do México"},
    {date:"Qua 01/07", time:"13h00", city:"Atlanta"},
    {date:"Qua 01/07", time:"16h00", city:"Santa Clara"},
    {date:"Qua 01/07", time:"16h00", city:"Seattle"},
    {date:"Qui 02/07", time:"16h00", city:"Toronto"},
    {date:"Qui 02/07", time:"17h00", city:"Los Angeles"},
    {date:"Qui 02/07", time:"19h00", city:"Vancouver"},
    {date:"Sex 03/07", time:"17h00", city:"Miami"},
    {date:"Sex 03/07", time:"19h00", city:"Kansas City"},
    {date:"Sex 03/07", time:"20h00", city:"Dallas"}
  ],
  "16":[
    {date:"Sáb 04/07", time:"17h00", city:"Filadélfia"},
    {date:"Sáb 04/07", time:"20h00", city:"Houston"},
    {date:"Dom 05/07", time:"17h00", city:"Nova York/NJ"},
    {date:"Dom 05/07", time:"19h00", city:"Cidade do México"},
    {date:"Seg 06/07", time:"17h00", city:"Dallas"},
    {date:"Seg 06/07", time:"20h00", city:"Seattle"},
    {date:"Ter 07/07", time:"17h00", city:"Atlanta"},
    {date:"Ter 07/07", time:"19h00", city:"Vancouver"}
  ],
  "8":[
    {date:"Qui 09/07", time:"17h00", city:"Boston"},
    {date:"Sex 10/07", time:"17h00", city:"Los Angeles"},
    {date:"Sáb 12/07", time:"17h00", city:"Miami"},
    {date:"Sáb 12/07", time:"21h00", city:"Kansas City"}
  ],
  "4":[
    {date:"Ter 14/07", time:"17h00", city:"Dallas"},
    {date:"Qua 15/07", time:"17h00", city:"Atlanta"}
  ],
  "3":[
    {date:"Sáb 18/07", time:"17h00", city:"Miami"}
  ],
  "final":[
    {date:"Dom 19/07", time:"17h00", city:"Nova York/NJ"}
  ]
};

let matches = {};
let knockout = {};

const DATA_VERSION = "1.0.0";

function save(){
  const saveData = { version: DATA_VERSION, matches, knockout };
  localStorage.setItem("appData", JSON.stringify(saveData));
}

function load(){
  const savedData = localStorage.getItem("appData");
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    if (parsedData.version && parsedData.version === DATA_VERSION) {
      matches = parsedData.matches || JSON.parse(JSON.stringify(DEFAULT_MATCHES));
      knockout = parsedData.knockout || {};
    } else {
      resetToDefault();
    }
  } else {
    resetToDefault();
  }
}

function resetToDefault() {
  matches = JSON.parse(JSON.stringify(DEFAULT_MATCHES));
  knockout = {};
  save();
}

function clearGroup(group){
  matches[group].forEach(g=>{ delete g.g1; delete g.g2; });
  save(); render();
}

function clearPhase(phase){
  knockout[phase]?.forEach(g=>{ delete g.g1; delete g.g2; });
  save(); render();
}

function update(group,i,side,val){
  matches[group][i][side===0?"g1":"g2"]=val===""?null:parseInt(val);
  save(); render();
}

function updateKO(phase,i,side,val){
  knockout[phase][i][side===0?"g1":"g2"]=val===""?null:parseInt(val);
  save(); render();
}

function calc(group){
  const table={};
  matches[group].forEach(g=>{
    [g.t1,g.t2].forEach(t=>{ if(!table[t]) table[t]={pts:0,gf:0,ga:0}; });
    if(g.g1!=null && g.g2!=null){
      table[g.t1].gf+=g.g1; table[g.t1].ga+=g.g2;
      table[g.t2].gf+=g.g2; table[g.t2].ga+=g.g1;
      if(g.g1>g.g2) table[g.t1].pts+=3;
      else if(g.g2>g.g1) table[g.t2].pts+=3;
      else{ table[g.t1].pts++; table[g.t2].pts++; }
    }
  });
  return Object.entries(table)
    .map(([t,v])=>({...v,time:t,sg:v.gf-v.ga}))
    .sort((a,b)=>b.pts-a.pts||b.sg-a.sg||b.gf-a.gf);
}

function getWinner(game){
  if(game?.g1==null||game?.g2==null) return "---";
  return game.g1>game.g2 ? game.t1 : game.t2;
}

function getLoser(game){
  if(game?.g1==null||game?.g2==null) return "---";
  return game.g1<game.g2 ? game.t1 : game.t2;
}

function getBestThirds(){
  let thirds=[];
  Object.keys(matches).forEach(g=>{ const res=calc(g); if(res[2]) thirds.push(res[2]); });
  return thirds.sort((a,b)=>b.pts-a.pts||b.sg-a.sg||b.gf-a.gf).slice(0,8);
}

function teamLabel(name){
  return `<span class="team-label">${flag(name)}<span class="team-name">${name}</span></span>`;
}

function createGroup(name,games){
  const div=document.createElement("div");
  div.className="card";
  let html=`<h3>Grupo ${name}</h3>`;
  games.forEach((g,i)=>{
    html+=`
    <div class="match-meta">${g.date} · ${g.time} (Brasília) · ${g.city}</div>
    <div class="match">
      ${teamLabel(g.t1)}
      <input value="${g.g1??''}" onchange="update('${name}',${i},0,this.value)">
      <span class="vs">x</span>
      <input value="${g.g2??''}" onchange="update('${name}',${i},1,this.value)">
      ${teamLabel(g.t2)}
    </div>`;
  });
  html+=`<button onclick="clearGroup('${name}')">Limpar</button>
  <div class="standings" id="stand-${name}"></div>`;
  div.innerHTML=html;
  return div;
}

function buildPhase(name,teams){
  if(!knockout[name]){
    knockout[name]=[];
    for(let i=0;i<teams.length;i+=2){
      knockout[name].push({ t1:teams[i], t2:teams[i+1] });
    }
  }
}

function createPhase(name,title,jogoInicial){
  const container=document.getElementById("phase32");
  const h=document.createElement("h2");
  h.innerText=title;
  container.appendChild(h);

  knockout[name].forEach((g,i)=>{
    const info=KO_INFO[name]?.[i];
    const div=document.createElement("div");
    div.className="card";
    div.innerHTML=`
      <h3>${title} - Jogo ${jogoInicial+i}</h3>
      ${info?`<div class="match-meta">${info.date} · ${info.time} (Brasília) · ${info.city}</div>`:""}
      <div class="match">
        ${teamLabel(g.t1)}
        <input value="${g.g1??''}" onchange="updateKO('${name}',${i},0,this.value)">
        <span class="vs">x</span>
        <input value="${g.g2??''}" onchange="updateKO('${name}',${i},1,this.value)">
        ${teamLabel(g.t2)}
      </div>`;
    container.appendChild(div);
  });

  const btn=document.createElement("button");
  btn.innerText="Limpar";
  btn.onclick=()=>clearPhase(name);
  container.appendChild(btn);
}

function generateKnockout(){
  const standings={};
  Object.keys(matches).forEach(g=>standings[g]=calc(g));
  const thirds=getBestThirds();

  const phase32Teams=[
    standings.A?.[1]?.time, standings.B?.[1]?.time,
    standings.E?.[0]?.time, thirds[0]?.time,
    standings.F?.[0]?.time, standings.C?.[1]?.time,
    standings.C?.[0]?.time, standings.F?.[1]?.time,
    standings.I?.[0]?.time, thirds[1]?.time,
    standings.E?.[1]?.time, standings.I?.[1]?.time,
    standings.A?.[0]?.time, thirds[2]?.time,
    standings.L?.[0]?.time, thirds[3]?.time,
    standings.D?.[0]?.time, thirds[4]?.time,
    standings.G?.[0]?.time, thirds[5]?.time,
    standings.K?.[1]?.time, standings.L?.[1]?.time,
    standings.H?.[0]?.time, standings.J?.[1]?.time,
    standings.B?.[0]?.time, thirds[6]?.time,
    standings.J?.[0]?.time, standings.H?.[1]?.time,
    standings.K?.[0]?.time, thirds[7]?.time,
    standings.D?.[1]?.time, standings.G?.[1]?.time
  ];

  buildPhase("32",phase32Teams);
  buildPhase("16",knockout["32"].map(getWinner));
  buildPhase("8",knockout["16"].map(getWinner));
  buildPhase("4",knockout["8"].map(getWinner));
  buildPhase("3",[...knockout["4"].map(getLoser)]);
  buildPhase("final",knockout["4"].map(getWinner));

  const div=document.getElementById("phase32");
  div.innerHTML="";

  createPhase("32","32-avos",73);
  createPhase("16","Oitavas",89);
  createPhase("8","Quartas",97);
  createPhase("4","Semifinais",101);
  createPhase("3","3º Lugar",103);
  createPhase("final","Final",104);
}

function render(){
  const app=document.getElementById("app");
  app.innerHTML="";
  Object.entries(matches).forEach(([g,games])=>{
    app.appendChild(createGroup(g,games));
    const res=calc(g);
    document.getElementById("stand-"+g).innerHTML=
      res.map((t,i)=>`<div class="stand-row">${i+1}º ${flag(t.time)} <strong>${t.time}</strong> — ${t.pts} pts · SG ${t.sg>=0?"+":""}${t.sg} · ${t.gf} gols</div>`).join("");
  });
  generateKnockout();
}

function init(){ load(); render(); }
init();