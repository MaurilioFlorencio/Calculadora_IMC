//Container Geral
const div0 = document.createElement("div");
div0.style.display = "flex"
div0.style.flexDirection = "row";
div0.style.width = "100%";
document.body.appendChild(div0);
//Container Calculadora
const div = document.createElement("div");
div.style.display = "flex"
div.style.flexDirection = "column";
div.style.width = "40%";
div.style.backgroundColor = "whitesmoke";
div.style.alignItems = "center";
div.style.border = "solid 2px darkcyan";
div.style.margin = "1% 0 1% 1%";
div.style.borderRight = "none";
div0.appendChild(div);
//Titulo Calculando
const calculando = document.createElement("h1");
calculando.innerHTML = "Calculadora IMC";
calculando.style.paddingTop = "2%";
calculando.style.color = "DarkCyan";
div.appendChild(calculando);
//Título Nome
const nomeinput = document.createElement("h4");
nomeinput.innerHTML = "Informe seu nome:";
nomeinput.style.paddingTop = "1%";
nomeinput.style.color = "Teal";
div.appendChild(nomeinput);
//Input 1
const input1 = document.createElement("input"); 
input1.type = "text";
input1.style.width = "50%";
input1.style.height = "25px";
input1.style.backgroundColor = "white";
div.appendChild(input1);
//Título Idade
const idadeinput = document.createElement("h4");
idadeinput.innerHTML = "Informe sua idade:";
idadeinput.style.paddingTop = "1%";
idadeinput.style.color = "Teal";
div.appendChild(idadeinput);
//Input 2
const input2 = document.createElement("input"); 
input2.type = "text";
input2.style.width = "50%";
input2.style.height = "25px";
input2.style.backgroundColor = "white";
div.appendChild(input2);
//Título Peso
const pesoh4 = document.createElement("h4");
pesoh4.innerHTML = "Informe seu peso (kg):";
pesoh4.style.paddingTop = "1%";
pesoh4.style.color = "Teal";
div.appendChild(pesoh4);
//Input 3
const input3 = document.createElement("input"); 
input3.type = "number";
input3.style.width = "50%";
input3.style.height = "25px";
input3.style.backgroundColor = "white";
div.appendChild(input3);
//Título Altura
const alturah4 = document.createElement("h4");
alturah4.innerHTML = "Informe sua altura (metro e cm):";
alturah4.style.paddingTop = "1%";
alturah4.style.color = "Teal";
div.appendChild(alturah4);
//Input 4
const input4 = document.createElement("input"); 
input4.type = "number";
input4.style.width = "50%";
input4.style.height = "25px";
input4.style.backgroundColor = "white";
div.appendChild(input4);
//Botão de calcular
const botao = document.createElement("button"); 
botao.innerHTML = "Calcular";
botao.style.color = "white"
botao.style.padding = "px";
botao.style.marginTop = "25px";
botao.style.width = "15%";
botao.style.height = "25px";
botao.style.border = "none";
botao.style.backgroundColor = "LightSeaGreen";
botao.style.textalign =  "center";
botao.style.textdecoration = "none";
botao.style.borderRadius = "5px";
botao.style.cursor = "pointer";
//Hover no botão
botao.onmouseover = function(){
    botao.style.backgroundColor = "Teal"
}
botao.onmouseout = function(){
    botao.style.backgroundColor = "LightSeaGreen"
}
div.appendChild(botao);
//Click
let peso = 0.0;
let altura = 0.0;
let imc = 0;
let color = null;
let grau = null;
let imcF = null;
let nome = null;
let idade = null;

botao.addEventListener("click",function(){
    peso = input3.value;
    altura = input4.value;
    nome = input1.value;
    idade = input2.value;
    //Calculando o IMC
    imc = (peso/(altura*altura));
    imcF = imc.toFixed(2);
    if(imc < 18.50){
        grau = "MAGREZA";
        color = "blue";
    } else if (imc >= 18.50 && imc < 25.00){
        grau = "NORMAL";
        color = "green";
    } else if (imc >= 25.00 && imc < 30.00){
        grau = "SOBREPESO";
        color = "Goldenrod";
    } else if (imc >= 30.00 && imc < 40.00){
        grau = "OBESIDADE";
        color = "OrangeRed";
    } else {
        grau = "OBESIDADE GRAVE";
        color = "red";
    }

    resultado.innerHTML = imcF;
    resultado.style.color = color;
    tipo.innerHTML = grau;
    tipo.style.color = color;
    
    div1.appendChild(resultado);
    div1.appendChild(tipo);
    //ul Historico  
    const ul = document.createElement("ul");
    ul.style.padding = "0";
    ul.style.margin = "0";
    ul.style.display = "flex";
    ul.style.alignItems = "center";
    ul.style.justifyContent = "space-between";
    ul.style.border = "2px solid black";
    ul.style.height = "50px";
    ul.style.width = "90%";
    //boxes clone
    const box = box1formato.cloneNode(true);
    box.style.display = "grid";
    box.style.placeItems = "center"
    box.style.color = "white";
    //nome na ul
    const nomeUl = document.createElement("h4");
    nomeUl.style.paddingTop = "1%";
    nomeUl.style.margin = "0 5%";
    nomeUl.style.padding = "0";
    nomeUl.innerHTML = nome;
    nomeUl.style.color = color;
    //idade na ul
    const idadeUl = box.cloneNode(true);
    idadeUl.style.display = "flex";
    idadeUl.style.flexDirection = "column"
    idadeUl.style.color = "white";
    idadeUl.style.justifyContent = "center";

    const idadep = document.createElement("p");
    const anosp = document.createElement("p");
    
    box.style.backgroundColor = color;
    box.innerHTML = imcF;
    
    idadep.innerText = idade; 
    idadep.style.margin = "0";
    
    anosp.innerHTML = "anos";
    anosp.style.margin = "0";
    
    idadeUl.style.backgroundColor = color;
    idadeUl.appendChild(idadep);
    idadeUl.appendChild(anosp);

    ul.appendChild(box);
    ul.appendChild(nomeUl);
    ul.appendChild(idadeUl);

    div3.appendChild(ul);
})
//Container Resultado
const div1 = document.createElement("div");
div1.style.display = "flex";
div1.style.flexDirection = "column";
div1.style.margin = "2% 0 0 30%";
div1.style.height = "100px";
div1.style.width = "20%";
div1.style.alignItems = "center";
div.appendChild(div1);
//Resultado do IMC  
const resultado = document.createElement("div");
resultado.style.fontSize = "50px";
resultado.style.fontWeight = "bold";
resultado.style.justifyContent = "flex-end";
resultado.style.display = "flex";
resultado.style.height = "60%";
//Resultado Grau
const tipo = document.createElement("div"); 
tipo.style.fontWeight = "bold";
tipo.style.display = "flex";
tipo.style.justifyContent = "center";
tipo.style.alignItems = "center";
tipo.style.height = "40%";
tipo.style.width = "154px";
//Container Situação
const div2 = document.createElement("div");
div2.style.display = "flex"
div2.style.flexDirection = "column";
div2.style.width = "20%";
div2.style.border = "solid 2px darkcyan";
div2.style.borderRight = "none";
div2.style.margin = "1% 0";
div2.style.backgroundColor = "whitesmoke";
div2.style.alignItems = "center";
div0.appendChild(div2);
//Situação 
const info = document.createElement("h1");
info.innerHTML = "Situação";
info.style.paddingTop = "2%";
info.style.color = "DarkCyan";
div2.appendChild(info);
//boxes situação
const boxes = document.createElement("div");
boxes.style.width = "100%";
boxes.style.marginTop = "2%";
boxes.style.display = "flex";
boxes.style.flexDirection = "column";
boxes.style.justifyContent = "space-between";
div2.appendChild(boxes);
//box1
const box1 = document.createElement("div");
box1.style.display = "flex";
box1.style.flexDirection = "column";
box1.style.alignItems = "center";
boxes.appendChild(box1);
const box1formato = document.createElement("div");
box1formato.style.width = "50px";
box1formato.style.height = "50px";
box1formato.style.backgroundColor = "blue";
box1.appendChild(box1formato);
const box1info = document.createElement("h4");
box1info.innerHTML = "MAGREZA"
box1info.style.color = "blue";
box1info.style.margin = "5% 0";
box1.appendChild(box1info);
//box2
const box2 = document.createElement("div");
box2.style.display = "flex";
box2.style.flexDirection = "column";
box2.style.alignItems = "center";
boxes.appendChild(box2);
const box2formato = document.createElement("div");
box2formato.style.width = "50px";
box2formato.style.height = "50px";
box2formato.style.backgroundColor = "green";
box2.appendChild(box2formato);
const box2info = document.createElement("h4");
box2info.innerHTML = "NORMAL"
box2info.style.color = "green";
box2info.style.margin = "5% 0";
box2.appendChild(box2info);
//box3
const box3 = document.createElement("div");
box3.style.display = "flex";
box3.style.flexDirection = "column";
box3.style.alignItems = "center";
boxes.appendChild(box3);
const box3formato = document.createElement("div");
box3formato.style.width = "50px";
box3formato.style.height = "50px";
box3formato.style.backgroundColor = "Goldenrod";
box3.appendChild(box3formato);
const box3info = document.createElement("h4");
box3info.innerHTML = "SOBREPESO"
box3info.style.color = "Goldenrod";
box3info.style.margin = "5% 0";
box3.appendChild(box3info);
//box4
const box4 = document.createElement("div");
box4.style.display = "flex";
box4.style.flexDirection = "column";
box4.style.alignItems = "center";
boxes.appendChild(box4);
const box4formato = document.createElement("div");
box4formato.style.width = "50px";
box4formato.style.height = "50px";
box4formato.style.backgroundColor = "OrangeRed";
box4.appendChild(box4formato);
const box4info = document.createElement("h4");
box4info.innerHTML = "OBESIDADE"
box4info.style.color = "OrangeRed";
box4info.style.margin = "5% 0";
box4.appendChild(box4info);
//box5
const box5 = document.createElement("div");
box5.style.display = "flex";
box5.style.flexDirection = "column";
box5.style.alignItems = "center";
box5.style.textAlign = "center";
boxes.appendChild(box5);
const box5formato = document.createElement("div");
box5formato.style.width = "50px";
box5formato.style.height = "50px";
box5formato.style.backgroundColor = "Red";
box5.appendChild(box5formato);
const box5info = document.createElement("h4");
box5info.innerHTML = "OBESIDADE GRAVE";
box5info.style.width = "100%";
box5info.style.color = "Red";
box5info.style.margin = "5% 0";
box5.appendChild(box5info);
//Container Historico
const div3 = document.createElement("div");
div3.style.display = "flex"
div3.style.flexDirection = "column";
div3.style.width = "40%";
div3.style.border = "solid 2px darkcyan";
div3.style.margin = "1% 1% 1% 0";
div3.style.backgroundColor = "whitesmoke";
div3.style.alignItems = "center";
div0.appendChild(div3);
//Historico 
const hist = document.createElement("h1");
hist.innerHTML = "Histórico";
hist.style.marginBottom = "0";
hist.style.paddingTop = "2%";   
hist.style.color = "DarkCyan";
div3.appendChild(hist);
//info da ul
const infoUl = document.createElement("h4");
infoUl.style.margin = "2% 0";
infoUl.innerHTML = "IMC NOME IDADE";
infoUl.style.paddingTop = "1%";
infoUl.style.color = "Teal";
div3.appendChild(infoUl);
const infoUlC = document.createElement("div");
infoUlC.style.padding = "0";
infoUlC.style.margin = "0";
infoUlC.style.display = "flex";
infoUlC.style.alignItems = "center";
infoUlC.style.justifyContent = "space-between";
div3.appendChild(infoUlC);




