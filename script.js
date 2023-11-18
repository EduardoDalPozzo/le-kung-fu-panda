/*Resumo de como funciona: você digita um número la, e quando você clicka no botão de gerar a tabuada,
ele chama a função tabua(), que define a variavel numero como o numero que você digitou, define a a tabuada
como o bloquinho la, dai ele checa se tem um número, e se tiver se não é um 0, se não ele da um alert que 
não pode isso, se tiver tudo certo ele define o N como o numero la, define o multiplicador como 1, e deixa
a tabuada vazia, depois tem uma sequência que se repete enquanto o multiplicador for <= 10, ele fica criando
items dentro do select, cada um com o textinho de n x multiplicador = resultado, joga esse item dentro da 
tabuada e aumenta em 1 o multiplicador para a proxima vez que rodar mostrar a tabuada do 2, depois do 3 e
assim vai até o 10
*/
function tabua(){
let numero = document.getElementById("numerinho"); /*variavel do numero que você digitou*/
let tabuada = document.getElementById("tabuada"); /* variavel do bloquinho da tabuada*/

if (numero.value == 0 ) {  /* se tiver vazio ou tiver um 0, aparece um alert e acontece mais nada*/
window.alert("tem que por algum número, que não seja 0");
}
else { /*SE NÃO*/
let n = Number(numero.value); /*define n como o valor do numerinho*/
let multiplicador = 1; /* define o multiplicador como 1, */
tabuada.innerHTML = ' '; /*e esvazia a tabuada*/

while (multiplicador <=10) { /*enquanto o multiplicador n chegar em 10 vai ficar rodando em loop esse bloco*/
let item = document.createElement('option'); /* define a variavel item como um elemento novo que ele cria*/
/*é uma option, que é o elemento que fica dentro do select.*/
item.text = `${n} x ${multiplicador} = ${n*multiplicador}`; /* define o texto desse item como a multiplicação atual*/
item.value = `tabuada${multiplicador}`; /*define o value como a tabuada do multiplicador atual*/
tabuada.appendChild(item); /*ele deixa esse item dentro da tabuada*/
multiplicador++ /*aumenta em 1 o multiplicador*/
}

}

}