const DEFAULT_MATCHES = {
A:[{t1:"México",t2:"África do Sul"},{t1:"Coreia do Sul",t2:"República Tcheca"}],
B:[{t1:"Canadá",t2:"Bósnia e Herzegovina"},{t1:"Catar",t2:"Suíça"}],
C:[{t1:"Brasil",t2:"Marrocos"},{t1:"Haiti",t2:"Escócia"}],
D:[{t1:"Estados Unidos",t2:"Paraguai"},{t1:"Austrália",t2:"Turquia"}],
E:[{t1:"Alemanha",t2:"Curaçao"}],
F:[{t1:"Países Baixos",t2:"Japão"}],
G:[{t1:"Bélgica",t2:"Egito"}],
H:[{t1:"Espanha",t2:"Cabo Verde"}],
I:[{t1:"França",t2:"Senegal"}],
J:[{t1:"Argentina",t2:"Argélia"}],
K:[{t1:"Portugal",t2:"Repescagem 1"}],
L:[{t1:"Inglaterra",t2:"Croácia"}]
};

let matches = {};
let knockout = {};

// ================= STORAGE =================
function save(){
  localStorage.setItem("matches", JSON.stringify(matches));
  localStorage.setItem("knockout", JSON.stringify(knockout));
}

function load(){
  matches = JSON.parse(localStorage.getItem("matches")) || JSON.parse(JSON.stringify(DEFAULT_MATCHES));
  knockout = JSON.parse(localStorage.getItem("knockout")) || {};
}

// ================= LIMPAR =================
function clearGroup(group){
  matches[group].forEach(g=>{
    delete g.g1;
    delete g.g2;
  });
  save();
  render();
}

function clearPhase(phase){
  knockout[phase]?.forEach(g=>{
    delete g.g1;
    delete g.g2;
  });
  save();
  render();
}

// ================= UPDATE =================
function update(group,i,side,val){
  matches[group][i][side===0?"g1":"g2"]=val===""?null:parseInt(val);
  save();
  render();
}

function updateKO(phase,i,side,val){
  knockout[phase][i][side===0?"g1":"g2"]=val===""?null:parseInt(val);
  save();
  render();
}

// ================= CLASSIFICAÇÃO =================
function calc(group){
  const table={};

  matches[group].forEach(g=>{
    [g.t1,g.t2].forEach(t=>{
      if(!table[t]) table[t]={pts:0,gf:0,ga:0};
    });

    if(g.g1!=null && g.g2!=null){
      table[g.t1].gf+=g.g1;
      table[g.t1].ga+=g.g2;
      table[g.t2].gf+=g.g2;
      table[g.t2].ga+=g.g1;

      if(g.g1>g.g2) table[g.t1].pts+=3;
      else if(g.g2>g.g1) table[g.t2].pts+=3;
      else{
        table[g.t1].pts++;
        table[g.t2].pts++;
      }
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

// ================= MELHORES TERCEIROS =================
function getBestThirds(){
  let thirds=[];

  Object.keys(matches).forEach(g=>{
    const res=calc(g);
    if(res[2]) thirds.push(res[2]);
  });

  return thirds.sort((a,b)=>b.pts-a.pts||b.sg-a.sg||b.gf-a.gf).slice(0,8);
}

// ================= GRUPOS =================
function createGroup(name,games){
  const div=document.createElement("div");
  div.className="card";

  let html=`<h3>Grupo ${name}</h3>`;

  games.forEach((g,i)=>{
    html+=`
    <div class="match">
      ${g.t1}
      <input value="${g.g1??''}" onchange="update('${name}',${i},0,this.value)">
      x
      <input value="${g.g2??''}" onchange="update('${name}',${i},1,this.value)">
      ${g.t2}
    </div>`;
  });

  html+=`<button onclick="clearGroup('${name}')">Limpar</button>
  <div class="standings" id="stand-${name}"></div>`;

  div.innerHTML=html;
  return div;
}

// ================= FASES =================
function buildPhase(name,teams){
  if(!knockout[name]){
    knockout[name]=[];

    for(let i=0;i<teams.length;i+=2){
      knockout[name].push({
        t1:teams[i],
        t2:teams[i+1]
      });
    }
  }
}

function createPhase(name,title){
  const container=document.getElementById("phase32");

  const h=document.createElement("h2");
  h.innerText=title;
  container.appendChild(h);

  knockout[name].forEach((g,i)=>{
    const div=document.createElement("div");
    div.className="card";

    div.innerHTML=`
      <h3>${title} ${i+1}</h3>
      <div class="match">
        ${g.t1}
        <input value="${g.g1??''}" onchange="updateKO('${name}',${i},0,this.value)">
        x
        <input value="${g.g2??''}" onchange="updateKO('${name}',${i},1,this.value)">
        ${g.t2}
      </div>
    `;

    container.appendChild(div);
  });

  const btn=document.createElement("button");
  btn.innerText="Limpar";
  btn.onclick=()=>clearPhase(name);
  container.appendChild(btn);
}

// ================= KNOCKOUT =================
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

  createPhase("32","32-avos");
  createPhase("16","Oitavas");
  createPhase("8","Quartas");
  createPhase("4","Semifinais");
  createPhase("3","3º Lugar");
  createPhase("final","Final");
}

// ================= RENDER =================
function render(){
  const app=document.getElementById("app");
  app.innerHTML="";

  Object.entries(matches).forEach(([g,games])=>{
    app.appendChild(createGroup(g,games));

    const res=calc(g);
    document.getElementById("stand-"+g).innerHTML=
      res.map((t,i)=>`${i+1}º ${t.time} - ${t.pts} pts`).join("<br>");
  });

  generateKnockout();
}

// ================= INIT =================
function init(){
  load();
  render();
}

init();
