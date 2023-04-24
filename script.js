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
const nome = document.createElement("h3");
nome.innerHTML = "Informe seu nome:";
nome.style.paddingTop = "1%";
nome.style.color = "Teal";
div.appendChild(nome);
//Input 1
const input1 = document.createElement("input"); 
input1.type = "string";
input1.style.width = "50%";
input1.style.height = "4%"; 
input1.style.backgroundColor = "white";
div.appendChild(input1);
//Título Idade
const idade = document.createElement("h3");
idade.innerHTML = "Informe sua idade:";
idade.style.paddingTop = "1%";
idade.style.color = "Teal";
div.appendChild(idade);
//Input 2
const input2 = document.createElement("input"); 
input2.type = "string";
input2.style.width = "50%";
input2.style.height = "4%";
input2.style.backgroundColor = "white";
div.appendChild(input2);
//Título Peso
const pesoh3 = document.createElement("h3");
pesoh3.innerHTML = "Informe seu peso (kg):";
pesoh3.style.paddingTop = "1%";
pesoh3.style.color = "Teal";
div.appendChild(pesoh3);
//Input 3
const input3 = document.createElement("input"); 
input3.type = "float";
input3.style.width = "50%";
input3.style.height = "4%";
input3.style.backgroundColor = "white";
div.appendChild(input3);
//Título Altura
const alturah3 = document.createElement("h3");
alturah3.innerHTML = "Informe sua altura (metro e cm):";
alturah3.style.paddingTop = "1%";
alturah3.style.color = "Teal";
div.appendChild(alturah3);
//Input 4
const input4 = document.createElement("input"); 
input4.type = "float";
input4.style.width = "50%";
input4.style.height = "4%";
input4.style.backgroundColor = "white";
div.appendChild(input4);
//Botão de calcular
const botao = document.createElement("button"); 
botao.innerHTML = "Calcular";
botao.style.color = "white"
botao.style.padding = "px";
botao.style.marginTop = "25px";
botao.style.width = "15%";
botao.style.height = "4%";
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
botao.addEventListener("click",function(){
    peso = input3.value;
    altura = input4.value;
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
})
//Container Resultado
const div1 = document.createElement("div");
div1.style.display = "flex";
div1.style.flexDirection = "column";
div1.style.margin = "5% 0 5% 30%";
div1.style.height = "100px";
div1.style.width = "20%";
div.appendChild(div1);
//Resultado do IMC  
const resultado = document.createElement("div");
resultado.style.fontSize = "50px";
resultado.style.fontWeight = "bold";
resultado.style.justifyContent = "flex-end";
resultado.style.display = "flex";
resultado.style.width = "100%";
resultado.style.height = "60%";
//Resultado Grau
const tipo = document.createElement("div"); 
tipo.style.fontWeight = "bold";
tipo.style.display = "flex";
tipo.style.justifyContent = "flex-end";
tipo.style.alignItems = "center";
tipo.style.height = "40%";
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
const box1info = document.createElement("h3");
box1info.innerHTML = "MAGREZA"
box1info.style.color = "blue";
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
const box2info = document.createElement("h3");
box2info.innerHTML = "NORMAL"
box2info.style.color = "green";
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
const box3info = document.createElement("h3");
box3info.innerHTML = "SOBREPESO"
box3info.style.color = "Goldenrod";
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
const box4info = document.createElement("h3");
box4info.innerHTML = "OBESIDADE"
box4info.style.color = "OrangeRed";
box4.appendChild(box4info);
//box5
const box5 = document.createElement("div");
box5.style.display = "flex";
box5.style.flexDirection = "column";
box5.style.alignItems = "center";
boxes.appendChild(box5);
const box5formato = document.createElement("div");
box5formato.style.width = "50px";
box5formato.style.height = "50px";
box5formato.style.backgroundColor = "Red";
box5.appendChild(box5formato);
const box5info = document.createElement("h3");
box5info.innerHTML = "OBESIDADE GRAVE"
box5info.style.color = "Red";
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
hist.style.paddingTop = "2%";   
hist.style.color = "DarkCyan";
div3.appendChild(hist);
//ul Historico
const ul = document.createElement("ul");
