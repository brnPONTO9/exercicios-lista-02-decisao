// Utilitários
function val(id){const e=document.getElementById(id); return e.value.trim();}
function num(id){const v=val(id); if(v==="") return null; return Number(v);}
function out(id,msg){document.getElementById(id).textContent = msg;}

// 1) Maioridade
function l2e1(){
  const i = num("l2e1");
  if(i===null || i<0) return out("o1","Informe uma idade válida.");
  out("o1", i>=18 ? "Maior de idade" : "Menor de idade");
}

// 2) Mais velho entre dois
function l2e2(){
  const n1 = val("l2e2n1"), i1 = num("l2e2i1");
  const n2 = val("l2e2n2"), i2 = num("l2e2i2");
  if(!n1 || i1===null || !n2 || i2===null) return out("o2","Preencha todos os campos.");
  if(i1===i2) return out("o2", `${n1} e ${n2} têm a mesma idade (${i1})`);
  out("o2", i1>i2 ? `${n1} é mais velho(a).` : `${n2} é mais velho(a).`);
}

// 3) Positivo, negativo ou zero
function l2e3(){
  const x = num("l2e3"); if(x===null) return out("o3","Informe um número.");
  out("o3", x>0 ? "Positivo" : x<0 ? "Negativo" : "Zero");
}

// 4) Faixa etária (criança/adolescente/adulto/idoso)
function l2e4(){
  const i = num("l2e4"); if(i===null || i<0) return out("o4","Informe idade válida.");
  let s;
  if(i<=12) s="Criança";
  else if(i<=17) s="Adolescente";
  else if(i<=59) s="Adulto";
  else s="Idoso";
  out("o4", s);
}

// 5) Maior de dois inteiros
function l2e5(){
  const a = num("l2e5a"), b = num("l2e5b");
  if(a===null || b===null) return out("o5","Informe A e B.");
  if(a===b) return out("o5", "São iguais.");
  out("o5", `Maior: ${a>b ? a : b}`);
}

// 6) Média 3 notas, aprovação (≥7)
function l2e6(){
  const a = num("l2e6a"), b = num("l2e6b"), c = num("l2e6c");
  if([a,b,c].some(v=>v===null)) return out("o6","Informe as três notas.");
  const m = (a+b+c)/3;
  out("o6", `Média = ${m.toFixed(2)} • ${m>=7 ? "Aprovado" : "Reprovado"}`);
}

// 7) Par ou ímpar
function l2e7(){
  const x = num("l2e7"); if(x===null) return out("o7","Informe um inteiro.");
  out("o7", x%2===0 ? "Par" : "Ímpar");
}

// 8) Bônus conforme salário
function l2e8(){
  const s = num("l2e8"); if(s===null || s<0) return out("o8","Informe salário válido.");
  const taxa = s>2000 ? 0.10 : 0.05;
  const bonus = s*taxa;
  out("o8", `Bônus: R$ ${bonus.toFixed(2)} (${(taxa*100).toFixed(0)}%)`);
}

// 9) Dias do mês
function l2e9(){
  const m = val("l2e9").toLowerCase();
  if(!m) return out("o9","Informe um mês.");
  const mapa = {
    "janeiro":31,"fevereiro":28,"março":31,"marco":31,"abril":30,"maio":31,"junho":30,
    "julho":31,"agosto":31,"setembro":30,"outubro":31,"novembro":30,"dezembro":31
  };
  if(!(m in mapa)) return out("o9","Mês inválido.");
  out("o9", `${m.charAt(0).toUpperCase()+m.slice(1)} tem ${mapa[m]} dias.`);
}

// 10) Ordenar três inteiros (crescente)
function l2e10(){
  const a = num("l2e10a"), b = num("l2e10b"), c = num("l2e10c");
  if([a,b,c].some(v=>v===null)) return out("o10","Informe A, B e C.");
  const arr = [a,b,c].sort((x,y)=>x-y);
  out("o10", arr.join(" < "));
}

// 11) Situação por faltas (>15 reprova)
function l2e11(){
  const f = num("l2e11"); if(f===null || f<0) return out("o11","Informe faltas válidas.");
  out("o11", f>15 ? "Reprovado por falta" : "Situação regular");
}

// 12) Total por código e quantidade
function l2e12(){
  const cod = val("l2e12cod");
  const qtd = num("l2e12qtd");
  if(qtd===null || qtd<=0) return out("o12","Informe uma quantidade válida.");
  const tabela = {
    "1": {nome:"Caneta", preco:2.50},
    "2": {nome:"Caderno", preco:15.90},
    "3": {nome:"Mochila", preco:120.00},
    "4": {nome:"Livro", preco:38.00},
    "5": {nome:"Garrafa", preco:25.00},
  };
  const p = tabela[cod];
  const total = p.preco*qtd;
  out("o12", `Produto: ${p.nome} • Qtd: ${qtd} • Total: R$ ${total.toFixed(2)}`);
}

// 13) Aposentadoria (M≥65, F≥60)
function l2e13(){
  const i = num("l2e13i"); const s = val("l2e13s");
  if(i===null || i<0 || !s) return out("o13","Preencha idade e sexo.");
  const pode = (s==="M" && i>=65) || (s==="F" && i>=60);
  out("o13", pode ? "Pode se aposentar." : "Ainda não pode se aposentar.");
}

// 14) IMC e classe
function l2e14(){
  const p = num("l2e14p"), a = num("l2e14a");
  if(p===null || a===null || a<=0) return out("o14","Informe peso e altura válidos.");
  const imc = p/(a*a);
  let cls;
  if(imc < 18.5) cls="Abaixo do peso";
  else if(imc < 25) cls="Peso normal";
  else if(imc < 30) cls="Sobrepeso";
  else cls="Obesidade";
  out("o14", `IMC = ${imc.toFixed(2)} (${cls})`);
}

// 15) Situação por nota (≥7 aprovado; senão recuperação)
function l2e15(){
  const n = val("l2e15n"); const nota = num("l2e15x");
  if(!n || nota===null) return out("o15","Informe nome e nota.");
  out("o15", `${n}: ${nota>=7 ? "Aprovado" : "Recuperação"}`);
}

// 16) Maçãs: preço por faixa
function l2e16(){
  const q = num("l2e16q"); if(q===null || q<=0) return out("o16","Informe quantidade válida.");
  const preco = q>=12 ? 0.40 : 0.50;
  out("o16", `Total: R$ ${(q*preco).toFixed(2)} (R$ ${preco.toFixed(2)} cada)`);
}

// 17) Quantos salários mínimos recebe
function l2e17(){
  const sm = num("l2e17m"), s = num("l2e17s");
  if(sm===null || sm<=0 || s===null || s<0) return out("o17","Informe valores válidos.");
  out("o17", `Recebe ${ (s/sm).toFixed(2) } salários mínimos.`);
}

// 18) Saudação por turno
function l2e18(){
  const n = val("l2e18n"); const t = val("l2e18t");
  if(!n || !t) return out("o18","Informe nome e turno.");
  const msg = t==="M" ? "Bom dia" : "Boa tarde";
  out("o18", `${msg}, ${n}!`);
}

// 19) Pode votar? Obrigatório/facultativo
function l2e19(){
  const i = num("l2e19"); if(i===null || i<0) return out("o19","Informe idade válida.");
  let st;
  if(i<16) st="Não pode votar";
  else if((i>=16 && i<18) || i>70) st="Voto facultativo";
  else st="Voto obrigatório";
  out("o19", st);
}

// 20) Média de 3 inteiros e situação (≥7 aprovado, senão reprovado)
function l2e20(){
  const a = num("l2e20a"), b = num("l2e20b"), c = num("l2e20c");
  if([a,b,c].some(v=>v===null)) return out("o20","Informe A, B e C.");
  const m = (a+b+c)/3;
  out("o20", `Média = ${m.toFixed(2)} • ${m>=7 ? "Aprovado" : "Reprovado"}`);
}
