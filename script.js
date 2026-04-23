const groups = {
  "A": ["México","África do Sul","Coreia do Sul","República Tcheca"],
  "B": ["Canadá","Catar","Suíça","Bósnia"],
  "C": ["Brasil","Marrocos","Haiti","Escócia"],
  "D": ["Estados Unidos","Paraguai","Austrália","Turquia"],
  "E": ["Alemanha","Curaçao","Costa do Marfim","Equador"],
  "F": ["Países Baixos","Japão","Tunísia","Suécia"],
  "G": ["Bélgica","Egito","Irã","Nova Zelândia"],
  "H": ["Espanha","Cabo Verde","Arábia Saudita","Uruguai"],
  "I": ["França","Senegal","Noruega","Iraque"],
  "J": ["Argentina","Argélia","Áustria","Jordânia"],
  "K": ["Portugal","Uzbequistão","Colômbia","RD Congo"],
  "L": ["Inglaterra","Croácia","Gana","Panamá"]
};

let matches = {};

function generateMatches() {
  Object.entries(groups).forEach(([g, teams]) => {
    matches[g] = [];

    for (let i = 0; i < teams.length; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        matches[g].push({
          t1: teams[i],
          t2: teams[j],
          date: `${10 + i + j}/06`,
          time: `${14 + i * 2}:00`
        });
      }
    }
  });
}

function save() {
  localStorage.setItem("matches", JSON.stringify(matches));
}

function load() {
  const data = localStorage.getItem("matches");
  if (data) matches = JSON.parse(data);
}

function clearGroup(group) {
  matches[group].forEach(g => {
    delete g.g1;
    delete g.g2;
  });
  save();
  render();
}

function createGroup(name, games) {
  games.sort((a,b)=>{
    return new Date(`2026-${a.date.split("/").reverse().join("-")}T${a.time}`) -
           new Date(`2026-${b.date.split("/").reverse().join("-")}T${b.time}`);
  });

  const div = document.createElement("div");
  div.className = "card";

  let html = `<h3>Grupo ${name}</h3>`;

  games.forEach((g,i)=>{
    html += `
    <div class="match">
      ${g.date} ${g.time}<br>
      ${g.t1}
      <input onchange="update('${name}',${i},0,this.value)" value="${g.g1 ?? ''}">
      x
      <input onchange="update('${name}',${i},1,this.value)" value="${g.g2 ?? ''}">
      ${g.t2}
    </div>`;
  });

  html += `
    <button class="clear-btn" onclick="clearGroup('${name}')">Limpar</button>
    <div class="standings" id="stand-${name}"></div>`;

  div.innerHTML = html;
  return div;
}

function update(group,i,side,val){
  if(val === "") {
    if(side===0) delete matches[group][i].g1;
    else delete matches[group][i].g2;
  } else {
    if(side===0) matches[group][i].g1 = parseInt(val);
    else matches[group][i].g2 = parseInt(val);
  }

  save();
  render();
}

function calc(group){
  const table = {};

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
      else {
        table[g.t1].pts++;
        table[g.t2].pts++;
      }
    }
  });

  const sorted = Object.entries(table)
    .map(([t,v])=>({...v,time:t,sg:v.gf-v.ga}))
    .sort((a,b)=>b.pts-a.pts || b.sg-a.sg || b.gf-a.gf);

  return sorted;
}

function generateKnockout(){
  let classificados = [];

  Object.keys(matches).forEach(g=>{
    const res = calc(g);
    if(res.length >= 2) {
      classificados.push(res[0].time, res[1].time);
    }
  });

  const div = document.getElementById("knockout");
  div.innerHTML = "";

  for(let i=0;i<classificados.length;i+=2){
    if(classificados[i+1]){
      div.innerHTML += `<div>${classificados[i]} x ${classificados[i+1]}</div>`;
    }
  }
}

function render(){
  const app = document.getElementById("app");
  app.innerHTML = "";

  Object.entries(matches).forEach(([g, games])=>{
    app.appendChild(createGroup(g,games));

    const res = calc(g);
    document.getElementById("stand-"+g).innerHTML =
      res.map(t=>`${t.time} - ${t.pts} pts`).join("<br>");
  });

  generateKnockout();
}

function init(){
  load();
  if(Object.keys(matches).length===0) generateMatches();
  render();
}

init();