//Fundo da calculadora
const div = document.createElement("div");
div.style.height = "800px";
div.style.backgroundColor = "WhiteSmoke";
div.style.margin = "5%";
document.body.appendChild(div);
//Titulo Calculando
const calculandoh1 = document.createElement("h1");
calculandoh1.textContent = "Calculadora";
calculandoh1.style.paddingTop = "2%";
calculandoh1.style.color = "LightSeaGreen";
calculandoh1.style.paddingLeft = "5%";
div.appendChild(calculandoh1);
//Título Peso
const pesoh3 = document.createElement("h3");
pesoh3.textContent = "Informe seu peso (kg):";
pesoh3.style.paddingTop = "1%";
pesoh3.style.color = "Teal";
pesoh3.style.paddingLeft = "5%";
div.appendChild(pesoh3);
//Input 1
const input1 = document.createElement("input"); 
input1.type = "float";
input1.style.width = "60%";
input1.style.height = "4%";
input1.style.marginLeft = "5%";
input1.style.backgroundColor = "white";
div.appendChild(input1);
//Título Altura
const alturah3 = document.createElement("h3");
alturah3.textContent = "Informe sua altura (metro e cm):";
alturah3.style.paddingTop = "1%";
alturah3.style.color = "Teal";
alturah3.style.paddingLeft = "5%";
div.appendChild(alturah3);
//Input 2
const input2 = document.createElement("input"); 
input2.type = "float";
input2.style.width = "60%";
input2.style.height = "4%";
input2.style.marginLeft = "5%";
input2.style.backgroundColor = "white";
div.appendChild(input2);