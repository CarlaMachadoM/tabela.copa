const DEFAULT_MATCHES = {
"A":[
{t1:"México",t2:"África do Sul",date:"11/06",time:"16:00"},
{t1:"Coreia do Sul",t2:"República Tcheca",date:"11/06",time:"23:00"},
{t1:"República Tcheca",t2:"África do Sul",date:"18/06",time:"13:00"},
{t1:"México",t2:"Coreia do Sul",date:"18/06",time:"22:00"},
{t1:"República Tcheca",t2:"México",date:"24/06",time:"22:00"},
{t1:"África do Sul",t2:"Coreia do Sul",date:"24/06",time:"22:00"}
],
"B":[
{t1:"Canadá",t2:"Bósnia e Herzegovina",date:"12/06",time:"16:00"},
{t1:"Catar",t2:"Suíça",date:"13/06",time:"16:00"},
{t1:"Suíça",t2:"Canadá",date:"18/06",time:"16:00"},
{t1:"Canadá",t2:"Catar",date:"18/06",time:"19:00"},
{t1:"Suíça",t2:"Canadá",date:"24/06",time:"16:00"},
{t1:"Bósnia e Herzegovina",t2:"Catar",date:"24/06",time:"16:00"}
],
"C":[
{t1:"Brasil",t2:"Marrocos",date:"13/06",time:"19:00"},
{t1:"Haiti",t2:"Escócia",date:"13/06",time:"22:00"},
{t1:"Escócia",t2:"Marrocos",date:"19/06",time:"19:00"},
{t1:"Brasil",t2:"Haiti",date:"19/06",time:"21:30"},
{t1:"Escócia",t2:"Brasil",date:"24/06",time:"19:00"},
{t1:"Marrocos",t2:"Haiti",date:"24/06",time:"19:00"}
],
"D":[
{t1:"Estados Unidos",t2:"Paraguai",date:"12/06",time:"22:00"},
{t1:"Austrália",t2:"Turquia",date:"13/06",time:"01:00"},
{t1:"Turquia",t2:"Paraguai",date:"19/06",time:"01:00"},
{t1:"Estados Unidos",t2:"Austrália",date:"19/06",time:"16:00"},
{t1:"Turquia",t2:"Estados Unidos",date:"25/06",time:"23:00"},
{t1:"Paraguai",t2:"Austrália",date:"25/06",time:"23:00"}
],
"E":[
{t1:"Alemanha",t2:"Curaçao",date:"14/06",time:"14:00"},
{t1:"Costa do Marfim",t2:"Equador",date:"14/06",time:"20:00"},
{t1:"Alemanha",t2:"Costa do Marfim",date:"20/06",time:"17:00"},
{t1:"Equador",t2:"Curaçao",date:"20/06",time:"21:00"},
{t1:"Equador",t2:"Alemanha",date:"25/06",time:"17:00"},
{t1:"Curaçao",t2:"Costa do Marfim",date:"25/06",time:"17:00"}
],
"F":[
{t1:"Países Baixos",t2:"Japão",date:"14/06",time:"17:00"},
{t1:"Suécia",t2:"Tunísia",date:"14/06",time:"23:00"},
{t1:"Países Baixos",t2:"Suécia",date:"20/06",time:"14:00"},
{t1:"Tunísia",t2:"Japão",date:"20/06",time:"01:00"},
{t1:"Japão",t2:"Suécia",date:"25/06",time:"20:00"},
{t1:"Tunísia",t2:"Países Baixos",date:"25/06",time:"20:00"}
],
"G":[
{t1:"Bélgica",t2:"Egito",date:"15/06",time:"16:00"},
{t1:"Irã",t2:"Nova Zelândia",date:"15/06",time:"22:00"},
{t1:"Bélgica",t2:"Irã",date:"21/06",time:"16:00"},
{t1:"Nova Zelândia",t2:"Egito",date:"21/06",time:"22:00"},
{t1:"Egito",t2:"Irã",date:"26/06",time:"00:00"},
{t1:"Nova Zelândia",t2:"Bélgica",date:"26/06",time:"00:00"}
],
"H":[
{t1:"Espanha",t2:"Cabo Verde",date:"15/06",time:"13:00"},
{t1:"Arábia Saudita",t2:"Uruguai",date:"15/06",time:"19:00"},
{t1:"Espanha",t2:"Arábia Saudita",date:"21/06",time:"13:00"},
{t1:"Uruguai",t2:"Cabo Verde",date:"21/06",time:"19:00"},
{t1:"Cabo Verde",t2:"Arábia Saudita",date:"26/06",time:"21:00"},
{t1:"Uruguai",t2:"Espanha",date:"26/06",time:"21:00"}
],
"I":[
{t1:"França",t2:"Senegal",date:"16/06",time:"16:00"},
{t1:"Repescagem 2",t2:"Noruega",date:"16/06",time:"19:00"},
{t1:"França",t2:"Repescagem 2",date:"22/06",time:"18:00"},
{t1:"Noruega",t2:"Senegal",date:"22/06",time:"21:00"},
{t1:"Noruega",t2:"França",date:"26/06",time:"16:00"},
{t1:"Senegal",t2:"Repescagem 2",date:"26/06",time:"16:00"}
],
"J":[
{t1:"Argentina",t2:"Argélia",date:"16/06",time:"22:00"},
{t1:"Áustria",t2:"Jordânia",date:"17/06",time:"01:00"},
{t1:"Argentina",t2:"Áustria",date:"22/06",time:"14:00"},
{t1:"Jordânia",t2:"Argélia",date:"22/06",time:"00:00"},
{t1:"Argélia",t2:"Áustria",date:"27/06",time:"23:00"},
{t1:"Jordânia",t2:"Argentina",date:"27/06",time:"23:00"}
],
"K":[
{t1:"Portugal",t2:"Repescagem 1",date:"17/06",time:"14:00"},
{t1:"Uzbequistão",t2:"Colômbia",date:"17/06",time:"23:00"},
{t1:"Portugal",t2:"Uzbequistão",date:"23/06",time:"14:00"},
{t1:"Colômbia",t2:"Repescagem 1",date:"23/06",time:"23:00"},
{t1:"Colômbia",t2:"Portugal",date:"27/06",time:"20:30"},
{t1:"RD Congo",t2:"Uzbequistão",date:"27/06",time:"20:30"}
],
"L":[
{t1:"Inglaterra",t2:"Croácia",date:"17/06",time:"17:00"},
{t1:"Gana",t2:"Panamá",date:"17/06",time:"20:00"},
{t1:"Inglaterra",t2:"Gana",date:"23/06",time:"17:00"},
{t1:"Panamá",t2:"Croácia",date:"23/06",time:"20:00"},
{t1:"Panamá",t2:"Inglaterra",date:"27/06",time:"18:00"},
{t1:"Croácia",t2:"Gana",date:"27/06",time:"19:00"}
]
};

let matches = {};

function save(){
  localStorage.setItem("matches", JSON.stringify(matches));
}

function load(){
  const data = localStorage.getItem("matches");

  if(data){
    matches = JSON.parse(data); // 🔥 CORREÇÃO PRINCIPAL
  } else {
    matches = JSON.parse(JSON.stringify(DEFAULT_MATCHES));
    save();
  }
}


function clearGroup(group){
  matches[group].forEach(g=>{
    delete g.g1;
    delete g.g2;
  });
  save();
  render();
}

function createGroup(name,games){

  games.sort((a,b)=>{
    return new Date(`2026-${a.date.split("/").reverse().join("-")}T${a.time}`) -
           new Date(`2026-${b.date.split("/").reverse().join("-")}T${b.time}`);
  });

  const div = document.createElement("div");
  div.className="card";

  let html = `<h3>Grupo ${name}</h3>`;

  games.forEach((g,i)=>{
    html += `
    <div class="match">
      ${g.date} ${g.time}<br>
      ${g.t1}
      <input value="${g.g1 ?? ''}" onchange="update('${name}',${i},0,this.value)">
      x
      <input value="${g.g2 ?? ''}" onchange="update('${name}',${i},1,this.value)">
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

  if(val===""){
    if(side===0) delete matches[group][i].g1;
    else delete matches[group][i].g2;
  } else {
    if(side===0) matches[group][i].g1 = parseInt(val);
    else matches[group][i].g2 = parseInt(val);
  }

  save(); // 🔥 ESSENCIAL
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

  return Object.entries(table)
    .map(([t,v])=>({...v,time:t,sg:v.gf-v.ga}))
    .sort((a,b)=>b.pts-a.pts || b.sg-a.sg || b.gf-a.gf);
}


function generateKnockout(){
  let classificados=[];

  Object.keys(matches).forEach(g=>{
    const res = calc(g);
    if(res.length>=2){
      classificados.push(res[0].time,res[1].time);
    }
  });

  const div=document.getElementById("knockout");
  div.innerHTML="";

  for(let i=0;i<classificados.length;i+=2){
    if(classificados[i+1]){
      div.innerHTML += `<div>${classificados[i]} x ${classificados[i+1]}</div>`;
    }
  }
}


function render(){
  const app=document.getElementById("app");
  app.innerHTML="";

  Object.entries(matches).forEach(([g,games])=>{
    app.appendChild(createGroup(g,games));

    const res = calc(g);
    document.getElementById("stand-"+g).innerHTML =
      res.map(t=>`${t.time} - ${t.pts} pts`).join("<br>");
  });

  generateKnockout();
}


function init(){
  load();
  render();
}

init();