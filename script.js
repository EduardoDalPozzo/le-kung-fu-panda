function tabua(){
let numero = document.getElementById("numerinho");
let tabuada = document.getElementById("tabuada");

if (numero.value == 0 ) {
window.alert("não pode 0, bocó");
}
else {
let n = Number(numero.value);
let j = 1;
tabuada.innerHTML = ' '

while (j <=10) {
let item = document.createElement('option');
item.text = `${n} x ${j} = ${n*j}`;
item.value = `tabuada${j}`;
tabuada.appendChild(item);
j++

}
}
}