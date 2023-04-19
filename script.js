//Container calculadora
const div = document.createElement("div");
div.style.display = "flex"
div.style.flexDirection = "column";
div.style.height = "800px";
div.style.width = "50%";
div.style.backgroundColor = "lightgreen";
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
//Calculando o IMC
const imc = input3.value/(input4.value*input4.value);
if(imc < 18.50){
    const grau = "Magreza";
} else if (imc >= 18.50 && imc < 25.00){
    const grau = "Normal";
} else if (imc >= 25.00 && imc < 30.00){
    const grau = "Sobrepeso";
} else if (imc >= 30.00 && imc < 40.00){
    const grau = "Obesidade";
} else if (imc >= 40.00){
    const grau = "Obesidade Grave";
}
//Container Resultado
const div1 = document.createElement("div");
div1.style.display = "flex";
div1.style.flexDirection = "column";
div1.style.backgroundColor = "white";
div1.style.marginTop = "5%";
div1.style.marginLeft = "30%";
div1.style.height = "100px";
div1.style.width = "20%";
div.appendChild(div1);
//Resultado do IMC  
const resultado = document.createElement("div");
resultado.textContent = imc;
resultado.style.fontSize = "50px";
resultado.style.fontWeight = "bold";
resultado.style.color = "Teal"
resultado.style.justifyContent = "flex-end";
resultado.style.display = "flex";
resultado.style.backgroundColor = "red";
resultado.style.width = "100%";
resultado.style.height = "70%";
div1.appendChild(resultado);
//Resultado Grau
const tipo = document.createElement("div"); 
tipo.textContent = "GRAU";
tipo.style.fontWeight = "bold";
tipo.style.display = "flex";
tipo.style.justifyContent = "flex-end";
tipo.style.alignItems = "center";
tipo.style.height = "100%";
div1.appendChild(tipo);