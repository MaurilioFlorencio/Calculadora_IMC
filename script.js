//Container calculadora
const div = document.createElement("div");
div.style.display = "flex"
div.style.flexDirection = "column";
div.style.height = "800px";
div.style.width = "50%";
div.style.backgroundColor = "whitesmoke";
div.style.margin = "0 5%";
div.style.alignItems = "center";
document.body.appendChild(div);
//Titulo Calculando
const calculando = document.createElement("h1");
calculando.textContent = "Calculadora";
calculando.style.paddingTop = "2%";
calculando.style.color = "LightSeaGreen";
div.appendChild(calculando);
//Título Nome
const nome = document.createElement("h3");
nome.textContent = "Informe seu nome:";
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
idade.textContent = "Informe sua idade:";
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
pesoh3.textContent = "Informe seu peso (kg):";
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
alturah3.textContent = "Informe sua altura (metro e cm):";
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
botao.textContent = "Calcular";
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
        color = "yellow";
    } else if (imc >= 30.00 && imc < 40.00){
        grau = "OBESIDADE";
        color = "orange";
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
div1.style.marginTop = "5%";
div1.style.marginLeft = "30%";
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